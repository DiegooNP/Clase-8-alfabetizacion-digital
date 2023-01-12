// Matriz cursos y precios

// Funcion devuelve datos alumnos y monto a pagar
let cursosPrecios = [
    ["html", 4000],
    ["css3", 5000],
    ["javascript", 10000],
    ["react", 7000],
    ["nodejs", 15000]
];

//asi hay que declarar un array con los cursos: let cursos = ["HTML","CSS3","JAVASCRIPT","REACT","NODEJS"] pero lo que hacemos es dejar en el array 
//creado solo los cursos que eligio el usuario
let cursosElegidos = ["HTML","CSS3"];

// CONTROL d ES PARA TRABAJAR EN VARIAS LINEAS A LA VEZ

//Calcular el precio
function calcularPrecios(catalogo, cursosDisponibles) {
    //lo que hacemos con el 0 comience desde 0 para luego poder modificar el percio
    let precio = 0;
    
    //como recibe dos funciones catalogo y cursosDisponibles la debemos declarar el atributo cursosDisponobles con un .log para que no rompa y ejecute
    //para probar y que no rompa le debemos dar un valor al argumento cursosDisponibles, ejemplo (catalogo, cursosDisponibles=null)
    //console.log(cursosDisponibles);

    for (let index = 0; index < catalogo.length; index++) {
    
        //Este console.log() nos sirve para ver que esta mostrando luego eliminamos para seguir codeando
        //console.log("estamos en calcularPrecio", catalogo[index]);
        
        //la funcion includes devuelve un booleano
        //para controlar los cursos que ha elegido el usuario hacer un console.log("lo que esta pasando", cursosDisponibles.includes(catalogo[index][0].toUpperCase())); 
        //y para que funcione lo debemos pasar en calcularPrecios(cursosPrecios, cursosElegidos) y si muestra true en los dos cursos quiere decir que esta
        //bien
        // usamos un toUpperCase xq estan en mayuscula y debemos para a minuscula

        if (cursosDisponibles.includes(catalogo[index][0].toUpperCase())) {
            // declaramos precio y agregamos un array catalogo con el index 1 para que muestre el precio y no el nombre
            precio = precio + catalogo[index][1];
        }
        
    }
    return precio;
}


//No hacer un console,log sino directamente llamar a la funcion
//calcularPrecios(cursosPrecios, cursosElegidos)

//ahora si tenemos que hacer un console.log a la funcion para que muestre
console.log(
    "Tenes que pagar",
    calcularPrecios(cursosPrecios, cursosElegidos)
);
