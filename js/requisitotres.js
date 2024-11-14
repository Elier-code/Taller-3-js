var localStore ='estudiantes'
var estudiantes = getJSONDeLocalStore(localStore)
function agregarIDentificacores(){
    var listaEstudiantes = document.getElementById("idEstudiante")
    console.log(localStorage.getItem('estudiantes'))
    for (const estudiante of estudiantes) {
        var opcionEstudiantes = document.createElement("option")
        opcionEstudiantes.value = estudiante.id
        opcionEstudiantes.text = estudiante.id
        listaEstudiantes.add(opcionEstudiantes)
    }
}