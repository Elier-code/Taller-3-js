var localStorage = "programas"
function recuperarDatosFormulario(){
    this.codPrograma = document.getElementById("codgPrograma")
    this.nomPrograma = document.getElementById("nombrePrograma")
    this.duracion = document.getElementById("duracion")
    this.modalidad = document.getElementById("modalidad")
    this.fechaInicio = document.getElementById("fecha")
    this.programas = getJSONDeLocalStore(localStorage)
}
function limpiarFormulario(){
    document.getElementById("codgPrograma").value = ""
    document.getElementById("nombrePrograma").value = ""
    document.getElementById("duracion").value = ""
    document.getElementById("modalidad").value = ""
    document.getElementById("fecha").value = ""
}
function guardar(){
    recuperarDatosFormulario()
    if (!validarFecha(fechaInicio.value)) {
        alert("Por favor ingresa una fecha válida que no sea futura.")
        return;
    }else{
        var programa = new ProgramaAcademico(codPrograma.value, nomPrograma.value, duracion.value, modalidad.value, fechaInicio.value)
        programas.push(programa)
        setJSONDeLocalStore(localStorage, programas)
        limpiarFormulario()
        alert("El programa academico ha sido agregado correctamente")
    }
}

function consultar(){
    recuperarDatosFormulario()
    var indicePrograma = buscarIndicePrograma()
    if (indicePrograma != -1) {
        nomPrograma.value = programas[indicePrograma].nomPrograma
        fechaInicio.value = programas[indicePrograma].fechaInicio
        duracion.value = programas[indicePrograma].duracion
        modalidad.value = programas[indicePrograma].modalidad
    }
}

function actualizar(){
    recuperarDatosFormulario()
    if (!validarFecha(fechaInicio.value)) {
        alert("Por favor ingresa una fecha válida que no sea futura.")
    } else {

        var indicePrograma = buscarIndicePrograma()
        if (indicePrograma != -1) {
            programas[indicePrograma].nomPrograma = nomPrograma.value
            programas[indicePrograma].fechaInicio = fechaInicio.value
            programas[indicePrograma].duracion = duracion.value
            programas[indicePrograma].modalidad = modalidad.value
        }
        setJSONDeLocalStore(localStorage, programas)
        limpiarFormulario()
        alert("El programa academico ha sido actualizado correctamente")
    }
}

function eliminar(){
    recuperarDatosFormulario()
    var indicePrograma = buscarIndicePrograma()
    if (indicePrograma != -1) {
        alert("El programa " + programas[indicePrograma].nomPrograma + " sea a eliminado")
        programas.splice(indicePrograma, 1)
        setJSONDeLocalStore(localStorage, programas)
    }
    limpiarFormulario()
}



function buscarIndicePrograma(){
    var resultado = -1
    for (let i = 0; i < programas.length; i++) {
        if (programas[i].codPrograma == codPrograma.value) {
            resultado = i
        }
    }
    if(resultado == -1){
        alert("El programa academico no encontrado o no registrado")
    }
    return resultado
}