function Saludo(nombre, idioma = "es") {
    if (idioma === "es") {
        return "Hola, " + nombre;
    } else if (idioma === "en") {
        return "Hello, " + nombre;
    }
    return "Idioma no soportado";
}
console.log(generarSaludo("Santiago", "es"));
console.log(generarSaludo("Andrea", "en"));
