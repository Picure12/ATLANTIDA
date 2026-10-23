

const sonidoEntrada = new Audio('sounds/puerta.mp3');
sonidoEntrada.volume = 0.6;


const skullWrapper = document.getElementById('skullWrapper');
const hintText = document.getElementById('hintText');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');
const overlay = document.getElementById('transitionOverlay');
const dashboard = document.getElementById('dashboard');
const portal = document.querySelector('.portal-container');
const nombreUsuario = document.getElementById('nombreUsuario');
const botonSalir = document.getElementById('salir');



skullWrapper.addEventListener('click', (e) => {
    if (e.target.closest('.form-container')) return;

    if (!skullWrapper.classList.contains('open')) {
        skullWrapper.classList.add('open');
        hintText.style.opacity = '0';
    }
});

showRegister.addEventListener('click', () => {
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
});

showLogin.addEventListener('click', () => {
    registerForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
});

// Oculta el portal y muestra la página principal
function mostrarDashboard() {
    portal.style.display = 'none';
    nombreUsuario.textContent = localStorage.getItem('usuarioActual') || 'ALMA ERRANTE';
    dashboard.classList.remove('hidden');
    requestAnimationFrame(() => dashboard.classList.add('visible')); // activa el fundido
}

function entrarAlPortal(message) {
    skullWrapper.classList.remove('open');
    hintText.textContent = message;
    hintText.style.opacity = '1';

    sessionStorage.setItem('sesion', 'activa');

    sonidoEntrada.currentTime = 0;
    sonidoEntrada.play().catch(() => {});

    // 0.8s: la mandíbula ya cerró -> la pantalla se funde a negro
    setTimeout(() => overlay.classList.add('active'), 850);

    // 2.8s: con la pantalla en negro cambiamos a la página principal
    // y quitamos el negro para que aparezca con fundido
    setTimeout(() => {
        mostrarDashboard();
        overlay.classList.remove('active');
    }, 2800);
}

// Si ya había sesión iniciada (al recargar la página), entra directo
if (sessionStorage.getItem('sesion') === 'activa') {
    mostrarDashboard();
}

// Cerrar sesión: vuelve al portal
botonSalir.addEventListener('click', () => {
    sessionStorage.removeItem('sesion');
    location.reload();
});

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
    const usuario = usuarios.find(u => u.email === email.value && u.password === password.value);

    if (!usuario) {
        console.log ("Correo o contraseña incorrecta")
        return;
    }

    localStorage.setItem('usuarioActual', usuario.nombre);
    entrarAlPortal('Acceso concedido... Entrando al portal');
});