(function () {
    angular.module('calfScamblerApp')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$scope', 'CommonService'];

    function LoginController($scope, CommonService) {
        var vm = this;
        vm.LoggedInUserId;

        //Function Used
        vm.Login = Login;
        
        function Login(){
            CommonService.loggedInUserId = 1;
            vm.LoggedInUserId = CommonService.loggedInUserId;
        }
    }
})();
