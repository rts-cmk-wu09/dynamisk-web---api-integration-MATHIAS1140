document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);

  const url = params.get("url");
  // fetch = henter noget fra nettet i det her tilfælde - og det der er i "" er requesten
  fetch(url)
    // .then 1 = modtager et response -et variabelnavn-
    // - det blir så lavet om til et JSON document
    .then((response) => response.json())
    // .then 2 = opretter en variabel der hedder -data-
    .then((karakterdata) => {   
      fetch(karakterdata.homeworld)
        .then((response) => response.json())
        .then((homeWorldData) => {
          document.querySelector("body").innerHTML += `
          <article class="article-details">
        
          <h1>${karakterdata.name}</h1>
          <section class="section-details">
          <h3>Height</h3>
          <p>${karakterdata.height}</p>
          <h3>Mass</h3>
          <p>${karakterdata.mass}</p>
          <h3>Hair color</h3>
          <p>${karakterdata.hair_color}</p>
          <h3>Skin color</h3>
          <p>${karakterdata.skin_color}</p>
          <h3>Eye color</h3>
          <p>${karakterdata.eye_color}</p>
          <h3>Birth year</h3>
          <p>${karakterdata.birth_year}</p>
          <h3>Gender</h3>
          <p>${karakterdata.gender}</p>
          <h3>Homeworld</h3>
          <p>${homeWorldData.name}</p>
          </section>
          </article>
          `;
        });
    });
});
