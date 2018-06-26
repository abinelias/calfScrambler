angular.module('calfScamblerApp')
    .factory('ExpenseService', ExpenseService);

ExpenseService.$inject = ['$http', '$q'];
function ExpenseService($http, $q) {
    var baseWMUrl = '/api/Expense/';
    var expenseAPI = {
        AddExpense: AddExpense,
        GetExpense: GetExpense
    };

    return expenseAPI;

    function GetExpense() {
        var val = 1;
        var year = 2018;
        var deferred = $q.defer();
        deferred.resolve($http.get(baseWMUrl + 'GetExpenseByYear?year=' + year +'&customerid=' +val).then(function (result) {
            return result;
        }));
        return deferred.promise;
    }

    function AddExpense(expenseObj) {
        var deferred = $q.defer();
        alert('hii');
        deferred.resolve($http.post(baseWMUrl + 'AddExpense', expenseObj).then(function (result) {
            return result;
        }));
        return deferred.promise;
    }
};