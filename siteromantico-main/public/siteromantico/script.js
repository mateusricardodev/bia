/* =========================================
   script.js — versão completa atualizada
   Substitui o script.js original
========================================= */
/* ---------- TOOLTIP MÚSICA ---------- */
const tooltip = document.getElementById('musicTooltip');
if (tooltip) {
  setTimeout(() => {
    tooltip.style.transition = 'opacity 0.5s ease';
    tooltip.style.opacity = '0';
    setTimeout(() => tooltip.remove(), 500);
  }, 5000);

  document.getElementById('musicBtn').addEventListener('click', () => {
    tooltip.remove();
  });
}
/* ---------- CORAÇÕES DE FUNDO ---------- */
function spawnHeart() {
  const bg = document.getElementById('heartsBg');
  if (!bg) return;
  const el = document.createElement('span');
  el.className = 'heart';
  el.textContent = ['❤', '🩷', '💕', '💗'][Math.floor(Math.random() * 4)];
  el.style.left = Math.random() * 100 + '%';
  el.style.fontSize = (12 + Math.random() * 16) + 'px';
  const dur = 6 + Math.random() * 6;
  el.style.animationDuration = dur + 's';
  el.style.animationDelay = Math.random() + 's';
  bg.appendChild(el);
  setTimeout(() => el.remove(), (dur + 2) * 1000);
}
setInterval(spawnHeart, 800);
for (let i = 0; i < 8; i++) setTimeout(spawnHeart, i * 300);

/* ---------- PÉTALAS DE ROSA ---------- */
function spawnPetal() {
  const bg = document.getElementById('petalsBg');
  if (!bg) return;
  const petals = ['🌸', '🌹', '🌺', '💮'];
  const el = document.createElement('span');
  el.className = 'petal';
  el.textContent = petals[Math.floor(Math.random() * petals.length)];
  el.style.left = Math.random() * 100 + '%';
  el.style.fontSize = (14 + Math.random() * 14) + 'px';
  const dur = 6 + Math.random() * 5;
  el.style.animationDuration = dur + 's';
  el.style.animationDelay = Math.random() * 2 + 's';
  bg.appendChild(el);
  setTimeout(() => el.remove(), (dur + 2) * 1000);
}
setInterval(spawnPetal, 700);
for (let i = 0; i < 6; i++) setTimeout(spawnPetal, i * 400);

/* ---------- BOTÃO DE MÚSICA ---------- */
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');
if (musicBtn && bgMusic) {
  musicBtn.addEventListener('click', () => {
    if (bgMusic.paused) {
      bgMusic.play();
      musicBtn.classList.add('playing');
    } else {
      bgMusic.pause();
      musicBtn.classList.remove('playing');
    }
  });
}

/* ---------- CONTADOR ---------- */
const startDate = new Date('2024-06-12T00:00:00');
function updateCounter() {
  const now = new Date();
  let diff = now - startDate;
  const years  = Math.floor(diff / (365.25 * 24 * 3600 * 1000)); diff -= years  * 365.25 * 24 * 3600 * 1000;
  const months = Math.floor(diff / (30.44 * 24 * 3600 * 1000));  diff -= months * 30.44 * 24 * 3600 * 1000;
  const days   = Math.floor(diff / (24 * 3600 * 1000));           diff -= days   * 24 * 3600 * 1000;
  const hours  = Math.floor(diff / (3600 * 1000));                diff -= hours  * 3600 * 1000;
  const mins   = Math.floor(diff / 60000);                        diff -= mins   * 60000;
  const secs   = Math.floor(diff / 1000);
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('years', years); set('months', months); set('days', days);
  set('hours', hours); set('minutes', mins);  set('seconds', secs);
}
updateCounter();
setInterval(updateCounter, 1000);

/* ---------- REVEAL ON SCROLL ---------- */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ---------- ABRIR PRESENTE ---------- */
function openGift() {
  const lid  = document.getElementById('giftLid');
  const msg  = document.getElementById('giftMessage');
  const hint = document.getElementById('giftHint');
  if (lid && !lid.classList.contains('open')) {
    lid.classList.add('open');
    setTimeout(() => {
      if (msg)  msg.classList.add('revealed');
      if (hint) hint.textContent = '💖';
    }, 500);
  }
}

