routerTry.controller('MenuController', function ($scope, $state) {

  //https://codepen.io/prabodhtuladhar44/pen/zaQgGB -- search functionality
  $scope.menuItems = [{
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
      "action": "subindices"
    },
    {
      "menuName": "Listed Stocks",
      "action": "listedstocks"
    },
    {
      "menuName": "Listed Brokers",
      "action": "listedbrokers"
    }
  ];
  
  $scope.goto = function (param) {
    // if(param == 'portfolio'){
    //     $state.go('portfolio');
    // }

    // if(param == 'nepse'){
    //     $state.go('nepse');
    // }

    switch (param) {
      case 'portfolio':
        $state.go('portfolio');
        break;

      case 'nepse':
        $state.go('nepse');
        break;

      case 'nepse':
        $state.go('nepse');
        break;

      case 'turnovers':
        $state.go('turnovers');
        break;

      case 'listedstocks':
        $state.go('listedstocks');
        break;


      default:
        break;
    }
  };
});