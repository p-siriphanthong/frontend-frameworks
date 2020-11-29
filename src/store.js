import { createStore } from 'redux'

let id = 0

function todoReducer(state = { todos: [] }, action) {
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

const subscribeTodos = (callback) => {
  if (!callback) return
  store.subscribe(() => callback(store.getState().todos))
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
  subscribeTodos,
  addTodo,
  editTodo,
  removeTodo,
  toggleCompleted,
}
