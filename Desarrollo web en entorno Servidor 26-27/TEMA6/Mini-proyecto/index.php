
<?php

require_once 'datos/preguntas.php';
require_once 'funciones/funciones.php';

$total = count($preguntas);

?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test Zombi</title>
    <link rel="stylesheet" href="css/estilos.css">
</head>

<body>

<div class="contenedor">

    <h1>Test de supervivencia zombi</h1>

    <p>Responde las preguntas para comprobar si
       sobrevivirías a un apocalipsis zombi.</p>

    <?php if (!isset($_POST['enviar'])) { ?>

        <form method="POST">

            <?php mostrarPreguntas($preguntas); ?>

            <button type="submit" name="enviar">
                Corregir examen
            </button>

        </form>

    <?php } else { ?>

        <h2>Resultados</h2>

        <?php

        $respuestas = $_POST['respuesta'] ?? [];

        $aciertos = corregirTest($preguntas, $respuestas);

        $nota = ($aciertos / $total) * 10;

        echo "<h3>Nota: " . number_format($nota, 2) . " / 10</h3>";

        echo "<p>Aciertos: $aciertos de $total</p>";

        ?>

        <a href="index.php">Volver a intentarlo</a>

    <?php } ?>

</div>

</body>
</html>
