
(function () {
    'use strict';

    var auth = {
       // Add authentication related end point       
    };
    
    //Add Application Based Url 
    var urls = {
        appBaseUrl: 'http://mms_api.home.venske.net',
    };

    //Add Application Based Endpoints 
    var endpoints = {
       listingJob: '/jobs',
    };

    angular
        .module('contractorTrialApp')
        .constant('auth', auth)
        .constant('urls', urls)
        .constant('endpoints', endpoints);
})();