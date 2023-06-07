function submitForm() {
    var form = document.getElementById("contact-form");
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;


    if (name === "" || email === "" || message === "") {
        var errorContainer = document.createElement("div");
        errorContainer.className = "error";

        var errorMessage = document.createElement("p");
        errorMessage.innerText = "Por favor, completa todos los campos.";

        errorContainer.appendChild(errorMessage);
        form.appendChild(errorContainer);
    } else if (name.includes("@")) {
        var errorContainer = document.createElement("div");
        errorContainer.className = "error";

        var errorMessage = document.createElement("p");
        errorMessage.innerText = "Por favor, ingresa un nombre válido en lugar del correo electrónico.";

        errorContainer.appendChild(errorMessage);
        form.appendChild(errorContainer);
    } else {
        // Crea elementos para mostrar los datos del formulario
        var dataContainer = document.getElementById("data-container");

        var messageContainer = document.createElement("div");
        messageContainer.className = "message";

        var nameElement = document.createElement("p");
        nameElement.innerHTML = "<strong>Nombre:</strong> " + name;

        var emailElement = document.createElement("p");
        emailElement.innerHTML = "<strong>Correo electrónico:</strong> " + email;

        var messageElement = document.createElement("p");
        messageElement.innerHTML = "<strong>Mensaje:</strong> " + message;


        messageContainer.appendChild(nameElement);
        messageContainer.appendChild(emailElement);
        messageContainer.appendChild(messageElement);
        dataContainer.appendChild(messageContainer);

        form.reset();
    }
}
