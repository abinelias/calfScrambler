(function () {
    angular.module('calfScamblerApp')
        .controller('myCtrl', myCtrl);

    myCtrl.$inject = ['$scope', 'HomePageService'];

    function myCtrl($scope, HomePageService) {
        var vm = this;
        vm.scramblerDetails;
        vm.selectedState = 0;
        vm.isEdit = false;
        vm.state = [{ "Id": 0, "Name": "Select State" }, { "Id": 1, "Name": "Florida" }, { "Id": 2, "Name": "Californai" }, { "Id": 3, "Name": "Alaska" }, { "Id": 4, "Name": "Maryland" }, { "Id": 5, "Name": "Newyork" }, { "Id": 6, "Name": "Ohio" }, { "Id": 7, "Name": "Tennessee" }, { "Id": 8, "Name": "Texas" }, { "Id": 9, "Name": "Virgina" }, { "Id": 10, "Name": "Washington" }];
        vm.selectedBreed = 0;
        vm.breed = [{ "Id": 0, "Name": "Select Breed" }, { "Id": 1, "Name": "BreedA" }, { "Id": 2, "Name": "BreedB" }];
        vm.selectedAnimalType = 0;
        vm.animalType = [{ "Id": 0, "Name": "Select Animal Type" }, { "Id": 1, "Name": "Heifer" }, { "Id": 2, "Name": "Steer" }];
        vm.selectedAttending = 0;
        vm.attending = [{ "Id": 0, "Name": "Yes" }, { "Id": 1, "Name": "No" }];
        vm.selectedTShirtSize = 0;
        vm.tShirtSize = [{ "Id": 0, "Name": "Select T-Shirt Size" }, { "Id": 1, "Name": "S" }, { "Id": 2, "Name": "M" }, { "Id": 3, "Name": "L" }, { "Id": 4, "Name": "XL" }, { "Id": 5, "Name": "XXL" }];

        vm.name = 'Abin Abraham';
        vm.address = 'NO:8 illom Blocks newjersey';
        vm.chapter = 'Arp FFA'
        vm.ceaEST = 'Mike Van';
        vm.ceaESTEmail = 'Winklemike@arpisd.org';
        vm.donorName = 'Walter Environmental & Technical Svsc, Inc';
        vm.donorEmail = 'dhigh@wetservices.com';
        vm.isAttendingShow = false;

        // Functions defined on vm
        vm.GetScramblerDetails = GetScramblerDetails;
        vm.EditInfo = EditInfo;
        vm.Save = Save;

        GetScramblerDetails();

        function GetScramblerDetails() {
            //HomePageService.GetScramblerDetails().then(function (res) {
            //    vm.scramblerDetails = res.data;
            //    vm.name = vm.scramblerDetails.FIRST_NAME + vm.scramblerDetails.LAST_NAME;
            //    console.log(vm.scramblerDetails);
            //});
        }

        function EditInfo() {
            vm.isEdit = true;
        }

        function Save() {
            vm.isEdit = false;
        }
    }
})();