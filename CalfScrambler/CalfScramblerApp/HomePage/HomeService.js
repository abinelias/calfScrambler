angular.module('calfScamblerApp')
    .factory('HomePageService', HomePageService);

HomePageService.$inject = ['$http', '$q'];
function HomePageService($http, $q) {
    var baseWMUrl = '/api/CalfScramblerApi/';
	var homeAPI = {
        GetScramblerDetails: GetScramblerDetails
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
};