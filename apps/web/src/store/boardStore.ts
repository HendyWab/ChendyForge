import { create } from "zustand"

export interface Issue {
  id: string
  title: string
  priority: string
  assignee: string
  columnId: string
}

interface BoardStore {
  issues: Issue[]

  moveIssue: (
    issueId: string,
    newColumnId: string
  ) => void
}

export const useBoardStore =
  create<BoardStore>((set) => ({
    issues: [
      {
        id: "1",
        title: "Implement JWT authentication",
        priority: "high",
        assignee: "HW",
        columnId: "backlog",
      },

      {
        id: "2",
        title: "Build realtime websocket gateway",
        priority: "medium",
        assignee: "TK",
        columnId: "planned",
      },

      {
        id: "3",
        title: "Design issue analytics dashboard",
        priority: "low",
        assignee: "AL",
        columnId: "in-progress",
      },
    ],

    moveIssue: (
      issueId,
      newColumnId
    ) =>
      set((state) => ({
        issues: state.issues.map((issue) =>
          issue.id === issueId
            ? {
                ...issue,
                columnId: newColumnId,
              }
            : issue
        ),
      })),
  }))