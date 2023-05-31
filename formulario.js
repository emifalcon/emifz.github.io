
function submitForm() {
    var form = document.getElementById("contact-form");
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Aquí puedes realizar la lógica para enviar el formulario a través de AJAX o cualquier otro método

    // Verificar si el campo de nombre está vacío o si se ingresó un correo electrónico en su lugar
    if (name === "" || email === "" || message === "") {
        alert("Por favor, completa todos los campos.");
    } else if (name.includes("@")) {
        alert("Por favor, ingresa un nombre válido en lugar del correo electrónico.");
    } else {
        // Simulación de envío exitoso
        alert("El formulario se envió correctamente.");
        form.reset();
    }
}

