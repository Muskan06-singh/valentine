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
  stopEmojis();
  const layer = document.getElementById("emoji-layer");
  emojiInterval = setInterval(() => {
    const e = document.createElement("div");
    e.className = "emoji";
    e.innerText = Math.random() > 0.5 ? "❤️" : "🌼";
    e.style.left = Math.random() * 100 + "vw";
    layer.appendChild(e);
    setTimeout(() => e.remove(), 10000);
  }, 350);
}

function stopEmojis() {
  clearInterval(emojiInterval);
  document.getElementById("emoji-layer").innerHTML = "";
}

/* =========================
   HEARTBEAT CORNERS
========================= */
let heartsInterval;
function startHearts() {
  stopHearts();
  const corners = ["top-left","top-right","bottom-left","bottom-right"];
  corners.forEach(c => {
    const h = document.createElement("div");
    h.className = "corner-heart "+c;
    h.innerText = "❤️";
    document.body.appendChild(h);
  });

  heartsInterval = setInterval(() => {
    document.querySelectorAll(".corner-heart").forEach(h => {
      h.style.transform = "scale(1.3)";
      setTimeout(()=> h.style.transform="scale(1)",300);
    });
  }, 600);
}
function stopHearts() {
  clearInterval(heartsInterval);
  document.querySelectorAll(".corner-heart").forEach(h=>h.remove());
}

/* =========================
   HEARTBREAK
========================= */
let heartbreakInterval;
function startHeartbreak() {
  stopEmojis();
  heartbreakInterval = setInterval(() => {
    const b = document.createElement("div");
    b.className = "broken";
    b.innerText = "💔";
    b.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(b);
    setTimeout(() => b.remove(), 3000);
  }, 120);
}
function stopHeartbreak() {
  clearInterval(heartbreakInterval);
}

/* =========================
   CONFETTI
========================= */
function fireConfettiSafe(duration = 3000) {
  if (typeof confetti !== "function") return;
  const end = Date.now() + duration;
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
startEmojis();

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
  startHeartbreak();
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
  stopHeartbreak();
  sadMusic.pause();
  qs.classList.add("hidden");
  ys.classList.remove("hidden");
  happyMusic.play();
  fireConfettiSafe();
  typeText(readyText, "Are you ready, my love, for our magical love week? ✨");
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
  cs.classList.remove("hidden");
  cs.innerHTML = `<div class="calendar"></div>`;
  startEmojis();

  const cal = cs.querySelector(".calendar");
  const today = new Date().getDate();

  for(let d=7; d<=14; d++){
    const box = document.createElement("div");
    box.className = "day";
    box.innerText = `Feb ${d}`;

    // 7th and 14th always open, rest according to real date
    if((d!==7 && d!==14) && today < d){
      box.classList.add("locked");
      box.onclick = () => alert("🌸 Wait for the day, my love… the magic comes in its time 💖");
    } else {
      box.onclick = ()=> openDay(d);
    }

    cal.appendChild(box);
  }
}

/* =========================
   OPEN DAY
========================= */
function openDay(day){
  qs.classList.add("hidden");
  ns.classList.add("hidden");
  ys.classList.add("hidden");
  cs.classList.add("hidden");

  stopEmojis();
  startHearts();

  ds.classList.remove("hidden");
  ds.style.display="flex";
  ds.style.flexDirection="column";
  ds.style.alignItems="center";
  ds.style.zIndex="9999";
  ds.innerHTML="";

  // BIG GIF at top
  const gif = document.createElement("img");
  gif.src=`assets/gifs/day${day}.gif`;
  gif.style.width="80%";
  gif.style.maxWidth="600px";
  gif.style.borderRadius="15px";
  ds.appendChild(gif);

  // POEM
  const poem = document.createElement("h2");
  poem.style.whiteSpace="pre-line";
  poem.style.marginTop="20px";
  ds.appendChild(poem);

  // Type poem line by line
  let lineIndex = 0;
  function typeNextLine(){
    if(lineIndex >= poems[day].length){
      showImages(day);
      return;
    }
    typeText(poem, (poem.innerHTML ? poem.innerHTML + "\n":"") + poems[day][lineIndex] + "\n", 45);
    lineIndex++;
    setTimeout(typeNextLine, poems[day][lineIndex-1].length*50 + 800);
  }
  typeNextLine();

  // BACK BUTTON
  const back = document.createElement("button");
  back.innerText="⬅ Back to Calendar";
  back.className="backBtn";
  back.style.marginTop="20px";
  back.onclick = ()=>{
    ds.classList.add("hidden");
    ds.style.display="none";
    stopHearts();
    showCalendar();
  }
  ds.appendChild(back);

  // CONFETTI for 14th
  if(day===14) fireConfettiSafe(6000);
}

/* =========================
   SHOW IMAGES ONE BY ONE
========================= */
function showImages(day){
  let i=1;
  function showNext(){
    if(i>5) return;
    const img = document.createElement("img");
    img.src=`assets/images/day${day}-${i}.jpg`;
    img.style.width="150px";
    img.style.margin="10px";
    ds.appendChild(img);
    i++;
    setTimeout(showNext, 1000);
  }
  showNext();
}
