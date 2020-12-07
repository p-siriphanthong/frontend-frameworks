<template>
  <div class="todo-item">
    <form class="todo-form" v-if="isEditing" @submit="editTodo">
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
export default {
  props: ['id', 'title', 'isCompleted'],
  data: function() {
    return {
      isEditing: false,
      editingTitle: '',
    }
  },
  methods: {
    onEditing: function() {
      this.editingTitle = this.title
      this.isEditing = true
      this.$nextTick(() => this.$refs.editingTitleInput.focus())
    },
    onCancelEditing: function() {
      this.isEditing = false
    },
    editTodo: function(event) {
      event.preventDefault()
      store.editTodo(this.id, this.editingTitle)
      this.isEditing = false
    },
    removeTodo: function() {
      store.removeTodo(this.id)
    },
    toggleCompleted: function() {
      store.toggleCompleted(this.id)
    },
  },
}
</script>
