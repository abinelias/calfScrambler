angular.module('calfScamblerApp')
    .factory('CommonService', CommonService);

CommonService.$inject = ['$http', '$q', '$localStorage', '$sessionStorage'];
function CommonService($http, $q, $localStorage, $sessionStorage) {
    var loggedInUserName = 'Abin Abraham';
    var loggedInUserId = 0;
    var CommonAPI = {
        GetLoggedInUserID: GetLoggedInUserID,
        SetLoggedInUserID: SetLoggedInUserID,
        Logout: Logout
    };

    function GetLoggedInUserID() {
        if ($localStorage.loggedInUserId != null) {
            loggedInUserId = $localStorage.loggedInUserId;
        }
        else
            loggedInUserId = 0;
        return loggedInUserId;
    }

    function SetLoggedInUserID() {
        //$localStorage.loggedInUserId = 1;
        loggedInUserId = $localStorage.loggedInUserId = 1;
    }

    function Logout() {
        $localStorage.loggedInUserId = 0;
        loggedInUserId = 0;
    }

    return CommonAPI;

};