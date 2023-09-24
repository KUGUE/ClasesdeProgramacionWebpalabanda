<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["inputFirstName"];
    $apellido = $_POST["inputLastName"];
    $email = $_POST["inputEmail"];
    $mensaje = $_POST["message"];

    $destinatario = "martin-kugue@hotmail.com";  // Cambia esto al correo al que deseas enviar el mensaje
    $asunto = "Nuevo mensaje de contacto desde el sitio web";

    $contenido = "Nombre: $nombre\n";
    $contenido .= "Apellido: $apellido\n";
    $contenido .= "Email: $email\n";
    $contenido .= "Mensaje:\n$mensaje\n";

    // Usar la función mail() de PHP para enviar el correo
    if (mail($destinatario, $asunto, $contenido)) {
        // El correo se envió exitosamente
        echo "Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.";
    } else {
        // Error al enviar el correo
        echo "Lo sentimos, hubo un problema al enviar tu mensaje. Por favor, inténtalo nuevamente.";
    }
} else {
    // Acceso no autorizado
    echo "Acceso no autorizado.";
}
?>
