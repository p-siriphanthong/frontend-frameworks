import { Component, Input } from '@angular/core'
import { Todo } from '@types'

@Component({
  selector: 'todo-item',
  template: require('./todo-item.component.html'),
})
export class TodoItemComponent {
  @Input() todo: Todo
  isEditing: boolean = false
  editingTitle: string

  onEditing(): void {
    this.editingTitle = this.todo.title
    this.isEditing = true
  }

  onCancelEditing(): void {
    this.isEditing = false
  }

  editTodo(event): void {
    event.preventDefault()
    store.editTodo(this.todo.id, this.editingTitle)
    this.isEditing = false
  }

  removeTodo(): void {
    store.removeTodo(this.todo.id)
  }

  toggleCompleted(): void {
    store.toggleCompleted(this.todo.id)
  }
}
