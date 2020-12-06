import angular from 'angular'
import controller from './todo-list.controller'

angular.module('angularjs-app').component('todoList', {
  template: require('./todo-list.component.html'),
  controller: ['$scope', controller],
})
