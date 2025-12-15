const cars = [
  {
    bg: "../gambar/cop_chevy.png",
    baseStats: { power: 10, speed: 6.7, accel: 7.5, handling: 80 },
    stats: {},
    upgrade: { engine: "stock", tires: "stock" },
    info: { nama: "CHEVROLET", detail: "Colorado ZR2 '17" }
  },
  {
    bg: "../gambar/cop_corvette.png",
    baseStats: { power: 8.7, speed: 10, accel: 9.8, handling: 85 },
    stats: {},
    upgrade: { engine: "stock", tires: "stock" },
    info: { nama: "CHEVROLET", detail: "Corvette Grand Sport '17" }
  },
  {
    bg: "../gambar/cop_crown.png",
    baseStats: { power: 4.5, speed: 5.2, accel: 4.2, handling: 60 },
    stats: {},
    upgrade: { engine: "stock", tires: "stock" },
    info: { nama: "FORD", detail: "Crown Victoria" }
  },
  {
    bg: "../gambar/cop_dodge.png",
    baseStats: { power: 9.2, speed: 8.2, accel: 8.0, handling: 65 },
    stats: {},
    upgrade: { engine: "stock", tires: "stock" },
    info: { nama: "DODGE", detail: "Challenger SRT8 '14" }
  },
  {
    bg: "../gambar/cop_g500.png",
    baseStats: { power: 8.7, speed: 6.2, accel: 7.4, handling: 75 },
    stats: {},
    upgrade: { engine: "stock", tires: "stock" },
    info: { nama: "Mercedes", detail: "AMG G 63 '17" }
  }
];

const upgradeBonus = {
  stock: 0,
  sport: 5,
  pro: 10,
  elite: 18,
  ultimate: 30
};

let currentCarIndex = 0;
let selectedCar = null;
let mode = "select"; // select | chosen | upgrade

const carSelector = document.querySelector(".car-selector");
const btnSelect = document.getElementById("btnSelect");
const afterSelect = document.querySelector(".after-select");
const btnChange = document.getElementById("btnChange");
const btnUpgrade = document.getElementById("btnUpgrade");
const upgradePanel = document.getElementById("upgradePanel");

/* ================= CORE ================= */

function applyUpgrades(car) {
  const engineBonus = upgradeBonus[car.upgrade.engine];
  const tiresBonus = upgradeBonus[car.upgrade.tires];

  car.stats = {
    power: car.baseStats.power + engineBonus,
    speed: car.baseStats.speed + engineBonus * 0.3,
    accel: car.baseStats.accel + tiresBonus * 0.4,
    handling: car.baseStats.handling + tiresBonus
  };
}

function renderCar(i) {
  const car = cars[i];
  applyUpgrades(car);

  const bg = document.getElementById("bg");
  bg.style.backgroundImage = `url(${car.bg})`;

  const s = car.stats;
  const info = car.info;

  document.getElementById("stats").innerHTML = `
    <h2>${info.nama}</h2>
    <p>${info.detail}</p>

    <div class="stat">
      <span>POWER</span>
      <div class="bar"><div style="width:${s.power * 10}%"></div></div>
    </div>

    <div class="stat">
      <span>HIGH SPEED</span>
      <div class="bar"><div style="width:${s.speed * 10}%"></div></div>
    </div>

    <div class="stat">
      <span>ACCELERATION</span>
      <div class="bar"><div style="width:${s.accel * 10}%"></div></div>
    </div>

    <div class="stat">
      <span>HANDLING</span>
      <div class="bar"><div style="width:${s.handling}%"></div></div>
    </div>
  `;
}

function selectCar(i) {
  if (mode === "chosen") return;
  currentCarIndex = i;
  renderCar(i);
}

/* ================= BUTTON ================= */

btnSelect.onclick = () => {
  selectedCar = currentCarIndex;
  mode = "chosen";

  carSelector.classList.add("hidden");
  btnSelect.classList.add("hidden");
  afterSelect.classList.remove("hidden");
};

btnChange.onclick = () => {
  mode = "select";
  selectedCar = null;

  carSelector.classList.remove("hidden");
  btnSelect.classList.remove("hidden");
  afterSelect.classList.add("hidden");
  upgradePanel.classList.add("hidden");
};

btnUpgrade.onclick = () => {
  mode = "upgrade";
  upgradePanel.classList.remove("hidden");
};

/* ================= UPGRADE ================= */

document.querySelectorAll(".upgrade-item").forEach(item => {
  const type = item.querySelector("span").innerText.toLowerCase();

  item.querySelectorAll("button").forEach(btn => {
    btn.onclick = () => {
      if (selectedCar === null) return;

      const tier = btn.dataset.tier;
      cars[selectedCar].upgrade[type] = tier;

      renderCar(selectedCar);
      saveUpgrade(selectedCar);
    };
  });
});

/* ================= SAVE / LOAD ================= */

function saveUpgrade(carIndex) {
  const upgrade = cars[carIndex].upgrade;

  // SIMPAN KE BACKEND
  fetch("../backend/api/auth/upgrade.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      car_id: carIndex + 1, // asumsi id mobil di DB mulai dari 1
      engine: upgrade.engine,
      tires: upgrade.tires
    })
  });

  // OPTIONAL: tetap simpan lokal buat preview cepat
  const data = JSON.parse(localStorage.getItem("garage") || "{}");
  data[carIndex] = upgrade;
  localStorage.setItem("garage", JSON.stringify(data));
}


function loadUpgrade() {
  const data = JSON.parse(localStorage.getItem("garage") || "{}");
  Object.keys(data).forEach(i => {
    cars[i].upgrade = data[i];
  });
}

/* ================= INIT ================= */

window.onload = () => {
  loadUpgrade();
  renderCar(0);
};
