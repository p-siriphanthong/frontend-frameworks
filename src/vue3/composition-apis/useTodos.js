import { ref, onMounted } from 'vue'

function useTodos() {
  const todos = ref([])

  onMounted(() => {
    todos.value = store.subscribeTodos((state) => {
      todos.value = state
    })
  })

  function addTodo(title) {
    store.addTodo(title)
  }

  return {
    todos,
    addTodo,
  }
}

export default useTodos
