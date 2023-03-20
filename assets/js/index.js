// Card
const precio = 400000
const precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio.toLocaleString();

const cantidadInput = document.querySelector("#cant")
const colorInput = document.querySelector("#col")

// Total
const precioFinal = document.querySelector(".valor-total")
const cantidadFinal = document.querySelector(".cantidad-total")
const colorFinal = document.querySelector(".color div")


let total = 0


function calcularTotal() {

    const cantidad = cantidadInput.value
    const color = colorInput.value

    precioFinal.innerHTML = ( +cantidad * precio).toLocaleString();
    cantidadFinal.innerHTML = cantidad
    colorFinal.style.backgroundColor = color
}