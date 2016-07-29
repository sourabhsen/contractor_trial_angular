(function() {
    angular
        .module('jobs')
        .controller('jobCtrl', jobCtrl);
        

    jobCtrl.$inject = ['$scope', 'appSvc', 'jobService', '$mdDialog'];

    function jobCtrl($scope, appSvc, jobService, $mdDialog) {
        var model = $scope;
        var bookmark; 

        model.orderBy = 'created_at';

        appSvc.header = 'Job Listings';

        model.list = 'asd';

        model.limitOptions = [5, 10, 15];

        model.options = {
            rowSelection: true,
            multiSelect: true,
            autoSelect: true,
            decapitate: false,
            largeEditDialog: false,
            boundaryLinks: false,
            limitSelect: true,
            pageSelect: true
        };


        model.filter = {
            options: {
                debounce: 500
            }
        };

        model.query = {
            order: 'interview_date',
            limit: 5,
            page: 1
        };

        model.removeFilter = function() {
            model.filter.show = false;
            model.query.filter = '';

            if (model.filter.form.$dirty) {
                model.filter.form.$setPristine();
            }
        };

        model.promise = jobService.loadAllJobs().then(function(jobs) {
            $scope.list = jobs;
        });

        model.selected = [];



        model.getMoreList = function() {

        };

         model.addItem = function (ev) {
            $mdDialog.show({
              clickOutsideToClose: true,
              controller: addItemController,
              focusOnOpen: false,
              targetEvent: ev,
              templateUrl: 'src/_modules/jobs/addjobDialog.html',
              parent: angular.element(document.body),
              fullscreen: true,
              
            });
          };

        model.showDetails = function(job, ev) {
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
     
       
        model.getJobs = function() {
           
        };

        model.$watch('query.filter', function(newValue, oldValue) {
            if (!oldValue) {
                bookmark = model.query.page;
            }

            if (newValue !== oldValue) {
                model.query.page = 1;
            }

            if (!newValue) {
                model.query.page = bookmark;
            }

            model.getJobs();
        });

    }

})();




function DialogController($scope, $sce, $mdDialog, jobService, job) {
    $scope.job = job;

    $scope.jobID = job.id;

    $scope.hide = function() {
        $mdDialog.hide();
    };

    $scope.cancel = function() {
        $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
        $mdDialog.hide(answer);
    };

    $scope.editFormSave = function(validity) {
        if (validity) {

            jobService.postJobProfile({
                name: $scope.Name

            }, job.id).then(function(response) {
                console.log('submit');
                $mdDialog.cancel();

            }, function(error) {
                console.log(error);
                $mdDialog.cancel();
            });
        }
    }
}

function addItemController($scope, $sce, $mdDialog, jobService) {
    

    $scope.hide = function() {
        $mdDialog.hide();
    };

    $scope.cancel = function() {
        $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
        $mdDialog.hide(answer);
    };

    /*
     * validity will come from the form if all the input fileds of the form is valid, but for
     * now i am passing true, no validation is implemented.
     */
    $scope.addFormSave = function(validity) {
        if (validity) {

            jobService.addJob({
                description: model.description,
                name:model.clientName

            }).then(function(response) {
                console.log('submit');
                $mdDialog.cancel();

            }, function(error) {
                console.log(error);
                $mdDialog.cancel();
            });
        }
    }

}