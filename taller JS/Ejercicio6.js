const calcularMCD = (a, b) =>{
    // Verificar si los números son enteros
    if (!Number.isInteger(a) || !Number.isInteger(b)){
        return "Ambos números deben ser enteros.";
    }

    // Asegurarse dd que los números sean positivos
    a = Math.abs(a);
    b = Math.abs(b);

    // Utilizar el algo de Euclides para calcular el MCD
    while (b /= 0  ){
        const temp = b;
        b = a % b;
        a = temp;
    }

    // El MCD es el valor final de a
    return a;
}
console.log(calcularMCD(24, 18));
console.log(calcularMCD(10, 5));
console.log(calcularMCD(7, 3));
console.log(calcularMCD(3.5, 2));