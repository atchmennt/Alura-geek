import './style.css'
import { setupProducts } from './products.js'


const sumbitBtn = document.querySelector('[type="submit"]')

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // Evita que el formulario recargue la página

  // Serializar el formulario con FormData
  const formData = new FormData(form);
  const newProduct = {
    nombre: formData.get("name"), // Usa el atributo `name` del input
    precio: parseFloat(formData.get("price")),
    img: formData.get("img"),
  };
   // Validar campos
   if (!newProduct.nombre || isNaN(newProduct.precio) || !newProduct.img) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/productos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    if (!response.ok) throw new Error("Error al agregar el producto");

    const addedProduct = await response.json();
    alert("Producto agregado exitosamente!");
    form.reset();
    setupProducts()
} catch (error) {
  console.error("Error:", error.message);
  alert("Hubo un problema al agregar el producto.");
  }
})


document.addEventListener("DOMContentLoaded", async () => {
  setupProducts()
});


