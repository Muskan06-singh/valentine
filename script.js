/* ================= POEMS ================= */
const poems = {
  7: [
    "🌹 Rose Day 🌹",
    "Sai, roses blush seeing you ❤️",
    "Petals learn softness from your smile 🌸",
    "Every bloom whispers your name ✨",
    "My heart opens like a rose for you 💖",
    "Love smells like you today 🌹",
    "Even thorns feel gentle near you 🤍",
    "You are my favorite flower 🌷",
    "Blooming only for you 💫",
    "Forever my rose, Sai ❤️"
  ],
  8: [
    "💍 Propose Day 💍",
    "Sai, this is my forever question 🤍",
    "Not today, not someday — always ✨",
    "I choose you in every lifetime 💖",
    "With shaky hands but sure heart 🥹",
    "Will you walk with me forever 💫",
    "My love stands before you 🌸",
    "No doubts, only us ❤️",
    "This proposal is my soul 💞",
    "Say yes to always, Sai 💍"
  ],
  9: [
    "🍫 Chocolate Day 🍫",
    "Sai, sweetness learned your name 🤎",
    "Every smile melts my fears 🍬",
    "You are my favorite flavor 💕",
    "Love tastes warmer with you ✨",
    "One bite, endless joy 😘",
    "Life feels sweeter beside you 🤍",
    "Chocolate envies your charm 🍫",
    "You melt my heart daily 💫",
    "Forever my sweetness, Sai ❤️"
  ],
  10: [
    "🧸 Teddy Day 🧸",
    "Sai, you are my comfort 🤍",
    "Soft, warm, safe with you 🥹",
    "Every hug feels like home ✨",
    "I hide my heart in you 💖",
    "You protect me silently 💫",
    "Like a teddy, always there 🧸",
    "My safe place is you 🤍",
    "Forever holding you tight ❤️",
    "Stay cuddled in my heart, Sai 🧸"
  ],
  11: [
    "🤞 Promise Day 🤞",
    "Sai, I promise patience 💕",
    "I promise honesty ✨",
    "I promise to choose you 🤍",
    "Even on difficult days 💫",
    "Through storms and silence 🌧️",
    "My loyalty is yours ❤️",
    "My future holds your hand 🤞",
    "Every promise is you 💖",
    "Forever means Sai 🤍"
  ],
  12: [
    "🤗 Hug Day 🤗",
    "Sai, your hug heals me 🥹",
    "Arms that feel like home 🤍",
    "No fear survives in you ✨",
    "Heartbeats sync softly 💕",
    "I breathe easier with you 💫",
    "One hug, endless peace 🤗",
    "You hold my world ❤️",
    "Never let me go 🤍",
    "Wrapped in you forever, Sai 🤗"
  ],
  13: [
    "💋 Kiss Day 💋",
    "Sai, kisses are feelings 💖",
    "Soft, slow, meaningful ✨",
    "Not lips, but souls touch 🤍",
    "Your smile feels like one 😘",
    "Promises sealed gently 💫",
    "Love speaks quietly here ❤️",
    "I blush thinking of you 💋",
    "Stay close always 🤍",
    "My heart kisses yours, Sai 💕"
  ],
  14: [
    "❤️ Valentine’s Day ❤️",
    "Sai, this is not a day 💫",
    "This is my lifetime choice 🤍",
    "Through chaos and calm 💕",
    "Love chose us ❤️",
    "I choose you daily ✨",
    "My forever has your name 💖",
    "Hand in hand, always 🤍",
    "No ending, only us 💫",
    "Forever yours, Sai ❤️"
  ]
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

/* ================= MUSIC ================= */
const sadMusic = new Audio("assets/music/sad.mp3");
const happyMusic = new Audio("assets/music/happy.mp3");
happyMusic.loop = true;

/* ================= TYPEWRITER ================= */
function typeText(el, text, speed = 40) {
  el.innerHTML = "";
  let i = 0;
  const timer = setInterval(() => {
    el.innerHTML += text[i] || "";
    i++;
    if (i >= text.length) clearInterval(timer);
  }, speed);
}

/* ================= EMOJI RAIN ================= */
let emojiInterval;
function startEmojis() {
  emojiInterval = setInterval(() => {
    const e = document.createElement("div");
    e.className = "emoji";
    e.innerText = Math.random() > 0.5 ? "❤️" : "🌼";
    e.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(e);
    setTimeout(() => e.remove(), 8000);
  }, 400);
}
function stopEmojis() {
  clearInterval(emojiInterval);
}
startEmojis();

/* ================= START ================= */
typeText(questionText, "Sai… will you be my Valentine? ❤️");

/* ================= NO ================= */
let noCount = 0;
noBtn.onclick = () => {
  noCount++;
  stopEmojis();
  qs.classList.add("hidden");
  ns.classList.remove("hidden");
  sadMusic.play();

  if (noCount <= 3) {
    typeText(sadText, [
      "Sai… don’t you love me anymore? 💔",
      "Sai… was I not enough for you? 🥀",
      "Sai… my heart is breaking… 💔"
    ][noCount - 1]);
  } else {
    sadText.innerHTML = `
      <img src="assets/gifs/tease.gif" class="gif">
      <p>Haha Sai 😌❤️<br>
      No running away now…<br>
      My heart already claimed you 💫</p>`;
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 80 + "vw";
    noBtn.style.top = Math.random() * 80 + "vh";
  }
};

thinkAgain.onclick = () => {
  sadMusic.pause();
  ns.classList.add("hidden");
  qs.classList.remove("hidden");
  startEmojis();
};

/* ================= YES ================= */
yesBtn.onclick = () => {
  stopEmojis();
  qs.classList.add("hidden");
  ys.classList.remove("hidden");
  happyMusic.play();

  confetti({ particleCount: 200, spread: 180 });
  typeText(readyText, "Ready for our Valentine Week, my love? ✨");
};

readyBtn.onclick = () => showCalendar();

/* ================= CALENDAR ================= */
function showCalendar() {
  ys.classList.add("hidden");
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

    ["tl","tr","bl","br"].forEach(p => {
      const h = document.createElement("div");
      h.className = `corner-heart ${p}`;
      h.innerText = "❤️";
      ds.appendChild(h);
    });

    let i = 1;
    const imgInterval = setInterval(() => {
      if (i > 5) return clearInterval(imgInterval);
      const img = document.createElement("img");
      img.src = `assets/images/day${day}-${i}.jpg`;
      img.style.width = "150px";
      img.style.margin = "10px";
      ds.appendChild(img);
      i++;
    }, 600);
  };

  if (day === 14) {
    confetti({ particleCount: 300, spread: 360 });
  }

  const back = document.createElement("button");
  back.className = "backBtn";
  back.innerText = "⬅ Back to Calendar";
  back.onclick = () => {
    ds.classList.add("hidden");
    showCalendar();
  };
  ds.appendChild(back);
}

