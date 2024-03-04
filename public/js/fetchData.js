/**
 * Attente du chargement complet du DOM avant initialisation des fonctions
 */
window.addEventListener("DOMContentLoaded", () => {
  const pokeP = document.getElementById("pokeInfo");
  const pokeDiv = document.getElementById("pokemon-info");
  const pokeAbilityBtn = document.getElementById("ability");
  const pokeA = document.getElementById("pokeAbility");

  /**
   * Récupère des informations aléatoires à partir du PokeAPI
   * @async
   */
  const fetchPokemon = async () => {
    const pokedexNum = Math.floor(Math.random() * 897);
    let foundPokemon = "";
    let jsonPokemon = "";
    const pokeInfo = {};

    try {
      foundPokemon = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokedexNum}`,
        { method: "GET", headers: { "Content-Type": "application/json" } }
      );
    } catch (error) {
      console.error(error.message);
    }

    if (foundPokemon) {
      try {
        jsonPokemon = await foundPokemon.json();
        pokeInfo.name = `${String(jsonPokemon.species.name)
          .slice(0, 1)
          .toUpperCase()}${String(jsonPokemon.species.name)
          .slice(1, jsonPokemon.species.name.length)
          .toLowerCase()}`;
      } catch (error) {
        console.error(error.message);
      }
    } else {
      jsonPokemon = "No Pokémon found...";
    }

    if (pokeP.innerText !== "") {
      pokeP.innerText = "";
    }
    pokeP.innerText = `Your Pokémon is ${pokeInfo.name}.`;
    pokeAbilityBtn.removeAttribute("disabled");
  };

  /**
   * Récupère une capacité Pokémon aléatoire de la PokeAPI.
   * @async
   */
  const fetchPokemonAbilities = async () => {
    const pokedexNum = Math.floor(Math.random() * 266);
    let foundAbilities = "";
    const pokeAbility = document.getElementById("pokeAbility");
    let jsonAbilities = {};
    let abilityToDisplay = "";

    try {
      foundAbilities = await fetch(
        `https://pokeapi.co/api/v2/ability/${pokedexNum}`,
        { method: "GET", headers: { "Content-Type": "application/json" } }
      );
    } catch (error) {
      console.error(error.message);
    }

    if (foundAbilities) {
      try {
        jsonAbilities = await foundAbilities.json();
        if (jsonAbilities.name !== "" && undefined !== jsonAbilities.name) {
          abilityToDisplay = `${String(jsonAbilities.name)
            .slice(0, 1)
            .toUpperCase()}${String(jsonAbilities.name)
            .slice(1, jsonAbilities.name.length)
            .toLowerCase()}`;
        } else {
          abilityToDisplay = "Tackle";
        }
      } catch (error) {
        console.error(error.message);
      }
    } else {
      jsonAbilities = "No ability found...";
    }

    if (pokeAbility.innerText !== "") {
      pokeAbility.innerText = "";
    }

    pokeAbility.innerText = `It now knows the move ${abilityToDisplay}!`;
  };

  /**
   * Configure l'écouteur d'événement pour le bouton Pokémon afin d'invoquer la récupération des données Pokémon.
   */
  const invoquePokemon = () => {
    const pokeBtn = document.getElementById("pokemon");
    pokeBtn.addEventListener("click", fetchPokemon);
    pokeDiv.appendChild(pokeP);
  };

  /**
   * Configure l'écouteur d'événement pour le bouton de capacité Pokémon afin d'invoquer la récupération des capacités Pokémon.
   */
  const pokemonAbility = () => {
    const pokeAbilityBtn = document.getElementById("ability");
    pokeAbilityBtn.addEventListener("click", fetchPokemonAbilities);
    pokeDiv.appendChild(pokeA);
  };

  /**
   * Initialise toutes les fonctionnalités une fois que le contenu du DOM est entièrement chargé.
   */
  (function startAll() {
    invoquePokemon();
    pokemonAbility();
  })();
});
