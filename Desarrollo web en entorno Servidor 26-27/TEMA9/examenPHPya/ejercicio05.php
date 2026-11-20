
<?php

require_once 'conexion.php';

$dni = '88888888B';
$nombre = 'Lucía Vega';
$edad = 22;

$sql = "INSERT INTO alumnos (dni, nombre, edad)
        VALUES (?, ?, ?)";

$stmt = $db->prepare($sql);

$stmt->bind_param("ssi", $dni, $nombre, $edad);

$stmt->execute();

$filas = $stmt->affected_rows;

if ($filas == 1) {
    echo "Alumno agregado";
}

$stmt->close();
$db->close();

?>
