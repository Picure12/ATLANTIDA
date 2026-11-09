<?php
declare(strict_types=1);
require_once __DIR__ . '/VarGlobales.php';
$error = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $u = trim((string) ($_POST['usuario'] ?? ''));
    $p = (string) ($_POST['password'] ?? '');
    if ($u === '' || $p === '')
        $error = 'Escribe el usuario y la contraseña.';
    else {
        $i = comprobarCredenciales($u, $p);
        if ($i !== false) {
            session_regenerate_id(true);
            currentUser($i);
            header('Location: jardin.php');
            exit;
        }
        $error = 'El nombre de usuario o la contraseña son incorrectos.';
    }
}
?>
<!doctype html>
<html lang="es">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Acceso · La Mansión</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        .php-links {
            display: flex;
            gap: 1rem;
            justify-content: center;
            margin-top: 1rem;
            flex-wrap: wrap
        }

        .php-links a {
            color: #d9a47e
        }

        .php-error {
            color: #ffb2a4;
            text-align: center
        }
    </style>
</head>

<body>
    <main class="app-shell">
        <section class="screen login-screen">
            <div class="login-grain"></div>
            <aside class="portrait-card"><img src="assets/retrato-protagonista.png" alt="Retrato del visitante">
                <div class="portrait-caption"><span class="caption-kicker">EXPEDIENTE 001</span><strong>El
                        visitante</strong><span>Un hombre. Una noche demasiado larga.</span></div>
            </aside>
            <section class="login-content">
                <p class="eyebrow">ARCHIVO NOCTURNO <span>✦</span> 31 DE OCTUBRE</p>
                <h1>La Mansión<br><em>de la Medianoche</em></h1>
                <p class="login-intro">Alguien ha dejado la puerta abierta. O quizá nunca estuvo cerrada.</p>
                <div class="skull-stage">
                    <div class="skull-button is-open" aria-hidden="true"><span class="skull-head"><span
                                class="skull-brow"></span><span class="skull-eye skull-eye-left"></span><span
                                class="skull-eye skull-eye-right"></span><span class="skull-nose"></span><span
                                class="skull-cheek skull-cheek-left"></span><span
                                class="skull-cheek skull-cheek-right"></span><span
                                class="skull-teeth"></span></span><span
                            class="skull-jaw"><i></i><i></i><i></i><i></i><i></i></span></div>
                    <p class="skull-hint">La mandíbula guarda un secreto.</p>
                    <div class="login-panel">
                        <form method="post" action="login.php"><label for="user">Nombre del visitante</label><input
                                type="text" id="user" name="usuario" placeholder="Usuario" autocomplete="username"
                                required><label for="pass">La palabra secreta</label><input type="password" id="pass"
                                name="password" placeholder="Contraseña" autocomplete="current-password"
                                required><button class="enter-button" type="submit">ENTRAR EN LA MANSIÓN
                                <span>→</span></button><?php if ($error !== ''): ?>
                                <p class="login-feedback php-error" role="alert">
                                    <?= htmlspecialchars($error, ENT_QUOTES, 'UTF-8') ?></p><?php endif; ?>
                        </form>
                        <nav class="php-links"><a href="altaUsuario.php">Registrar usuario</a><a
                                href="cambioPass.php">Cambiar contraseña</a></nav>
                    </div>
                </div>
                <p class="login-footnote">NO TODAS LAS ALMAS QUE ENTRAN CONSIGUEN SALIR.</p>
            </section>
        </section>
    </main>
</body>

</html>