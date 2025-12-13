const cars = [
  {
    bg: "../public/Polestar1.png",
    stats: { speed: 200, accel: 7.5, handling: 80 },
  },
  {
    bg: "../public/Mustang1.png",
    stats: { speed: 210, accel: 7.1, handling: 85 },
  },
  {
    bg: "../public/Polestar3.png",
    stats: { speed: 230, accel: 8.0, handling: 75 },
  },
];

function selectCar(i) {
  const bg = document.getElementById("bg");
  bg.style.opacity = 0;

  setTimeout(() => {
    bg.style.backgroundImage = `url(${cars[i].bg})`;
    bg.style.opacity = 1;
  }, 200);

  const s = cars[i].stats;
  document.getElementById("stats").innerHTML = `
        <p>Speed: ${s.speed}</p>
        <p>Acceleration: ${s.accel}</p>
        <p>Handling: ${s.handling}</p>
    `;
}

// Default: Polestar 1 ketika halaman pertama kali dibuka
window.onload = () => selectCar(0);
