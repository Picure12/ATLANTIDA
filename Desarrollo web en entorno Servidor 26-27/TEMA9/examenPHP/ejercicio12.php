<?php

require_once 'conexion.php';

$dni = '77777777A';
$codigo = 1;
$anio = 2026;
$nuevaNota = 8.25;

$sql = "UPDATE matriculas 
SET nota = ? 
WHERE dni = ? AND codigo = ? AND anio = ?";

$stmt =$db->prepare($sql);
$stmt->bind_param("dsii", $nuevaNota, $dni, $codigo, $anio,);
$stmt->execute();

$filas = $stmt-> affected_rows;

if($filas > 0){
    echo "Nota actualizada";
} else {
    echo "Error";  
}

$stmt->close();
$db->close();

?>