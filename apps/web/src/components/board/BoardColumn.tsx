import DroppableColumn from "../dnd/DroppableColumn"
import DraggableIssue from "../dnd/DraggableIssue"

interface Issue {
  id: string
  title: string
  priority: string
  assignee: string
}

interface Props {
  id: string
  title: string
  issues: Issue[]
}

export default function BoardColumn({
  id,
  title,
  issues,
}: Props) {
  return (
    <DroppableColumn id={id}>
      <div
        className="
          w-80 shrink-0 rounded-2xl
          border border-zinc-800
          bg-zinc-950/70 p-4
          transition-all
        "
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-semibold text-zinc-200">
            {title}
          </h2>

          <span
            className="
              rounded-full bg-zinc-800
              px-2 py-1 text-xs text-zinc-400
            "
          >
            {issues.length}
          </span>
        </div>

        <div className="space-y-3 min-h-[120px]">
          {issues.map((issue) => (
            <DraggableIssue
              key={issue.id}
              id={issue.id}
              title={issue.title}
              priority={issue.priority}
              assignee={issue.assignee}
            />
          ))}
        </div>
      </div>
    </DroppableColumn>
  )
}