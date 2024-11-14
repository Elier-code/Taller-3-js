var localStorage = "matriculas"
function recuperarDatosFormulario(){
    this.idMatricula = document.getElementById("codgMatricula")
    this.idEstudiante = document.getElementById("idEstudiante")
    this.codPrograma = document.getElementById("codgPrograma")
    this.fecha = document.getElementById("fecha")
    this.estado = document.getElementById("estado")
    this.matriculas = getJSONDeLocalStore(localStorage)
}
function limpiarFormulario(){
    idMatricula.value = ""
    idEstudiante.value = ""
    codPrograma.value = ""
    fecha.value = ""
    estado.value = ""
}

function guardar(){
    recuperarDatosFormulario()
    if (validarFecha(fecha.value)) {
        alert("Por favor ingresa una fecha que no sea pasada.")
        return;
    }else{
        var matricula = new Matricula(idMatricula.value, idEstudiante.value, codPrograma.value, fecha.value, estado.value)
        matriculas.push(matricula)
        setJSONDeLocalStore(localStorage, matriculas)
        limpiarFormulario()
        alert("La matricula ha sido agregado correctamente")
    }
}

function consultar(){
    recuperarDatosFormulario()
    var indiceMatricula = buscarIndiceMatricula()
    if (indiceMatricula != -1) {
        idEstudiante.value = matriculas[indiceMatricula].idEstudiante
        codPrograma.value = matriculas[indiceMatricula].codPrograma
        fecha.value = matriculas[indiceMatricula].fechaMatricula
        estado.value = matriculas[indiceMatricula].estado
    }
}

function actualizar(){
    recuperarDatosFormulario()
    if (!validarFecha(fecha.value,patronFechaRequerida)) {
        alert("Por favor ingresa una fecha válida que no sea pasada.")
        return;
    } else {
        var indiceMatricula = buscarIndiceMatricula()
        if (indiceMatricula != -1) {
            matriculas[indiceMatricula].idEstudiante = idEstudiante.value
            matriculas[indiceMatricula].codPrograma = codPrograma.value
            matriculas[indiceMatricula].fechaMatricula = fecha.value
            matriculas[indiceMatricula].estado = estado.value
        }
        setJSONDeLocalStore(localStorage, matriculas)
        limpiarFormulario()
        alert("La matricula ha sido actualizado correctamente")
    }
}
function eliminar(){
    recuperarDatosFormulario()
    var indiceMatricula = buscarIndiceMatricula()
    if (indiceMatricula != -1) {
        alert("La matricula " + matriculas[indiceMatricula].idMatricula + " sea a eliminado")
        matriculas.splice(indiceMatricula, 1)
        setJSONDeLocalStore(localStorage, matriculas)
    }
    limpiarFormulario()
}




function buscarIndiceMatricula(){
    var resultado = -1
    for (let i = 0; i < matriculas.length; i++) {
        if (matriculas[i].idMatricula == idMatricula.value) {
            resultado = i
        }
    }
    if(resultado == -1){
        alert("Matricula no ha sido encontrada o no esta registrada")
    }
    return resultado
}