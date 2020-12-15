import { html } from '@polymer/polymer/polymer-element.js'
import { BaseElement } from './base-element'
import './todo-item'

export class TodoListElement extends BaseElement {
  static get properties() {
    return {
      todos: {
        type: Array,
        value: () =>
          store
            .getTodos()
            .map((todo) => ({ ...todo, isEditing: false, editingTitle: '' })),
      },
    }
  }

  ready() {
    super.ready()
    store.subscribeTodos((state) => {
      this.todos = state.map((newValue) => {
        const oldValue = this.todos.find((todo) => todo.id === newValue.id)
        const isTitleChanged = newValue?.title !== oldValue?.title
        return {
          ...newValue,
          isEditing: isTitleChanged ? false : oldValue?.isEditing,
          editingTitle: isTitleChanged ? '' : oldValue?.editingTitle,
        }
      })
    })
  }

  addTodo(event) {
    event.preventDefault()
    store.addTodo(event.target.elements.title.value)
    event.currentTarget.reset()
  }

  onEditing(_, { id }) {
    this.todos = this.todos.map((todo) =>
      todo.id === id
        ? { ...todo, isEditing: true, editingTitle: todo.title }
        : todo
    )
  }

  onUpdateEditTitle(_, { id, editingTitle }) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, editingTitle } : todo
    )
  }

  onCancelEditing(_, { id }) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, isEditing: false, editingTitle: '' } : todo
    )
  }

  static get template() {
    return html`
      ${this.styleTemplate}
      <div class="card">
        <h5 class="section center-align white-text">Polymer</h5>
        <div class="card-content">
          <form class="add-form row valign-wrapper" on-submit="addTodo">
            <div class="input-field col s9">
              <input type="text" name="title" placeholder="Add todo" />
            </div>
            <button class="col s3 btn">Add</button>
          </form>
          <div class="todo-items">
            <template is="dom-repeat" items="{{todos}}" as="todo">
              <polymer-todo-item
                todo="{{todo}}"
                todo-id="{{todo.id}}"
                title="{{todo.title}}"
                is-completed="{{todo.isCompleted}}"
                is-editing="{{todo.isEditing}}"
                editing-title$="[[todo.editingTitle]]"
                on-editing="onEditing"
                on-update-editing-title="onUpdateEditTitle"
                on-cancel-editing="onCancelEditing"
              ></polymer-todo-item>
            </template>
          </div>
        </div>
      </div>
    `
  }
}

customElements.define('polymer-todo-list', TodoListElement)
