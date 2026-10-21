const skullWrapper = document.getElementById('skullWrapper');
const hintText = document.getElementById('hintText');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');

// Abrir la mandíbula al hacer clic en la calavera
skullWrapper.addEventListener('click', (e) => {
    // Evita que se cierre si haces clic directamente dentro del formulario
    if (e.target.closest('.form-container')) return;

    if (!skullWrapper.classList.contains('open')) {
        skullWrapper.classList.add('open');
        hintText.style.opacity = '0';
    }
});

// Cambiar entre Login y Registro
showRegister.addEventListener('click', () => {
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
});

showLogin.addEventListener('click', () => {
    registerForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
});

// Acción al registrarse o iniciar sesión (Cierra la mandíbula y redirige)
function handleAuthAction(e, message) {
    e.preventDefault();
    
    // Animación de cierre de mandíbula
    skullWrapper.classList.remove('open');
    hintText.textContent = message;
    hintText.style.opacity = '1';

    // Redirigir a la web principal después de que termine la animación (0.6 segundos)
    setTimeout(() => {
        window.location.href = 'dashboard.html'; // Cambia esto por tu página principal
    }, 800);
}

loginForm.addEventListener('submit', (e) => handleAuthAction(e, 'Acceso concedido... Entrando al portal'));
registerForm.addEventListener('submit', (e) => handleAuthAction(e, 'Alma registrada... Abriendo destino'));