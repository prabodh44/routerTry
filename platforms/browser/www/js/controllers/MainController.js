routerTry.controller('MainController', function($scope, $state){
  $scope.name = "Sandhya";
  $state.go("main.menu");
});