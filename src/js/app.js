(function () {
    angular
        .module('contractorTrialApp', [
            'ngSanitize', 'ngMaterial', 
            'md.data.table', 'jkuri.slimscroll',
            'jobs', 'users'
        ])
        .config(['$compileProvider', function ($compileProvider) {
            $compileProvider.debugInfoEnabled(false);
        }])
        .config(
            function ($mdThemingProvider, $mdIconProvider) {
                $mdThemingProvider.theme('default')
                    .primaryPalette('blue')
                    .accentPalette('orange');
            }
        ).config(
        function ($routeProvider) {
            $routeProvider
                .otherwise({
                    redirectTo: '/jobs'
                });
        }
        )
        .service('appSvc', appSvc)
        .controller('appCtrl', [
            'appSvc', '$mdSidenav', '$mdBottomSheet', '$log', '$q', '$location',
            appCtrl
        ]);

    function appSvc() {
        var self = this;

        self.header = 'Contractor Trial';

        return self;
    }

    function appCtrl(appSvc, $mdSidenav, $mdBottomSheet, $log, $q, $location) {
        var self = this;

        self.menu = [
            {label: 'Job Listings', icon: 'view_headline', route: 'jobs'},
            {label: 'Users', icon: 'face', route: 'users'}
        ];

        self.appSvc = appSvc;

        self.selected = 'jobs';

        self.toggleMenu = function () {
            $mdSidenav('left').toggle();
        }

        self.changeRoute = function (route) {
            self.selected = route;
            $location.path(route);
            $mdSidenav('left').close();
        }
    }
})();