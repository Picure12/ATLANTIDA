
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cuadrado y al cubo</title>
    <style>
        table {
            border-collapse: collapse;
            margin: 50px auto;
            width: 235px;
        }

        th {
            background-color: black;
            color: white;
            padding: 10px;
        }

        td {
            padding: 10px;
            text-align: center;
        }

        tr{
            background-color: #9abb4f;
            color: white;
        }
        
    </style>

</head>

<body>
    $
<?php

$numeros = array(3, 8, 7, -6);

echo "<table>";
echo "<tr>";
echo "<th>Número</th>";
echo "<th>Cuadrado</th>";
echo "<th>Cubo</th>";
echo "</tr>";

foreach ($numeros as $numero){
    $cuadrado = $numero **2;
    $cubo = $numero ** 3;

    echo "<tr>";
    echo "<td>$numero</td>";
    echo "<td>$cuadrado</td>";
    echo "<td>$cubo</td>";
    echo "</tr>";
    
}

echo "</table>";

?>

</body>
</html>

