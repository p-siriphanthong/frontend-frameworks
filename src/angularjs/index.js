const root = document.getElementById('angularjs')
root.setAttribute('ng-app', 'angularjs-app')
root.innerHTML = '<angularjs-app></angularjs-app>'

require('./app.module')
