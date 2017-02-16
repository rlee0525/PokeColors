document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('pokemon');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - 60;
});

const resizeCanvas = () => {
  const canvas = document.getElementById('pokemon');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight - 60;
};

document.addEventListener('resize', () => resizeCanvas());
