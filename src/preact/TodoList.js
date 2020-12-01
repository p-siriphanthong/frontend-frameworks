import { h } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import TodoItem from './TodoItem'

/** @jsx h */

const TodoList = () => {
  const [todos, setTodos] = useState([])

  const onAddTodo = (event) => {
    event.preventDefault()
    store.addTodo(event.target.elements.title.value)
    event.currentTarget.reset()
  }

  useEffect(() => {
    const initialTodos = store.subscribeTodos((state) => setTodos(state))
    setTodos(initialTodos)
  }, [])

  return (
    <div class='card'>
      <h5 class='section center-align white-text'>Preact</h5>
      <div class='card-content'>
        <form class='add-form row valign-wrapper' onSubmit={onAddTodo}>
          <div class='input-field col s9'>
            <input type='text' name='title' placeholder='Add todo' />
          </div>
          <button class='col s3 btn'>Add</button>
        </form>
        <div class='todo-items'>
          {todos.map((todo) => (
            <TodoItem
              key={`${todo.id}-${todo.title.replace(/\s/g, '_')}`}
              {...todo}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TodoList
