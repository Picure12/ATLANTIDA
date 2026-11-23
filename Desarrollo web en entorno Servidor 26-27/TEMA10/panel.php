
<?php
session_start();

if (!isset($_SESSION['usuario'])) {
    header("Location: login.php");
    exit;
}

// Caducidad de 10 minutos
if (time() - $_SESSION['ultimo_acceso'] > 600) {

    $_SESSION = [];
    session_destroy();

    header("Location: login.php?expirada=1");
    exit;
}

$_SESSION['ultimo_acceso'] = time();
$_SESSION['visitas']++;

$usuario = htmlspecialchars($_SESSION['usuario']);
$rol = htmlspecialchars($_SESSION['rol']);
?>

<h1>Zona privada</h1>

<p>Bienvenido, <?php echo $usuario; ?></p>

<p>Rol: <?php echo $rol; ?></p>

<p>Visitas: <?php echo $_SESSION['visitas']; ?></p>

<a href="logout.php">Cerrar sesión</a>
