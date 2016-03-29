var HomeController = angular.module('HomeController',[])
.controller('HomeController',function($scope){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
      $scope.$apply(function(){
        $scope.position = position;
      });
    });
  }
  $scope.pac_input = '';
  $scope.searchSubmit = function(){  
  };

})