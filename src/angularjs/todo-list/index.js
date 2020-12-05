import angular from 'angular'
import template from './todo-list.component.html'
import controller from './todo-list.controller'

angular.module('angularjs-app').component('todoList', {
  template,
  controller: ['$scope', controller],
})
