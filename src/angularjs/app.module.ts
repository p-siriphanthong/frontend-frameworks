import angular from 'angular'

function autofocus($timeout) {
  return {
    restrict: 'A',
    link: function($scope, $element, $attrs) {
      $timeout(function() {
        $element[0].focus()
      })
    },
  }
}

angular
  .module('angularjs-app', [])
  .directive('autofocus', ['$timeout', autofocus])
  .component('angularjsApp', { template: '<todo-list></todo-list>' })

require('./todo-list')
require('./todo-item')
