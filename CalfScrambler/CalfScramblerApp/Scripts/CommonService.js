angular.module('calfScamblerApp')
    .factory('CommonService', CommonService);

CommonService.$inject = ['$http', '$q'];
function CommonService($http, $q) {
    var loggedInUserName = 'Abin Abraham';
    var loggedInUserId = 0;
};