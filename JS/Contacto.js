// Archivo: JS/Contacto.js

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío automático del formulario

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    const formResponse = document.getElementById('formResponse');

    // Validación simple
    if (nombre && email && mensaje) {
        formResponse.innerHTML = "¡Gracias por contactarnos, " + nombre + "! Te responderemos pronto.";
        formResponse.style.color = "green";
        // Limpiar el formulario
        document.getElementById('contactForm').reset();
    } else {
        formResponse.innerHTML = "Por favor, completa todos los campos.";
        formResponse.style.color = "red";
    }
});
