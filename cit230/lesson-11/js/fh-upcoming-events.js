const requestURL =
  "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonObject) {
    console.table(jsonObject);
    
    const towns = jsonObject["towns"]

      let h2 = document.createElement("h2");
      let events1 = document.createElement("p");
      let events2 = document.createElement("p");
      let events3 = document.createElement("p");
      let upcomingevents = document.createElement("section");

      h2.textContent =  "Upcoming Events";
      events1.textContent = [towns[2].events[0]];
      events2.textContent = [towns[2].events[1]];
      events3.textContent = [towns[2].events[2]];

      upcomingevents.appendChild(h2);
      upcomingevents.appendChild(events1);
      upcomingevents.appendChild(events2);
      upcomingevents.appendChild(events3);

      

      document.querySelector("div.upcomingevents").appendChild(upcomingevents);

      
    
  });