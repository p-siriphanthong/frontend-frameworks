<script>
  import { onMount } from 'svelte'
  import TodoItem from './TodoItem.svelte'

  let todos = store.getTodos()

  onMount(() => {
    store.subscribeTodos((state) => {
      todos = state
    })
  })

  function getTodoKey(todo) {
    return store.getTodoKey(todo)
  }

  function addTodo(event) {
    event.preventDefault()
    store.addTodo(event.target.elements.title.value)
    event.currentTarget.reset()
  }
</script>

<div class="card">
  <h5 class="section center-align white-text">Svelte</h5>
  <div class="card-content">
    <form class="add-form row valign-wrapper" on:submit={addTodo}>
      <div class="input-field col s9">
        <input type="text" name="title" placeholder="Add todo" />
      </div>
      <button class="col s3 btn">Add</button>
    </form>
    <div class="todo-items">
      {#each todos as todo (getTodoKey(todo))}
        <TodoItem {...todo} />
      {/each}
    </div>
  </div>
</div>
