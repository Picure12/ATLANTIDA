<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php


function boletin($nombre, $notas){
    echo "<table>";
    echo "<tr><th>Alumnos</th></th>" .$nombre. "</th></tr>";

    foreach ($notas as $asignatura => $nota){
       echo "<tr>";
       echo "<td>" . $asignatura . "</td>";
       echo "<td>" . $nota . "</td>"; 
       echo "</tr>";
    }

    echo "</table>";
}

$notas = [
    "Matematicas" => "Sobresaliente",
    "Lengua" => "Notable",
    "Dinujo" => "Insuficiente"
];

boletin("Juan Ramirez", $notas);

?>


</body>
</html>