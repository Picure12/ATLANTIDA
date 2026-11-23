
<?php
session_start();

$error = "";

if (isset($_POST['entrar'])) {

    $usuario = $_POST['usuario'] ?? '';
    $password = $_POST['password'] ?? '';

    if ($usuario === "admin" && $password === "1234") {

        session_regenerate_id(true);

        $_SESSION['usuario'] = $usuario;
        $_SESSION['rol'] = "Administrador";
        $_SESSION['visitas'] = 0;
        $_SESSION['ultimo_acceso'] = time();

        header("Location: panel.php");
        exit;

    } else {
        $error = "Usuario o contraseña incorrectos";
    }
}
?>

<h1>Iniciar sesión</h1>

<?php
if (isset($_GET['expirada'])) {
    echo "<p>La sesión ha expirado</p>";
}

echo "<p>" . htmlspecialchars($error) . "</p>";
?>

<form method="POST">
    <label>Usuario:</label>
    <input type="text" name="usuario" required>

    <br><br>

    <label>Contraseña:</label>
    <input type="password" name="password" required>

    <br><br>

    <button type="submit" name="entrar">Entrar</button>
</form>
