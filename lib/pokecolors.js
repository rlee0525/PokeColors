const Pokemon = require('./pokemons');

document.addEventListener('DOMContentLoaded', () => {
  const resizeCanvas = () => {
    const canvas = document.getElementById('pokemon');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 50;

    const pokemon = new Pokemon(canvas, ctx);

    pokemon.grabData();
    $('#search-box-input').keydown(
      e => {
        if (e.keyCode === 13) {
          e.preventDefault();
          pokemon.searchPokemon();
        }
      }
    );

    $('#random-pokemon').click(
      e => pokemon.randomPokemon()
    );

    let modal = document.getElementById('myModal');
    let span = document.getElementsByClassName("close")[0];

    $('#instruction').click(
      e => {
        modal.style.display = "block";
      }
    );

    span.onclick = () => {
      modal.style.display = "none";
    };

    window.onclick = e => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    };
  };

  window.addEventListener('resize', resizeCanvas, false);
  resizeCanvas();
});
