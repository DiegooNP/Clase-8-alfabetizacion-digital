// Entradas para cine
function asientosDisponibles (asientoDisponible, asientoOcupar){
   
    for (let i = 0; i <= asientoDisponible.length; i++){

        if (asientoDisponible[i] == asientoOcupar){
            let mensaje = "Felicitaciones, el asiento número " + asientoOcupar + " está disponible";
            return mensaje
             } 
        //else if (asientoDisponible[i] != asientoOcupar){
        else if (asientoDisponible.length == i)  {
        let mensaje = "Lo sentimos, el asiento número " + asientoOcupar + " está ocupado, pero aún quedan "+ asientoDisponible.length + " asientos disponibles";
        return mensaje

         } 
    }
}

console.log(asientosDisponibles([3, 15, 18, 25], 25));
