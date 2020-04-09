const requestURL =
"https://cookingsherri.github.io/cit230/salmon-river/json/river-guides.json";

fetch(requestURL)
  .then(function(response) {
    return response.json();
  })
  
  .then(function(jsonObject) {
   
    const guides = jsonObject["guides"];
    
        guides.forEach(guides => {
          {
          let card = document.createElement("section");
          let div = document.createElement("div");
          let div2 = document.createElement("div");
          let firstName = document.createElement("h2");
          let certification = document.createElement("h3");
          let biography = document.createElement("p");
          let email = document.createElement("p");
          let image = document.createElement("img");


          firstName.textContent = guides.firstName;
          certification.textContent = guides.certification;
          biography.textContent = guides.biography;
          email.textContent = guides.email;
          

          image.setAttribute('src', "images/" + guides.image);
          image.setAttribute('alt',  "Photo of " + guides.firstName);

          div.appendChild(firstName);
          div.appendChild(certification);
          div.appendChild(biography);
          div.appendChild(email);
          card.appendChild(div);
          div2.appendChild(image);
          card.appendChild(div2);
            

           document.querySelector("div.cards").appendChild(card);
          }}
  );
    });