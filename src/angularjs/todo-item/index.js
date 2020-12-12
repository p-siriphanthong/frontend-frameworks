import angular from 'angular'
import controller from './todo-item.controller'

angular.module('angularjs-app').component('angularjsTodoItem', {
  template: require('./todo-item.component.html'),
  controller,
  bindings: { todo: '<' },
})
