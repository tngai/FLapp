var map = angular.module('map',[])
.directive('helloMaps', function (dataService) {
      return function (scope, elem, attrs) {
        
        var mapOptions,
          latitude = attrs.latitude,
          longitude = attrs.longitude,
          map;
        latitude = latitude && parseFloat(latitude, 10) || 43.074688;
        longitude = longitude && parseFloat(longitude, 10) || -89.384294;
        mapOptions = {
          zoom: 18,
          center: new google.maps.LatLng(latitude, longitude)
        };
    
        map = new google.maps.Map(elem[0], mapOptions);
  
// Search Bar 
        // Create the search box and link it to the UI element.

    var input = document.getElementById('pInput');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);   

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });
  

  var markers = [];
//get populate marks from user info;
if(attrs.view === 'home') {
 dataService.fTOArray.forEach(function(e){
  console.log('your latLng ', e.position.H,e.position.L)
  var myLatlng = new google.maps.LatLng(e.position.H,e.position.L);
  var mark = new google.maps.Marker({
            position: myLatlng, 
            map: map,
            title: e.name,
            animation: google.maps.Animation.DROP
          });
  console.log('your mark ', mark)

  mark.setMap(map);
}) 
 console.log('your view ',attrs.view)
 if(attrs.view === 'oneFoodTruck') {
     myLatlng = new google.maps.LatLng(dataService.oneTruck.position.H,dataService.oneTruck.position.L);
     mark = new google.maps.Marker({
            position: myLatlng, 
            map: map,
            title: dataService.oneTruck.name,
            animation: google.maps.Animation.DROP
          });
  console.log('oneFOodTruck mark ', mark)
  map.setCenter(mylatLng);
  mark.setMap(map);
}



  // [START region_getplaces]
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };


      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}

        var markArray = [];
        var tempMarker;
        var tempLatLng 
        google.maps.event.addListener(map, 'click', function(event) {
      
                if(tempMarker) {
                  tempMarker.setMap(null);                     
                }
           marker = new google.maps.Marker({
            position: event.latLng, 
            map: map,
            draggable: true,
            animation: google.maps.Animation.DROP
          });
          map.setCenter(event.latLng);
          // event.setMap(map);
          console.log('this is your latlng',event.latLng)
          console.log('new LatLn    g ',marker.position)
        google.maps.event.addListener(marker, 'dragend', function (event) {
          console.log('your drag event ',marker.getPosition().lat())
          lat = this.getPosition().lat();
          lng = this.getPosition().lng();
    // document.getElementById("latbox").value = this.getPosition().lat();
    // document.getElementById("lngbox").value = this.getPosition().lng();
    tempMarker = marker
          console.log('tempMarker ',tempMarker.getPosition().lat())
    });
          tempLatLng = event.latLng
          tempMarker = marker
          dataService.tempMarker = tempMarker;
          tempMarker = ''
          console.log('tempMarker ',dataService.tempMarker.getPosition())
        });
      };
    });