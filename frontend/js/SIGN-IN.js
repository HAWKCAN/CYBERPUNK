const params = new URLSearchParams(window.location.search);
const usernameFromUrl = params.get("user");

console.log("USERNAME FROM URL:", usernameFromUrl);

async function pilih(side) {
  const username = usernameFromUrl;
  const API =
    "http://192.168.1.26/projekweb/CYBERPUNK/backend/api/auth/pilih-side.php";

  if (!username) {
    alert("Username tidak ditemukan. Silakan register ulang.");

    return;
  }

  try {
    console.log("KIRIM:", JSON.stringify({ username, side }));

    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, side }),
    });

    const data = await res.json();
    console.log("RESPON API:", data);

    if (data.status === "success") {
      localStorage.setItem("username", username);
      localStorage.setItem("side", side);

      if (side === "police") {
        window.location.href = "./Police.html";
      } else {
        window.location.href = "./Street.html";
      }
    } else {
      alert(data.msg);
    }
  } catch (err) {
    console.error("Error:", err);
    alert("Gagal menghubungi server.");
  }
}

window.pilih = pilih;

document.addEventListener("DOMContentLoaded", function () {
  const leftDiv = document.querySelector(".left");
  const rightDiv = document.querySelector(".right");
  const leftOverlay = document.querySelector(".left-overlay");
  const rightOverlay = document.querySelector(".right-overlay");
  const leftBar = document.querySelector(".left-bar");
  const rightBar = document.querySelector(".right-bar");
  const leftH1 = leftBar.querySelector("h1");
  const rightH1 = rightBar.querySelector("h1");

  function resetBar() {
    leftBar.style.backgroundColor = "white";
    rightBar.style.backgroundColor = "black";
    leftH1.style.color = "black";
    rightH1.style.color = "white";
    rightBar.style.opacity = "1";
    leftBar.style.opacity = "1";
    leftH1.style.display = "block";
    rightH1.style.display = "block";
  }

  resetBar();
  leftDiv.addEventListener("mouseover", function () {
    leftDiv.style.transform = "scale(1.05) translateX(40px)";
    rightDiv.style.transform = "scale(1.05) translateX(40px)";

    leftOverlay.style.opacity = "0";
    rightOverlay.style.opacity = "1";

    leftBar.style.backgroundColor = "black";
    rightBar.style.backgroundColor = "white";
    rightBar.style.opacity = "0.5";

    leftH1.style.color = "white";
    rightH1.style.color = "black";
    rightH1.style.display = "none";
  });

  leftDiv.addEventListener("mouseleave", function () {
    leftDiv.style.transform = "scale(1.05) translateX(0px)";
    rightDiv.style.transform = "scale(1.05) translateX(0px)";

    leftOverlay.style.opacity = "0";
    rightOverlay.style.opacity = "0";

    resetBar();
  });
  rightDiv.addEventListener("mouseover", function () {
    rightDiv.style.transform = "scale(1.05) translateX(-40px)";
    leftDiv.style.transform = "scale(1.05) translateX(-40px)";

    leftOverlay.style.opacity = "1";
    rightOverlay.style.opacity = "0";

    // right active → right black, left white
    leftBar.style.backgroundColor = "white";
    rightBar.style.backgroundColor = "black";
    leftBar.style.opacity = "0.5";

    leftH1.style.color = "black";
    rightH1.style.color = "white";
    leftH1.style.display = "none";
  });

  rightDiv.addEventListener("mouseleave", function () {
    rightDiv.style.transform = "scale(1.05) translateX(0px)";
    leftDiv.style.transform = "scale(1.05) translateX(0px)";

    leftOverlay.style.opacity = "0";
    rightOverlay.style.opacity = "0";

    resetBar();
  });
});
