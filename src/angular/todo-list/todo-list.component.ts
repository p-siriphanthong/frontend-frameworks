import { Component, Inject, ApplicationRef, OnInit } from '@angular/core'
import { Todo } from '@types'

@Component({
  selector: 'angular-todo-list',
  template: require('./todo-list.component.html'),
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = store.getTodos()

  constructor(@Inject(ApplicationRef) private appRef: ApplicationRef) {}

  ngOnInit() {
    store.subscribeTodos((state: Todo[]) => {
      this.todos = state
      this.appRef.tick()
    })
  }

  todoTracker(_index, todo): string {
    return store.getTodoKey(todo)
  }

  addTodo(event): void {
    event.preventDefault()
    store.addTodo(event.target.elements.title.value)
    event.currentTarget.reset()
  }
}
