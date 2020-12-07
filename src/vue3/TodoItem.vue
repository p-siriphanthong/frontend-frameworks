<template>
  <div class="todo-item">
    <form class="todo-form" v-if="isEditing" @submit="onEditTodo">
      <input
        v-model="editingTitle"
        ref="editingTitleInput"
        type="text"
        name="title"
        placeholder="Todo title"
      />
      <button class="material-icons">check</button>
      <i class="material-icons" @click="onCancelEditing">
        close
      </i>
    </form>
    <div class="todo-view" v-else>
      <label>
        <input
          type="checkbox"
          :checked="todo.isCompleted"
          @change="onToggleCompleted"
        />
        <span>{{ todo.title }}</span>
      </label>
      <i class="material-icons" @click="onEditing">
        edit
      </i>
      <i class="material-icons" @click="onRemoveTodo">
        delete
      </i>
    </div>
  </div>
</template>

<script>
import useTodo from './composition-apis/useTodo'

export default {
  props: ['id'],
  setup(props) {
    const { todo, editTodo, removeTodo, toggleCompleted } = useTodo(props.id)

    return {
      todo,
      editTodo,
      removeTodo,
      toggleCompleted,
    }
  },
  data: function() {
    return {
      isEditing: false,
      editingTitle: '',
    }
  },
  methods: {
    onEditing: function() {
      this.editingTitle = this.todo.title
      this.isEditing = true
      this.$nextTick(() => this.$refs.editingTitleInput.focus())
    },
    onCancelEditing: function() {
      this.isEditing = false
    },
    onEditTodo: function(event) {
      event.preventDefault()
      this.editTodo(this.editingTitle)
      this.isEditing = false
    },
    onRemoveTodo: function() {
      this.removeTodo()
    },
    onToggleCompleted: function() {
      this.toggleCompleted()
    },
  },
}
</script>
