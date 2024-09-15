const esPalindromo = num => {
    // Verificar si el número es entero
    if (!Number.isInteger(num)){
        return "El valor debe ser un número entero.";
    }

    // Convertir el número a una cadena de texto
    const numString = Math.abs(num).toString();

    // Inicializar una variable para almacenar el número invertido
    let numInvertido = "";

    // Iterar sobre la cadena de texto y construir el número invertido
    for (let i = numString.length -1; i >= 0; i--){
        numInvertido += numString[i];
    }

    // Comparar el número original con el invertido
    return numString === numInvertido;
}
console.log(esPalindromo( 12321));
console.log(esPalindromo( 54765));
console.log(esPalindromo( -101));
console.log(esPalindromo( 3.14));