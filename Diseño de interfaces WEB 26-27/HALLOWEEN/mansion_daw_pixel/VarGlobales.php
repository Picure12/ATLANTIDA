<?php
declare(strict_types=1);
if (session_status() !== PHP_SESSION_ACTIVE) session_start();
const COL_USUARIO=0, COL_PASSWORD=1, COL_EMAIL=2, COL_PERFIL=3, COL_PREGUNTA=4, COL_ACTUAL=5;
function inicializarMatriz(): void {
 if (!isset($_SESSION['mimatriz']) || !is_array($_SESSION['mimatriz'])) {
  // Usuario de pruebas equivalente al credenciales.json original: admin / 123 / luna
  $_SESSION['mimatriz']=[['admin',password_hash('123',PASSWORD_DEFAULT),'admin@example.com','admin','luna',false]];
 }
}
function currentUser(int $indice): void {
 inicializarMatriz(); foreach($_SESSION['mimatriz'] as $i=>&$fila) $fila[COL_ACTUAL]=($i===$indice); unset($fila);
 $f=$_SESSION['mimatriz'][$indice]; $_SESSION['usuario_actual']=['Usuario'=>$f[COL_USUARIO],'Email'=>$f[COL_EMAIL],'Perfil'=>$f[COL_PERFIL]];
}
function comprobarCredenciales(string $usuario,string $password): int|false {
 inicializarMatriz(); foreach($_SESSION['mimatriz'] as $i=>$f) if(strcasecmp($f[COL_USUARIO],$usuario)===0 && password_verify($password,$f[COL_PASSWORD])) return $i; return false;
}
function AltaUsuario(string $usuario,string $password,string $email,string $pregunta): bool|string {
 inicializarMatriz(); $usuario=trim($usuario);$email=trim($email);$pregunta=trim($pregunta);
 if($usuario===''||$password===''||$email===''||$pregunta==='') return 'Todos los campos son obligatorios.';
 if(mb_strlen($usuario)<3||mb_strlen($usuario)>30) return 'El usuario debe tener entre 3 y 30 caracteres.';
 if(strlen($password)<6) return 'La contraseña debe tener al menos 6 caracteres.';
 if(!filter_var($email,FILTER_VALIDATE_EMAIL)) return 'Introduce un correo válido.';
 foreach($_SESSION['mimatriz'] as $f){if(strcasecmp($f[COL_USUARIO],$usuario)===0)return 'Ese usuario ya existe.';if(strcasecmp($f[COL_EMAIL],$email)===0)return 'Ese correo ya está registrado.';}
 $_SESSION['mimatriz'][]=[$usuario,password_hash($password,PASSWORD_DEFAULT),$email,'user',$pregunta,false];return true;
}
function cambioContraseña(string $usuario,string $pregunta,string $nueva): bool|string {
 inicializarMatriz();if(trim($usuario)===''||trim($pregunta)===''||$nueva==='')return 'Completa todos los campos.';if(strlen($nueva)<6)return 'La contraseña debe tener al menos 6 caracteres.';
 foreach($_SESSION['mimatriz'] as &$f){if(strcasecmp($f[COL_USUARIO],trim($usuario))===0 && hash_equals(mb_strtolower(trim($f[COL_PREGUNTA])),mb_strtolower(trim($pregunta)))){$f[COL_PASSWORD]=password_hash($nueva,PASSWORD_DEFAULT);unset($f);return true;}}unset($f);return 'El usuario o la respuesta de seguridad no son correctos.';
}
function exigirLogin(): void {if(empty($_SESSION['usuario_actual'])){header('Location: login.php');exit;}}
function cerrarSesion(): void {$_SESSION=[];if(ini_get('session.use_cookies')){$p=session_get_cookie_params();setcookie(session_name(),'',time()-42000,$p['path'],$p['domain'],$p['secure'],$p['httponly']);}session_destroy();}
inicializarMatriz();
