interface Props {
  id: string
  title: string
  priority: string
  assignee: string
}

export default function IssueCard({
  id,
  title,
  priority,
  assignee,
}: Props) {
  return (
    <div
      data-issue-id={id}
      className="
        group relative overflow-hidden
        rounded-2xl border border-zinc-800/80
        bg-gradient-to-br from-zinc-900 to-zinc-950
        p-4 transition-all duration-300

        hover:-translate-y-1
        hover:border-violet-500/40
        hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]
        cursor-grab
        active:cursor-grabbing
      "
    >
      {/* Glow Overlay */}
      <div
        className="
          absolute inset-0 opacity-0 transition-opacity
          duration-300 group-hover:opacity-100
          bg-gradient-to-br from-violet-500/5 to-cyan-500/5
        "
      />

      {/* Card Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <span
            className="
              rounded-full bg-violet-500/20
              px-2 py-1 text-xs font-medium
              text-violet-300
            "
          >
            {priority}
          </span>

          <div
            className="
              flex h-8 w-8 items-center justify-center
              rounded-full bg-cyan-500/20
              text-sm font-medium text-cyan-300
            "
          >
            {assignee}
          </div>
        </div>

        <h3
          className="
            mt-4 text-sm font-medium
            leading-relaxed text-zinc-100
          "
        >
          {title}
        </h3>
      </div>
    </div>
  )
}