<?php

require_once 'conexion.php';

$edadMinima =21; 

$sql = " SELECT nombre, edad 
FROM alumnos
WHERE edad >= ? 
ORDER BY edad DESC, nombre ASC";

$stmt =$db->prepare($sql);
$stmt->bind_param("i", $edadMinima);
$stmt->execute();

$resultado = $stmt->get_result();

echo "<table border='1'>";
echo "<tr>";
echo "<th>Nombre</th>";
echo "<th>Edad</th>";
echo "</tr>";

while ($fila = $resultado->fetch_assoc()) {
    echo "<tr>";
    echo  "<td>" . htmlspecialchars($fila['nombre']) . "</td>";
    echo "<td>" . $fila['edad'] . "<td>";
    echo "</tr>";
}
echo "</table>";

$resultado->free();
$db->close();
$stmt->close();


