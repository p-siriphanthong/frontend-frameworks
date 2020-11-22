<template>
  <div id="vue2">
    <div class="card">
      <h5 class="section center-align white-text">Vue 2</h5>
      <div class="card-content">
        <form class="add-form row valign-wrapper" @submit="addTodo">
          <div class="input-field col s9">
            <input type="text" name="title" placeholder="Add todo" />
          </div>
          <button class="col s3 btn">Add</button>
        </form>
        <div class="todo-items">
          <todo-item
            v-for="todo in todos"
            v-bind="todo"
            :key="`${todo.id}-${todo.title.replace(/\s/g, '_')}`"
          ></todo-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { subscribeTodos, addTodo } from '../redux'
import TodoItem from './TodoItem.vue'

export default {
  components: {
    TodoItem,
  },
  data: function() {
    return {
      todos: [],
    }
  },
  created: function() {
    subscribeTodos((state) => {
      this.todos = state
    })
  },
  methods: {
    addTodo: function(event) {
      event.preventDefault()
      addTodo(event.target.elements.title.value)
      event.currentTarget.reset()
    },
  },
}
</script>
