// ---------- MENÚ PARA CELULAR ----------
// Cuando se hace clic en el botón (☰), mostramos u ocultamos el menú

var botonMenu = document.getElementById("botonMenu");
var menu = document.getElementById("menu");

botonMenu.addEventListener("click", function () {
  menu.classList.toggle("mostrar");
});

// ---------- FILTRO DEL PORTAFOLIO ----------
// Esta función se llama desde los botones "Todos", "Tecnología" y "Artística"

function filtrarProyectos(categoria) {

  // 1) Mostramos u ocultamos cada proyecto según la categoría elegida
  var proyectos = document.querySelectorAll(".proyecto");

  for (var i = 0; i < proyectos.length; i++) {
    var proyecto = proyectos[i];
    var categoriaProyecto = proyecto.getAttribute("data-categoria");

    if (categoria === "todos" || categoriaProyecto === categoria) {
      proyecto.classList.remove("oculto");
    } else {
      proyecto.classList.add("oculto");
    }
  }

  // 2) Marcamos como "activo" el botón en el que se hizo clic
  var botones = document.querySelectorAll(".filtro");
  for (var j = 0; j < botones.length; j++) {
    botones[j].classList.remove("activo");
  }
  event.target.classList.add("activo");
}

// ---------- AVISO PARA EL BOTÓN DE DESCARGAR CV ----------
// Como todavía no hay un PDF real, mostramos un mensaje de aviso

function avisoCV(evento) {
  evento.preventDefault();
  alert("Aquí debes enlazar tu CV en PDF cuando lo tengas listo.");
}
