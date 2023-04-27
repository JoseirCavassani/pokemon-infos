// start test
document.addEventListener("onclick", getName);

function getName() {
  const pokemonName = document.getElementById("pokeName").value;
  console.log("NOME DO POKEMON => " + pokemonName);
  pokeapi(pokemonName);
}

//function
async function pokeapi(pokemonName) {
  const base_url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  await fetch(`${base_url}`)
    .then((respota) => {
      //   console.log("resp " + respota);
      return respota.json();
    })
    .then((corpo) => {
      console.log(corpo);

      pokeImg = corpo.sprites.other[`official-artwork`].front_default;
      pokeImg_shiny = corpo.sprites.other[`official-artwork`].front_shiny;

      console.log("TEST " + corpo.types.length);

      document.getElementById("poke-img").setAttribute("src", `${pokeImg}`);
      document
        .getElementById("poke-img-shiny")
        .setAttribute("src", `${pokeImg_shiny}`);
      //
      pokeNameResult = document.getElementById("pokeNameResult").innerHTML =
        corpo.name;
      //
      pokeNameResult = document.getElementById("type-one").innerHTML =
        corpo.types[0].type.name;
      // ############
      if (corpo.types.length < 2) {
        pokeNameResult = document.getElementById("type-two").innerHTML = "";
      } else {
        pokeNameResult = document.getElementById("type-two").innerHTML =
          corpo.types[1].type.name;
      }
      // ############

      //   pokeNameResult = document.getElementById("type-plus").innerHTML =
      //     corpo.types[2].type.name;
    })
    .catch(function (error) {
      console.log("error => " + error);
    });
}
