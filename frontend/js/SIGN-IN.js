async function login() {
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  const API =
    "/backend/api/auth/login.php";

  if (!username || !password) {
    alert("Username dan password wajib diisi");
    return;
  }

  try {
    const res = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const result = await res.json();
    console.log(result);

    if (result.status === "success") {
      alert("Login berhasil");

      // simpan info login
      localStorage.setItem("user", JSON.stringify(result));

      // lanjut ke dashboard / pilih side
      window.location.href =
        "/frontend/html/pilih-side.html";
    } else {
      alert(result.msg);
    }
  } catch (error) {
    console.error(error);
    alert("Gagal terhubung ke server");
  }
}
