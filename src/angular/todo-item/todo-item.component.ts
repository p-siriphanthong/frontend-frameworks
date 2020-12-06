import { Component, Inject, ApplicationRef, Input } from '@angular/core'
import { Todo } from '@types'

@Component({
  selector: 'todo-item',
  template: require('./todo-item.component.html'),
})
export class TodoItemComponent {
  @Input() todo: Todo
  isEditing: boolean = false
  editingTitle: string

  constructor(@Inject(ApplicationRef) private appRef: ApplicationRef) {}

  onEditing(): void {
    this.editingTitle = this.todo.title
    this.isEditing = true
    this.appRef.tick()
  }

  onCancelEditing(): void {
    this.isEditing = false
    this.appRef.tick()
  }

  editTodo(event): void {
    event.preventDefault()
    store.editTodo(this.todo.id, this.editingTitle)
    this.isEditing = false
    this.appRef.tick()
  }

  removeTodo(): void {
    store.removeTodo(this.todo.id)
  }

  toggleCompleted(): void {
    store.toggleCompleted(this.todo.id)
  }
}
