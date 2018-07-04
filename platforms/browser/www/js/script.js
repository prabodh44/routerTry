var routerTry = angular.module('routerTry', ['ui.router']);
routerTry.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/mainpage');
    
    $stateProvider.state('main', {
        url: '/mainpage',
        templateUrl: 'views/MainPage.html',
        controller: 'MainController'
    }).state('main.menu', {
        url: '/menupage',
        templateUrl: 'views/MenuPage.html',
        controller: 'MenuController'
    }).state('portfolio', {
        url: '/portfolio',
        templateUrl: 'views/PortFolio.html',
        controller: 'PortFolioController'
    }).state('nepse', {
        url: '/nepse',
        templateUrl: 'views/Nepse.html',
        controller: 'NepseController'
    });
});
