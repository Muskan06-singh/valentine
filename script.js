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
/* ================= ELEMENTS ================= */
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

/* ================= TYPEWRITER ================= */
function typeText(el, text, speed = 40) {
  el.innerHTML = "";
  let i = 0;
  const t = setInterval(() => {
    el.innerHTML += text[i] || "";
    i++;
    if (i >= text.length) clearInterval(t);
  }, speed);
}

/* ================= EMOJI RAIN ================= */
let emojiInterval;
function startEmojis() {
  const layer = document.getElementById("emoji-layer");
  emojiInterval = setInterval(() => {
    const e = document.createElement("div");
    e.className = "emoji";
    e.innerText = Math.random() > 0.5 ? "🌼" : "❤️";
    e.style.left = Math.random() * 100 + "vw";
    layer.appendChild(e);
    setTimeout(() => e.remove(), 10000);
  }, 300);
}
function stopEmojis() {
  clearInterval(emojiInterval);
  document.getElementById("emoji-layer").innerHTML = "";
}

/* ================= HEARTBREAK ================= */
let heartbreak;
function startHeartbreak() {
  heartbreak = setInterval(() => {
    const b = document.createElement("div");
    b.className = "broken";
    b.innerText = "💔";
    b.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(b);
    setTimeout(() => b.remove(), 3000);
  }, 150);
}
function stopHeartbreak() {
  clearInterval(heartbreak);
  document.querySelectorAll(".broken").forEach(b => b.remove());
}

/* ================= CONFETTI ================= */
function fireConfetti(duration = 2500) {
  if (typeof confetti !== "function") return;
  const end = Date.now() + duration;
  (function frame() {
    confetti({ particleCount: 12, spread: 180 });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

/* ================= START ================= */
typeText(questionText, "Sai… will you be my Valentine? ❤️");
startEmojis();

/* ================= NO ================= */
let noCount = 0;
noBtn.onclick = () => {
  noCount++;
  qs.classList.add("hidden");
  ns.classList.remove("hidden");
  stopEmojis();
  startHeartbreak();

  if (noCount <= 3) {
    typeText(sadText, [
      "Sai… don’t you love me anymore? 💔",
      "Sai… did my heart mean nothing to you? 🥀",
      "Sai… please don’t leave me like this 🖤"
    ][noCount - 1]);
  } else {
    sadText.innerHTML = `
      <img src="assets/gifs/tease.gif" class="gif">
      <p>Haha Sai… you can run, but my heart already chose you 😌❤️</p>
    `;
  }
};

thinkAgain.onclick = () => {
  ns.classList.add("hidden");
  qs.classList.remove("hidden");
  stopHeartbreak();
  startEmojis();
};

/* ================= YES ================= */
yesBtn.onclick = () => {
  qs.classList.add("hidden");
  ys.classList.remove("hidden");
  fireConfetti();
  typeText(readyText, "Ready for our Valentine week, my love? ✨");
};

readyBtn.onclick = () => {
  ys.classList.add("hidden");
  showCalendar();
};

/* ================= CALENDAR ================= */
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

/* ================= OPEN DAY ================= */
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
  };
}
