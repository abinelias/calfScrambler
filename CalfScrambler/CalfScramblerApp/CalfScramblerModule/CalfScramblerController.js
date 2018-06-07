(function () {
    angular.module('calfScamblerApp')
        .controller('CalfScramblerController', CalfScramblerController);
    CalfScramblerController.$inject = ['$scope', '$location', 'CommonService'];

    function CalfScramblerController($scope, $location, CommonService) {
        var vm = this;
        vm.Logout = Logout

        vm.LoggdInUsedId = CommonService.GetLoggedInUserID();

        $scope.$watch(function (scope) { return CommonService.GetLoggedInUserID() },
            function (newValue, oldValue) {

                vm.LoggdInUsedId = CommonService.GetLoggedInUserID();
            }
        );

        function Logout() {
            CommonService.Logout();
            $location.path("/login");
        }
    }
})();
