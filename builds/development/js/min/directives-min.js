angular.module("myApp.directives",[]),angular.module("myApp.directives").directive("nutshellHeader",function(){return{restrict:"E",templateUrl:"views/directives/header.html"}}).directive("nutshellFooter",function(){return{restrict:"E",templateUrl:"views/directives/footer.html"}}).directive("footerAddCalc",function(){return{restrict:"E",templateUrl:"views/directives/footer_add_calc.html"}}).directive("footerSubCalc",function(){return{restrict:"E",templateUrl:"views/directives/footer_sub_calc.html"}}).directive("footerMulCalc",function(){return{restrict:"E",templateUrl:"views/directives/footer_mul_calc.html"}}).directive("footerDivCalc",function(){return{restrict:"E",templateUrl:"views/directives/footer_div_calc.html"}}).directive("quickQuiz",function(){return{restrict:"E",templateUrl:"views/directives/quick_quiz.html"}}).directive("additionMainForm",function(){return{restrict:"E",templateUrl:"views/directives/addition_main_form.html"}}).directive("additionMultipleForm",function(){return{restrict:"E",templateUrl:"views/directives/addition_multiple_form.html"}}).directive("subtractionMainForm",function(){return{restrict:"E",templateUrl:"views/directives/subtraction_main_form.html"}}).directive("subtractionBudgetForm",function(){return{restrict:"E",templateUrl:"views/directives/subtraction_budget_form.html"}}).directive("multiplicationMainForm",function(){return{restrict:"E",templateUrl:"views/directives/multiplication_main_form.html"}}).directive("divisionMainForm",function(){return{restrict:"E",templateUrl:"views/directives/division_main_form.html"}});