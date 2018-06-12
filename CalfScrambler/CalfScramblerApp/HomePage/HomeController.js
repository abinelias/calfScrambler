(function () {
    angular.module('calfScamblerApp')
        .controller('myCtrl', myCtrl);

    myCtrl.$inject = ['$scope', 'HomePageService', 'CommonService'];

    function myCtrl($scope, HomePageService, CommonService) {
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

        //ScrablerInfo
        vm.name = 'Abin Abraham';
        vm.address = 'NO:8 illom Blocks';
        vm.city = "Kochi";
        vm.state = vm.state[vm.selectedState].Name;
        vm.zip = "689541";
        vm.email = "abinelias@yahoo.com";
        vm.secondaryEmail = "ajaynath@gmail.com";
        vm.chapter = 'Arp FFA'
        vm.ceaEST = 'Mike Van';
        vm.ceaESTEmail = 'Winklemike@arpisd.org';

        //AdditionalInfo
        vm.AnimalType = vm.animalType[vm.selectedAnimalType].Name;
        vm.Animal = "Calf";
        vm.RegistryNumber = "ANWZ1205WN";
        vm.DOB = "06/15/2014";
        vm.NameOfSize = "Size Name";
        vm.SizeRegistryNum = "As255BO";
        vm.NameofDam = "Name of Dam";
        vm.DamRegistryNum = "QWE"
        vm.Breed = vm.breed[vm.selectedBreed].Name;
        vm.AnimalID = "TF6654";
        vm.Seller = "SOme Name"
        vm.PurchaseDate = "04/05/2015";
        vm.TotalAnimalCost = 252;

        vm.ValidationTag = "TAG262IN";
        vm.Sellarname = "Ajay nath";
        vm.PurchaseDate = "04/05/2015";
        vm.Cost = "145";

        //DonorInfo
        vm.donorName = 'Walter Environmental & Technical Svsc, Inc';
        vm.donorEmail = 'dhigh@wetservices.com';
        vm.isAttendingShow = vm.attending[vm.selectedAttending].Name;
        vm.shirtSize = vm.tShirtSize[vm.selectedTShirtSize].Name;

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