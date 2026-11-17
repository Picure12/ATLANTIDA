<?php

require_once 'conexion.php';

$dni = '77777777A';
$codigo = 1;
$anio = 2026;
$nota = 7.5;

$sql = "INSERT INTO matriculas (dni, codigo, anio, nota)
        VALUES (?, ?, ?, ?)";

$stmt =$db->prepare($sql);
$stmt->bind_param("siid", $dni, $codigo, $anio, $nota);
$stmt->execute();

$filas = $stmt-> affected_rows;

if($filas > 0){
    echo "Matricula insertada";
} else {
    echo "Error";  
}

$stmt->close();
$db->close();

?>