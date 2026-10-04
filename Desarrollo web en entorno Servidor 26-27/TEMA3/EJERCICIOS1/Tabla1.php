<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Tablas de multiplicar</title>

    <style>
        body {
            font-family: Arial, sans-serif;
        }

        .tabla {
            border-collapse: collapse;
            margin: 20px auto;
        }

        .tabla td {
            border: 2px solid #e84b4b;
            background-color: #e6a0a0;
            width: 70px;
            height: 25px;
            text-align: center;
        }

    
    </style>
</head>

<body>

<?php

for ($i = 1; $i <= 10; $i++) {

    echo "<table class='tabla'>";
   
    for ($mult = 1; $mult <= 10; $mult++) {

        $resultado = $i * $mult;

        echo "<tr>";
        echo "<td>" . $i . "x" . $mult . "</td>";
        echo "<td>" . $resultado . "</td>";
        echo "</tr>";
    }

    echo "</table>";
}

?>

</body>
</html>