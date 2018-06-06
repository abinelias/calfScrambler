(function () {
    angular.module('calfScamblerApp')
        .controller('CorrespondenceController', CorrespondenceController);

    CorrespondenceController.$inject = ['$scope'];

    function CorrespondenceController($scope) {
        var vm = this;
        vm.startDate = "Abin";
        vm.endDate = "Abraham";

        vm.add = add;


        function add() {
            var f = document.getElementById('file').files[0],
                r = new FileReader();

            r.onloadend = function (e) {
                var data = e.target.result;
                console.log(data);
                //send your binary data via $http or $resource or do anything else with it
            }

            r.readAsBinaryString(f);
        }
    }
})();
