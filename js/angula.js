var app = angular.module("minhaLista", []); 
app.controller("myCtrl", function($scope) {
    $scope.produtos = [];
    $scope.addItem = function () {
        $scope.errortext = "";
        if (!$scope.addMe) {return;}        
        if ($scope.produtos.indexOf($scope.addMe) == -1) {
            $scope.produtos.push($scope.addMe);
        } else {
            $scope.errortext = "Esse item ja exite na sua lista.";
        }
    }
    $scope.removeItem = function (x) {
    $scope.produtos.splice(x, 1);
    }
});