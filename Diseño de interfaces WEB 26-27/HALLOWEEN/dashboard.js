// Proteger la página: si no hay sesión, vuelve al login
if (sessionStorage.getItem('sesion') !== 'activa') {
    window.location.href = 'index.html';
}

// Saludar al usuario
document.getElementById('nombreUsuario').textContent =
    localStorage.getItem('usuarioActual') || 'ALMA ERRANTE';

// Cerrar sesión
document.getElementById('salir').addEventListener('click', () => {
    sessionStorage.removeItem('sesion');
    window.location.href = 'index.html';
});