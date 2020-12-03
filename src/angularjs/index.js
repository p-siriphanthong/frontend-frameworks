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

const root = document.getElementById('angularjs')
root.setAttribute('ng-app', 'app')
root.innerHTML = '<todo-list></todo-list>'

angular.module('app', []).directive('autofocus', ['$timeout', autofocus])

require('./todo-list')
require('./todo-item')
