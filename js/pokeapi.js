// start test

//
document.addEventListener("onclick", getName);

pokemonName = "pichu";

function getName() {
  pokemonName = document.getElementById("pokeName").value.toLowerCase();
  console.log("NOME DO POKEMON => " + pokemonName);
  pokeapi(pokemonName);
}

//function
async function pokeapi(pokemonName) {
  const base_url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  await fetch(`${base_url}`)
    .then((respota) => {
      return respota.json();
    })
    .then((corpo) => {
      console.log(corpo);
      // get pokemon image
      pokeImg = corpo.sprites.other[`official-artwork`].front_default;
      pokeImg_shiny = corpo.sprites.other[`official-artwork`].front_shiny;
      // add pokemon image
      document.getElementById("poke-img").setAttribute("src", `${pokeImg}`);
      document
        .getElementById("poke-img-shiny")
        .setAttribute("src", `${pokeImg_shiny}`);
      // add pokemon name
      pokeNameResult = document.getElementById("pokeNameResult").innerHTML =
        corpo.name;
      //add pokemon type
      pokeNameResult = document.getElementById("type-one").innerHTML =
        corpo.types[0].type.name;

      if (corpo.types.length < 2) {
        pokeNameResult = document.getElementById("type-two").innerHTML = "";
      } else {
        pokeNameResult = document.getElementById("type-two").innerHTML =
          corpo.types[1].type.name;
      }
      // add pokemon id
      idPokedex = document.getElementById("idPokedex").innerHTML =
        "#" + corpo.id;
    })
    .catch(function (error) {
      console.log("error => " + error);
    });
}
// ######
// GET A RANDOM POKEMON
async function randomPokemon() {
  let pokemonId = "";
  //get a random number between 1 and 1008(numbers of pokemon)
  pokemonId = Math.floor(Math.random() * 1008) + 1;

  const base_url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

  await fetch(`${base_url}`)
    .then((respota) => {
      return respota.json();
    })
    .then((corpo) => {
      // get pokemon name
      pokemonName = corpo.name;
      // # START NAME
      pokeapi(pokemonName);
    });
}
randomPokemon();
