
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Numero mayor</title>
</head>
<body>

<?php

$numeros = [-8, -3, -12, -1, -6];
$mayor = $numeros[0];

for ($i = 0; $i < count($numeros); $i++) {
    if ($numeros[$i] > $mayor) {
        $mayor = $numeros[$i];
    }
}
echo "El numero mayor es:" . $mayor;

?>

</body>
</html>
