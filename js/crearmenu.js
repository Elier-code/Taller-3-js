var opciones = [
    ["Gestion Estudiantes","html/gestionestudiantes.html"],
    ["Gestion de Programas Academicos","html/gestionprogramasacademicos.html"],
    ["Gestion de Matriculas","html/gestionmatriculas.html"],
]
var imagen
function obtenerRutaImagen(rutaImagen){
    var esGitHubPages = window.location.hostname.includes("github.io")
    var profundidad = esGitHubPages ? window.location.pathname.split('/').length - 3 : window.location.pathname.split('/').length - 7
    var ruta = ""
    for (var i = 0; i < profundidad; i++) {
        ruta += "../"
    }
    var rutaCompletaImg = ruta
    rutaCompletaImg += rutaImagen

    var logo = document.createElement("img")
    logo.src = rutaCompletaImg
    logo.alt = "Logo de la Universidad"
    //logo.style.filter='drop-shadow( 0 0 9px #0d170c)';
    imagen = logo
    opciones = opciones.map(opcion =>{
        return [opcion[0], ruta + opcion[1]]
    })
}
document.addEventListener('DOMContentLoaded',() => {
    var contenedor = document.getElementsByClassName("nav")[0]
    var menu = document.createElement("nav")
    var logo = document.getElementById("logo")
    obtenerRutaImagen("recursos/image/logo.png")
    opciones.forEach(opcion => {
        var enlase = document.createElement("a")
        enlase.href = opcion[1]
        enlase.textContent = opcion[0]
        enlase.id = "opciones"
        menu.appendChild(enlase)
    })
    logo.appendChild(imagen)
    contenedor.appendChild(menu)
})
