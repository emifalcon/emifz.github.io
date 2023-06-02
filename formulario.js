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
        // Crear elementos para mostrar los datos del formulario
        var dataContainer = document.getElementById("data-container");

        var messageContainer = document.createElement("div");
        messageContainer.className = "message";

        var nameElement = document.createElement("p");
        nameElement.innerHTML = "<strong>Nombre:</strong> " + name;

        var emailElement = document.createElement("p");
        emailElement.innerHTML = "<strong>Correo electrónico:</strong> " + email;

        var messageElement = document.createElement("p");
        messageElement.innerHTML = "<strong>Mensaje:</strong> " + message;

        // Agregar los elementos al contenedor de datos
        messageContainer.appendChild(nameElement);
        messageContainer.appendChild(emailElement);
        messageContainer.appendChild(messageElement);
        dataContainer.appendChild(messageContainer);

        // Simulación de envío exitoso
        alert("El formulario se envió correctamente.");
        form.reset();
    }
}

