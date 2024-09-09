document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío por defecto del formulario

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;
    const responseMessage = document.getElementById("formResponse");

    // Simulación de procesamiento del formulario
    if (nombre && email && mensaje) {
        responseMessage.innerText = "Gracias por contactarnos, " + nombre + ". Te responderemos pronto.";
        responseMessage.style.color = "green";
    } else {
        responseMessage.innerText = "Por favor, completa todos los campos.";
        responseMessage.style.color = "red";
    }

    // Limpiar los campos después del envío
    document.getElementById("contactForm").reset();
});
