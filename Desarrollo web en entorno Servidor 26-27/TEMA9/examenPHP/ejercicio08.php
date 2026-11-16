<?php

require_once 'conexion.php';
$anio = 2026;

//alumnos -> matricula -> asignatura
$sql = "SELECT a.nombre as alumno, asig.nombre as asignatura, m.nota
        FROM matriculas m
        JOIN alumnos a ON m.dni = a.dni
        JOIN asignaturas asig ON m.codigo = asig.codigo
        WHERE m.anio = ?";

$stmt =$db->prepare($sql);
$stmt->bind_param("i",$anio);
$stmt->execute();

$resultado = $stmt->get_result();


echo "<table border='1'>";
echo "<tr>";
echo "<th>Nombre</th>";
echo "<th>Asignatura</th>";
echo "<th>Nota</th>";
echo "</tr>";

    
while ($fila = $resultado->fetch_assoc()) {

echo "<tr>";   
    echo  "<td>" . htmlspecialchars($fila['alumno']) . "</td>";
    echo  "<td>" . htmlspecialchars($fila['asignatura']) . "</td>";
    
    if ($fila['nota'] === null){
        echo "<td>Pendiente</td>";
    }else {
        echo "<td>" . $fila['nota'] . "</td>";
    }
    echo "</tr>";
}
echo "</table>";

$resultado->free();
$stmt->close();
$db->close();
?>