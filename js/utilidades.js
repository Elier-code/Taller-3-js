function getJSONDeLocalStore(nombreLocalStore){
    return JSON.parse(localStorage.getItem(nombreLocalStore)  || "[]")
}
//funcion para guardar datos en localstore
function setJSONDeLocalStore(nombreLocalStore, arrayJSON){
    localStorage.setItem(nombreLocalStore,JSON.stringify(arrayJSON))
}

function validarFecha(fecha) {
    // Expresión regular para validar el formato dd/mm/yyyy
    const patron = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;

    // Verificar el formato de la fecha
    if (!patron.test(fecha)) {
        return false;
    }
    const fechaIngresada = new Date(fecha);
    // Obtener la fecha actual (sin tiempo)
    const fechaActual = new Date();
    fechaActual.setHours(0, 0, 0, 0); // Resetear horas para comparar solo las fechas

    // Retorna true si la fecha ingresada es menor o igual a la fecha actual
    return fechaIngresada <= fechaActual;
}