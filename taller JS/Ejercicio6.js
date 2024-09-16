let nombre = prompt("Ingrese nombre"); 
let idioma = prompt("Ingrese idioma");  

const saludarPersona = (nombre, idioma = "es") => {
    if (idioma === "es") {
        return "Hola, " + nombre;
    } else if (idioma === "en") {
        return "Hello, " + nombre;
    }
    return "Idioma no soportado";
}
alert(saludarPersona(nombre, idioma))
