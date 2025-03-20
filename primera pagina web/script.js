document.addEventListener("DOMContentLoaded", function () {
    let idiomaActual = "es";

    document.getElementById("botonIdioma").addEventListener("click", function() {
        if (idiomaActual === "es") {
            document.getElementById("titulo").textContent = "First week website made with VSC";
            document.getElementById("parrafo").textContent = "This website is made with HTML, PHP, and JavaScript";
            document.getElementById("botonIdioma").textContent = "Change to Spanish";
            document.getElementById("tituloFormulario").textContent = "PHP Form";
            document.getElementById("nombre").placeholder = "Your name";
            document.getElementById("correo").placeholder = "Your email";
            document.getElementById("mensaje").placeholder = "Write your message";
            document.getElementById("enviar").textContent = "Send";
            idiomaActual = "en";
        } else {
            document.getElementById("titulo").textContent = "Web de la primera semana hecha con VSC";
            document.getElementById("parrafo").textContent = "Esta web está hecha con HTML, PHP y JavaScript";
            document.getElementById("botonIdioma").textContent = "Cambiar a inglés";
            document.getElementById("tituloFormulario").textContent = "Formulario PHP";
            document.getElementById("nombre").placeholder = "Tu nombre";
            document.getElementById("correo").placeholder = "Tu correo";
            document.getElementById("mensaje").placeholder = "Escribe tu mensaje";
            document.getElementById("enviar").textContent = "Enviar";
            idiomaActual = "es";
        }
    });

    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); 

        let formData = new FormData(this);

        fetch("formulario.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            document.getElementById("respuesta").innerHTML = data;
        })
        .catch(error => console.error("Error:", error));
    });
});

