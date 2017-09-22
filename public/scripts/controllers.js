angular.module('app')
.controller('HomeController', ['$scope', function($scope) {
  $scope.currentUser = 'Josh';
}]);

angular.module('app')
.controller('LoginController', ['$scope', function($scope) {
}]);

angular.module('app')
.controller('RegisterController', ['$scope', function($scope) {
}]);

angular.module('app')
.controller('UsersController', ['$scope', 'UsersService', function($scope, UsersService) {
  $scope.UsersService = UsersService;
}]);

angular.module('app')
.controller('LatestController', ['$scope', function($scope) {
}]);