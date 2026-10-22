<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
$matriz = [
    [2, 4, 6],
    [1, 3, 5]
];

$suma = 0;

for($i = 0; $i < count($matriz); $i++){
    for($j = 0; $j < count($matriz[$i]); $j++){
        $suma = $suma + $matriz[$i][$j];
    };
}
echo "Total de la suma es:" . $suma;
    
?>    
</body>
</html>