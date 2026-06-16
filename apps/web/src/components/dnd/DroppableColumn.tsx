import { useDroppable } from "@dnd-kit/core"

interface Props {
  id: string
  children: React.ReactNode
}

export default function DroppableColumn({
  id,
  children,
}: Props) {
  const { setNodeRef, isOver } =
    useDroppable({
      id,
    })

  return (
    <div
      ref={setNodeRef}
      className={
        isOver
          ? "ring-2 ring-violet-500 rounded-2xl"
          : ""
      }
    >
      {children}
    </div>
  )
}