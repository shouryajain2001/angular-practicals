var myApp=angular.module("myModule",[]);
myApp.controller("myController",function($scope){
    $scope.value=15000000;
    $scope.str="Shourya";
    $scope.order_datetime=new Date();
    $scope.cars = ["Audi", "BMW", "Dodge", "Fiat", "Ford", "Volvo"];
})