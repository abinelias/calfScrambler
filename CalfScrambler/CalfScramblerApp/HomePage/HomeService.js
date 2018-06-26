angular.module('calfScamblerApp')
    .factory('HomePageService', HomePageService);

HomePageService.$inject = ['$http', '$q', '$localStorage', '$sessionStorage'];
function HomePageService($http, $q, $localStorage, $sessionStorage) {
    var baseWMUrl = '/api/CalfScramblerApi/';
	var homeAPI = {
        GetScramblerDetails: GetScramblerDetails,
        GetCurrentMonth: GetCurrentMonth
	};

    return homeAPI;
	
    function GetScramblerDetails() {
        var val = 1;
		var deferred = $q.defer();
        deferred.resolve($http.post(baseWMUrl + 'getCustomerId?id='+ val).then(function (result) {
			return result;
		}));
		return deferred.promise;
    }

    function GetCurrentMonth() {
        var deferred = $q.defer();
        deferred.resolve($http.get(baseWMUrl + 'GetCurrentMonth').then(function (result) {
            $localStorage.month = result.data;
            return result;
        }));
        return deferred.promise;
    }
};