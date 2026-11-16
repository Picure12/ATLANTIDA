
<?php

require_once 'conexion.php';
$limite = 22;

$sql = " SELECT nombre, edad 
FROM alumnos
WHERE edad < ? 
ORDER BY edad DESC, nombre ASC";

$stmt =$db->prepare($sql);
$stmt->bind_param("i",$limite);
$stmt->execute();

$resultado = $stmt->get_result();

while ($fila = $resultado->fetch_assoc()){
    echo htmlspecialchars($fila['nombre']);
    echo " - ";
    echo $fila['edad'];
    echo "<br>";
}

$resultado->free();
$stmt->close();
$db->close();
?>