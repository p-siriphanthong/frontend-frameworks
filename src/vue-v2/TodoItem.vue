<template>
  <div class="todo-item">
    <form class="todo-form" v-if="isEditing" @submit="editTodo">
      <input
        v-model="addingTitle"
        ref="addingTitleInput"
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
          :checked="isCompleted"
          @change="toggleCompleted"
        />
        <span>{{ title }}</span>
      </label>
      <i class="material-icons" @click="onEditing">
        edit
      </i>
      <i class="material-icons" @click="removeTodo">
        delete
      </i>
    </div>
  </div>
</template>

<script>
import { editTodo, removeTodo, toggleCompleted } from '../redux'

export default {
  props: ['id', 'title', 'isCompleted'],
  data: function() {
    return {
      addingTitle: this.title,
      isEditing: false,
    }
  },
  methods: {
    onEditing: function() {
      this.addingTitle = this.title
      this.isEditing = true
      this.$nextTick(() => this.$refs.addingTitleInput.focus())
    },
    onCancelEditing: function() {
      this.isEditing = false
    },
    editTodo: function(event) {
      event.preventDefault()
      editTodo(this.id, this.addingTitle)
      this.isEditing = false
    },
    removeTodo: function() {
      removeTodo(this.id)
    },
    toggleCompleted: function() {
      toggleCompleted(this.id)
    },
  },
}
</script>
