/* ===== POEMS ===== */

const poems = { /* YOUR SAME POEMS – UNCHANGED */ 
  7: ["🌹 Rose Day 🌹","Sai, every rose feels shy next to you","Because softness learned your name first","If love had a fragrance, it would be you","I give you my heart with every petal ❤️"],
  8: ["💍 Propose Day 💍","Sai, this is my forever question","Not just today, not just this week","But every sunrise and every storm","Will you be mine, always? 🤍"],
  9: ["🍫 Chocolate Day 🍫","Sweet like chocolate, warm like cocoa","Sai, you melt every fear in me","Life tastes better with you beside me","You are my favorite sweetness 💕"],
  10:["🧸 Teddy Day 🧸","If I could hug you forever, I would","Sai, you are my safe place","Soft, warm, comforting","My heart rests in you 🤍"],
  11:["🤞 Promise Day 🤞","Sai, I promise you patience","I promise you honesty","I promise to choose you","Even on the hardest days ❤️"],
  12:["🤍 Hug Day 🤍","One hug from you feels like home","Sai, my worries dissolve in your arms","Just us, breathing together 🤍"],
  13:["💋 Kiss Day 💋","A kiss from you is poetry","Sai, it speaks what words cannot","Soft, slow, full of promise","Sealing my heart to yours 💖"],
  14:["❤️ Valentine’s Day ❤️","Sai, this is not a day","This is a lifetime I choose","Through chaos, calm, and change","Forever is you 💘"]
};

const sadMessages = [
  "Sai… don’t you love me anymore?",
  "Sai… did my heart mean nothing to you?",
  "Sai… please don’t leave my heart like this"
];

/* ===== ELEMENTS ===== */

const qs = document.getElementById("question-screen");
const ns = document.getElementById("no-screen");
const ys = document.getElementById("yes-screen");
const cs = document.getElementById("calendar-screen");
const ds = document.getElementById("day-screen");

const questionText = document.getElementById("question-text");
const sadText = document.getElementById("sad-text");
const readyText = document.getElementById("ready-text");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const readyBtn = document.getElementById("readyBtn");

/* ===== MUSIC ===== */

const sadMusic = new Audio("assets/music/sad.mp3");
const happyMusic = new Audio("assets/music/happy.mp3");
happyMusic.loop = true;

/* ===== TYPEWRITER ===== */

function typeText(el, text, speed = 45) {
  el.innerHTML = "";
  let i = 0;
  const t = setInterval(() => {
    el.innerHTML += text[i] || "";
    i++;
    if (i >= text.length) clearInterval(t);
  }, speed);
}

/* ===== START ===== */

typeText(questionText, "Sai… will you be my Valentine? ❤️");

/* ===== NO BUTTON ===== */

let noCount = 0;

noBtn.onclick = () => {
  noCount++;
  qs.classList.add("hidden");
  ns.classList.remove("hidden");
  sadMusic.play();

  if (noCount <= 3) {
    typeText(sadText, sadMessages[noCount - 1]);
  } else {
    sadText.innerHTML = `
      <img src="assets/gifs/tease.gif" class="gif">
      <p>Haha Sai… no escape now 😌❤️  
      destiny already clicked YES for you</p>
    `;
    moveNoButton();
  }
};

function moveNoButton() {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "vw";
  noBtn.style.top = Math.random() * 80 + "vh";
}

/* ===== YES ===== */

yesBtn.onclick = () => {
  qs.classList.add("hidden");
  ys.classList.remove("hidden");
  happyMusic.play();
  fireConfetti(2500);
  typeText(readyText, "Ready for our Valentine Week, my love? ✨");
};

readyBtn.onclick = () => {
  ys.classList.add("hidden");
  showCalendar();
};

/* ===== CONFETTI ===== */

function fireConfetti(duration) {
  if (!window.confetti) return;
  const end = Date.now() + duration;
  (function frame() {
    confetti({ particleCount: 18, spread: 180 });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

/* ===== CALENDAR ===== */

function showCalendar() {
  cs.classList.remove("hidden");
  cs.innerHTML = "";

  const cal = document.createElement("div");
  cal.className = "calendar";

  for (let d = 7; d <= 14; d++) {
    const day = document.createElement("div");
    day.className = "day";
    day.innerText = `Feb ${d}`;
    day.onclick = () => openDay(d);
    cal.appendChild(day);
  }

  cs.appendChild(cal);
}

/* ===== OPEN DAY ===== */

function openDay(day) {
  cs.classList.add("hidden");
  ds.classList.remove("hidden");
  ds.innerHTML = "";

  const gif = document.createElement("img");
  gif.src = `assets/gifs/day${day}.gif`;
  gif.className = "gif";
  ds.appendChild(gif);

  gif.onload = () => {
    const poem = document.createElement("h2");
    ds.appendChild(poem);
    typeText(poem, poems[day].join("\n"));

    ["tl","tr","bl","br"].forEach(p => {
      const h = document.createElement("div");
      h.className = `corner-heart ${p}`;
      h.innerText = "❤️";
      ds.appendChild(h);
    });
  };
}

