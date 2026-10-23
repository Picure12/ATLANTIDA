<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php

function tablaColores ($color1, $color2, $color3) {
    echo "<table border = '1'>";

    echo "<tr><td style ='background-color: $color1;'>$color1</td></tr>";
    echo "<tr><td style ='background-color: $color2;'>$color2</td></tr>";
    echo "<tr><td style ='background-color: $color3;'>$color3</td></tr>";

    echo "</table>";
}
tablaColores ("#e74c3c", "#2ecc71", "#3498db");

?>

</body>
</html>