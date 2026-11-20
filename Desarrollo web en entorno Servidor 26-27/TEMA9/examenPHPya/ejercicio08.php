
<?php

require_once 'conexion.php';

$anio = 2026;

$sql = "SELECT a.nombre AS alumno, asig.nombre AS asignatura, m.nota
        FROM matriculas m
        JOIN alumnos a ON m.dni = a.dni
        JOIN asignaturas asig ON m.codigo = asig.codigo
        WHERE m.anio = ?
        ORDER BY a.nombre ASC, asig.nombre ASC";


$stmt = $db->prepare($sql);
$stmt->bind_param("i", $anio);
$stmt->execute();
$resultado = $stmt->get_result();


while ($fila = $resultado->fetch_assoc()) {


    htmlspecialchars($fila['alumno']);
    echo " - ";
    htmlspecialchars($fila['asignatura']); 
    echo " - ";
    htmlspecialchars($fila['nota']); 
    

    if ($fila['nota'] === null) {
        echo "Pendiente";
    } else {
        echo  $fila['nota'];
    }
}



$resultado->free();
$stmt->close();
$db->close();

?>

