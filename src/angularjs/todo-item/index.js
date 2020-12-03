import angular from 'angular'
import template from './todo-item.component.html'
import controller from './todo-item.controller'

angular.module('app').component('todoItem', {
  template,
  controller,
  bindings: { todo: '<' },
})
