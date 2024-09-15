const calcularPotencia = (base, exponente) => {
    // Verificar si los números son enteros
    if (!Number.isInteger(base) || !Number.isInteger(exponente)){
        return"Ambos números deben ser enteros. ";
    }

    // Manejar el caso cuando el exponente es 0
    if(exponente === 0){
        return 1;
    }

    // Manejar el caso cuando la base es 0 y el exponente es negativo
    if (base === 0 && exponente < 0){
        return "No se puede realizar la operación.";
    }

    let resultado = 1;

    // Calcular la potencia utilizando un ciclo
    for (let i = 0; i < Math.abs(exponente); i++){
        resultado *= base;
    }

    // Devolver el resultado inverso si el exponente es negativo
    return exponente < 0 ? 1/resultado : resultado;
}
console.log(calcularPotencia(2, 3));
console.log(calcularPotencia(5, -2));
console.log(calcularPotencia(0, -5));
console.log(calcularPotencia(3.5, 2));