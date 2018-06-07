angular.module('calfScamblerApp').directive('navBar', navBar);

function navBar() {
    var res = {
        restrict: 'E',
        templateUrl: '/CalfScramblerApp/NavBar/NavBar.html',
        replace: false,
        controller: 'NavBarController',
        controllerAs: 'nav',
        bindToController: true
    }
    return res;
}
