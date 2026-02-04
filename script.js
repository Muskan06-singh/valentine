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
    "💍 Sai, today my heart gathers courage 🥹",
    "Not for a ring, but for forever 💞",
    "Every tomorrow feels safe with you ✨",
    "So here I stand, feelings true 🤍",
    "Will you always be mine 💖"
  ],
  9: [
    "🍫 Sai, sweetness learned your name 🤎",
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
    "🤗 Sai, hugs speak when words fail 🥹",
    "Your presence heals softly 🤍",
    "My heart rests with you ✨",
    "Every beat feels understood 💞",
    "Saving my warmest hugs 🤗"
  ],
  13: [
    "😘 Sai, kisses are feelings 💗",
    "Not lips, but souls 💫",
    "Even your smile feels like one 😌",
    "Soft, safe, unforgettable 💕",
    "Kiss Day knows your name 💋"
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
   SAD MESSAGES (DRAMA)
========================= */

/* TEXT */
const questionText = document.getElementById("question-text");
const sadText = document.getElementById("sad-text");
const readyText = document.getElementById("ready-text");

const qs = document.getElementById("question-screen");
const ns = document.getElementById("no-screen");
const ys = document.getElementById("yes-screen");
const cs = document.getElementById("calendar-screen");
const ds = document.getElementById("day-screen");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const thinkAgain = document.getElementById("thinkAgain");
const readyBtn = document.getElementById("readyBtn");

/* TYPEWRITER */
function typeText(el, text, speed = 45) {
  el.innerHTML = "";
  let i = 0;
  const timer = setInterval(() => {
    el.innerHTML += text[i] === "\n" ? "<br>" : text[i];
    i++;
    if (i >= text.length) clearInterval(timer);
  }, speed);
}

/* EMOJI RAIN */
let emojiInt;
function startEmojis() {
  emojiInt = setInterval(() => {
    const e = document.createElement("div");
    e.innerText = Math.random() > 0.5 ? "❤️" : "🌼";
    e.style.left = Math.random() * 100 + "vw";
    document.getElementById("emoji-layer").appendChild(e);
    setTimeout(() => e.remove(), 8000);
  }, 400);
}
function stopEmojis() {
  clearInterval(emojiInt);
  document.getElementById("emoji-layer").innerHTML = "";
}
startEmojis();

/* BROKEN HEARTS */
function heartbreak() {
  const b = document.createElement("div");
  b.className = "broken";
  b.innerText = "💔";
  b.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(b);
  setTimeout(() => b.remove(), 3000);
}

/* START */
typeText(questionText, "Sai… will you be my Valentine? ❤️");

/* NO */
let noCount = 0;
noBtn.onclick = () => {
  noCount++;
  qs.classList.add("hidden");
  ns.classList.remove("hidden");
  stopEmojis();
  heartbreak();
  const sadMessages = [
  
  "Sai… did my heart mean nothing to you? 🥀",
  "Sai… was I ever special to you? 💔",
  "Sai… my world feels empty without your yes 🖤",
  
];
  typeText(sadText, msgs[Math.min(noCount - 1, 2)]);
};

/* THINK AGAIN */
thinkAgain.onclick = () => {
  ns.classList.add("hidden");
  qs.classList.remove("hidden");
  startEmojis();
};

/* YES */
yesBtn.onclick = () => {
  qs.classList.add("hidden");
  ys.classList.remove("hidden");
  stopEmojis();
  confetti({ particleCount: 150, spread: 180 });
  typeText(readyText, "Ready for our love week, my heart? 💕");
};

/* READY */
readyBtn.onclick = () => {
  ys.classList.add("hidden");
  showCalendar();
};

/* CALENDAR */
function showCalendar() {
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
        alert("My love… some moments bloom only on their day 🌸");
    } else {
      box.onclick = () => openDay(d);
    }
    cal.appendChild(box);
  }
  cs.appendChild(cal);
}

/* DAY */
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
  typeText(poem, `Sai… this day belongs to us ❤️`);

  ["tl","tr","bl","br"].forEach(p => {
    const h = document.createElement("div");
    h.className = `corner ${p}`;
    h.innerText = "❤️";
    ds.appendChild(h);
  });
}


