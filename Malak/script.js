const intro = document.getElementById("intro");
const stage = document.getElementById("stage");
const startButton = document.getElementById("startButton");
const show = document.getElementById("show");
const nameHeart = document.getElementById("nameHeart");
const sceneHeart = document.getElementById("sceneHeart");
const sceneBirthday = document.getElementById("sceneBirthday");
const scenePhoto = document.getElementById("scenePhoto");
const sceneMessage = document.getElementById("sceneMessage");
const loveMessage = document.getElementById("loveMessage");
const photo = document.getElementById("malakPhoto");
const photoFallback = document.getElementById("photoFallback");
const canvas = document.getElementById("sparkCanvas");
const ctx = canvas.getContext("2d");

const letters = "MALAK";
const photoSlides = ["assets/malak.jpg", "assets/image0.jpg", "assets/image1.jpg"];
const particles = [];
let running = false;
let heartInterval;
let wordInterval;
let starInterval;
let photoTimers = [];
let animationFrame;
let introReady = false;

window.setTimeout(() => {
  stage.classList.add("video-ready");
}, 2200);

window.setTimeout(() => {
  introReady = true;
  intro.classList.add("is-ready");
}, 3000);

function buildHeart() {
  const points = [];
  const total = window.innerWidth < 640 ? 160 : 230;

  for (let i = 0; i < total; i += 1) {
    const t = (Math.PI * 2 * i) / total;
    const x = 16 * Math.sin(t) ** 3;
    const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
    points.push({ x, y });
  }

  nameHeart.innerHTML = "";
  const centerX = 50;
  const centerY = window.innerWidth < 640 ? 50 : 49;
  const xScale = window.innerWidth < 640 ? 2.55 : 2.62;
  const yScale = window.innerWidth < 640 ? 2.25 : 2.36;

  points.forEach((point, index) => {
    const span = document.createElement("span");
    span.className = "heart-letter";
    span.textContent = letters[index % letters.length];
    span.style.left = `${centerX + point.x * xScale}%`;
    span.style.top = `${centerY - point.y * yScale}%`;
    span.style.animationDelay = `${index * 14}ms, ${1.2 + (index % 11) * 0.12}s`;
    nameHeart.appendChild(span);
  });
}

function resizeCanvas() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.floor(window.innerWidth * dpr);
  canvas.height = Math.floor(window.innerHeight * dpr);
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function addSpark(burst = false) {
  const amount = burst ? 36 : 3;
  for (let i = 0; i < amount; i += 1) {
    particles.push({
      x: window.innerWidth * (0.12 + Math.random() * 0.76),
      y: window.innerHeight * (0.14 + Math.random() * 0.72),
      vx: (Math.random() - 0.5) * (burst ? 3 : 0.7),
      vy: (Math.random() - 0.7) * (burst ? 3.2 : 0.9),
      life: burst ? 110 + Math.random() * 80 : 90 + Math.random() * 70,
      age: 0,
      size: burst ? 1.5 + Math.random() * 3.6 : 1 + Math.random() * 2.1,
      hue: Math.random() > 0.45 ? "255, 45, 143" : "255, 24, 79",
    });
  }
}

