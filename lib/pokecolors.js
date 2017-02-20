const Pokemon = require('./pokemons');

document.addEventListener('DOMContentLoaded', () => {
  const resizeCanvas = () => {
    const canvas = document.getElementById('pokemon');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 50;

    const pokemon = new Pokemon(canvas, ctx);

    pokemon.grabData();
  };

  window.addEventListener('resize', resizeCanvas, false);
  resizeCanvas();
});
