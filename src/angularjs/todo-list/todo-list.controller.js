function TodoListController($scope) {
  const $ctrl = this

  $ctrl.$onInit = function() {
    $ctrl.todos = store.getTodos()

    store.subscribeTodos(function(state) {
      $scope.$evalAsync(function() {
        $ctrl.todos = state
      })
    })
  }

  $scope.todoTracker = function(todo) {
    return `${todo.id}-${todo.title.replace(/\s/g, '_')}`
  }

  $ctrl.addTodo = function(event) {
    event.preventDefault()
    store.addTodo(event.target.elements.title.value)
    event.currentTarget.reset()
  }
}

export default TodoListController
