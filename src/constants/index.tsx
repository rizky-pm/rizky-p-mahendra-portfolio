import { FolderGit, History, Home, Info, Send, Swords } from 'lucide-react'

export const navItems = [
  { label: 'Home', path: '/', icon: <Home className="w-6 h-6 3xl:w-8 3xl:h-8" /> },
  { label: 'About Me', path: '/about-me', icon: <Info className="w-6 h-6 3xl:w-8 3xl:h-8" /> },
  {
    label: 'Tech Stack',
    path: '/tech-stack',
    icon: <Swords className="w-6 h-6 3xl:w-8 3xl:h-8" />,
  },
  {
    label: 'Experience',
    path: '/experience',
    icon: <History className="w-6 h-6 3xl:w-8 3xl:h-8" />,
  },
  { label: 'Project', path: '/project', icon: <FolderGit className="w-6 h-6 3xl:w-8 3xl:h-8" /> },
  { label: 'Contact', path: '/contact', icon: <Send className="w-6 h-6 3xl:w-8 3xl:h-8" /> },
]
