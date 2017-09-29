/*jshint esversion: 6 */
angular
  .module('app', ['ngRoute']);

angular
  .module('app')
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
    .when('/', {
      controller: 'HomeController',
      templateUrl: 'home.html',
    })
    .when('/register', {
      controller: 'NewUserController',
      templateUrl: 'newUser.html',
    })
    .when('/login', {
      controller: 'LoginController',
      templateUrl: 'login.html'
    })
    .when('/users', {
      controller: 'UserController',
      templateUrl: 'users.html'
    })
    .when('/topics', { //<--/:id
      controller: 'TopicsController',
      templateUrl: 'topics.html'
    })
    .when('/latest', { //<--/:id
      controller: 'LatestController',
      templateUrl: 'latest.html'
    })
    .otherwise({
      redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
  }])
  .run( () => {
    return localStorage.setItem('loggedIn', false) || localStorage.setItem('username', null);
  }
);

