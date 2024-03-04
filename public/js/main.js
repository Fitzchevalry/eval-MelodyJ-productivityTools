import fetchPokemon from "./fetchPokemon.js";
import fetchPokemonAbilities from "./fetchAbility.js";
/**
 * Attente du chargement complet du DOM avant initialisation des fonctions
 */
window.addEventListener("DOMContentLoaded", () => {
  const pokeP = document.getElementById("pokeInfo");
  const pokeDiv = document.getElementById("pokemon-info");
  const pokeA = document.getElementById("pokeAbility");

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
