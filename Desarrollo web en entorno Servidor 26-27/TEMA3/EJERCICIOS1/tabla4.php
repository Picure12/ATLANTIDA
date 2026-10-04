<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php

$meses = array(
    "Enero", "Febrero", "Marzo", "Abril",
    "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"
);

$diasSemana = array(
    "Lunes", "Martes", "Miércoles", "Jueves",
    "Viernes", "Sábado", "Domingo"
);

$diasMes = array(
    31, 28, 31, 30, 31, 30,
    31, 31, 30, 31, 30, 31
);

$diaSemana = 0;

for ($mes = 0; $mes < 12; $mes++){
    echo "<h3>" . $meses[$mes] . "</h3>";
    echo "<table border='1'>";
    echo "<tr>";

    for ($i = 0; $i < 7; $i++){
        echo "<th>" . $diasSemana[$i] . "</th>";
    }

    echo "</tr>";

    $dia = 1;

    while ($dia <= $diasMes[$mes]){
        echo "<tr>";

        for ($i = 0; $i < 7; $i++){
            if ($dia == 1 && $i < $diaSemana){
                echo "<td></td>";
            } elseif ($dia <= $diasMes[$mes]){
                echo "<td>$dia</td>";
                $dia++;
            } else {
                echo "<td></td>";
            }  
        }
        echo "</tr>";
        
        $diaSemana = ($diaSemana + 7) % 7;
    }
    echo "</table>";
}

?>
    
</body>
</html>