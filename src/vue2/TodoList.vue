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
            :key="getTodoKey(todo)"
          ></todo-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'

export default {
  components: {
    TodoItem,
  },
  data: function() {
    return {
      todos: store.getTodos(),
    }
  },
  created: function() {
    store.subscribeTodos((state) => {
      this.todos = state
    })
  },
  methods: {
    getTodoKey: function(todo) {
      return store.getTodoKey(todo)
    },
    addTodo: function(event) {
      event.preventDefault()
      store.addTodo(event.target.elements.title.value)
      event.currentTarget.reset()
    },
  },
}
</script>
