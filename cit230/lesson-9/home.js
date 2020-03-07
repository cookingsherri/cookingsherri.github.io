const requestURL =
"https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonObject) {
    //console.table(jsonObject);
    const towns = jsonObject["towns"];
    for (let i = 0; i < towns.length; i++) {
        towns.forEach(city => {
        
      let card = document.createElement("section");
      let name = document.createElement("h2");
      let motto = document.createElement("h3");
      let yearFounded = document.createElement("p");
      let currentPopulation = document.createElement("p");
      let averageRainfall = document.createElement("p");
      let photo = document.createElement("img");

switch (city.name) {
    case 'Fish Haven':
    case 'Preston':
    case 'Soda Springs':
     name.textContent = city.name;
      motto.textContent = city.motto;
      yearFounded.textContent = "Year Founded:" + city.yearFounded;
      currentPopulation.textContent = "Population:" + city.currentPopulation;
      averageRainfall.textContent = "Average Rainfall:" + city.averageRainfall;
      
      image.setAttribute('src', city.photo);
      image.setAttribute('alt',  "Photo of " + city.name);

      card.appendChild(name);
      card.appendChild(motto);
      card.appendChild(yearFounded);
      card.appendChild(currentPopulation);
      card.appendChild(averageRainfall);
      card.appendChild(photo);
      

      document.querySelector("div.cards").appendChild(card);
    }
  });
});