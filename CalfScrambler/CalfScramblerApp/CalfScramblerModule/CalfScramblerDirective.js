﻿
angular.module('calfScamblerApp').directive('calfScrambler', calfScrambler);

function calfScrambler() {
    console.log('hii');
    var res = {
        restrict: 'E',
        templateUrl: '/CalfScramblerApp/CalfScramblerModule/CalfScrambler.html',
        replace: false,
        controller: 'CalfScramblerController',
        controllerAs: 'calf',
        bindToController: true
    }
    return res;
}
