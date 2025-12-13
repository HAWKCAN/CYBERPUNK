const cars = [
  {
    bg: "../public/cop_chevy.png",
    stats: { nama: "CHEVROLET", detail: "Colorando ZR2 '17",power: 10, speed: 6.7, accel: 7.5, handling: 80 },
  },
  {
    bg: "../public/cop_corvette.png",
    stats: { nama: "CHEVROLET", detail: "Corvette Grand Sport '17",power: 8.7,speed: 10, accel: 9.8, handling: 85 },
  },
  {
    bg: "../public/cop_crown.png",
    stats: { nama: "FORD", detail: "Crown Victoria",power: 4.5,speed: 5.2, accel: 4.2, handling: 60 },
  },
  {
    bg: "../public/cop_dodge.png",
    stats: { nama: "DODGE", detail: "Challenger SRT8 '14",power: 9.2,speed: 8.2, accel: 8.0, handling: 65 },
  },
  {
    bg: "../public/cop_g500.png",
    stats: { nama: "Mercedes", detail: "AMG G 63 '17",power: 8.7,speed: 6.2, accel: 7.4, handling: 75 },
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
