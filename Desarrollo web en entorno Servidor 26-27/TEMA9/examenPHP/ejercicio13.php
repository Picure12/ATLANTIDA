<?php

require_once 'conexion.php';

$dni = '77777777A';
$codigo = 1;
$anio = 2026;

$sql = "DELETE FROM matriculas 
WHERE dni = ? AND codigo = ? AND anio = ?";

$stmt =$db->prepare($sql);
$stmt->bind_param("sii", $dni, $codigo, $anio,);
$stmt->execute();

$filas = $stmt-> affected_rows;

if($filas == 1){
    echo "Nota actualizada";
} elseif($filas == 0) {
    echo "Error";  
}

$stmt->close();
$db->close();
?>