"use strict";

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const loginScreen = $("#login-screen");
const portalScreen = $("#portal-screen");
const mansionScreen = $("#mansion-screen");
const skullButton = $("#skull-toggle");
const loginPanel = $("#login-panel");
const loginForm = $("#login-form");
const loginFeedback = $("#login-feedback");
const gameMessage = $("#game-msg");
const dialogueBox = $("#dialogue-box");

let hasKey = false;
let crowHasFlown = false;
let stoneIsOpen = false;
let pumpkinIsLit = false;
let loginTransitionTimer = null;
let ambientTimer = null;
let activeNpc = null;
let partyEnergyTimer = null;
let mansionEffectTimer = null;
const mansionEffectTimeouts = new Map();

/*
 * DIÁLOGOS DE LOS PERSONAJES
 * Puedes cambiar title, kicker y text sin tocar la lógica del juego.
 * Cada clave corresponde al atributo data-npc de su personaje en index.html.
 */
const NPC_DIALOGUES = {
  trumpeter: {
    title: "Huesos, el trompetista",
    kicker: "CONVERSACIÓN · LA BANDA",
    text: "Llevo tres siglos practicando este solo. Esta noche, por fin, alguien parece escucharlo.",
  },
  guitarist: {
    title: "Don Calavera",
    kicker: "CONVERSACIÓN · LA BANDA",
    text: "La última vez que afiné esta guitarra todavía tenía pulso. Qué tiempos aquellos.",
  },
  drummer: {
    title: "Bombo",
    kicker: "CONVERSACIÓN · LA BANDA",
    text: "!MI BOMBOOO!!!!",
  },
  ghost: {
    title: "Ofelia, la aparición",
    kicker: "CONVERSACIÓN · INVITADA",
    text: "Perdona si atravieso el suelo. Todavía no me acostumbro a no tener que llamar a la puerta.",
  },
  zombie: {
    title: "Roque, el zombi",
    kicker: "CONVERSACIÓN · INVITADO",
    text: "¿Has visto mi brazo? Lo dejé junto a la fuente... o quizá fue el martes pasado.",
  },
  witch: {
    title: "Madame Bruma",
    kicker: "CONVERSACIÓN · INVITADA",
    text: "La luna está de buen humor. Es una noche excelente para promesas, malos presagios y bailes.",
  },
  pumpkin: {
    title: "Calabacín",
    kicker: "CONVERSACIÓN · INVITADO",
    text: "Tengo una vela dentro, dos pies prestados y muchas ganas de que no amanezca.",
  },
};

// Textos de ambiente: pequeños cambios para que el jardín no parezca congelado.
const AMBIENT_LINES = [
  "Una ráfaga mueve las ramas. Las luces de la mansión parpadean.",
  "La orquesta cambia de compás y alguien ríe junto a la verja.",
  "Una ventana se apaga en el piso superior. Un instante después vuelve a encenderse.",
  "Algo se mueve detrás de las cortinas del ala este.",
  "Las hojas secas cruzan el camino empujadas por el viento.",
  "A lo lejos, una campana da una hora que no reconoces.",
];

function setGameMessage(message) {
  gameMessage.textContent = message;
}

function clearSpeakingNpc() {
  if (activeNpc) activeNpc.classList.remove("is-speaking");
  activeNpc = null;
}

function showDialogue(title, message, kicker = "DIÁLOGO", sourceNpc = null) {
  clearSpeakingNpc();
  $("#dialogue-kicker").textContent = kicker;
  $("#dialogue-title").textContent = title;
  $("#dialogue-text").textContent = message;
  dialogueBox.hidden = false;
  if (sourceNpc) {
    activeNpc = sourceNpc;
    activeNpc.classList.add("is-speaking");
  }
}

function closeDialogue() {
  dialogueBox.hidden = true;
  clearSpeakingNpc();
}

function startAmbientLife() {
  window.clearInterval(ambientTimer);
  ambientTimer = window.setInterval(() => {
    if (mansionScreen.hidden || !dialogueBox.hidden) return;
    const line =
      AMBIENT_LINES[Math.floor(Math.random() * AMBIENT_LINES.length)];
    setGameMessage(line);
  }, 19000);
  startMansionEffects();
}

function startMansionEffects() {
  stopMansionEffects();
  const windows = $$(".haunt-window");
  if (!windows.length) return;

  mansionEffectTimer = window.setInterval(() => {
    if (mansionScreen.hidden) return;
    const target = windows[Math.floor(Math.random() * windows.length)];
    const effect = Math.random() < 0.48 ? "is-dark" : "shadow-pass";
    triggerWindowEffect(
      target,
      effect,
      effect === "is-dark" ? 1450 + Math.random() * 1500 : 1900,
    );
  }, 2100);
}

