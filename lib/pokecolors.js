document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('pokemon');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - 60;

  let image = new Image();
  let id = 25;
  image.crossOrigin = 'anonymous';
  image.src = `http://res.cloudinary.com/rlee0525/image/upload/v1487296291/25_rs5sdm.svg`;
  // ctx.drawImage(image, 100, 100);
  image.onload = function() {
    ctx.drawImage(image, 100, 100);
    image.style.display = 'none';
  };
  // var color = document.getElementById('color');
  function pick(event) {
    var x = event.layerX;
    var y = event.layerY;
    var pixel = ctx.getImageData(x, y, 1, 1);
    var data = pixel.data;
    var rgba = 'rgba(' + data[0] + ', ' + data[1] +
               ', ' + data[2] + ', ' + (data[3] / 255) + ')';
    image.style.background =  rgba;
    image.textContent = rgba;
    console.log(rgba);
  }
  canvas.addEventListener('mouseover', pick);
});

const resizeCanvas = () => {
  const canvas = document.getElementById('pokemon');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - 60;
};

document.addEventListener('resize', () => resizeCanvas());
