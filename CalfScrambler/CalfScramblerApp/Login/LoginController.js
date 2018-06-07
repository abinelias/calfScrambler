(function () {
    angular.module('calfScamblerApp')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', '$location', 'CommonService'];

    function LoginController($scope, $location, CommonService) {
        var vm = this;
        vm.LoggedInUserId;

        //Function Used
        vm.Login = Login;
        
        function Login(){
            CommonService.SetLoggedInUserID();
            $location.path("/home");
        }
    }
})();
