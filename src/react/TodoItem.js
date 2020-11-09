import React, { useState } from 'react'
import { editTodo, removeTodo, toggleCompleted } from '../redux'

const TodoItem = ({ id, title, isCompleted }) => {
  const [isEditing, setIsEditing] = useState(false)

  const onEditTodo = (event) => {
    event.preventDefault()
    editTodo(id, event.target.elements.title.value)
    setIsEditing(false)
  }

  return (
    <div className='todo-item'>
      {isEditing ? (
        <form className='todo-form' onSubmit={onEditTodo}>
          <input
            type='text'
            name='title'
            placeholder='Todo title'
            defaultValue={title}
            autoFocus
          />
          <button className='material-icons'>check</button>
          <i className='material-icons' onClick={() => setIsEditing(false)}>
            close
          </i>
        </form>
      ) : (
        <div className='todo-view'>
          <label>
            <input
              type='checkbox'
              checked={isCompleted}
              onChange={() => toggleCompleted(id)}
            />
            <span>{title}</span>
          </label>
          <i className='material-icons' onClick={() => setIsEditing(true)}>
            edit
          </i>
          <i className='material-icons' onClick={() => removeTodo(id)}>
            delete
          </i>
        </div>
      )}
    </div>
  )
}

export default TodoItem
