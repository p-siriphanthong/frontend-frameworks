<template>
  <div class="card">
    <h5 class="section center-align white-text">Vue 3</h5>
    <div class="card-content">
      <form class="add-form row valign-wrapper" @submit="onAddTodo">
        <div class="input-field col s9">
          <input type="text" name="title" placeholder="Add todo" />
        </div>
        <button class="col s3 btn">Add</button>
      </form>
      <div class="todo-items">
        <todo-item
          v-for="todo in todos"
          :id="todo.id"
          :key="`${todo.id}-${todo.title.replace(/\s/g, '_')}`"
        ></todo-item>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
import useTodos from './composition-apis/useTodos'

export default {
  components: {
    TodoItem,
  },
  setup() {
    const { todos, addTodo } = useTodos()

    return {
      todos,
      addTodo,
    }
  },
  methods: {
    onAddTodo: function(event) {
      event.preventDefault()
      this.addTodo(event.target.elements.title.value)
      event.currentTarget.reset()
    },
  },
}
</script>