/* ---------- OQUE EU AMO EM VOCE ---------- */
const reasons = [
  "Seu sorriso",
  "Seus carinhos",
  "Seu abraço",
  "Sua risada",
  "Sua voz",
  "Seu jeitinho",
  "Seus beijos",
  "Seu cheiro",
  "Seus olhos",
  "Seu toque",
  "Seu coração",
  "Sua sensibilidade",
  "Seu jeitinho de ver o mundo",
  "Sua inteligência",
  "Sua bondade",
  "Sua companhia",
  "Seu carinho comigo",
  "Seu jeito de me olhar",
  "Seu jeito de me entender",
  "Seu apoio",
  "Sua paciência",
  "Seu senso de humor",
  "Sua sinceridade",
  "Sua lealdade",
  "Sua força",
  "Sua determinação",
  "Sua fofura",
  "Seu jeito tímido",
  "Seu jeito feliz",
  "Seu jeito animado",
  "Suas mensagens",
  "Seus áudios",
  "Seu bom dia",
  "Seu boa noite",
  "Seu jeito de me fazer rir",
  "Seu jeito de cuidar de mim",
  "Seu jeito de demonstrar amor",
  "Seu jeito de demonstrar saudade",
  "Seu respeito",
  "Sua gentileza",
  "Sua autenticidade",
  "Seu jeito de sonhar",
  "Sua coragem",
  "Sua presença",
  "Sua alegria",
  "Sua gratidão",
  "Seu jeito de ouvir",
  "Seu jeito de iluminar meus dias",
  "Seu jeito de me acalmar",
  "Seu jeito de me motivar",
  "Seu jeito de acreditar em mim",
  "Seu jeito de me apoiar",
  "Seu jeito de comemorar comigo",
  "Seu jeito de demonstrar afeto",
  "Seu jeito de me surpreender",
  "Seu jeito de valorizar as pequenas coisas",
  "Seu jeito de cuidar dos detalhes",
  "Seu jeito de falar",
  "Seu jeito de pensar",
  "Seu jeito de agir",
  "Seu jeito de amar",
  "Sua maturidade",
  "Sua delicadeza",
  "Sua honestidade",
  "Sua humildade",
  "Seu brilho",
  "Sua paz",
  "Sua beleza",
  "Seu charme",
  "Seu jeito único",
  "Seu jeito especial",
  "Seu jeito carinhoso",
  "Seu jeito engraçado",
  "Seu jeito encantador",
  "Seu jeito doce",
  "Seu jeito incrível",
  "Seu jeito perfeito",
  "Seu jeito de existir",
  "Seu jeito de me escolher",
  "Seu jeito de me completar",
  "Seu jeito de me inspirar",
  "Seu jeito de me fazer feliz",
  "Seu jeito de transformar meus dias",
  "Seu jeito de tornar tudo melhor",
  "Seu jeito de me fazer sentir amado",
  "Seu jeito de me fazer sorrir",
  "Seu jeito de me fazer sonhar",
  "Seu jeito de me fazer sentir especial",
  "Seu jeito de estar ao meu lado",
  "Seu jeito de segurar minha mão",
  "Seu jeito de me abraçar forte",
  "Seu jeito de demonstrar carinho",
  "Seu jeito de compartilhar a vida comigo",
  "Seu jeito de fazer parte da minha vida",
  "Seu jeito de ser minha melhor amiga",
  "Seu jeito de ser meu amor",
  "Você inteira",
  "Em todos os seus detalhes",
  "Eu amo tudo em você",
  "Amo tudooooooooooooo",
];

let reasonCount = 1;

function renderReasons() {
  const list = document.getElementById('reasonsList');
  const label = document.getElementById('reasonsLabel');
  if (!list) return;
  list.innerHTML = '';
  for (let i = 0; i < reasonCount; i++) {
    const li = document.createElement('li');
    li.className = 'reason-item';
    li.style.animationDelay = (i * 0.08) + 's';
    li.innerHTML = `<span class="reason-num">${i + 1}.</span><span class="reason-text">${reasons[i % reasons.length]}</span>`;
    list.appendChild(li);
  }
  if (label) label.textContent = `${reasonCount} ${reasonCount === 1 ? 'coisa' : 'coisas'}`;
}


function changeCount(delta) {
  reasonCount = Math.max(1, Math.min(reasons.length, reasonCount + delta));
  renderReasons();
}

renderReasons();

//Fotos insta
const swiper = new Swiper(".mySwiper", {
    loop: false,
    slidesPerView: 1,
    centeredSlides: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 6
    }
});

/* =========================================
   JOGO DA MEMÓRIA — adicionar ao script.js
========================================= */
const MEMORY_PHOTOS = [
  'assets/fotos/foto5.jpg',
  'assets/fotos/foto2.jpg',
  'assets/fotos/foto3.jpg',
  'assets/fotos/foto4.jpg',
];

let mgFlipped = [], mgMatched = 0, mgMoves = 0, mgLocked = false;

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function initMemoryGame() {
  mgFlipped = []; mgMatched = 0; mgMoves = 0; mgLocked = false;
  document.getElementById('mgMoves').textContent = 0;
  document.getElementById('mgPairs').textContent = 0;
  document.getElementById('mgWin').classList.remove('show');

  const pairs = shuffleArray([...MEMORY_PHOTOS, ...MEMORY_PHOTOS]);
  const grid = document.getElementById('mgGrid');
  if (!grid) return;
  grid.innerHTML = '';

  pairs.forEach((src) => {
    const card = document.createElement('div');
    card.className = 'mg-card';
    card.dataset.src = src;
    card.innerHTML = `
      <div class="mg-card-inner">
        <div class="mg-card-front">💗</div>
        <div class="mg-card-back">
          <img src="${src}" alt="Foto" onerror="this.parentElement.innerHTML='<div style=font-size:2rem;display:flex;align-items:center;justify-content:center;height:100%>💕</div>'" />
        </div>
      </div>`;
    card.addEventListener('click', () => mgFlipCard(card));
    grid.appendChild(card);
  });
}

function mgFlipCard(card) {
  if (mgLocked || card.classList.contains('flipped') || card.classList.contains('matched')) return;
  card.classList.add('flipped');
  mgFlipped.push(card);
  if (mgFlipped.length === 2) mgCheck();
}

function mgCheck() {
  mgLocked = true;
  mgMoves++;
  document.getElementById('mgMoves').textContent = mgMoves;
  const [a, b] = mgFlipped;
  if (a.dataset.src === b.dataset.src) {
    a.classList.add('matched');
    b.classList.add('matched');
    mgMatched++;
    document.getElementById('mgPairs').textContent = mgMatched;
    mgFlipped = [];
    mgLocked = false;
    if (mgMatched === MEMORY_PHOTOS.length) {
      setTimeout(() => {
        document.getElementById('mgWinMsg').textContent = `em ${mgMoves} tentativas 💖`;
        document.getElementById('mgWin').classList.add('show');
      }, 500);
    }
  } else {
    setTimeout(() => {
      a.classList.remove('flipped');
      b.classList.remove('flipped');
      mgFlipped = [];
      mgLocked = false;
    }, 1000);
  }
}

initMemoryGame();