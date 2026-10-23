<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Boletín de notas</title>
    <style>
        table { border-collapse: collapse; }
        th, td { padding: 8px 15px; text-align: center; }
        th { background-color: #3498db; color: white; }
        .final { font-weight: bold; background-color: #ecf0f1; }
    </style>
</head>
<body>

<?php

function boletin ($alumno) {
    $media = ($alumno["nota1"] + $alumno["nota2"] + $alumno["nota3"]) / 3;

    $html = "<h2>Boletín de notas</h2>";
    $html .= "<p><strong>Alumno:</strong> " . $alumno["nombre"] . " " . $alumno["apellidos"] . "</p>";

    $html .= "<table border = '1'>";
    $html .= "<tr><th>Evaluación</th><th>Nota</th></tr>";
    $html .= "<tr><td>1ª evaluación</td><td>" . $alumno["nota1"] . "</td></tr>";
    $html .= "<tr><td>2ª evaluación</td><td>" . $alumno["nota2"] . "</td></tr>";
    $html .= "<tr><td>3ª evaluación</td><td>" . $alumno["nota3"] . "</td></tr>";
    $html .= "<tr class = 'final'><td>Nota final</td><td>" . round($media, 2) . "</td></tr>";
    $html .= "</table>";

    return $html;
}

$alumno = [
    "nombre"    => "Laura",
    "apellidos" => "García Pérez",
    "nota1"     => 7,
    "nota2"     => 8.5,
    "nota3"     => 6
];

echo boletin($alumno);

?>

</body>
</html>