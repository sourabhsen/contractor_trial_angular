(function () {
    angular
        .module('jobs')
        .controller('jobCtrl', jobCtrl);

    jobCtrl.$inject =  ['$scope','appSvc', 'jobService', '$mdDialog'];

    function jobCtrl($scope,appSvc, jobService, $mdDialog) {
        var model = $scope;        

        model.orderBy = 'created_at';

        appSvc.header = 'Job Listings';

         model.list = 'asd';

         model.query = {
           order: 'interview_date',
            limit: 5,
            page: 1
        };

        
        jobService.loadAllJobs().then(function (jobs) {
                $scope.list = jobs;
            });

        model.selected = [];


         model.getMoreList = function () {
          
        };

       
        model.showDetails = function (job, ev) {
            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'src/_modules/jobs/jobDialog.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: true,
                locals: {
                    job: job
                },
            })
        };
    }

})();


function DialogController($scope, $sce, $mdDialog, job) {
    $scope.job = job;
    
    $scope.hide = function () {
        $mdDialog.hide();
    };

    $scope.cancel = function () {
        $mdDialog.cancel();
    };

    $scope.answer = function (answer) {
        $mdDialog.hide(answer);
    };
}