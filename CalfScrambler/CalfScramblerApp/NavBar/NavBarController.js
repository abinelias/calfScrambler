(function () {
    angular.module('calfScamblerApp')
        .controller('NavBarController', NavBarController);
    NavBarController.$inject = ['$scope', 'CommonService'];

    function NavBarController($scope, CommonService) {
        var vm = this;
        vm.loggedInUserId = CommonService.loggedInUserId;

        $scope.$watch(function (scope) { return CommonService.GetLoggedInUserID() },
            function (newValue, oldValue) {
                vm.loggedInUserId = CommonService.GetLoggedInUserID();
            }
        );
    }
})();
