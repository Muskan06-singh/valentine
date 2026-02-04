/* =========================
   💖 POEMS
========================= */
const poems = { /* SAME AS BEFORE */ 
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
   ELEMENTS
========================= */
const cs = document.getElementById("calendar-screen");
const ds = document.getElementById("day-screen");

/* =========================
   TYPEWRITER
========================= */
function typeText(el, text, speed = 45, callback) {
  el.innerHTML = "";
  let i = 0;
  const timer = setInterval(() => {
    el.innerHTML += text[i] === "\n" ? "<br>" : text[i];
    i++;
    if (i >= text.length) {
      clearInterval(timer);
      if (callback) callback();
    }
  }, speed);
}

/* =========================
   CORNER HEARTS
========================= */
function showCornerHearts() {
  removeCornerHearts();
  ["tl","tr","bl","br"].forEach(pos => {
    const h = document.createElement("div");
    h.className = `corner-heart ${pos}`;
    h.innerHTML = "❤️";
    document.body.appendChild(h);
  });
}
function removeCornerHearts() {
  document.querySelectorAll(".corner-heart").forEach(h => h.remove());
}

/* =========================
   📅 CALENDAR
========================= */
function showCalendar() {
  cs.classList.remove("hidden");
  ds.classList.add("hidden");
}

/* =========================
   💌 OPEN DAY (FIXED)
========================= */
function openDay(day) {
  // HARD switch screens (this was missing clarity)
  cs.classList.add("hidden");
  ds.classList.remove("hidden");
  ds.innerHTML = "";

  // Stop all rains OUTSIDE
  if (typeof stopHeartbreak === "function") stopHeartbreak();
  if (typeof stopEmojis === "function") stopEmojis();

  // Show corner hearts INSIDE
  showCornerHearts();

  // 1️⃣ GIF FIRST
  const gif = document.createElement("img");
  gif.src = `assets/gifs/day${day}.gif`;
  gif.className = "gif";
  ds.appendChild(gif);

  // 2️⃣ POEM AFTER GIF
  const poem = document.createElement("h2");
  ds.appendChild(poem);

  typeText(poem, poems[day].join("\n"), 45, () => {

    // 3️⃣ IMAGES AFTER POEM
    const imgWrap = document.createElement("div");
    imgWrap.className = "image-wrap";

    for (let i = 1; i <= 5; i++) {
      const img = document.createElement("img");
      img.src = `assets/images/day${day}-${i}.jpg`;
      imgWrap.appendChild(img);
    }
    ds.appendChild(imgWrap);

    // 4️⃣ FINAL DAY CONFETTI
    if (day === 14 && typeof fireConfettiSafe === "function") {
      fireConfettiSafe(6000);
    }
  });

  // BACK BUTTON
  const back = document.createElement("button");
  back.className = "backBtn";
  back.innerText = "⬅ Back to Calendar";
  back.onclick = () => {
    removeCornerHearts();
    showCalendar();
  };
  ds.appendChild(back);
}

