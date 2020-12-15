import { html } from '@polymer/polymer/polymer-element.js'
import { BaseElement } from './base-element'

export class TodoItemElement extends BaseElement {
  static get properties() {
    return {
      todoId: {
        type: Number,
      },
      title: {
        type: String,
        value: '',
      },
      isCompleted: {
        type: Boolean,
        value: false,
      },
      isEditing: {
        type: Boolean,
        value: false,
      },
      editingTitle: {
        type: String,
        value: '',
      },
    }
  }

  editTodo(event) {
    event.preventDefault()
    store.editTodo(this.todoId, this.editingTitle)
    this.isEditing = false
  }

  removeTodo() {
    store.removeTodo(this.todoId)
  }

  toggleCompleted() {
    store.toggleCompleted(this.todoId)
  }

  _onEditing() {
    this.dispatchEvent(
      new CustomEvent('editing', { detail: { id: this.todoId } })
    )
    requestAnimationFrame(() => {
      this.shadowRoot.querySelector('input[name="title"]').focus()
    })
  }

  _onUpdateEditingTitle(event) {
    this.dispatchEvent(
      new CustomEvent('update-editing-title', {
        detail: { id: this.todoId, editingTitle: event.target.value },
      })
    )
  }

  _onCancelEditing() {
    this.dispatchEvent(
      new CustomEvent('cancel-editing', { detail: { id: this.todoId } })
    )
  }

  static get template() {
    return html`
      ${this.styleTemplate}
      <div class="todo-item">
        <template is="dom-if" if="{{isEditing}}">
          <form class="todo-form" on-submit="editTodo">
            <input
              value="{{editingTitle}}"
              on-input="_onUpdateEditingTitle"
              type="text"
              name="title"
              placeholder="Todo title"
            />
            <button class="material-icons">check</button>
            <i class="material-icons" on-click="_onCancelEditing">
              close
            </i>
          </form>
        </template>
        <template is="dom-if" if="{{!isEditing}}">
          <div class="todo-view">
            <label>
              <input
                type="checkbox"
                checked="{{isCompleted}}"
                on-change="toggleCompleted"
              />
              <span>{{title}}</span>
            </label>
            <i class="material-icons" on-click="_onEditing">
              edit
            </i>
            <i class="material-icons" on-click="removeTodo">
              delete
            </i>
          </div>
        </template>
      </div>
    `
  }
}

customElements.define('polymer-todo-item', TodoItemElement)
