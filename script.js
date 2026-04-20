// Inicializar dataLayer
window.dataLayer = window.dataLayer || [];

// Evento CTA
function eventoCTA(){
  dataLayer.push({
    event: "click_cta"
  });
}

// Evento scroll 50%
window.addEventListener("scroll", () => {
  if (window.scrollY > document.body.scrollHeight * 0.5) {
    dataLayer.push({ event: "scroll_50" });
  }
});

// Evento formulario
function eventoFormulario(){
  dataLayer.push({
    event: "form_submit"
  });
}

// Botón flotante (cumple script extra)
const btn = document.createElement("button");
btn.innerText = "Ayuda";
btn.className = "cta-a";
btn.style.position = "fixed";
btn.style.bottom = "20px";
btn.style.right = "20px";
btn.onclick = () => alert("¿Necesitas ayuda?");
document.body.appendChild(btn);