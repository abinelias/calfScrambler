(function () {
    angular.module('calfScamblerApp')
        .controller('EssayController', EssayController);

    EssayController.$inject = ['$scope'];

    function EssayController($scope) {
        var vm = this;
        vm.firstName = "Abin";
        vm.lastName = "Abraham";
    }
})();
