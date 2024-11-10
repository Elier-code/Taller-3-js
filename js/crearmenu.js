var opciones = [
    ["Gestion Estudiantes","html/gestionestudiantes.html"],
    ["Gestion de Programas Academicos","html/gestionprogramasacademicos.html"],
    ["Gestion de Matriculas","html/gestionmatriculas.html"],
]
var imagen
function obtenerRutaImagen(rutaImagen){
    var profundidad = window.location.pathname.split('/').length - 7
    var ruta = ""
    for (var i = 0; i < profundidad; i++) {
        ruta += "../"
    }
    ruta += rutaImagen
    console.log(ruta)
    var logo = document.createElement("img")
    logo.src = ruta
    logo.alt = "Logo de la Universidad"
    //logo.style.filter='drop-shadow( 0 0 9px #0d170c)';
    imagen = logo
}
document.addEventListener('DOMContentLoaded',() => {
    var contenedor = document.getElementsByClassName("nav")[0]
    var menu = document.createElement("nav")
    obtenerRutaImagen("recursos/image/logo.png")
    opciones.forEach(opcion => {
        var enlase = document.createElement("a")
        enlase.href = opcion[1]
        enlase.textContent = opcion[0]
        enlase.id = "opciones"
        enlase.target = "__blank"
        menu.appendChild(enlase)
    })
    contenedor.appendChild(imagen)
    contenedor.appendChild(menu)
})