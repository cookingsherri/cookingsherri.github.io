const requestURL =
"https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonObject) {
    //console.table(jsonObject);
    const towns = jsonObject["towns"];
    
        towns.forEach(city => {
          if (city.name == "Preston" || city.name =="Fish Haven" || city.name =="Soda Springs") {

          
        
          let card = document.createElement("section");
          let div = document.createElement("div");
          let div2 = document.createElement("div");
          let name = document.createElement("h2");
          let motto = document.createElement("h3");
          let yearFounded = document.createElement("p");
          let currentPopulation = document.createElement("p");
          let averageRainfall = document.createElement("p");
          let photo = document.createElement("img");


          name.textContent = city.name;
          motto.textContent = city.motto;
          yearFounded.textContent = "Year Founded:" + city.yearFounded;
          currentPopulation.textContent = "Population:" + city.currentPopulation;
          averageRainfall.textContent = "Average Rainfall:" + city.averageRainfall;

          photo.setAttribute('src', "images/" + city.photo);
          photo.setAttribute('alt',  "Photo of " + city.name);

          div.appendChild(name);
          div.appendChild(motto);
          div.appendChild(yearFounded);
          div.appendChild(currentPopulation);
          div.appendChild(averageRainfall);
          card.appendChild(div);
          div2.appendChild(photo);
          card.appendChild(div2);
            

           document.querySelector("div.cards").appendChild(card);
          }}
  );
    });