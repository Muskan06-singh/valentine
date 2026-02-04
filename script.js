/* =========================
   💖 POEMS
========================= */
const poems = {
  7: [
    "🌹 Sai, roses learn softness from you 💖",
    "Every petal whispers your name 🌸",
    "If love had a rhyme, it would be Sai ✨",
    "My heart blooms when you smile 💫",
    "Rose Day glows brighter with you ❤️"
  ],
  14: [
    "❤️ Sai, this is our forever 🥹",
    "Not a day, but a lifetime ✨",
    "Through storms and silence 💕",
    "Love chose us 🤍",
    "Forever with you, Sai 💖"
  ]
};

/* =========================
   SAD MESSAGES
========================= */
const sadMessages = [
  "Sai… don’t you love me anymore? 💔",
  "Sai… did my heart mean nothing to you? 🥀",
  "Sai… please don’t leave my heart like this 🖤"
];

/* =========================
   ELEMENTS
========================= */
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
const thinkAgain = document.getElementById("thinkAgain");
const readyBtn = document.getElementById("readyBtn");

/* =========================
   MUSIC
========================= */
const sadMusic = new Audio("assets/music/sad.mp3");
const happyMusic = new Audio("assets/music/happy.mp3");
happyMusic.loop = true;

/* =========================
   TYPEWRITER
========================= */
function typeText(el, text, speed = 45) {
  el.innerHTML = "";
  let i = 0;
  const timer = setInterval(() => {
    el.innerHTML += text[i] === "\n" ? "<br>" : text[i];
    i++;
    if (i >= text.length) clearInterval(timer);
  }, speed);
}

/* =========================
   FLOATING EMOJIS
========================= */
let emojiInterval;
function startEmojis() {
  const layer = document.getElementById("emoji-layer");
  emojiInterval = setInterval(() => {
    const e = document.createElement("div");
    e.innerText = Math.random() > 0.5 ? "❤️" : "🌼";
    e.className = "emoji";
    e.style.left = Math.random() * 100 + "vw";
    layer.appendChild(e);
    setTimeout(() => e.remove(), 10000);
  }, 400);
}
function stopEmojis() {
  clearInterval(emojiInterval);
  document.getElementById("emoji-layer").innerHTML = "";
}
startEmojis();

/* =========================
   HEARTBREAK
========================= */
let heartbreakInterval;
function startHeartbreak() {
  stopEmojis();
  heartbreakInterval = setInterval(() => {
    const b = document.createElement("div");
    b.innerText = "💔";
    b.className = "broken";
    b.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(b);
    setTimeout(() => b.remove(), 3000);
  }, 150);
}
function stopHeartbreak() {
  clearInterval(heartbreakInterval);
  document.querySelectorAll(".broken").forEach(b => b.remove());
}

/* =========================
   CONFETTI
========================= */
function fireConfettiSafe(duration = 3000) {
  if (typeof confetti !== "function") return;
  const end = Date.now() + duration;
  (function frame() {
    confetti({ particleCount: 8, spread: 120 });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

/* =========================
   START
========================= */
typeText(questionText, "Sai… will you be my Valentine? ❤️");

/* =========================
   NO CLICK
========================= */
let noCount = 0;
noBtn.onclick = () => {
  noCount++;
  qs.classList.add("hidden");
  ns.classList.remove("hidden");

  sadMusic.play();
  typeText(sadText, sadMessages[noCount % sadMessages.length]);
  startHeartbreak();
};

/* THINK AGAIN */
thinkAgain.onclick = () => {
  sadMusic.pause();
  stopHeartbreak();
  ns.classList.add("hidden");
  qs.classList.remove("hidden");
  startEmojis();
};

/* =========================
   YES CLICK
========================= */
yesBtn.onclick = () => {
  sadMusic.pause();
  stopHeartbreak();
  qs.classList.add("hidden");
  ys.classList.remove("hidden");
  happyMusic.play();
  fireConfettiSafe();
  typeText(readyText, "Are you ready, my love, for our magical love week? ✨");
};

readyBtn.onclick = () => {
  ys.classList.add("hidden");
  showCalendar();
};

/* =========================
   CALENDAR
========================= */
function showCalendar() {
  stopEmojis();
  cs.innerHTML = "";
  cs.classList.remove("hidden");

  const cal = document.createElement("div");
  cal.className = "calendar";

  for (let d = 7; d <= 14; d++) {
    const box = document.createElement("div");
    box.className = "day";
    box.innerText = `Feb ${d}`;

    if (d !== 7 && d !== 14) {
      box.classList.add("locked");
      box.onclick = () =>
        alert("Please wait, my love 🌸\nSome moments bloom only on their day 💖");
    } else {
      box.onclick = () => openDay(d);
    }
    cal.appendChild(box);
  }
  cs.appendChild(cal);
}

/* =========================
   OPEN DAY
========================= */
function openDay(day) {
  stopEmojis();
  cs.classList.add("hidden");
  ds.classList.remove("hidden");
  ds.innerHTML = "";

  const gif = document.createElement("img");
  gif.src = `assets/gifs/day${day}.gif`;
  gif.className = "gif";
  ds.appendChild(gif);

  const poem = document.createElement("h2");
  ds.appendChild(poem);

  setTimeout(() => {
    typeText(poem, poems[day].join("\n"));
  }, 800);

  setTimeout(() => {
    for (let i = 1; i <= 5; i++) {
      const img = document.createElement("img");
      img.src = `assets/images/day${day}-${i}.jpg`;
      img.style.width = "150px";
      img.style.margin = "10px";
      ds.appendChild(img);
    }
  }, 3000);

  fireConfettiSafe(5000);

  const back = document.createElement("button");
  back.className = "backBtn";
  back.innerText = "⬅ Back";
  back.onclick = () => {
    ds.classList.add("hidden");
    showCalendar();
  };
  ds.appendChild(back);
}

