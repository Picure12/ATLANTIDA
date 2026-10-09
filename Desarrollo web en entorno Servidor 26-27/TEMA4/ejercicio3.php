```php
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mascotas</title>

    <style>
        table {
            border-collapse: collapse;
            width: 600px;
        }

        th {
            background-color: lightblue;
            padding: 8px;
        }

        td {
            padding: 8px;
            border: 1px solid black;
        }

        tr:nth-child(even) {
            background-color: lightgray;
        }
    </style>
</head>

<body>

<?php

$mascotas = array(
    array(
        "nombre" => "Pepe",
        "peso" => 4.5,
        "color" => "Marrón",
        "edad" => 12
    ),
    array(
        "nombre" => "Sparky",
        "peso" => 3,
        "color" => "Blanco",
        "edad" => 2
    ),
    array(
        "nombre" => "Tobby",
        "peso" => 7.2,
        "color" => "Beige",
        "edad" => 8
    ),
    array(
        "nombre" => "Bigotes",
        "peso" => 4,
        "color" => "Negro",
        "edad" => 9
    ),
    array(
        "nombre" => "Ricky",
        "peso" => 0.1,
        "color" => "Verde",
        "edad" => 2
    )
);


// Mostrar todas las mascotas

echo "<h3>Mascotas</h3>";

echo "<table>";
echo "<tr>";
echo "<th>Nombre</th>";
echo "<th>Peso</th>";
echo "<th>Color</th>";
echo "<th>Edad</th>";
echo "</tr>";

foreach ($mascotas as $mascota) {
    echo "<tr>";
    echo "<td>" . $mascota["nombre"] . "</td>";
    echo "<td>" . $mascota["peso"] . "</td>";
    echo "<td>" . $mascota["color"] . "</td>";
    echo "<td>" . $mascota["edad"] . "</td>";
    echo "</tr>";
}

echo "</table>";


// Mostrar el peso de la mascota con código 3

echo "<h3>Peso de la mascota con código 3</h3>";

echo $mascotas[3]["peso"] . " kg";


// Mostrar el color de Sparky

echo "<h3>Color de Sparky</h3>";

foreach ($mascotas as $mascota) {
    if ($mascota["nombre"] == "Sparky") {
        echo $mascota["color"];
    }
}


// Mostrar la mascota de mayor edad

$mayor = $mascotas[0];

foreach ($mascotas as $mascota) {
    if ($mascota["edad"] > $mayor["edad"]) {
        $mayor = $mascota;
    }
}

echo "<h3>Mascota más mayor</h3>";

echo "Nombre: " . $mayor["nombre"] . "<br>";
echo "Peso: " . $mayor["peso"] . "<br>";
echo "Color: " . $mayor["color"] . "<br>";
echo "Edad: " . $mayor["edad"] . "<br>";


// Mostrar la mascota que pesa menos

$menor = $mascotas[0];

foreach ($mascotas as $mascota) {
    if ($mascota["peso"] < $menor["peso"]) {
        $menor = $mascota;
    }
}

echo "<h3>Mascota que pesa menos</h3>";

echo $menor["nombre"];

?>

</body>
</html>
```
