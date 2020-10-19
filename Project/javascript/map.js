function googleMaps() {
      // Create a variable of the position
    let shop = {lat: 63.429994, lng: 10.393383};
      // Create a variable of the map
    let map = new google.maps.Map(document.getElementById("map"), {zoom: 14.5, center: shop});
      // Create the red marker to show the location
    let marker = new google.maps.Marker({position: shop, map: map});
      // Adding an evenlistener so that when you click the marker a new tab opens up where you can get directions from where you are
    google.maps.event.addListener(marker, "click", function(){
        window.open("https://www.google.no/maps/dir//63.429994,10.393383/@63.429994,10.3911943,17z/data=!4m10!1m7!3m6!1s0x0:0x0!2zNjPCsDI1JzQ4LjAiTiAxMMKwMjMnMzYuMiJF!3b1!8m2!3d63.429994!4d10.393383!4m1!3e2")
    });
}

// Got help from the tutorial on how to implement this on https://developers.google.com/maps/documentation/javascript/adding-a-google-map?fbclid=IwAR1AqU4tYnQ8Xh--Qk9dAOKLsdi5lp_L0RJpriPyJSyKmwaZwzU3frokyMk
