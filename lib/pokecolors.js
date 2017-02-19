const Pokemon = require('./pokemons');

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('pokemon');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - 60;

  const pokemon = new Pokemon(canvas, ctx);

  window.onload = function() {
    pokemon.loadPokemon();
  };
});

const resizeCanvas = () => {
  const canvas = document.getElementById('pokemon');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - 60;
};

document.addEventListener('resize', () => resizeCanvas());
