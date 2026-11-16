
<?php

require_once 'conexion.php';
$texto = 'lo';

$busqueda = "%" . $texto . "%";

$sql = " SELECT nombre, edad 
FROM alumnos
WHERE nombre LIKE ? 
ORDER BY nombre ASC";

$stmt =$db->prepare($sql);
$stmt->bind_param("s",$busqueda);
$stmt->execute();

$resultado = $stmt->get_result();

if ($resultado->num_rows > 0){
    
while ($fila = $resultado->fetch_assoc()) {
    echo htmlspecialchars($fila['nombre']);
    echo " - ";
    echo $fila['edad'];
    echo "<br>";
 }

}else{
    echo "no hay alumnos con esos valores";
}

$resultado->free();
$stmt->close();
$db->close();
?>