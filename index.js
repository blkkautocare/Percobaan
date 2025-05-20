document.getElementById("waForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  const nomorWhatsApp = "6285156689081"; // Ganti dengan nomor WA kamu
  const url = `https://wa.me/${nomorWhatsApp}?text=Halo%2C%20saya%20${encodeURIComponent(name)}.%0A${encodeURIComponent(message)}`;

  window.open(url, "_blank");
});
