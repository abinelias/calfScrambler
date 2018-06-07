angular.module('calfScamblerApp')
    .factory('CommonService', CommonService);

CommonService.$inject = ['$http', '$q'];
function CommonService($http, $q) {
    var loggedInUserName = 'Abin Abraham';
    var loggedInUserId = 0;
    var CommonAPI = {
        GetLoggedInUserID: GetLoggedInUserID,
        SetLoggedInUserID: SetLoggedInUserID
    };

    function GetLoggedInUserID() {
        return loggedInUserId;
    }

    function SetLoggedInUserID() {
        loggedInUserId = 1;
    }

    return CommonAPI;

};