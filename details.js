document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);

  const url = params.get("url");
  // fetch = henter noget fra nettet i det her tilfælde - og det der er i "" er requesten
  fetch(url)
    // .then 1 = modtager et response -et variabelnavn-
    // - det blir så lavet om til et JSON document
    .then((response) => response.json())
    // .then 2 = opretter en variabel der hedder -data-
    .then((data) => {
      console.log(data);
    //   data.results.forEach((result) => {
    //     document.querySelector("body").innerHTML += 
    //     `
    // <article>
    // <figure>
    // <img src="img/${url}">
    // </figure>
    // <section>
    //     <p>${url}</p>
    //     <p>${url}</p>
    //     <p>${url}</p>
    //     <p>${url}</p>
    //     </section>
    // </article>
    // `;
      });
    });

