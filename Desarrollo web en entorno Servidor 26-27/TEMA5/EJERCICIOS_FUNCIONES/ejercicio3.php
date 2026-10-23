<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .rojo  { background-color: #e74c3c; color: white; }
        .verde { background-color: #2ecc71; color: black; }
        .azul  { background-color: #3498db; color: white; }
    </style>
</head>
<body>
    
<?php

function tablaClases ($clase1, $clase2, $clase3) {
    echo "<table border = '1'>";
    echo "<tr class = '$clase1'><td>$clase1</td></tr>";
    echo "<tr class = '$clase2'><td>$clase2</td></tr>";
    echo "<tr class = '$clase3'><td>$clase3</td></tr>";
    echo "</table>";
}

tablaClases ("rojo", "verde", "azul");

?>
</body>
</html>