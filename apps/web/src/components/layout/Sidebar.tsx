import {
  LayoutDashboard,
  Bug,
  FolderKanban,
  MessageSquare,
  BarChart3,
  Settings,
} from "lucide-react"

const items = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Bug, label: "Issues" },
  { icon: FolderKanban, label: "Boards" },
  { icon: MessageSquare, label: "Discussions" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Settings, label: "Settings" },
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
            <button
              key={item.label}
              className="
                flex w-full items-center gap-3 rounded-xl
                px-4 py-3 text-zinc-300 transition-all
                hover:bg-zinc-800 hover:text-white
              "
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          )
        })}
      </nav>
    </aside>
  )
}
