<?php

require_once 'conexion.php';

$sql = " SELECT nombre, edad 
FROM alumnos
ORDER BY nombre ASC";

$resultado = $db->query($sql);

echo "<p>Alumnos:  ". $resultado->num_rows . "<p>";

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
