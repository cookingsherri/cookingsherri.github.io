var t = parseFloat(document.getElementById("highTemp").innerText);
var s = parseFloat(document.getElementById("windSpeed").innerText);

if (t < 51 && s > 3) {
    var w = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
    results = w.toFixed(0)
}
else results = "N/A"

document.getElementById("windChill").innerHTML = results;