document.addEventListener("DOMContentLoaded", () => {

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
   💔 SAD MESSAGES
========================= */
const sadMessages = [
  "Sai… don’t you love me anymore? 💔",
  "Sai… did my heart mean nothing to you? 🥀",
  "Sai… was I ever special to you? 💔",
  "Sai… my world feels empty without your yes 🖤",
  "Sai… please don’t break my heart like this 💔"
];

/* =========================
   ELEMENTS (SAFE)
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
  if (!el) return;
  el.innerHTML = "";
  let i = 0;
  const timer = setInterval(() => {
    el.innerHTML += text[i] === "\n" ? "<br>" : text[i];
    i++;
    if (i >= text.length) clearInterval(timer);
  }, speed);
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
  typeText(sadText, sadMessages[(noCount - 1) % sadMessages.length]);
};

/* THINK AGAIN */
thinkAgain.onclick = () => {
  sadMusic.pause();
  sadMusic.currentTime = 0;
  ns.classList.add("hidden");
  qs.classList.remove("hidden");
};

/* =========================
   YES CLICK
========================= */
yesBtn.onclick = () => {
  sadMusic.pause();
  sadMusic.currentTime = 0;

  qs.classList.add("hidden");
  ys.classList.remove("hidden");

  happyMusic.play();
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
   📅 CALENDAR
========================= */
function showCalendar() {
  cs.innerHTML = "";
  cs.classList.remove("hidden");

  const cal = document.createElement("div");
  cal.className = "calendar";

  for (let d = 7; d <= 14; d++) {
    const box = document.createElement("div");
    box.className = "day";
    box.innerText = `Feb ${d}`;
    box.onclick = () => openDay(d);
    cal.appendChild(box);
  }

  cs.appendChild(cal);
}

/* =========================
   💌 OPEN DAY
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

  const back = document.createElement("button");
  back.className = "backBtn";
  back.innerText = "⬅ Back to Calendar";
  back.onclick = () => {
    ds.classList.add("hidden");
    cs.classList.remove("hidden");
  };
  ds.appendChild(back);
}

});

