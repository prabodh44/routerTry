var routerTry = angular.module('routerTry', ['ui.router']);
routerTry.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('page1', {
        url: '/page1',
        templateUrl: 'page1.html',
        controller: 'Page1Controller'
    }).state('page2', {
        url: '/page2',
        templateUrl: 'page2.html',
        controller: 'Page2Controller'
    });
});

routerTry.controller('MainController', function($scope, $state){
    $scope.goto = function(param){
        if(param == 'page1'){
            $state.go('page1');
        }

        if(param == 'page2'){
            $state.go('page2');
        }
    };
});

routerTry.controller('Page1Controller', function($scope){
    $scope.name = "Prabodh";
});

routerTry.controller('Page2Controller', function($scope){
    $scope.name = "Tina";
});