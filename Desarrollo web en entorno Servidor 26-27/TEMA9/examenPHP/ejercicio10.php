<?php

require_once 'conexion.php';

$dni = '77777777G';
$nuevaEdad = 21;

$sql = "UPDATE alumnos 
SET edad = ? 
WHERE dni = ?";

$stmt =$db->prepare($sql);
$stmt->bind_param("is", $nuevaEdad, $dni);
$stmt->execute();

$filas = $stmt-> affected_rows;

if($filas > 0){
    echo "Edad actualizada";
} else {
    echo "Error";  
}

$stmt->close();
$db->close();

?>