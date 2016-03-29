var FoodTruckOwnerController = angular.module('FoodTruckOwnerController',[])
.controller('foodTruckOwnerController',function($scope,dataService,geoLocationService,$state){	
  var foodTruckInfo;
  $scope.enter = function(){
  	if(!$scope.FTname || !$scope.FTdescription) {
  	alert('please fill entire form')
  	$state.go($state.current, {}, {reload: true});
  	}else{
	  	dataService.tempFTOwner = {
	  		name:$scope.FTname,
	  		description:$scope.FTdescription
	  	}
	  	$state.go('mapPicker');
	    
	 	 };
  	}
  

});
