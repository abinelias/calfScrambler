(function () {
    angular.module('calfScamblerApp')
        .controller('CorrespondenceController', CorrespondenceController);

    CorrespondenceController.$inject = ['$scope', 'CorrespondenceService'];

    function CorrespondenceController($scope, CorrespondenceService) {
        var vm = this;
        vm.startDate = "Abin";
        vm.endDate = "Abraham";

        vm.add = add;


        function add() {
            var f = document.getElementById('file').files[0],
                r = new FileReader();

            r.onloadend = function (e) {
                var data = e.target.result;
                CorrespondenceService.SavePdf(f).then(function (res) {
                    //vm.scramblerDetails = res.data;
                    //vm.name = vm.scramblerDetails.FIRST_NAME + vm.scramblerDetails.LAST_NAME;
                    //console.log(vm.scramblerDetails);
                });
                //send your binary data via $http or $resource or do anything else with it
            }

            r.readAsBinaryString(f);
        }
    }
})();
