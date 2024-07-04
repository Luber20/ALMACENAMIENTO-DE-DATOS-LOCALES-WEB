// Valida y guarda los datos del formulario en localStorage.
function saveClientData() {
    const cedula = document.getElementById("cedula").value;
    const apellidos = document.getElementById("apellidos").value;
    const nombres = document.getElementById("nombres").value;
    const direccion = document.getElementById("direccion").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;

    // Patrones de validación
    const cedulaPattern = /^\d{10}$/; // 10 dígitos
    const namePattern = /^[a-zA-Z\s]+$/; // Solo letras y espacios
    const direccionPattern = /^[a-zA-Z0-9\s,.-]+$/; // Letras, números, espacios, comas, puntos y guiones
    const telefonoPattern = /^\d{10}$/; // 10 dígitos
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Formato de correo electrónico

    // Validaciones
    if (!cedulaPattern.test(cedula)) {
        alert("Por favor, ingrese una cédula válida (10 dígitos).");
        return false;
    }
    if (!namePattern.test(apellidos)) {
        alert("Por favor, ingrese apellidos válidos (solo letras y espacios).");
        return false;
    }
    if (!namePattern.test(nombres)) {
        alert("Por favor, ingrese nombres válidos (solo letras y espacios).");
        return false;
    }
    if (!direccionPattern.test(direccion)) {
        alert("Por favor, ingrese una dirección válida (letras, números, espacios, comas, puntos y guiones).");
        return false;
    }
    if (!telefonoPattern.test(telefono)) {
        alert("Por favor, ingrese un teléfono válido (10 dígitos).");
        return false;
    }
    if (!emailPattern.test(email)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }

    const clientData = {
        cedula,
        apellidos,
        nombres,
        direccion,
        telefono,
        email
    };

    let clients = JSON.parse(localStorage.getItem("clients")) || [];
    clients.push(clientData);
    localStorage.setItem("clients", JSON.stringify(clients));

    displaySavedClients();
    return false; // Para evitar que el formulario se envíe
}

// Muestra los datos de los clientes guardados.
function displaySavedClients() {
    const clients = JSON.parse(localStorage.getItem("clients")) || [];
    const savedClientsDiv = document.getElementById("savedClients");

    savedClientsDiv.innerHTML = "";
    clients.forEach(client => {
        const clientDiv = document.createElement("div");
        clientDiv.innerHTML = `
            <p><strong>Cédula:</strong> ${client.cedula}</p>
            <p><strong>Apellidos:</strong> ${client.apellidos}</p>
            <p><strong>Nombres:</strong> ${client.nombres}</p>
            <p><strong>Dirección:</strong> ${client.direccion}</p>
            <p><strong>Teléfono:</strong> ${client.telefono}</p>
            <p><strong>Correo Electrónico:</strong> ${client.email}</p>
            <hr>
        `;
        savedClientsDiv.appendChild(clientDiv);
    });
}

// Cargar y mostrar los datos al cargar la página
document.addEventListener("DOMContentLoaded", displaySavedClients);
