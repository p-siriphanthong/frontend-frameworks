import { computed } from 'vue'
import useTodos from './useTodos'

function useTodo(id) {
  const { todos } = useTodos()
  const todo = computed(() => todos.value.find((todo) => todo.id === id) ?? {})

  function editTodo(title) {
    store.editTodo(id, title)
  }

  function removeTodo() {
    store.removeTodo(id)
  }

  function toggleCompleted() {
    store.toggleCompleted(id)
  }

  return {
    todo,
    editTodo,
    removeTodo,
    toggleCompleted,
  }
}

export default useTodo
