// catalogo.js
// Muestra los productos en la grilla y maneja los filtros por categoría

const productos = [
    {
        id: 1,
        nombre: "Nuit Arabesque",
        categoria: "oriental",
        descripcion: "Notas de oud, ámbar y sándalo. Una fragancia densa y envolvente.",
        colorFondo: "#2c1a4a",
        precios: { "5ml": 4800, "10ml": 7800, "frasco": 28000 }
    },
    {
        id: 2,
        nombre: "Rose de Minuit",
        categoria: "floral",
        descripcion: "Rosa turca, jazmín y almizcle blanco. Delicada y femenina.",
        colorFondo: "#3d1a2e",
        precios: { "5ml": 3900, "10ml": 6300, "frasco": 22000 }
    },
    {
        id: 3,
        nombre: "Vent du Sahara",
        categoria: "oriental",
        descripcion: "Azafrán, incienso y madera de cedro. Profundo y misterioso.",
        colorFondo: "#1a1a2e",
        precios: { "5ml": 6100, "10ml": 9800, "frasco": 35000 }
    },
    {
        id: 4,
        nombre: "Aqua Lumière",
        categoria: "fresco",
        descripcion: "Limón siciliano, bergamota y vetiver. Ligero y elegante.",
        colorFondo: "#0d2b3e",
        precios: { "5ml": 3400, "10ml": 5500, "frasco": 19500 }
    },
    {
        id: 5,
        nombre: "Fleur Dorée",
        categoria: "floral",
        descripcion: "Iris, magnolia y vainilla suave. Femenino y sofisticado.",
        colorFondo: "#2e1a0e",
        precios: { "5ml": 4400, "10ml": 7100, "frasco": 25000 }
    },
    {
        id: 6,
        nombre: "Brise Marine",
        categoria: "fresco",
        descripcion: "Notas marinas, menta y madera gris. Ideal para el día a día.",
        colorFondo: "#0a2a2a",
        precios: { "5ml": 3200, "10ml": 5200, "frasco": 18000 }
    }
];

function formatearPrecio(numero) {
    return "$" + numero.toLocaleString("es-AR");
}

function crearCard(producto, delay) {
    let card = document.createElement("article");
    card.classList.add("producto-card", "card-entrada");
    card.style.animationDelay = delay + "ms";

    card.innerHTML = `
        <div class="producto-imagen" style="background-color: ${producto.colorFondo};">
            <span class="producto-icono">🧴</span>
        </div>
        <div class="producto-info">
            <p class="producto-categoria">${producto.categoria}</p>
            <h3 class="producto-nombre">${producto.nombre}</h3>
            <p class="producto-descripcion">${producto.descripcion}</p>
            <div class="decant-selector">
                <button class="btn-decant seleccionado" data-tipo="5ml">Decant 5ml</button>
                <button class="btn-decant" data-tipo="10ml">Decant 10ml</button>
                <button class="btn-decant" data-tipo="frasco">Frasco completo</button>
            </div>
            <p class="producto-precio">${formatearPrecio(producto.precios["5ml"])}</p>
            <button class="btn-agregar">Consultar</button>
        </div>
    `;

    // Cambiar precio al elegir presentación
    let botonesTipo = card.getElementsByClassName("btn-decant");
    let precioEl = card.getElementsByClassName("producto-precio")[0];

    for (let i = 0; i < botonesTipo.length; i++) {
        botonesTipo[i].addEventListener("click", function() {
            for (let j = 0; j < botonesTipo.length; j++) {
                botonesTipo[j].classList.remove("seleccionado");
            }
            this.classList.add("seleccionado");
            let tipo = this.dataset.tipo;
            precioEl.textContent = formatearPrecio(producto.precios[tipo]);
        });
    }

    // Botón consultar: lleva al formulario y lo pre-completa
    let btnConsultar = card.getElementsByClassName("btn-agregar")[0];
    btnConsultar.addEventListener("click", function() {
        let btnActivo = card.getElementsByClassName("btn-decant seleccionado")[0];
        let presentacion = btnActivo.textContent;

        document.getElementById("contacto").scrollIntoView({ behavior: "smooth" });
        document.getElementById("interes").value = "pedido";
        document.getElementById("mensaje").value =
            'Hola, me interesa "' + producto.nombre + '" (' + presentacion + '). ¿Pueden darme más información?';
    });

    return card;
}

function mostrarProductos(categoria) {
    let grilla = document.getElementById("grilla-productos");
    grilla.innerHTML = "";

    for (let i = 0; i < productos.length; i++) {
        if (categoria === "todos" || productos[i].categoria === categoria) {
            let card = crearCard(productos[i], i * 80);
            grilla.appendChild(card);
        }
    }
}

function configurarFiltros() {
    let botones = document.getElementsByClassName("btn-filtro");

    for (let i = 0; i < botones.length; i++) {
        botones[i].addEventListener("click", function() {
            for (let j = 0; j < botones.length; j++) {
                botones[j].classList.remove("activo");
            }
            this.classList.add("activo");
            mostrarProductos(this.dataset.categoria);
        });
    }
}

mostrarProductos("todos");
configurarFiltros();
