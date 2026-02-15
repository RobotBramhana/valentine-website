const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const area = document.getElementById("btnArea");

const titleEl = document.getElementById("titleText");
const msgEl = document.getElementById("mainMessage");
const responseEl = document.getElementById("message");

const music = document.getElementById("bgMusic");


// Apply config text
titleEl.innerText = `${CONFIG.title} ${CONFIG.herName} ❤️`;
msgEl.innerText = CONFIG.message;


// Setup music
if (CONFIG.musicFile) {
  music.src = CONFIG.musicFile;
  music.volume = 0.7;
}


// Start music on first interaction
function startMusicOnce() {
  if (CONFIG.autoPlayMusic) {
    music.play().catch(() => {});
  }
  document.removeEventListener("click", startMusicOnce);
}

document.addEventListener("click", startMusicOnce);


// Move No button
function moveNoButton() {

  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const maxX = area.clientWidth - btnWidth;
  const maxY = area.clientHeight - btnHeight;

  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;

  noBtn.style.left = newX + "px";
  noBtn.style.top = newY + "px";
}


// Escape before click registers
noBtn.addEventListener("pointerdown", (e) => {
  e.preventDefault();
  moveNoButton();
});

noBtn.addEventListener("mouseenter", moveNoButton);

noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
}, { passive: false });

noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveNoButton();
});


// Yes button
yesBtn.addEventListener("click", () => {

  responseEl.innerText = CONFIG.yesResponse;

  // Ensure music plays
  music.play().catch(() => {});
});


// Initial position
moveNoButton();
