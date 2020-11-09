import { h } from 'preact'
import { useState } from 'preact/hooks'
import { editTodo, removeTodo, toggleCompleted } from '../redux'

/** @jsx h */

const TodoItem = ({ id, title, isCompleted }) => {
  const [isEditing, setIsEditing] = useState(false)

  const onEditTodo = (event) => {
    event.preventDefault()
    editTodo(id, event.target.elements.title.value)
    setIsEditing(false)
  }

  return (
    <div class='todo-item'>
      {isEditing ? (
        <form class='todo-form' onSubmit={onEditTodo}>
          <input
            type='text'
            name='title'
            placeholder='Todo title'
            defaultValue={title}
            autoFocus
          />
          <button class='material-icons'>check</button>
          <i class='material-icons' onClick={() => setIsEditing(false)}>
            close
          </i>
        </form>
      ) : (
        <div class='todo-view'>
          <label>
            <input
              type='checkbox'
              checked={isCompleted}
              onInput={() => toggleCompleted(id)}
            />
            <span>{title}</span>
          </label>
          <i class='material-icons' onClick={() => setIsEditing(true)}>
            edit
          </i>
          <i class='material-icons' onClick={() => removeTodo(id)}>
            delete
          </i>
        </div>
      )}
    </div>
  )
}

export default TodoItem
