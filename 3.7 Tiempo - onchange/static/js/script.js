// Mostrar alerta al hacer clic en una ciudad
function cityAlert(element) {
  alert("Loading weather report for " + element.textContent + "...");
}

// Ocultar el banner de cookies y guardar cookie
function hideCookie() {
  document.getElementById("cookie").style.display = "none";
  setCookie("acceptedCookies", "true", 30); // Guardar cookie por 30 días
}

// Convertir temperaturas entre Celsius y Fahrenheit
function convertTemps(select) {
  const toFahrenheit = select.value === "f";
  const highs = document.querySelectorAll(".high");
  const lows = document.querySelectorAll(".low");

  for (let temp of highs) {
    let value = parseInt(temp.textContent);
    temp.textContent = toFahrenheit
      ? Math.round((value * 9) / 5 + 32)
      : Math.round(((value - 32) * 5) / 9);
  }

  for (let temp of lows) {
    let value = parseInt(temp.textContent);
    temp.textContent = toFahrenheit
      ? Math.round((value * 9) / 5 + 32)
      : Math.round(((value - 32) * 5) / 9);
  }
}

// Guardar cookie
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Leer cookie
function getCookie(name) {
  const cname = name + "=";
  const decoded = decodeURIComponent(document.cookie);
  const cookies = decoded.split(';');

  for (let i = 0; i < cookies.length; i++) {
    let c = cookies[i].trim();
    if (c.indexOf(cname) === 0) {
      return c.substring(cname.length, c.length);
    }
  }

  return "";
}

// Al cargar la página: verificar si ya aceptó cookies
window.onload = function () {
  if (getCookie("acceptedCookies")) {
    document.getElementById("cookie").style.display = "none";
  }
};
