<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>


    </style>    
<?php
$alumnos = array(
    "Antonio" => array(5, 8.3, 9, 7),
    "Ana" => array(8, 7, 4.5, 9),
    "Benito" => array(9, 6.75, 9, 3.1),
    "Carlos" => array(6, 7, 8, 5),
    "Lucia" => array(10, 9, 8, 9)
);
echo "<table border= '1'>"; 

echo "<tr>";
echo "<th>Alumno</th>";
echo "<th>Matemáticas</th>";
echo "<th>Lengua</th>";
echo "<th>Ciencias Naturales</th>";
echo "<th>Geografía</th>";
echo "<th>Media</th>";
echo "</tr>";

for each($alumnos as $nombre => $notas) {
    
    $media = ($notas[0] + $notas[1] + $notas[2] + $notas[3]) / 4;
    echo "<tr>";

    echo "<td>$nombre</td>";
    echo "<td>" . $notas[0] . "</td>";
    echo "<td>" . $notas[1] . "</td>";
    echo "<td>" . $notas[2] . "</td>";
    echo "<td>" . $notas[3] . "</td>";
    echo "<td>" . round($media, 3) . "</td>";

    echo "</tr>";
}

$buscarPersona = "Ana";

echo "<h3>Notas de $buscarPersona</h3>";
if (isset($alumnos[$alumnoBuscado])) {
    
    $notas = $alumnos[$alumnoBuscado];

    echo "Matematicas: " . $notas[0] . "<br>";
    echo "Lengua: " . $notas[1] . "<br>";
    echo "Ciencias Naturales: " . $notas[2] . "<br>";
    echo "Geografía: " . $notas[3] . "<br>";
}else{
    echo "El alumno no existe"; 
}

?>    


</head>
<body>
    
</body>
</html>