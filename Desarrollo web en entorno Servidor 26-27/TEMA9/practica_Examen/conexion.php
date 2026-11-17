<?php
// Configuración del modo estricto de errores para MySQLi
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

try {
    // Parámetros de conexión: servidor, usuario (root), contraseña (vacía en XAMPP), base de datos (centro)
    $db = new mysqli('localhost', 'root', '', 'centro');
    
    // Establecer el conjunto de caracteres a utf8mb4
    $db->set_charset('utf8mb4');
    
} catch (mysqli_sql_exception $e) {
    // Control de errores seguro sin mostrar datos internos al usuario
    error_log($e->getMessage());
    echo "Se ha producido un error al conectar con la base de datos.";
}
?>
```[cite: 1]

---

### 2. Cómo usarlo en tus ejercicios (Ejemplo práctico)
Para cualquier ejercicio de tu preexamen que necesite la base de datos, solo tienes que incluir el archivo `conexion.php` al principio mediante `require_once` y utilizar la variable `$db`[cite: 1]:

```php
<?php
// Reutilizamos la conexión
require_once 'conexion.php';

// Ejemplo rápido para listar los alumnos de la tabla
$resultado = $db->query("SELECT nombre, edad FROM alumnos");

echo "<ul>";
while ($fila = $resultado->fetch_assoc()) {
    echo "<li>" . htmlspecialchars($fila['nombre'], ENT_QUOTES, 'UTF-8') . " (" . $fila['edad'] . " años)</li>";
}
echo "</ul>";

// Liberar resultados y cerrar conexión
$resultado->free();
$db->close();
?>
```[cite: 1]

<FollowUp label="¿Quieres que veamos cómo resolver el ejercicio 02 o el 04 de consultas preparadas?" query="¿Cómo se resuelven los ejercicios de consultas preparadas como el ejercicio 4?"/>
?>