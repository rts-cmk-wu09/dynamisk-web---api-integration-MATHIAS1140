document.addEventListener("DOMContentLoaded", function () {
  // fetch = henter noget fra nettet i det her tilfælde - og det der er i "" er requesten
  fetch("https://swapi.dev/api/people/")
  // .then 1 = modtager et response -et variabelnavn-
  // - det blir så lavet om til et JSON document
  .then((response) => response.json())
  // .then 2 = opretter en variabel der hedder -data-
  .then((data) => {
    let ul = document.querySelector("#destinations");

    data.results.forEach(karakter => {
      const li = document.createElement("li");
      ul.append(li);
      li.innerHTML = 
      `
        <a href="details.html?url=${karakter.url}">
      ${karakter.name}
      </a>
      `
    });
  })
});

