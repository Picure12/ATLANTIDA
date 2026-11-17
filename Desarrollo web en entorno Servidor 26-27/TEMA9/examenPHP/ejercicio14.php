
<?php

require_once 'conexion.php';

$dni = '22222222B';

$sql = "SELECT a.nombre AS alumno,
               asig.nombre AS asignatura,
               m.anio,
               m.nota
        FROM alumnos a
        LEFT JOIN matriculas m ON a.dni = m.dni
        LEFT JOIN asignaturas asig ON m.codigo = asig.codigo
        WHERE a.dni = ?
        ORDER BY m.anio DESC, asig.nombre ASC";

$stmt = $db->prepare($sql);
$stmt->bind_param("s", $dni);
$stmt->execute();

$resultado = $stmt->get_result();
if ($resultado->num_rows == 0) {
    echo "Alumno no encontrado";
}

while ($fila = $resultado->fetch_assoc()) {

    echo "Alumno: " . htmlspecialchars($fila['alumno']) . "<br>";

    if ($fila['asignatura'] === null) {
        echo "Sin matrículas<br>";
    } else {
        echo "Asignatura: " . htmlspecialchars($fila['asignatura']) . "<br>";
        echo "Año: " . $fila['anio'] . "<br>";

        if ($fila['nota'] === null) {
            echo "Nota: Pendiente<br>";
        } else {
            echo "Nota: " . $fila['nota'] . "<br>";
        }
    }

    echo "<hr>";
}

$resultado->free();
$stmt->close();
$db->close();

?>
