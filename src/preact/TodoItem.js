import { h } from 'preact'
import { useState, useEffect, useRef } from 'preact/hooks'
import { editTodo, removeTodo, toggleCompleted } from '../redux'

/** @jsx h */

const TodoItem = ({ id, title, isCompleted }) => {
  const [isEditing, setIsEditing] = useState(false)
  const inputRef = useRef(null)

  const onEditTodo = (event) => {
    event.preventDefault()
    editTodo(id, event.target.elements.title.value)
    setIsEditing(false)
  }

  useEffect(() => {
    if (!isEditing || !inputRef.current) return
    inputRef.current.focus()
    inputRef.current.value = title
  }, [isEditing])

  return (
    <div class='todo-item'>
      {isEditing ? (
        <form class='todo-form' onSubmit={onEditTodo}>
          <input
            ref={inputRef}
            type='text'
            name='title'
            placeholder='Todo title'
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
