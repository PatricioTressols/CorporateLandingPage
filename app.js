document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene que la página se recargue al enviar el formulario

    // Obtener los valores ingresados en los campos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validación básica para verificar que los campos no estén vacíos
    if (name && email && message) {
        alert('Gracias, ' + name + '! Nos pondremos en contacto contigo pronto.'); // Muestra un mensaje de confirmación
        // Opcional: Se puede resetear el formulario después de enviarlo
        document.getElementById('contact-form').reset();
    } else {
        alert('Por favor, completa todos los campos.'); // Alerta si algún campo está vacío
    }
});
