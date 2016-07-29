(function () {
    angular
        .module('users')
        .controller('userCtrl', [
            'appSvc',
            userCtrl
        ]);

    function userCtrl(appSvc) {
        var self = this;

        this.text = "User Module Is Not Done.";
    }
})();