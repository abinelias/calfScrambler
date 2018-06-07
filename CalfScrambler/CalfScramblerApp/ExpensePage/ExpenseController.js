(function () {
    angular.module('calfScamblerApp')
        .controller('ExpenseController', ExpenseController);

    ExpenseController.$inject = ['$scope'];

    function ExpenseController($scope) {
        var vm = this;
        vm.firstName = "Abin";
        vm.lastName = "Abraham";
        vm.selectedQuanity = 0;
        vm.expenseType = '';
        vm.unitCost;
        vm.monthlyData = [{ "Id": 1, "ExpenseType": "Feed", "Quantity": 10, "UnitCost": "$30", "TotalCost": "$300" }, { "Id": 2, "ExpenseType": "Medicine", "Quantity": 10, "UnitCost": "$30", "TotalCost": "$300" }, { "Id": 3, "ExpenseType": "Food", "Quantity": 10, "UnitCost": "$30", "TotalCost": "$300" }];
        vm.yearlyData =  [{ "ReportingMonth": "May", "ExpenseType": "Feed", "Quantity": 10, "UnitCost": "$30", "TotalCost": "$300" }];
        vm.quantity = [{ "Id": 0, "Name": "Select Quantity"}, { "Id": 1, "Name": 1 }, { "Id": 2, "Name": 2 }, { "Id": 3, "Name": 3 }, { "Id": 4, "Name": 4 }, { "Id": 5, "Name": 5 }, { "Id": 6, "Name": 6 }, { "Id": 7, "Name": 7 }, { "Id": 8, "Name": 8 }, { "Id": 9, "Name": 9 }, { "Id": 10, "Name": 10 }]

        // Functions defined on vm
        vm.AssignHolding = AssignHolding;
        vm.ExpenseToExcel = ExpenseToExcel;
        vm.saveExpense = saveExpense;
        vm.cancelExpense = cancelExpense;
        vm.deleteExpense = deleteExpense;


        function AssignHolding(accountHolding, index) {
            GoalAccountsService.AssignHolding(accountHolding, vm.GoalAccounts[index], vm.profileText.toLowerCase());
        }

        function saveExpense() {
            var data = {};
            data.ExpenseType = vm.expenseType;
            data.Quantity = vm.selectedQuanity;
            data.UnitCost = vm.unitCost;
            data.TotalCost = parseInt(vm.unitCost) * parseInt(vm.selectedQuanity);
            vm.monthlyData.push(data);
            vm.selectedQuanity = 0;
            vm.expenseType = '';
            vm.unitCost = '';
        }

        function cancelExpense() {
            vm.selectedQuanity = 0;
            vm.expenseType = '';
            vm.unitCost = '';
        }

        function deleteExpense(id) {
            alert(id);
            
        }

        function ExpenseToExcel() {
            angular.element.ig.GridExcelExporter.exportGrid(
                angular.element('#yearlyExpense'),
                {
                    fileName: 'YearlyExpense',
                    worksheetName: 'YearlyExpense',

                }
            );
        }
    }
})();
