import { useDraggable } from "@dnd-kit/core"
import IssueCard from "../board/IssueCard"

interface Props {
  id: string
  title: string
  priority: string
  assignee: string
}

export default function DraggableIssue({
  id,
  title,
  priority,
  assignee,
}: Props) {
  const { attributes, listeners, setNodeRef, transform } =
    useDraggable({
      id,
    })

  const style = transform
    ? {
        transform: `translate3d(
          ${transform.x}px,
          ${transform.y}px,
          0
        )`,
      }
    : undefined

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      <IssueCard
        id={id}
        title={title}
        priority={priority}
        assignee={assignee}
      />
    </div>
  )
}