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
        .when('/correspondence', {
            templateUrl: '/CalfScramblerApp/CorrespondencePage/Correspondence.html',
            controller: 'CorrespondenceController',
            controllerAs: 'corres'
        })
        .when('/essay', {
            templateUrl: '/CalfScramblerApp/EssayPage/Essay.html',
            controller: 'ExpenseController',
            controllerAs: 'essay'
        })
        .when('/summary', {
            templateUrl: '/CalfScramblerApp/SummaryPage/Summary.html',
            controller: 'SummaryController',
            controllerAs: 'summary'
        })
        .otherwise({
            redirectTo: '/home'
        });
});