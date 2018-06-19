angular.module('calfScamblerApp')
    .factory('CorrespondenceService', CorrespondenceService);

CorrespondenceService.$inject = ['$http', '$q'];
function CorrespondenceService($http, $q) {
    var baseWMUrl = '/api/CalfScramblerApi/';
    var corresAPI = {
        SavePdf: SavePdf
    };

    return corresAPI;

    function SavePdf(data) {
        var val = 1;
        console.log("data");
        var payload = new FormData();
        payload.append("filesample", data);
        var deferred = $q.defer();
        deferred.resolve($http({
            url: baseWMUrl + 'UploadTest', data: payload, method: "POST", headers: { 'Content-Type': undefined }
        }).then(function (result) {
            console.log(result);
            return result;
        }));
        return deferred.promise;
    }
};