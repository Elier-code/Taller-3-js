function getJSONDeLocalStore(nombreLocalStore){
    return JSON.parse(localStorage.getItem(nombreLocalStore)  || "[]")
}
//funcion para guardar datos en localstore
function setJSONDeLocalStore(nombreLocalStore, arrayJSON){
    localStorage.setItem(nombreLocalStore,JSON.stringify(arrayJSON))
}