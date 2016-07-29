(function () {
    angular.module('jobs', ['ngMaterial', 'ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/jobs', {
                templateUrl: 'src/_modules/jobs/jobList.html',
                controller: 'jobCtrl as jobs',
            });
        }])
})();
