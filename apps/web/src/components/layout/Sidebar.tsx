import {
  LayoutDashboard,
  Bug,
  FolderKanban,
  MessageSquare,
  BarChart3,
  Settings,
} from "lucide-react"

import { NavLink } from "react-router-dom"

const items = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: FolderKanban,
    label: "Boards",
    path: "/boards",
  },
  {
    icon: Bug,
    label: "Issues",
    path: "/issues",
  },
  {
    icon: MessageSquare,
    label: "Discussions",
    path: "/discussions",
  },
  {
    icon: BarChart3,
    label: "Analytics",
    path: "/analytics",
  },
  {
    icon: Settings,
    label: "Settings",
    path: "/settings",
  },
]

export default function Sidebar() {
  return (
    <aside className="w-72 border-r border-zinc-800 bg-zinc-900">
      <div className="border-b border-zinc-800 p-6">
        <h1 className="text-2xl font-bold tracking-tight">
          ChendyForge
        </h1>

        <p className="mt-1 text-sm text-zinc-400">
          Forge the future of developer collaboration
        </p>
      </div>

      <nav className="space-y-2 p-4">
        {items.map((item) => {
          const Icon = item.icon

          return (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `
                flex items-center gap-3 rounded-xl
                px-4 py-3 transition-all

                ${
                  isActive
                    ? "bg-violet-500/15 text-violet-300 border border-violet-500/20"
                    : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
                }
              `
              }
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}