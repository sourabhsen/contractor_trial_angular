(function () {
    angular.module('users', ['ngMaterial', 'ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/users', {
                templateUrl: 'src/_modules/users/users.html',
                controller: 'userCtrl as users',
            });
        }])
})();