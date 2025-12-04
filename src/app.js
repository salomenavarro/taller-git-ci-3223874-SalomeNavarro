function suma(a, b) {
  return a + b;
}

function agregarItem(texto) {
  if (!texto?.toString().trim()) return false;
  const lista = globalThis.document?.getElementById?.("lista");
  // Cuando se abra en navegador, el DOM existe; acá añadimos la lógica normal:
  if (lista) {
    const li = document.createElement("li");
    li.textContent = texto.trim();
    lista.appendChild(li);
  }
  return true;
}

// Solo para Node (tests)
if (typeof module !== "undefined") {
  module.exports = { suma, agregarItem };
}

console.log("App lista");
