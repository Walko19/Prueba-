let idiomaActual = "es";

document.getElementById("botonIdioma").addEventListener("click", function() {
    if (idiomaActual === "es") {
        document.getElementById("titulo").textContent = "Web of the first week made with VSC";
        document.getElementById("parrafo").textContent = "This web is made with HTML, PHP and JavaScript";
        this.textContent = " Cambiar a Español";
        idiomaActual = "en";
    } else {
        document.getElementById("titulo").textContent = "Web de la primera semana hecha con VSC";
        document.getElementById("parrafo").textContent = "Esta web esta hecha con HTML, PHP y JavaScript";
        this.textContent = " Cambiar a Inglés";
        idiomaActual = "es";
    }
});