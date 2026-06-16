import { DndContext } from "@dnd-kit/core"
import type { DragEndEvent } from "@dnd-kit/core"

import BoardColumn from "../../components/board/BoardColumn"
import { columns } from "../../data/boardData"
import { useBoardStore } from "../../store/boardStore"

export default function BoardPage() {
  const issues = useBoardStore(
    (state) => state.issues
  )

  const moveIssue = useBoardStore(
    (state) => state.moveIssue
  )

  function handleDragEnd(
    event: DragEndEvent
  ) {
    const { active, over } = event

    if (!over) return

    moveIssue(
      active.id.toString(),
      over.id.toString()
    )
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Sprint Board
        </h1>

        <p className="mt-2 text-zinc-400">
          Realtime collaborative workflow management
        </p>
      </div>

      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {columns.map((column) => {
            const filteredIssues =
              issues.filter(
                (issue) =>
                  issue.columnId === column.id
              )

            return (
              <BoardColumn
                key={column.id}
                id={column.id}
                title={column.title}
                issues={filteredIssues}
              />
            )
          })}
        </div>
      </DndContext>
    </div>
  )
}