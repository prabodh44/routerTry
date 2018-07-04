routerTry.controller('MenuController', function($scope, $state){

    $scope.menuItems = [
        {
          "menuName": "Port Folio",
          "action": "portfolio"
        },
        {
          "menuName": "Live Nepse",
          "action": "nepse"
        },
        {
          "menuName": "Turn Overs",
          "action": "turnovers"
        },
        {
          "menuName": "Sub Indices",
          "action": "skjdksd"
        },
        {
          "menuName": "Listed Stocks",
          "action": "listedstocks"
        },
        {
          "menuName": "Listed Brokers",
          "action": "listedbrokers"
        }
      ]
    $scope.goto = function(param){
        if(param == 'portfolio'){
            $state.go('portfolio');
        }

        if(param == 'nepse'){
            $state.go('nepse');
        }
    };
});