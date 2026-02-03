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
  8: [
    "💍 Sai, today my heart speaks 🥹",
    "Not a question, but a promise 💞",
    "Every tomorrow feels safe with you ✨",
    "So here I stand, feelings true 🤍",
    "Will you always be mine 💖"
  ],
  9: [
    "🍫 Sai, sweetness learned from you 🤎",
    "One smile melts every fear 🍬",
    "Love tastes warmer near you ✨",
    "You are my favorite forever 💕",
    "Chocolate Day whispers Sai 😘"
  ],
  10: [
    "🧸 Sai, comfort has your name 🤍",
    "In every hug I find home 🥹",
    "Soft love, silent care ✨",
    "You are my safe place 💞",
    "Teddy Day feels warmer 🧸"
  ],
  11: [
    "💌 Sai, promises live quietly 🤍",
    "In patience, care and time ✨",
    "I choose you in every storm 💕",
    "This promise never fades 🌧️",
    "Forever means you 💫"
  ],
  12: [
    "🤗 Sai, hugs speak truth 🥹",
    "Where words fall short 🤍",
    "My heart rests with you ✨",
    "Every beat feels understood 💞",
    "Saving all hugs for you 🤗"
  ],
  13: [
    "😘 Sai, kisses are feelings 💗",
    "Not lips, but souls 💫",
    "Even your smile feels like one 😌",
    "Soft, safe, unforgettable 💕",
    "Kiss Day knows your name 💋"
  ],
  14: [
    "❤️ Sai, this is us 🥹",
    "Not a day, but forever ✨",
    "Through storms and silence 💕",
    "Love chose us 🤍",
    "Forever with you, Sai 💖"
  ]
};

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
    e.style.position = "fixed";
    e.style.left = Math.random() * 100 + "vw";
    e.style.fontSize = "65px";
    e.style.animation = "float 8s linear";
    layer.appendChild(e);
    setTimeout(() => e.remove(), 8000);
  }, 300);
}
function stopEmojis() {
  clearInterval(emojiInterval);
  document.getElementById("emoji-layer").innerHTML = "";
}
startEmojis();

/* =========================
   BROKEN HEART RAIN
========================= */
let heartbreakInterval;
function startHeartbreak() {
  stopEmojis();
  clearInterval(heartbreakInterval);
  heartbreakInterval = setInterval(() => {
    const b = document.createElement("div");
    b.innerText = "💔";
    b.style.position = "fixed";
    b.style.left = Math.random() * 100 + "vw";
    b.style.fontSize = "95px";
    b.style.animation = "fall 3.5s linear";
    document.body.appendChild(b);
    setTimeout(() => b.remove(), 3500);
  }, 120);
}
function stopHeartbreak() {
  clearInterval(heartbreakInterval);
  document.querySelectorAll("div").forEach(d => {
    if (d.innerText === "💔") d.remove();
  });
}

/* =========================
   CONFETTI (SAFE)
========================= */
function fireConfettiSafe() {
  if (typeof confetti !== "function") return;
  const end = Date.now() + 3000;
  (function frame() {
    confetti({
      particleCount: 6,
      spread: 100,
      origin: { x: Math.random(), y: Math.random() - 0.2 }
    });
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
  typeText(sadText, "Sai… don’t you love me anymore? 💔");

  startHeartbreak();

  if (noCount > 1) {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 80 + "vw";
    noBtn.style.top = Math.random() * 80 + "vh";
  }
};

/* THINK AGAIN */
thinkAgain.onclick = () => {
  sadMusic.pause();
  sadMusic.currentTime = 0;
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
  sadMusic.currentTime = 0;
  stopHeartbreak();

  qs.classList.add("hidden");
  ns.classList.add("hidden");
  ys.classList.remove("hidden");

  happyMusic.play();
  fireConfettiSafe();

  typeText(
    readyText,
    "Are you ready, my love, for our magical love week together? ✨"
  );
};

/* READY */
readyBtn.onclick = () => {
  ys.classList.add("hidden");
  showCalendar();
};

/* =========================
   CALENDAR
========================= */
function showCalendar() {
  cs.innerHTML = "";
  cs.classList.remove("hidden");

  const cal = document.createElement("div");
  cal.className = "calendar";

  const today = new Date().getDate();

  for (let d = 7; d <= 14; d++) {
    const box = document.createElement("div");
    box.className = "day";
    box.innerText = `Feb ${d}`;

    if (d > today && d !== 7 && d !== 14) {
      box.classList.add("locked");
      box.onclick = () =>
        alert("Please wait for the day, my love 🌸\nSome moments bloom only on time ✨");
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
  cs.classList.add("hidden");
  ds.classList.remove("hidden");
  ds.innerHTML = "";

  const gif = document.createElement("img");
  gif.src = `assets/gifs/day${day}.gif`;
  gif.className = "gif";
  ds.appendChild(gif);

  const poem = document.createElement("h2");
  ds.appendChild(poem);
  typeText(poem, poems[day].join("\n"));

  for (let i = 1; i <= 5; i++) {
    const img = document.createElement("img");
    img.src = `assets/images/day${day}-${i}.jpg`;
    img.style.width = "150px";
    img.style.margin = "10px";
    ds.appendChild(img);
  }

  const back = document.createElement("button");
  back.className = "backBtn";
  back.innerText = "⬅ Back to Calendar";
  back.onclick = () => {
    ds.classList.add("hidden");
    cs.classList.remove("hidden");
  };
  ds.appendChild(back);
}

