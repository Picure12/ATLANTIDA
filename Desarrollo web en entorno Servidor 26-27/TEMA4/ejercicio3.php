
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
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

echo "<h3>Mascotas</3>";

foreach ($mascotas as $mascota){
    echo $mascota["Nombre"]. "</br>"
}

echo "<h3>Peso de la mascota</h3>";

echo $mascota[3]["Peso"] . "kg";

echo "<h3> Color Sparky</h3>"

foreach($mascotas as $mascota){
    if($mascota["nombre"] == "Sparky"){
        echo $mascota["color"];
    }
}

$mayor = [$mascotas[0]];

foreach ($mascotas as $mascota){
    if($mascotas["edad"] > $mayor["edad"]){
        $mayor = $mascota;
    }
}

echo "<h3>Mascota más mayor</h3>";

echo "Nombre: " . $mayor["nombre"] . "<br>";
echo "Peso: " . $mayor["peso"] . "<br>";
echo "Color: " . $mayor["color"] . "<br>";
echo "Edad: " . $mayor["edad"] . "<br>";


$menor = $mascotas[0];

foreach($mascotas as $mascota){

    if ($mascotas["peso"]<$menor["peso"]){
        $menor = $mascota; 
    } 
}
echo "<h3>Mascota que pesa menos</h3>"
echo $menor["nombre"];
?>

    
</body>
</html>