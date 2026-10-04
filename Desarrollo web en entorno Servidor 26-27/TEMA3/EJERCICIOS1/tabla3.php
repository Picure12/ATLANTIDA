<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Notas de alumnos</title>
<style>
    th {
        background-color: black;
        color: white;
        padding: 10px;
    }
    td {
        background-color: blue;
        color: white;
        padding: 10px;
    }
    

</style>  
</head>
  
<body>

<?php

$alumnos = array(
    "Adrián" => 8,
    "Carlos" => 5,
    "Laura" => 9,
    "Marta" => 3,
    "Javier" => 7,
    "Lucía" => 10,
    "Pablo" => 4
);

echo "<table border='1'>";

echo "<tr>";
echo "<th>Alumno</th>";
echo "<th>Nota</th>";
echo "<th>Calificación</th>";
echo "</tr>";

foreach ($alumnos as $nombre => $nota) {

    if ($nota <= 4) {
        $calificacion = "Suspenso";
    } elseif ($nota <= 6) {
        $calificacion = "Aprobado";
    } elseif ($nota <= 8) {
        $calificacion = "Bien";
    } elseif ($nota == 9) {
        $calificacion = "Notable";
    } else {
        $calificacion = "Matrícula de honor";
    }

    echo "<tr>";
    echo "<td>$nombre</td>";
    echo "<td>$nota</td>";
    echo "<td>$calificacion</td>";
    echo "</tr>";
}

echo "</table>";

?>

</body>
</html>