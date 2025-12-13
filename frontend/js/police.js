const cars = [
  {
    bg: "../public/Polestar1.png",
    stats: { nama: "POLESTAR", detail: "1 Hero Edition '20",power: 9.7, speed: 10, accel: 7.5, handling: 80 },
  },
  {
    bg: "../public/Mustang1.png",
    stats: { nama: "FORD", detail: "Mustang GT '15",power: 8.7,speed: 7.7, accel: 7.1, handling: 85 },
  },
  {
    bg: "../public/Aventador.png",
    stats: { nama: "LAMBORGINI", detail: "Aventador",power: 7.6,speed: 8.2, accel: 8.0, handling: 75 },
  },
  {
    bg: "../public/Coutach.png",
    stats: { nama: "LAMBORGINI", detail: "Countach",power: 7.6,speed: 8.2, accel: 8.0, handling: 75 },
  },
  {
    bg: "../public/NissanR34.png",
    stats: { nama: "Nissan", detail: "GTR R34 Nismo",power: 7.6,speed: 8.2, accel: 8.0, handling: 75 },
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
        <h3>${s.nama}</h3>
        <p>${s.detail}</p>
        <p>POWER: ${s.power}</p>
        <p>HIGH SPEED: ${s.speed}</p>
        <p>ACCELERATION: ${s.accel}</p>
        <p>HANDLING: ${s.handling}</p>
    `;
}

// Default: Polestar 1 ketika halaman pertama kali dibuka
window.onload = () => selectCar(0);
