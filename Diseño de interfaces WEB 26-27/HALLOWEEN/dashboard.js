// Proteger la página: si no hay sesión, vuelve al login
if (sessionStorage.getItem('sesion') !== 'activa') {
    window.location.href = 'index.html';
}

// Saludar al usuario
document.getElementById('nombreUsuario').textContent =
    localStorage.getItem('usuarioActual') || 'ALMA ERRANTE';

// CAMBIO DE PESTAÑAS
const tabs = document.querySelectorAll('.tab');
const secciones = document.querySelectorAll('.seccion');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Quita "active" de todo...
        tabs.forEach(t => t.classList.remove('active'));
        secciones.forEach(s => s.classList.remove('active'));

        // ...y se lo pone a la pestaña pulsada y a su sección
        tab.classList.add('active');
        document.getElementById(tab.dataset.seccion).classList.add('active');
    });
});

// Cerrar sesión (está dentro de Ajustes)
document.getElementById('salir').addEventListener('click', () => {
    sessionStorage.removeItem('sesion');
    window.location.href = 'index.html';
});

//LINTERNA