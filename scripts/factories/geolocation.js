var geolocation = angular.module('geolocation',[])
.factory('geoLocationService',function(dataService){
  var getLocation = function(address) {
            var latitude,longitude;
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({ 'address': address }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    latitude = results[0].geometry.location.lat();
                    longitude = results[0].geometry.location.lng();
                    dataService.tempFTLocation = {lat:latitude,lng:longitude}
                } else {
                    alert("Request failed.")
                }
            });
              return {lat:latitude,lng:longitude};
        };
  return getLocation;
})