function stopMansionEffects() {
  window.clearInterval(mansionEffectTimer);
  mansionEffectTimer = null;
  mansionEffectTimeouts.forEach((timer, element) => {
    window.clearTimeout(timer);
    element.classList.remove("is-dark", "shadow-pass");
  });
  mansionEffectTimeouts.clear();
}

function inspectWindow(event) {
  const windowElement = event.currentTarget;
  const room = ROOM_DIALOGUES[windowElement.dataset.room];
  if (!room) return;

  const wasDark = windowElement.classList.contains("is-dark");
  const effect = wasDark ? "shadow-pass" : "is-dark";
  triggerWindowEffect(
    windowElement,
    effect,
    effect === "is-dark" ? 4200 : 2100,
  );
  setGameMessage(
    wasDark
      ? "Una sombra cruza la habitación tras el cristal."
      : "La luz de una habitación se apaga al acercarte.",
  );
  showDialogue(room.title, room.text, "AL OTRO LADO DEL CRISTAL");
}

function toggleSkull() {
  const isOpen = skullButton.getAttribute("aria-expanded") === "true";
  skullButton.setAttribute("aria-expanded", String(!isOpen));
  skullButton.classList.toggle("is-open", !isOpen);
  loginPanel.hidden = isOpen;
  $("#skull-hint").textContent = "La mandíbula guarda un secreto.";
  if (!isOpen) window.setTimeout(() => $("#user").focus(), 220);
}

async function verificarCredenciales(usuario, password) {
  try {
    const respuesta = await fetch("credenciales.json", { cache: "no-store" });
    if (!respuesta.ok)
      throw new Error("No se ha podido leer credenciales.json.");
    const credenciales = await respuesta.json();
    return (
      usuario === credenciales.usuario && password === credenciales.password
    );
  } catch (error) {
    console.error(error);
    loginFeedback.textContent =
      "No se pudo cargar el archivo de acceso. Abre el proyecto con Live Server o un servidor local.";
    return false;
  }
}

