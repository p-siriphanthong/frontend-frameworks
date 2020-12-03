import { createStore } from 'redux'

const initialTodos = [
  { id: 3, title: 'Setup ESLint', isCompleted: false },
  { id: 2, title: 'Share state using Redux', isCompleted: true },
  { id: 1, title: 'Create todo applications', isCompleted: true },
]

let id = initialTodos.length

function todoReducer(state = { todos: initialTodos }, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [
          { id: ++id, title: action.title, isCompleted: false },
          ...state.todos,
        ],
      }
    case 'EDIT_TODO':
      return {
        todos: state.todos.map((todo) => ({
          ...todo,
          title: todo.id === action.id ? action.title : todo.title,
        })),
      }
    case 'REMOVE_TODO':
      return {
        todos: state.todos.filter((todo) => todo.id != action.id),
      }
    case 'TOGGLE_COMPLETED':
      return {
        todos: state.todos.map((todo) => ({
          ...todo,
          isCompleted:
            todo.id === action.id ? !todo.isCompleted : todo.isCompleted,
        })),
      }
    default:
      return state
  }
}

const store = createStore(todoReducer)

const getTodos = () => {
  return store.getState().todos
}

const subscribeTodos = (callback) => {
  if (!callback) return
  store.subscribe(() => callback(getTodos()))
}

const addTodo = (title) => {
  if (!title) return
  store.dispatch({ type: 'ADD_TODO', title })
}

const editTodo = (id, title) => {
  if (!id || !title) return
  store.dispatch({ type: 'EDIT_TODO', id, title })
}

const removeTodo = (id) => {
  if (!id) return
  store.dispatch({ type: 'REMOVE_TODO', id })
}

const toggleCompleted = (id) => {
  if (!id) return
  store.dispatch({ type: 'TOGGLE_COMPLETED', id })
}

global.store = {
  getTodos,
  subscribeTodos,
  addTodo,
  editTodo,
  removeTodo,
  toggleCompleted,
}
