
<?php

function mostrarPreguntas($preguntas) {

    foreach ($preguntas as $indice => $pregunta) {

        echo "<div class='pregunta'>";

        echo "<h3>" . ($indice + 1) . ". " .
             htmlspecialchars($pregunta['pregunta']) . "</h3>";

        foreach ($pregunta['opciones'] as $numero => $opcion) {

            echo "<label>";

            echo "<input type='radio'
                    name='respuesta[$indice]'
                    value='$numero' required>";

            echo htmlspecialchars($opcion);

            echo "</label>";
        }

        echo "</div>";
    }
}

function corregirTest($preguntas, $respuestas) {

    $aciertos = 0;

    foreach ($preguntas as $indice => $pregunta) {

        if (isset($respuestas[$indice]) &&
            $respuestas[$indice] == $pregunta['correcta']) {

            $aciertos++;

        } else {

            echo "<div class='error'>";

            echo "<p><strong>Pregunta " . ($indice + 1) . ":</strong> ";
            echo htmlspecialchars($pregunta['pregunta']) . "</p>";

            echo "<p>Respuesta correcta: " .
                 htmlspecialchars(
                     $pregunta['opciones'][$pregunta['correcta']]
                 ) . "</p>";

            echo "</div>";
        }
    }

    return $aciertos;
}

?>
