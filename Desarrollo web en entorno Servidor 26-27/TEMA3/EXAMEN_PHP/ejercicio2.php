<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Descuento</title>
</head>
<body>

<?php

$importe = 120;

if ($importe >= 100) {
    $importe = $importe - ($importe * 0.10);
}

echo "El importe final es: " . $importe . " euros";

?>
</body>
</html>