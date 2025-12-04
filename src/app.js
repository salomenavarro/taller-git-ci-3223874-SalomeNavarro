function agregarItem(texto) {
  const value = texto?.toString().trim();

  // Validación UI
  if (!value) {
    if (typeof alert !== "undefined") {
      alert("Texto vacío");
    }
    return false;
  }

  // DOM seguro
  const lista = globalThis.document?.getElementById?.("lista");
  if (lista) {
    const li = document.createElement("li");
    li.textContent = value;
    lista.appendChild(li);
  }

  return true;
}
