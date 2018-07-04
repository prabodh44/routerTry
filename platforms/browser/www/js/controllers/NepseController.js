routerTry.controller('NepseController', function($scope, $http){
    $scope.name = "Tina";

    $http.get("tableData.json")
    .then(function (data) {
        $scope.stocks = data.data;
        $scope.firstItem = $scope.stock[0];
    })
    .catch(function (data) {
        console.log("there was an error");
    });
});