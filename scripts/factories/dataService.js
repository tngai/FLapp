var DataService = angular.module('DataService',[])
  .factory('dataService',function($firebase)  {
    var tempMarker;
    var tempFTOwner;
    var oneTruck;

    var fTOArray = [
    	{name:"Father's Bad Ass Burgers",position:{H: 34.019007538736766, L: -118.4945547580719},description:'Bad Ass Burgers'},
    	{name:"Grill DEm All",position:{H: 34.02006575361327, L: -118.49584221839905},description:'Everything Grilled, everything..'},
    	{name:"The Creper",position:{H:34.01673099815092, L: -118.50121736526489},description:'Just Crepes'},
    	{name:"We heart Frozen..yogurt",position:{H: 34.02885109537161, L: -118.48209857940674},description:'Froyo'},
    	{name:"The Reuben Truck",position:{H: 34.01992347338913, L: -118.50489735603333},description:'Sandwiches & More'},
    	{name:"Belly Busting",position:{H: 34.0813218904187, L: -118.07543277740479},description:'Good Food Good Portions'},
    	{name:"Banh MI",position:{H: 34.01109274028335, L: -118.49578589200974},description:'Famous Viet Sandwiches'}
    ];
    return {
      tempMarker:tempMarker,
      tempFTOwner:tempFTOwner,
      fTOArray : fTOArray,
      oneTruck : oneTruck 
    };
})