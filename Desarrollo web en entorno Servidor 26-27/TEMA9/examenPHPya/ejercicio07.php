<?php

require_once 'conexion.php';

$dni = '22222222B';
$codigo = 1;
$anio = 2025;

$sql = "DELETE FROM matriculas 
WHERE dni = ? AND codigo = ? AND anio = ?";

$stmt =$db->prepare($sql);
$stmt->bind_param("sii", $dni, $codigo, $anio,);
$stmt->execute();

$filas = $stmt-> affected_rows;

if($filas == 1){
    echo "Matricula eliminada";
}else{
    echo "No encontrada";
}


$stmt->close();
$db->close();
?>
