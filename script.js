import {pokemonArray} from "./data/pokemon.js";

const cardContainer = document.querySelector(".card-container");

const filterInput = document.querySelector("#filter-input");

const createCardHTML = (pokemon) => {
  return `
    <div class="card">
        <div class="card__content">
            <img src=${pokemon.sprite} class="card__img" />
            <div class="card__heading">${pokemon.name[0].toUpperCase()}${pokemon.name.substring(1)}</div>
           
            <div class="card__text">${pokemon.name[0].toUpperCase()}${pokemon.name.substring(1)} (#${pokemon.id}) is a ${pokemon.types[0]} & ${pokemon.types[1]} type pokemon.</div>
        </div>
    </div>   
    `;
};

const renderCards = (array) => {
  array.forEach((item) => (cardContainer.innerHTML += createCardHTML(item)));
};

// FILTER EVENT
const handleFilterInput = (e) => {
  const searchTerm = e.target.value.toLowerCase();

  const filteredItems = pokemonArray.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(searchTerm);
  });

  renderCards(filteredItems);
};

window.addEventListener("load", () => {
  renderCards(pokemonArray);
});

filterInput.addEventListener("input", handleFilterInput);
