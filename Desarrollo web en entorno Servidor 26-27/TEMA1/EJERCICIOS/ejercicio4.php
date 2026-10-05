
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Datos de la Mascota</title>
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
            text-align: left;
        }
        th {
            background-color: #4CAF50;
            color: white;
            text-align: center;
        }
        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
        td.clave {
            font-weight: bold;
            width: 40%;
        }
    </style>
</head>
<body>

<?php

$mascota = array(
    "Nombre"  => "Max",
    "Familia" => "Cánido (Perro)",
    "Raza"    => "Golden Retriever",
    "Color"   => "Dorado",
    "Peso"    => "31.5 kg",
    "Altura"  => "58 cm",
    "Edad"    => "4 años"
);
?>

<h2>Ficha de la Mascota</h2>

<table>
    <thead>
        <tr>
            <th colspan="2">Información General</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($mascota as $campo => $valor): ?>
            <tr>
                <td class="clave"><?php echo $campo; ?></td>
                <td><?php echo $valor; ?></td>
            </tr>
        <?php endforeach; ?>
    </tbody>
</table>

</body>
</html>