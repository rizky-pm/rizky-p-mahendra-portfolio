# Use the official Node.js Alpine base image
FROM node:22.12.0-alpine AS base

# Install libc6-compat for native dependencies compatibility
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Dependencies installation stage
FROM base AS deps

# Copy lock files and install deps based on lockfile
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

RUN \
  if [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm install --frozen-lockfile; \
  else echo "No lockfile found!" && exit 1; \
  fi

# Build stage
FROM base AS builder

WORKDIR /app

# Copy installed deps
COPY --from=deps /app/node_modules ./node_modules

# Copy the rest of the application code
COPY . .

# Build Next.js (standalone output assumed)
RUN \
  if [ -f yarn.lock ]; then yarn build; \
  elif [ -f package-lock.json ]; then npm run build; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm build; \
  else echo "No lockfile found!" && exit 1; \
  fi

# Production image
FROM base AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=4000

# Create non-root user
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs

# Copy public assets
COPY --from=builder /app/public ./public

# Ensure .next directory exists and is accessible
RUN mkdir .next && chown nextjs:nodejs .next

# Copy standalone output (includes server.js and required files)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Include payload.config.ts if needed by Payload CMS (for SSR or backend routes)
COPY --from=builder --chown=nextjs:nodejs /app/payload.config.ts ./payload.config.ts

# If your app uses custom uploads or other files, copy them as well:
# COPY --from=builder /app/uploads ./uploads

USER nextjs

EXPOSE 4000

CMD HOSTNAME="0.0.0.0" node server.js
