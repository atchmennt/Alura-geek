export async function setupProducts(element) {
  const productosContainer = document.querySelector(".row.row-cols-1.row-cols-md-3.g-4");
  try {
    const response = await fetch("http://localhost:3000/productos");
    if (!response.ok) throw new Error("Error al obtener los productos");

    const data = await response.json();
    productosContainer.innerHTML = ""
    data.forEach((product) => {
      const card = document.createElement("div");
      card.className = "col";
      card.innerHTML = product_card(product);
      productosContainer.appendChild(card);
      add_delete_callback(card)
    });
  } catch (error) {
    console.error("Error:", error.message);
    productosContainer.innerHTML = `<p class="text-danger">No se pudieron cargar los productos. Inténtalo más tarde.</p>`;
  }
}

function add_delete_callback(card){
  let button = card.querySelector('button')
  button.addEventListener("click", async (e) => {
    const id = button.getAttribute("data-product");

    if (confirm("¿Estás seguro de que deseas eliminar este producto?")) {
      try {
        const response = await fetch(`http://localhost:3000/productos/${id}`, {
          method: "DELETE",
        });
        if (!response.ok) throw new Error("Error al eliminar el producto");

        alert("Producto eliminado exitosamente.");
        setupProducts(); // Actualizar la lista de productos
      } catch (error) {
        console.error("Error:", error.message);
        alert("Hubo un problema al eliminar el producto.");
      }
    }
})};

function product_card(product){
  return `<div class="col">
            <div class="card">
               <img src="${ product.img }" class="card-img-top" alt="Producto 1">
              <div class="card-body">
                <h5 class="card-title">${ product.nombre }</h5>
               <div class="d-flex justify-content-between">
               <p class="card-text">$${ product.precio }</p>
               <button data-product="${product.id}" class="text-white delete-button"><i class="ri-delete-bin-line"></i></button>
               </div>
             </div>
            </div>
          </div>`
}