async function handleLogin(event) {
  event.preventDefault();
  const submitButton = $("#login-submit");
  const usuario = $("#user").value.trim();
  const password = $("#pass").value;
  loginFeedback.textContent = "";

  if (!usuario || !password) {
    loginFeedback.textContent =
      "La mansión necesita un nombre y una palabra secreta.";
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = "COMPROBANDO...";
  const valido = await verificarCredenciales(usuario, password);
  submitButton.disabled = false;
  submitButton.innerHTML = "ENTRAR EN LA MANSIÓN <span>→</span>";

  if (!valido) {
    if (!loginFeedback.textContent)
      loginFeedback.textContent =
        "La calavera niega con la cabeza. Esas credenciales no le suenan.";
    loginForm.classList.remove("login-shake");
    void loginForm.offsetWidth;
    loginForm.classList.add("login-shake");
    return;
  }

  loginScreen.hidden = true;
  portalScreen.hidden = false;
  window.clearTimeout(loginTransitionTimer);
  loginTransitionTimer = window.setTimeout(() => {
    portalScreen.hidden = true;
    mansionScreen.hidden = false;
    setGameMessage("La noche te recibe. La música llega desde el jardín.");
    showDialogue(
      "Una bienvenida peculiar",
      "La casa lleva años esperando una visita. No parece especialmente contenta de verte.",
      "EL VESTÍBULO EXTERIOR",
    );
    startAmbientLife();
  }, 1900);
}

// CUERVO
function flyCrow() {
  if (crowHasFlown) {
    showDialogue(
      "La rama vacía",
      "Solo quedan unas plumas negras agitándose con el viento.",
      "EL ÁRBOL VIEJO",
    );
    return;
  }
  crowHasFlown = true;
  const crow = $("#crow");
  crow.classList.add("fly-away");
  crow.disabled = true;
  setGameMessage(
    "El cuervo ha abandonado la rama. El jardín vuelve a quedarse en silencio.",
  );
  showDialogue(
    "El cuervo",
    "«Ahí dentro llevan toda la noche desafinando. Yo me largo; tú no digas que no te avisé.»",
    "UN MAL PRESAGIO",
  );
}

// CALABAZA
function togglePumpkin() {
  pumpkinIsLit = !pumpkinIsLit;
  const pumpkin = $("#pumpkin");
  pumpkin.classList.toggle("is-lit", pumpkinIsLit);
  pumpkin.setAttribute("aria-pressed", String(pumpkinIsLit));
  setGameMessage(
    pumpkinIsLit
      ? "Una luz cálida despierta en la calabaza y tiñe las piedras de naranja."
      : "La pequeña llama se apaga. Las sombras recuperan el jardín.",
  );
}

// BUZÓN
function inspectMailbox() {
  const mailbox = $("#mailbox");
  const alreadyChecked = mailbox.classList.contains("has-been-checked");
  mailbox.classList.add("has-been-checked");
  mailbox.setAttribute("aria-pressed", "true");
  setGameMessage("El papel cruje entre tus dedos.");
  showDialogue(
    "Correspondencia sin remitente",
    alreadyChecked
      ? "El buzón está vacío. El sello de lacre de la carta representa la misma luna que corona la mansión."
      : "Dentro hay una carta amarillenta, cerrada con lacre. No tiene remitente. En el sobre solo pone: «Para quien consiga entrar».",
    "EL BUZÓN DE LA VERJA",
  );
}

// PIEDRA Y LLAVE: escondida en un pequeño montón de rocas entre la maleza.
function liftStone() {
  if (hasKey) return;
  if (stoneIsOpen) {
    showDialogue(
      "El hueco bajo las piedras",
      "La tierra está removida. La llave sigue aquí, esperando a que la recojas.",
      "HALLAZGO",
    );
    return;
  }
  stoneIsOpen = true;
  $("#stone").classList.add("is-lifted");
  $("#stone-area").classList.add("is-open");
  $("#key-object").hidden = false;
  setGameMessage("Algo metálico refleja la luz entre las raíces.");
  showDialogue(
    "Bajo las piedras",
    "Apartas el musgo y descubres una llave antigua. La cerradura de la mansión parece tener su medida.",
    "HALLAZGO",
  );
}

function collectKey(event) {
  event.stopPropagation();
  if (hasKey) return;
  hasKey = true;
  $("#key-object").hidden = true;
  $("#inv-key").hidden = false;
  $("#inventory-slot-1").classList.add("slot-filled");
  $("#inventory-hint").textContent = "Llave antigua";
  $("#stone-area").classList.add("key-taken");
  setGameMessage("La llave pesa más de lo que debería.");
  showDialogue(
    "Objeto añadido",
    "Guardas la llave antigua. Desde el interior de la mansión llega un golpe seco, como si alguien hubiera oído el metal.",
    "INVENTARIO ACTUALIZADO",
  );
}

// PUERTA
// PUERTA: abre la entrada y carga la recepción.
function enterMansion() {
    if (!hasKey) {
        setGameMessage('La puerta no cede. Necesitas encontrar la llave.');
        showDialogue(
            'La puerta principal',
            'La cerradura está intacta. Busca entre las piedras del jardín.',
            'LA ENTRADA'
        );
        return;
    }

    const door = $('#front-door');

    if (door.dataset.opening === 'true') return;

    door.dataset.opening = 'true';
    door.classList.add('is-unlocked', 'is-opening');
    door.disabled = true;

    setGameMessage('La llave gira... La puerta de la mansión se está abriendo.');

    showDialogue(
        'La puerta se abre',
        'Un aire cálido y polvoriento sale del interior. Has conseguido entrar en la mansión.',
        'NUEVA ZONA DESBLOQUEADA'
    );

    window.setTimeout(() => {
    window.location.assign(new URL('recepcion.html', window.location.href).href);
    }, 1500);
}

// NPCs: cada botón consulta su propia conversación en NPC_DIALOGUES.
function talkToNpc(event) {
  const npc = event.currentTarget;
  const dialogue = NPC_DIALOGUES[npc.dataset.npc];
  if (!dialogue) return;
  $("#party-zone").classList.add("party-hyped");
  window.clearTimeout(partyEnergyTimer);
  partyEnergyTimer = window.setTimeout(
    () => $("#party-zone").classList.remove("party-hyped"),
    1800,
  );
  setGameMessage(`${dialogue.title} se ha girado hacia ti.`);
  showDialogue(dialogue.title, dialogue.text, dialogue.kicker, npc);
}

function returnToLogin() {
  window.clearTimeout(loginTransitionTimer);
  window.clearInterval(ambientTimer);
  stopMansionEffects();
  window.clearTimeout(partyEnergyTimer);
  closeDialogue();
  mansionScreen.hidden = true;
  portalScreen.hidden = true;
  loginScreen.hidden = false;
  loginPanel.hidden = true;
  skullButton.classList.remove("is-open");
  skullButton.setAttribute("aria-expanded", "false");
  $("#skull-hint").textContent = "La mandíbula guarda un secreto.";
  loginForm.reset();
  loginFeedback.textContent = "";
}

// EVENTOS
skullButton.addEventListener("click", toggleSkull);
loginForm.addEventListener("submit", handleLogin);
$("#crow").addEventListener("click", flyCrow);
$$(".haunt-window[data-room]").forEach((windowButton) =>
  windowButton.addEventListener("click", inspectWindow),
);
$("#pumpkin").addEventListener("click", togglePumpkin);
$("#mailbox").addEventListener("click", inspectMailbox);
$("#stone").addEventListener("click", liftStone);
$("#key-object").addEventListener("click", collectKey);
$("#front-door").addEventListener("click", enterMansion);
$$(".npc[data-npc]").forEach((npc) => npc.addEventListener("click", talkToNpc));
$("#dialogue-close").addEventListener("click", closeDialogue);
$("#reopen-login").addEventListener("click", returnToLogin);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !dialogueBox.hidden) closeDialogue();
});
