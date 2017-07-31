window.onload = function() {
  // 1. Determine user's location
  navigator.geolocation.getCurrentPosition(function(pos) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://fcc-weather-api.glitch.me/api/current?lon=" + pos.coords.longitude + "&lat=" + pos.coords.latitude);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log(xhr.responseText);
        } else {
          console.log("Error: " + xhr.status);
        }
      }
    }
    xhr.send();
  });
  
  // 2. Call weather API with location
  // 3. Display current temperature in Farenheit
};
