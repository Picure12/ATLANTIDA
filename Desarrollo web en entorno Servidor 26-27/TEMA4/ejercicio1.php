<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<style>
    th {
        background-color: #BDEB4D;
        color: white;
        padding: 10px;
    }
    td {
        background-color: white;
        color: black;
        padding: 10px;
    }
</style>  


</head>
<body>

<?php
$ciudades = array(
    "Granada" => 150000, 
    "Madrid" => 3000000, 
    "Barcelona" =>2879200,
    "Málaga" =>240000,
    "Sevilla" =>500000,
    "Valencia" =>1584600,
    "Tarragona" =>485210
);

ksort($ciudades);

echo"<th3> Ordenado por ciudad </h3>";

echo "<table border='1'>";

echo "<tr>";
echo "<th>ciudad</th>";
echo "<th>poblacion</th>";
echo "</tr>";

foreach ($ciudades as $ciudad => $poblacion) {
    echo "<tr>";
    echo "<td>$ciudad</td>";
    echo "<td>$poblacion</td>";
    echo "</tr>";

}

echo "</table>";

asort($ciudades);   

echo"<th3> Ordenado por ciudad </h3>";

echo "<table border='1'>";

echo "<tr>";
echo "<th>$ciudad</th>";
echo "<th>$poblacion</th>";
echo "</tr>";

foreach ($ciudades as $ciudad => $poblacion) {
    echo "<tr>";
    echo "<td>$ciudad</td>";
    echo "<td>$poblacion</td>";
    echo "</tr>";

}
echo "</table>";


echo"<th3> Ciudad y cantidad con mas poblacion </h3>";

$ciudadMenos = array_key_first( $ciudades);
$poblacionMenos = $ciudades[$ciudadMenos];

$ciudadMas = array_key_last($ciudades);
$poblacionMas = $ciudades[$ciudadMas];




echo "<p>Ciudad con menos población: $ciudadMenos ($poblacionMenos habitantes)</p>";

echo "<p>Ciudad con más población: $ciudadMas ($poblacionMas habitantes)</p>";

?>


</body>
</html>