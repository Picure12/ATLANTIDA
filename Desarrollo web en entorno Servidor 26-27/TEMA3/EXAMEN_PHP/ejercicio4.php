
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Aprobados y suspensos</title>
</head>
<body>

<?php

$notas = [4, 7, 5, 3, 9, 6];
$aprobados = 0;
$suspensos = 0;

for ($i = 0; $i < count($notas); $i++) {
    if ($notas[$i] >= 5) {
        $aprobados++;
    } else {
        $suspensos++;
    }
}
echo "Aprobados:" . $aprobados . "<br>";
echo "Suspensos:" . $suspensos;

?>

</body>
</html>