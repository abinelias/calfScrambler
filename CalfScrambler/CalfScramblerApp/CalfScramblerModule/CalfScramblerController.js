(function () {
    angular.module('calfScamblerApp')
        .controller('CalfScramblerController', CalfScramblerController);
    CalfScramblerController.$inject = ['$scope', 'CommonService'];

    function CalfScramblerController($scope, CommonService) {
        var vm = this;
        vm.LoggdInUsedId = CommonService.GetLoggedInUserID();

        $scope.$watch(function (scope) { return CommonService.GetLoggedInUserID() },
            function (newValue, oldValue) {
                vm.LoggdInUsedId = CommonService.GetLoggedInUserID();
            }
        );
    }
})();
