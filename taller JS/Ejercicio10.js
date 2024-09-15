const sumaDivisores = num => {
    // Verificar si el número es entero
    if (!Number.isInteger(num)){
        return "El valor debe ser un número entero.";
    }

    // Tomar el valor absoluto del número
    num = Math.abs(num);

    let suma = 0

    // Iterar sobre todos los posibles divisores
    for (let i = 1; i < num; i++){
        // Verificar si i es un divisor de num
        if (num % i === 0){
            suma+= i;
        }
    }

    return suma;
}
console.log(sumaDivisores(12));
console.log(sumaDivisores(-6));
console.log(sumaDivisores(1));
console.log(sumaDivisores(3.5));