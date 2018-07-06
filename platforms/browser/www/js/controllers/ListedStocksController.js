routerTry.controller('ListedStocksController', function ($scope, $state) {

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

  // routerTry.filter('searchFor', function(){
  //   if(!searchString){
  //     return arr;
  //   }

  //   var result = [];
  // 	searchString = searchString.toLowerCase();
  // });

  // angular.forEach($scope.menuItems, function(item){
  //   if(item.menuName.toLowerCase().indexOf(searchString) !== -1){
  //     result.push(item);
  //   }

  //   return result;
  // });

});

routerTry.filter('searchFor', function () {
  return function (item, searchString) {
    var filteredArray = [];
    if (!searchString) {
      filteredArray = item;
    } else {
      for (var i = 0; i < item.length; i++) {
        if (item[i].menuName.toLowerCase().indexOf(searchString) !== -1) {
          filteredArray.push(item[i]);
        }
      }
    }

    return filteredArray;
  }
})