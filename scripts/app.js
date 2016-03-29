
var App = angular.module('App', ['ui.router','map','HomeController','geolocation','DataService','AboutController','FoodTruckOwnerController','mapPickerController','oneFoodTruck','firebase'])

.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/',
            templateUrl: './views/home.html',
            controller: 'HomeController'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('foodTrucks', {
            url: '/',
            templateUrl: './views/about.html',
            controller: 'aboutController'     
        })
        .state('foodTruckOwner', {
            url: '/',
            templateUrl: './views/foodTruckOwner.html',
            controller: 'foodTruckOwnerController'     
        })
        .state('mapPicker', {
            url: '/',
            templateUrl: './views/mapPicker.html',
            controller: 'mapPickerController'     
        })
        .state('oneFoodTruck', {
            url: '/',
            templateUrl: './views/oneFoodTruck.html',
            controller: 'oneFoodTruckController'     
        })

        
})





