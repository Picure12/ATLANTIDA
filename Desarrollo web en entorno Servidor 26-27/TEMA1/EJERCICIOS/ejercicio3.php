<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Tabla de Operaciones con Array</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 30px;
        }
        table {
            border-collapse: collapse;
            width: 350px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        th, td {
            border: 1px solid #000;
            padding: 10px;
            text-align: center;
        }
        th {
            background-color: #f2f2f2;
            font-weight: bold;
        }
        tr:nth-child(even) {
            background-color: #fafafa;
        }
    </style>
</head>
<body>

<?php
// 1. Declaramos y damos valor a las variables X, Y, Z
$x = 10;
$y = 5;
$z = 2;

// 2. Creamos el array posicional (indexado) con los valores y operaciones requeridas
$valores = array();

$valores[0] = $x;
$valores[1] = $y;
$valores[2] = $z;
$valores[3] = $x + $y;
$valores[4] = $y * $z;
$valores[5] = ($z != 0) ? ($x / $z) : "Error (Div/0)";
$valores[6] = $x + $y + $z;
$valores[7] = ($x != 0) ? (($y + $z) / $x) : "Error (Div/0)";

// Expresiones explicativas para mostrar la fórmula en la tabla
$expresiones = array(
    "X",
    "Y",
    "Z",
    "X + Y",
    "Y * Z",
    "X / Z",
    "X + Y + Z",
    "(Y + Z) / X"
);
?>

<h2>Resultados guardados en el Array</h2>

<table>
    <thead>
        <tr>
            <th>Posición</th>
            <th>Expresión</th>
            <th>Valor Almacenado</th>
        </tr>
    </thead>
    <tbody>
        <?php for ($i = 0; $i < count($valores); $i++): ?>
            <tr>
                <td><strong><?php echo $i; ?></strong></td>
                <td><?php echo $expresiones[$i]; ?></td>
                <td>
                    <?php 
                        if (is_numeric($valores[$i])) {
                            echo is_float($valores[$i]) ? number_format($valores[$i], 2) : $valores[$i];
                        } else {
                            echo $valores[$i];
                        }
                    ?>
                </td>
            </tr>
        <?php endfor; ?>
    </tbody>
</table>

</body>
</html>