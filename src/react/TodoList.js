import React, { useState, useEffect } from 'react'
import TodoItem from './TodoItem'

const TodoList = () => {
  const [todos, setTodos] = useState(store.getTodos())

  const onAddTodo = (event) => {
    event.preventDefault()
    store.addTodo(event.target.elements.title.value)
    event.currentTarget.reset()
  }

  useEffect(() => {
    store.subscribeTodos((state) => setTodos(state))
  }, [])

  return (
    <div className='card'>
      <h5 className='section center-align white-text'>React</h5>
      <div className='card-content'>
        <form className='add-form row valign-wrapper' onSubmit={onAddTodo}>
          <div className='input-field col s9'>
            <input type='text' name='title' placeholder='Add todo' />
          </div>
          <button className='col s3 btn'>Add</button>
        </form>
        <div className='todo-items'>
          {todos.map((todo) => (
            <TodoItem key={store.getTodoKey(todo)} {...todo} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TodoList
