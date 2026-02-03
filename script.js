/* =========================
   💖 POEMS FOR EACH DAY
   ========================= */

const poems = {
  7: [
    "🌹 Sai, a rose blooms when you smile 💖",
    "Soft petals wish they were as gentle as you 🌸",
    "My heart learns poetry every time you say hi ✨",
    "If love had a rhyme, it would end with Sai 💫",
    "Rose Day glows brighter because of you ❤️"
  ],

  8: [
    "💍 Sai, today my heart gathers courage 🥹",
    "Not for a ring, but for forever 💞",
    "Every step feels lighter when it’s with you ✨",
    "So here I stand, feelings true 🤍",
    "Will you be mine, today and always 💖"
  ],

  9: [
    "🍫 Chocolates melt, but my feelings stay 🤎",
    "Sai, sweetness learned your name 🍬",
    "Life tastes warmer when you’re near ✨",
    "One smile from you, and worries disappear 💕",
    "You are my favorite flavor, always 😘"
  ],

  10: [
    "🧸 A teddy waits when arms can’t 🤍",
    "But my heart runs to you, Sai 🥹",
    "Soft comfort, silent care ✨",
    "In every hug, I find home 💞",
    "Teddy Day feels warmer because of you 🧸"
  ],

  11: [
    "💌 Sai, promises don’t need sound 🤍",
    "They live in actions, small and true ✨",
    "I promise patience, laughter, care 💕",
    "Even on days the sky turns grey 🌧️",
    "This promise lives in my heart 💫"
  ],

  12: [
    "🤗 A hug speaks what words cannot 🥹",
    "Sai, your presence heals quietly 🤍",
    "In your arms, chaos rests ✨",
    "Every heartbeat feels understood 💞",
    "Saving my warmest hugs for you 🤗"
  ],

  13: [
    "😘 A kiss isn’t just lips touching 💗",
    "It’s hearts meeting for a second 💫",
    "Sai, even your smile feels like one 😌",
    "Soft, safe, unforgettable 💕",
    "Kiss Day whispers your name 💋"
  ],

  14: [
    "❤️ Sai, this is our Valentine’s Day 🥹",
    "Not because of roses or gifts ✨",
    "But because love chose us 💕",
    "Through laughter, silence, storms 🤍",
    "Forever feels right with you, Sai 💖"
  ]
};

/* =========================
   YOUR ORIGINAL CODE
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

const sadMusic = new Audio("assets/music/sad.mp3");
const happyMusic = new Audio("assets/music/happy.mp3");
happyMusic.loop = true;

let noCount = 0;

/* TYPEWRITER */
function typeText(el, text, speed = 50) {
  el.innerHTML = "";
  let i = 0;
  const timer = setInterval(() => {
    el.innerHTML += text[i] === "\n" ? "<br>" : text[i];
    i++;
    if (i === text.length) clearInterval(timer);
  }, speed);
}

/* FLOATING EMOJIS */
function floatingEmojis() {
  const layer = document.getElementById("emoji-layer");
  emojiInterval = setInterval(() => {
    const e = document.createElement("div");
    e.innerText = Math.random() > 0.5 ? "❤️" : "🌼";
    e.style.position = "fixed";
    e.style.left = Math.random() * 100 + "vw";
    e.style.fontSize = "60px";
    e.style.animation = "float 8s linear";
    layer.appendChild(e);
    setTimeout(() => e.remove(), 8000);
  }, 300);
}

let emojiInterval;
floatingEmojis();

/* START */
typeText(questionText, "Sai… will you be my Valentine? ❤️");

/* DAY OPEN */
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

  const fullPoem = poems[day].join("\n");
  typeText(poem, fullPoem);

  for (let i = 1; i <= 5; i++) {
    const img = document.createElement("img");
    img.src = `assets/images/day${day}-${i}.jpg`;
    img.style.width = "140px";
    img.style.margin = "8px";
    ds.appendChild(img);
  }

  const back = document.createElement("button");
  back.innerText = "⬅ Back to Calendar";
  back.onclick = () => {
    ds.classList.add("hidden");
    cs.classList.remove("hidden");
  };
  ds.appendChild(back);
}

