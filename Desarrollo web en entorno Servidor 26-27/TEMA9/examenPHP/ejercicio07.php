<?php

require_once 'conexion.php';
$notaMinima = 5;

//alumnos -> matricula -> asignatura
$sql = "SELECT a.nombre as alumno, asig.nombre as asignatura, m.nota, m.anio as anio
        FROM alumnos a
        JOIN matriculas m ON a.dni = m.dni
        JOIN asignaturas asig ON m.codigo = asig.codigo
        WHERE nota >= ? OR m.nota IS NULL
        ORDER BY m.nota DESC";

$stmt =$db->prepare($sql);
$stmt->bind_param("d",$notaMinima);
$stmt->execute();

$resultado = $stmt->get_result();


echo "<table border='1'>";
echo "<tr>";
echo "<th>Nombre</th>";
echo "<th>Asignatura</th>";
echo "<th>Curso</th>";
echo "<th>Nota</th>";
echo "</tr>";

    
while ($fila = $resultado->fetch_assoc()) {

echo "<tr>";   
    echo  "<td>" . htmlspecialchars($fila['alumno']) . "</td>";
    echo  "<td>" . htmlspecialchars($fila['asignatura']) . "</td>";
    echo "<td>" . $fila['anio'] . "</td>";
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