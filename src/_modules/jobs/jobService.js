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
            },

            postJobProfile: function (dataObj,jobid) {
                if (dataObj) {
                    return $http.put(urls.appBaseUrl + endpoints.listingJob +'/' + jobid, dataObj)
                        .then(function (response) {
                            return response.data;
                        }, function (httpError) {
                            throw httpError.status + " : " + httpError.data;
                        });
                }
            },

            addJob: function (dataObj,jobid) {
                if (dataObj) {
                    return $http.post(urls.appBaseUrl + endpoints.listingJob , dataObj)
                        .then(function (response) {
                            return response.data;
                        }, function (httpError) {
                            throw httpError.status + " : " + httpError.data;
                        });
                }
            },

        };
    }
})();
