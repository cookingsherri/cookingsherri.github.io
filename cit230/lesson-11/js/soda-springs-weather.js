const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&&APPID=1a20634257e80075a78ee9798275cb13";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current').textContent = jsObject.weather[0].description;
        document.getElementById('highTemp').textContent = jsObject.main.temp_max.toFixed(0);
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('windSpeed').textContent = jsObject.wind.speed.toFixed(0);
        document.getElementById('windChill').textContent = calculateWindChill(jsObject.main.temp_max.toFixed(0), jsObject.wind.speed.toFixed(0));
    });

   function calculateWindChill(t, s) {
    
    if (t <= 50 && s > 3) {
        var w = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
        results = w.toFixed(0);
    }
    
    else results = "N/A";
    
    return results;
}