const noBtn = document.getElementById('noBtn');
const area = document.getElementById('btnArea');


// Apply config text
const titleEl = document.getElementById('titleText');
const msgEl = document.getElementById('mainMessage');


titleEl.innerText = `${CONFIG.title} ${CONFIG.herName} ❤️`;
msgEl.innerText = CONFIG.message;


function moveNoButton() {
const btnWidth = noBtn.offsetWidth;
const btnHeight = noBtn.offsetHeight;


const maxX = area.clientWidth - btnWidth;
const maxY = area.clientHeight - btnHeight;


const newX = Math.random() * maxX;
const newY = Math.random() * maxY;


noBtn.style.left = newX + 'px';
noBtn.style.top = newY + 'px';
}


noBtn.addEventListener('pointerdown', (e) => {
e.preventDefault();
moveNoButton();
});


noBtn.addEventListener('mouseenter', moveNoButton);


noBtn.addEventListener('touchstart', (e) => {
e.preventDefault();
moveNoButton();
}, { passive: false });


noBtn.addEventListener('click', (e) => {
e.preventDefault();
moveNoButton();
});


moveNoButton();


function sayYes() {
document.getElementById('message').innerText = CONFIG.yesResponse;
}
