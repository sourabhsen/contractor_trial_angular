(function () {
    'use strict';

    angular.module('jobs')
        .service('jobService', jobService);

    jobService.$inject = ['$q', '$http', 'endpoints','urls'];

    function jobService($q, $http,endpoints,urls) {
        return {
            loadAllJobs: function () {
                // Add promise code to this end point
                 return $http.get(
                    urls.appBaseUrl + endpoints.listingJob
                ).then(function (response) {
                    return response.data;
                }, function (httpError) {
                    throw httpError.status + " : " + httpError.data;
                });
            }
        };
    }
})();
