
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Conversor de Fahrenheit a Celsius</title>
  
</head>
<body>

    <h2>Conversor de Fahrenheit a Celsius</h2>

    
    <form action="" method="POST">
        <label for="fahrenheit">Introduce los grados Fahrenheit (ºF):</label>
        <input type="number" step="any" name="fahrenheit" id="fahrenheit" required>
        <button type="submit">Convertir</button>
    </form>

    <br>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['fahrenheit'])) {

    $fahrenheit = $_POST['fahrenheit'];
    
    $celsius = 5 * ($fahrenheit - 32) / 9;

    echo "<strong>$fahrenheit grados ºF corresponden a $celsius ºC</strong>";
}
?>

</body>
</html>