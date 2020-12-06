<script>
  import { tick } from 'svelte'

  export let id
  export let title
  export let isCompleted

  let isEditing = false
  let editingTitle = title
  let editingTitleInput

  async function onEditing() {
    editingTitle = title
    isEditing = true
    await tick()
    editingTitleInput.focus()
  }

  function onCancelEditing() {
    isEditing = false
  }

  function editTodo(event) {
    event.preventDefault()
    store.editTodo(id, editingTitle)
    isEditing = false
  }

  function removeTodo() {
    store.removeTodo(id)
  }

  function toggleCompleted() {
    store.toggleCompleted(id)
  }
</script>

<div class="todo-item">
  {#if isEditing}
    <form class="todo-form">
      <input
        bind:value={editingTitle}
        bind:this={editingTitleInput}
        type="text"
        name="title"
        placeholder="Todo title" />
      <button class="material-icons" on:click={editTodo}>check</button>
      <i class="material-icons" on:click={onCancelEditing}>close</i>
    </form>
  {:else}
    <div class="todo-view">
      <label>
        <input
          type="checkbox"
          bind:checked={isCompleted}
          on:change={toggleCompleted} />
        <span>{title}</span>
      </label>
      <i class="material-icons" on:click={onEditing}>edit</i>
      <i class="material-icons" on:click={removeTodo}>delete</i>
    </div>
  {/if}
</div>
