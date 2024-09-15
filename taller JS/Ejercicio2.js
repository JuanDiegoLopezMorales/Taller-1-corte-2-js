const esPrimo = num => { 
    // Verificar si el numero es menor que 2 (los numeros menores que 2 no son primos)
    if (num < 2){
        return false;
    }

// Verificar si el numero es 2 ( el unico numero par primo)
if (num === 2){
    return true;
}

// Verificar si el numero es impar 
if (num % 2 === 0){
    return false ;
}

// Verificar si el número es divisible por cualquier numero impar entre 3 y la raiz cuadrada del numero
const limite = Math.sqrt(num);
for (let i = 3; i <= limite; i += 2) {
    if (num % i === 0){
        return false;
    }
}

// Si no es divisible por ningun número, entonces es primo
return true;
}
console.log (esPrimo(7))
console.log (esPrimo(10))
console.log (esPrimo(17))
console.log (esPrimo(0))
console.log (esPrimo(1))