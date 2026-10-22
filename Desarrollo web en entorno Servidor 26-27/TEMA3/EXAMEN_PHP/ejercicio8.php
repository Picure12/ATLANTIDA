<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php

function precioFinal($precio, $porcentaje = 10){
     $total = $precio - ($precio * $descuento / 100);
     return $total;
}

echo "Precio final:" . $precioFinal (100);
echo "Precio final:" . $precioFinal (80, 25);

?>    
    
</body>
</html>
