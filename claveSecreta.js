function laClaveSecreta(clave){
    let sinComillas = clave.filter((item) => item !== '*')
    sinComillas.reverse();
    let unir = sinComillas.join("");
    return unir
}

console.log(laClaveSecreta( [ "s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"] ));