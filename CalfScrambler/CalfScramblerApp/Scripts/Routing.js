var calfScamblerApp = angular.module("calfScamblerApp", ['ngRoute', 'igniteui-directives']);

calfScamblerApp.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: '/CalfScramblerApp/HomePage/Home.html',
            controller: 'myCtrl',
            controllerAs: 'home'
        })
        .when('/expenses', {
            templateUrl: '/CalfScramblerApp/ExpensePage/Expense.html',
            controller: 'ExpenseController',
            controllerAs: 'expense'
        })
        .otherwise({
            redirectTo: '/home'
        });
});