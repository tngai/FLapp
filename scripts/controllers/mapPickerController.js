var mapPickerController = angular.module('mapPickerController',[])
.controller('mapPickerController',function($scope,dataService,$state){
	$scope.locationEnter = function(){
		if(!dataService.tempMarker){
			alert('please click on the map and choose a location today')
			$state.go('mapPicker');
		}
		dataService.tempFTOwner.position = dataService.tempMarker.getPosition();
		dataService.fTOArray.push(dataService.tempFTOwner)
		console.log('your FTOwner ',dataService.fTOArray)
		$state.go('home');
	};	 
});