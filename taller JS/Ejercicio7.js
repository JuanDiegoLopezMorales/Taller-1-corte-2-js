const contarVocales = str => {
    // Convertir la cadena a minúsculas para facilitar la comparación
str = str.toLowerCase();

let vocales = 0;

// Iterar sobre carácter de la cadena
for (let i = 0; i < str.length; i++){
    const char = str[i];

    // Verofocar si el carácter es  una vocal
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
        vocales++;
    }
}

// Devolver el recuento de vocales
return vocales;
}
console.log(contarVocales( "Hola"))
console.log(contarVocales( "JavaScript"))
console.log(contarVocales( "xyz"))
console.log(contarVocales( "AeIoU"))