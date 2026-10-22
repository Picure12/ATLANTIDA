<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
$notas = [6, 8, 4, 10];

function calcularMedia($notas) {
    $suma = 0;

    for ($i = 0; $i < count($notas); $i++) {
        $suma = $suma + $notas[$i];
    }
    $media = $suma / count($notas);

    return $media;
}

echo "La media es: " . calcularMedia($notas);

?>

</body>
</html>