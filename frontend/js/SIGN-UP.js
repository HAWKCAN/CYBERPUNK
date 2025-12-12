async function register() {
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;
  const konfirmasiPassword = document.querySelector(
    "#konfirmasi-password"
  ).value;
  const API =
    "http://192.168.1.26/projekweb/CYBERPUNK/backend/api/auth/register.php";

  if (password !== konfirmasiPassword) {
    alert("Konfirmasi password tidak cocok!");
    return;
  }

  const data = { username, password };

  try {
    const res = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    console.log(result);

    if (result.status === "success") {
      alert("Registrasi berhasil! Ayo pilih side.");

      const redirectUrl =
        "http://192.168.1.3/projekweb/CYBERPUNK/frontend/html/pilih-side.html" +
        "?user=" +
        encodeURIComponent(username);

      window.location.href = redirectUrl;
      localStorage.setItem("tempUser", username);
      window.location.href =
        "http://192.168.1.26/projekweb/CYBERPUNK/frontend/html/pilih-side.html";
    } else {
      alert(result.msg);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Terjadi kesalahan saat register");
  }
}
