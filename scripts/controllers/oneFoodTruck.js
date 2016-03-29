var oneFoodTruck = angular.module('oneFoodTruck',[])
.controller('oneFoodTruckController',function($scope,dataService){
$scope.truck = dataService.oneTruck.name;
});