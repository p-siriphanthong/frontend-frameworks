declare const store: {
  getTodos: () => import('./types').Todo[]
  getTodoKey: (todo: import('./types').Todo) => string
  subscribeTodos: (callback: (todos: import('./types').Todo[]) => void) => void
  addTodo: (title: string) => void
  editTodo: (id: number, title: string) => void
  removeTodo: (id: number) => void
  toggleCompleted: (id: number) => void
}
