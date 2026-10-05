
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Cálculo de Consumo de Vehículo</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; }
        .card { border: 1px solid #ccc; padding: 20px; border-radius: 8px; max-width: 400px; }
        .dato { margin-bottom: 10px; }
        .resultado { font-weight: bold; color: #2e7d32; }
    </style>
</head>
<body>

<?php
// 1. Almacenamos los valores en variables
$kilometros = 450.5; // Distancia recorrida en km
$combustible = 28.3; // Combustible consumido en litros

// 2. Calculamos el consumo medio por kilómetro
// Verificamos que los kilómetros sean mayores a 0 para evitar división por cero
if ($kilometros > 0) {
    $consumoMedioPorKm = $combustible / $kilometros;
    // Opcional: Consumo estandarizado a los 100 km (muy común en automoción)
    $consumoCada100Km = $consumoMedioPorKm * 100;
} else {
    $consumoMedioPorKm = 0;
    $consumoCada100Km = 0;
}
?>

<div class="card">
    <h2>Resumen del Viaje</h2>
    
    <div class="dato">
        <strong>Kilómetros recorridos:</strong> <?php echo number_format($kilometros, 2); ?> km
    </div>
    
    <div class="dato">
        <strong>Combustible consumido:</strong> <?php echo number_format($combustible, 2); ?> litros
    </div>
    
    <hr>
    
    <div class="dato resultado">
        <strong>Consumo medio por km:</strong> <?php echo number_format($consumoMedioPorKm, 3); ?> l/km
    </div>
    
    <div class="dato">
        <small>(Equivale a <?php echo number_format($consumoCada100Km, 2); ?> litros cada 100 km)</small>
    </div>
</div>

</body>
</html>