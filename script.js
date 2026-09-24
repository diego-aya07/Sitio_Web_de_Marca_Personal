var botonMenu = document.getElementById("botonMenu");
var menu = document.getElementById("menu");

botonMenu.addEventListener("click", function () {
  menu.classList.toggle("mostrar");
});

// ---------- FILTRO DEL PORTAFOLIO ----------

function filtrarProyectos(categoria) {


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

  var botones = document.querySelectorAll(".filtro");
  for (var j = 0; j < botones.length; j++) {
    botones[j].classList.remove("activo");
  }
  event.target.classList.add("activo");
}

// ---------- DESCARGAR CV AUTOMÁTICAMENTE ----------
function descargarCV(evento) {
  evento.preventDefault();

  fetch("CV_Diego_Ayala.pdf")
    .then(function (respuesta) {
      return respuesta.blob();
    })
    .then(function (archivo) {
      var url = URL.createObjectURL(archivo);
      var enlace = document.createElement("a");
      enlace.href = url;
      enlace.download = "CV_Diego_Ayala.pdf";
      enlace.click();
      URL.revokeObjectURL(url);
    });
}