var aboutController = angular.module('AboutController',[])
.controller('aboutController',function($scope,dataService,$state) {
	
	$scope.fTrucks = dataService.fTOArray
	$scope.FTLocation = function(truck){
		console.log('the truck ',truck)
		dataService.oneTruck = truck; 
		$state.go('oneFoodTruck')
	};
})