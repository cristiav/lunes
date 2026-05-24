// ==========================
// INICIALIZAR DATALAYER
// ==========================

window.dataLayer = window.dataLayer || [];

// ==========================
// EVENTO CTA
// ==========================

function eventoCTA(){

  dataLayer.push({
    event: "click_cta"
  });

}

// ==========================
// EVENTO FORMULARIO
// ==========================

function eventoFormulario(){

  dataLayer.push({
    event: "form_submit"
  });

  alert("Formulario enviado correctamente");

}

// ==========================
// EVENTO SCROLL 50%
// ==========================

let scrollRegistrado = false;

window.addEventListener("scroll", () => {

  if(
    !scrollRegistrado &&
    window.scrollY > document.body.scrollHeight * 0.5
  ){

    dataLayer.push({
      event: "scroll_50"
    });

    scrollRegistrado = true;

  }

});

// ==========================
// BOTÓN AYUDA
// ==========================

const btn = document.createElement("button");

btn.innerText = "Ayuda";

btn.className = "cta-a";

btn.style.position = "fixed";
btn.style.bottom = "20px";
btn.style.right = "20px";
btn.style.zIndex = "999";

btn.onclick = () => {

  alert("¿Necesitas ayuda?");

};

document.body.appendChild(btn);

// ==========================
// CARRITO
// ==========================

let carrito = JSON.parse(
  localStorage.getItem("carrito")
) || [];

actualizarCarrito();

// ==========================
// AGREGAR PRODUCTO
// ==========================

function agregarProducto(nombre, precio){

  carrito.push({
    nombre,
    precio
  });

  localStorage.setItem(
    "carrito",
    JSON.stringify(carrito)
  );

  actualizarCarrito();

  alert(nombre + " agregado al carrito");

}

// ==========================
// ACTUALIZAR CARRITO
// ==========================

function actualizarCarrito(){

  const carritoHTML =
    document.getElementById("texto-carrito");

  const totalHTML =
    document.getElementById("precio-total");

  const contador =
    document.getElementById("contador-carrito");

  const miniTotal =
    document.getElementById("mini-total");

  // VALIDAR EXISTENCIA
  if(
    !carritoHTML ||
    !totalHTML ||
    !contador ||
    !miniTotal
  ){
    return;
  }

  carritoHTML.innerHTML = "";

  let total = 0;

  carrito.forEach((producto, index) => {

    carritoHTML.innerHTML += `

      <div class="producto-carrito">

        <p>
          ✔ ${producto.nombre}
        </p>

        <p>
          $${producto.precio.toLocaleString()} COP
        </p>

        <button
          onclick="eliminarProducto(${index})"
          class="btn-eliminar">

          X

        </button>

      </div>

    `;

    total += producto.precio;

  });

  totalHTML.innerHTML =
    "$" + total.toLocaleString() + " COP";

  contador.innerHTML =
    carrito.length;

  miniTotal.innerHTML =
    "$" + total.toLocaleString() + " COP";

}

// ==========================
// ELIMINAR PRODUCTO
// ==========================

function eliminarProducto(index){

  carrito.splice(index, 1);

  localStorage.setItem(
    "carrito",
    JSON.stringify(carrito)
  );

  actualizarCarrito();

}

// ==========================
// VACIAR CARRITO
// ==========================

function vaciarCarrito(){

  carrito = [];

  localStorage.removeItem("carrito");

  actualizarCarrito();

}