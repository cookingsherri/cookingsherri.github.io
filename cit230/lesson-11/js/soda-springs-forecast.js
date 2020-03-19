const forecast = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&&APPID=1a20634257e80075a78ee9798275cb13";
fetch(forecast)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);
    
    let fiveDayForecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
    // console.log(fiveDayForecast);

    for (let i=0; i<fiveDayForecast.length; i++) {
        document.getElementById(`forecast${i+1}`).textContent = fiveDayForecast[i].main.temp.toFixed(0) + " °F";
    //  console.log(fiveDayForecast[i].weather[0]);   
const imagesrc = 'https://openweathermap.org/img/w/' + fiveDayForecast[i].weather[0].icon + '.png';  
const desc = fiveDayForecast[i].weather[0].description;  

document.getElementById(`icon${i+1}`).setAttribute('src', imagesrc);  
document.getElementById(`icon${i+1}`).setAttribute('alt', desc);

const dayOfWeek = new Date(fiveDayForecast[i].dt_txt);
const daysOfTheWeek = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
document.getElementById(`day${i+1}`).textContent = daysOfTheWeek[dayOfWeek.getDay()];
    }
});


