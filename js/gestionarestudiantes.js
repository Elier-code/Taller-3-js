var localStorage = "estudiantes"
function recuperarDatosFormulario() {
    this.idEstudiante = document.getElementById("idEstudiante")
    this.nombre = document.getElementById("nombreEstudiante")
    this.fechaNacimiento = document.getElementById("fechaNacimiento")
    this.email = document.getElementById("correo")
    this.telefono = document.getElementById("telefono")
    this.estudiantes = getJSONDeLocalStore(localStorage)
}
function limpiarFormulario() {
    idEstudiante.value = ""
    nombre.value = ""
    fechaNacimiento.value = ""
    email.value = ""
    telefono.value = ""
}

function guardar() {
    recuperarDatosFormulario()
    var estudiante = new Estudiante(idEstudiante.value, nombre.value, fechaNacimiento.value, email.value, telefono.value)
    estudiantes.push(estudiante)
    setJSONDeLocalStore(localStorage, estudiantes)
    limpiarFormulario()
    alert("El estudiante ha sido agregado correctamente")
    console.log(estudiantes)
}


function consultar() {
    recuperarDatosFormulario()
    var indiceEstudiante = buscarIndiceEstudiante()
    if (indiceEstudiante != -1) {
        nombre.value = estudiantes[indiceEstudiante].nombEstudiante
        fechaNacimiento.value = estudiantes[indiceEstudiante].fechaNacimiento
        email.value = estudiantes[indiceEstudiante].email
        telefono.value = estudiantes[indiceEstudiante].telefono
    }
}

function actualizar(){
    recuperarDatosFormulario()
    var indiceEstudiante = buscarIndiceEstudiante()
    if (indiceEstudiante != -1) {
        estudiantes[indiceEstudiante].nombre = nombre.value
        estudiantes[indiceEstudiante].fechaNacimiento = fechaNacimiento.value
        estudiantes[indiceEstudiante].email = email.value
        estudiantes[indiceEstudiante].telefono = telefono.value
    }
    setJSONDeLocalStore(localStorage, estudiantes)
    limpiarFormulario()
    alert("El estudiante ha sido actualizado correctamente")
}

function eliminar(){
    recuperarDatosFormulario()
    var indiceEstudiante = buscarIndiceEstudiante()
    if (indiceEstudiante != -1) {
        alert("Estudiante " + estudiantes[indiceEstudiante].nombEstudiante + " sea a eliminado")
        estudiantes.splice(indiceEstudiante, 1)
        setJSONDeLocalStore(localStorage, estudiantes)
    }
    limpiarFormulario()
}




function buscarIndiceEstudiante() {
    var resultado = -1
    for (let i = 0; i < estudiantes.length; i++) {
        if (estudiantes[i].idEstudiante == idEstudiante.value) {
            resultado = i
        }
    }
    if(resultado == -1){
        alert("Estudiante no encontrado o no registrado")
    }
    return resultado
}