// script.js
function converter() {
  const temp = parseFloat(document.getElementById("inputTemp").value);
  const from = document.getElementById("fromUnit").value;
  const to = document.getElementById("toUnit").value;
  let resultado;

  if (isNaN(temp)) {
    resultado = "Por favor, insira um número válido.";
  } else {
    if (from === to) {
      resultado = `${temp} ${to}`;
    } else {
      switch (from + "-" + to) {
        case "celsius-fahrenheit":
          resultado = `${(temp * 9/5 + 32).toFixed(2)} °F`;
          break;
        case "celsius-kelvin":
          resultado = `${(temp + 273.15).toFixed(2)} K`;
          break;
        case "fahrenheit-celsius":
          resultado = `${((temp - 32) * 5/9).toFixed(2)} °C`;
          break;
        case "fahrenheit-kelvin":
          resultado = `${((temp - 32) * 5/9 + 273.15).toFixed(2)} K`;
          break;
        case "kelvin-celsius":
          resultado = `${(temp - 273.15).toFixed(2)} °C`;
          break;
        case "kelvin-fahrenheit":
          resultado = `${((temp - 273.15) * 9/5 + 32).toFixed(2)} °F`;
          break;
        default:
          resultado = "Conversão não suportada.";
      }
    }
  }

  document.getElementById("resultado").textContent = resultado;
}
