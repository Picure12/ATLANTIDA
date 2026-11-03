// Sonido al iniciar sesión / registrarse
const sonidoEntrada = new Audio('sounds/portail-du-nether.mp3');
sonidoEntrada.volume = 0.6;

const skullWrapper = document.getElementById('skullWrapper');
const hintText = document.getElementById('hintText');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');
const overlay = document.getElementById('transitionOverlay');

// Abrir la mandíbula al hacer clic en la calavera
skullWrapper.addEventListener('click', (e) => {
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

// Cierra la mandíbula, suena el sonido, funde a negro y redirige a dashboard.html
function entrarAlPortal(message) {
    skullWrapper.classList.remove('open');
    hintText.textContent = message;
    hintText.style.opacity = '1';

    sessionStorage.setItem('sesion', 'activa');

    sonidoEntrada.currentTime = 0;
    sonidoEntrada.play().catch(() => {});

    // 0.85s: la mandíbula ya cerró -> fundido a negro con "HAS CRUZADO EL PORTAL"
    setTimeout(() => overlay.classList.add('active'), 850);

    // 2.8s: redirige a la página principal
    setTimeout(() => {
        window.location.href = 'dashboard.html';
    }, 6500);
}

// REGISTRO: guarda el usuario y entra
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const [nombre, email, password] = registerForm.querySelectorAll('input');

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    if (usuarios.some(u => u.email === email.value)) {
        alert('Ese correo ya está registrado');
        return;
    }

    usuarios.push({ nombre: nombre.value, email: email.value, password: password.value });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    localStorage.setItem('usuarioActual', nombre.value);

    entrarAlPortal('Alma registrada... Abriendo destino');
});

// LOGIN: comprueba y entra
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const [email, password] = loginForm.querySelectorAll('input');

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const usuario = usuarios.find(u =>
        u.email.toLowerCase() === email.value.trim().toLowerCase() &&
        u.password === password.value
    );

    if (!usuario) {
        alert('Correo o contraseña incorrectos');
        return;
    }

    localStorage.setItem('usuarioActual', usuario.nombre);
    entrarAlPortal('Acceso concedido... Entrando al portal');
});