function drawSparks() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  for (let i = particles.length - 1; i >= 0; i -= 1) {
    const particle = particles[i];
    particle.age += 1;
    particle.x += particle.vx;
    particle.y += particle.vy;
    particle.vy += 0.006;

    const alpha = Math.max(0, 1 - particle.age / particle.life);
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${particle.hue}, ${alpha})`;
    ctx.shadowColor = `rgba(${particle.hue}, ${alpha})`;
    ctx.shadowBlur = 16;
    ctx.fill();
    ctx.shadowBlur = 0;

    if (particle.age >= particle.life) {
      particles.splice(i, 1);
    }
  }

  if (running && Math.random() > 0.64) {
    addSpark(false);
  }

  animationFrame = requestAnimationFrame(drawSparks);
}

function createFloatingHeart() {
  if (!running) return;

  const el = document.createElement("span");
  el.className = "floating-heart";
  el.style.left = `${8 + Math.random() * 84}%`;
  el.style.setProperty("--size", `${10 + Math.random() * 22}px`);
  el.style.setProperty("--drift", `${-90 + Math.random() * 180}px`);
  el.style.setProperty("--duration", `${5.5 + Math.random() * 4}s`);
  el.style.setProperty("--tone", Math.random() > 0.5 ? "#F48FB1" : "#ff184f");
  document.body.appendChild(el);
  window.setTimeout(() => el.remove(), 9800);
}

function createBurstWord() {
  if (!running) return;

  const words = ["Malak", "ti amo", "amore mio", "per sempre", "buon compleanno"];
  const colors = ["#F48FB1", "#ffffff", "#ffd76a", "#76c7ff", "#ff184f"];
  const el = document.createElement("span");
  el.className = "burst-word";
  el.textContent = words[Math.floor(Math.random() * words.length)];
  el.style.setProperty("--x", `${14 + Math.random() * 72}%`);
  el.style.setProperty("--y", `${18 + Math.random() * 62}%`);
  el.style.setProperty("--color", colors[Math.floor(Math.random() * colors.length)]);
  el.style.setProperty("--font-size", `${34 + Math.random() * 44}px`);
  el.style.setProperty("--duration", `${2.8 + Math.random() * 1.7}s`);
  document.body.appendChild(el);
  window.setTimeout(() => el.remove(), 4800);
}

function createShootingStar() {
  if (!running) return;

  const el = document.createElement("span");
  el.className = "shooting-star";
  el.style.setProperty("--top", `${8 + Math.random() * 42}%`);
  el.style.setProperty("--rotate", `${12 + Math.random() * 16}deg`);
  document.body.appendChild(el);
  window.setTimeout(() => el.remove(), 2200);
}

function setScene(activeScene) {
  [sceneHeart, sceneBirthday, scenePhoto, sceneMessage].forEach((scene) => {
    scene.classList.toggle("is-active", scene === activeScene);
  });

  if (activeScene === scenePhoto) {
    startPhotoSlideshow();
  }

  if (activeScene === sceneMessage) {
    sceneMessage.scrollTop = 0;
    loveMessage.scrollTop = 0;
  }
}

function playSoftStartSound() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  const audio = new AudioContext();
  const notes = [392, 493.88, 587.33, 783.99];
  notes.forEach((note, index) => {
    const oscillator = audio.createOscillator();
    const gain = audio.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = note;
    oscillator.connect(gain);
    gain.connect(audio.destination);

    const start = audio.currentTime + index * 0.17;
    gain.gain.setValueAtTime(0, start);
    gain.gain.linearRampToValueAtTime(0.09, start + 0.025);
    gain.gain.exponentialRampToValueAtTime(0.001, start + 0.55);
    oscillator.start(start);
    oscillator.stop(start + 0.6);
  });
}

function startShow() {
  if (running || !introReady) return;
  running = true;
  intro.classList.add("is-hidden");
  show.classList.add("is-running");
  buildHeart();
  addSpark(true);
  playSoftStartSound();
  drawSparks();

  heartInterval = window.setInterval(createFloatingHeart, 240);
  wordInterval = window.setInterval(createBurstWord, 1250);
  starInterval = window.setInterval(createShootingStar, 1850);

  window.setTimeout(() => {
    setScene(sceneBirthday);
    addSpark(true);
    createBurstWord();
    createShootingStar();
  }, 6900);

  window.setTimeout(() => {
    setScene(scenePhoto);
    addSpark(true);
    createBurstWord();
  }, 11900);

  window.setTimeout(() => {
    setScene(sceneMessage);
    addSpark(true);
    createBurstWord();
  }, 19400);

  window.setTimeout(() => {
    window.clearInterval(heartInterval);
    window.clearInterval(wordInterval);
    window.clearInterval(starInterval);
  }, 31000);
}

function showPhotoFallback() {
  photo.classList.add("is-missing");
  photoFallback.classList.add("is-visible");
}

function showRealPhoto() {
  photo.classList.remove("is-missing");
  photoFallback.classList.remove("is-visible");
}

function clearPhotoTimers() {
  photoTimers.forEach((timer) => window.clearTimeout(timer));
  photoTimers = [];
}

function changePhoto(src) {
  const preload = new Image();
  preload.onload = () => {
    photo.classList.add("is-changing");
    window.setTimeout(() => {
      photo.src = src;
      showRealPhoto();
      photo.classList.remove("is-changing");
    }, 520);
  };
  preload.onerror = () => {
    if (src === photoSlides[0]) {
      showPhotoFallback();
    }
  };
  preload.src = src;
}

function startPhotoSlideshow() {
  clearPhotoTimers();
  changePhoto(photoSlides[0]);
  photoTimers.push(window.setTimeout(() => changePhoto(photoSlides[1]), 2200));
  photoTimers.push(window.setTimeout(() => changePhoto(photoSlides[2]), 4400));
}

photo.addEventListener("error", () => {
  showPhotoFallback();
});

photo.addEventListener("load", () => {
  if (photo.naturalWidth > 0) {
    showRealPhoto();
  }
});

if (photo.complete && photo.naturalWidth === 0) {
  showPhotoFallback();
}

startButton.addEventListener("click", startShow);

window.addEventListener("resize", () => {
  resizeCanvas();
  buildHeart();
});

resizeCanvas();
buildHeart();

window.addEventListener("beforeunload", () => {
  window.clearInterval(heartInterval);
  window.clearInterval(wordInterval);
  window.clearInterval(starInterval);
  clearPhotoTimers();
  window.cancelAnimationFrame(animationFrame);
});
