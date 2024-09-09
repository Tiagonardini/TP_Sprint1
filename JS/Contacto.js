document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío por defecto del formulario

    // Captura los valores del formulario
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    // Validación simple
    if (nombre === "" || email === "" || mensaje === "") {
        document.getElementById("formResponse").innerText = "Por favor, completa todos los campos.";
        document.getElementById("formResponse").style.color = "red";
    } else {
        // Muestra un mensaje de éxito
        document.getElementById("formResponse").innerText = "Gracias por contactarnos, " + nombre + ". Nos comunicaremos contigo pronto.";
        document.getElementById("formResponse").style.color = "green";

        // Aquí puedes agregar la lógica para enviar el formulario a un servidor si es necesario
        document.getElementById("contactForm").reset(); // Limpia el formulario
    }
});
