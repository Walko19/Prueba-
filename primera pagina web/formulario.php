<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = trim($_POST["nombre"]);
    $correo = trim($_POST["correo"]);
    $mensaje = trim($_POST["mensaje"]);

    if (empty($nombre) || empty($correo) || empty($mensaje)) {
        echo "<p style='color:red;'>Todos los campos son obligatorios.</p>";
        exit;
    }

    if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
        echo "<p style='color:red;'>Correo no válido.</p>";
        exit;
    }
    echo "<h3>Mensaje recibido:</h3>";
    echo "<p><strong>Nombre:</strong> " . htmlspecialchars($nombre) . "</p>";
    echo "<p><strong>Correo:</strong> " . htmlspecialchars($correo) . "</p>";
    echo "<p><strong>Mensaje:</strong> " . nl2br(htmlspecialchars($mensaje)) . "</p>";
} else {
    echo "<p style='color:red;'>Acceso no autorizado.</p>";
}
?>
