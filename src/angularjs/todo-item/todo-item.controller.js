function TodoItemController() {
  const $ctrl = this

  $ctrl.$onInit = function() {
    $ctrl.id = $ctrl.todo.id
    $ctrl.title = $ctrl.todo.title
    $ctrl.isCompleted = $ctrl.todo.isCompleted

    $ctrl.isEditing = false
    $ctrl.editingTitle = $ctrl.title
  }

  $ctrl.onEditing = function() {
    $ctrl.editingTitle = $ctrl.title
    $ctrl.isEditing = true
  }

  $ctrl.onCancelEditing = function() {
    $ctrl.isEditing = false
  }

  $ctrl.editTodo = function(event) {
    event.preventDefault()
    store.editTodo($ctrl.id, $ctrl.editingTitle)
    $ctrl.isEditing = false
  }

  $ctrl.removeTodo = function() {
    store.removeTodo($ctrl.id)
  }

  $ctrl.toggleCompleted = function() {
    store.toggleCompleted($ctrl.id)
  }
}

export default TodoItemController
