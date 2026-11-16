
<?php

require_once 'conexion.php';

$dni = "77777777G";
$nombre = "Ana García";
$edad = 23;

$sql = "INSERT INTO alumnos (dni, nombre, edad)
        VALUES (?, ?, ?)";

$stmt =$db->prepare($sql);
$stmt->bind_param("ssi", $dni, $nombre, $edad);
$stmt->execute();

$filas = $stmt-> affected_rows;

echo "Alumno insertados " . $filas;

$stmt->close();
$db->close();

?>