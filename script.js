/* ========= ELEMENTS ========= */
const askPage = document.getElementById("page-ask");
const calPage = document.getElementById("page-calendar");
const dayPage = document.getElementById("page-day");
const sadPage = document.getElementById("page-sad");

const askText = document.getElementById("askText");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const askGif = document.getElementById("askGif");

const calendar = document.getElementById("calendar");
const backHome = document.getElementById("btn-back-home");
const backCal = document.getElementById("btn-back-cal");

const dayGif = document.getElementById("dayGif");
const poemBox = document.getElementById("poemBox");
const imagesBox = document.getElementById("imagesBox");

const sadText = document.getElementById("sadText");
const thinkBtn = document.getElementById("btn-think");

const layer = document.getElementById("floating-layer");

/* ========= MUSIC ========= */
const happyMusic = new Audio("assets/music/happy.mp3");
happyMusic.loop = true;
const sadMusic = new Audio("assets/music/sad.mp3");

/* ========= TYPEWRITER ========= */
function typeWriter(el, text, speed = 40) {
  el.innerHTML = "";
  let i = 0;
  const t = setInterval(() => {
    el.innerHTML += text[i] || "";
    i++;
    if (i >= text.length) clearInterval(t);
  }, speed);
}

/* ========= FLOATING EMOJI RAIN ========= */
let floatInt;
function startFloat() {
  clearInterval(floatInt);
  floatInt = setInterval(() => {
    const e = document.createElement("div");
    const arr = ["❤️", "🌼", "🌸"];
    e.innerHTML = arr[Math.floor(Math.random() * arr.length)];
    e.className = "float";
    e.style.left = Math.random() * 100 + "vw";
    e.style.animationDuration = 5 + Math.random() * 4 + "s";
    layer.appendChild(e);
    setTimeout(() => e.remove(), 9000);
  }, 300);
}
function stopFloat() {
  clearInterval(floatInt);
  layer.innerHTML = "";
}

/* ========= HEARTBREAK RAIN ========= */
let brokenInt;
function startBroken() {
  stopFloat();
  brokenInt = setInterval(() => {
    const b = document.createElement("div");
    b.innerHTML = "💔";
    b.className = "broken";
    b.style.left = Math.random() * 100 + "vw";
    b.style.animationDuration = 3 + Math.random() * 2 + "s";
    document.body.appendChild(b);
    setTimeout(() => b.remove(), 5000);
  }, 180);
}
function stopBroken() {
  clearInterval(brokenInt);
}

/* ========= START ========= */
typeWriter(askText, "Sai… will you be my Valentine? 💕");
startFloat();

/* ========= INITIAL FLOW ========= */
// YES
yesBtn.onclick = () => {
  stopBroken();
  sadMusic.pause();
  happyMusic.play();
  askGif.src = "assets/gifs/happy.gif";
  askGif.classList.remove("hidden");

  // full-screen confetti
  confetti({ particleCount: 200, spread: 120, origin: { y: 0.6 } });

  setTimeout(() => {
    askPage.classList.remove("active");
    calPage.classList.add("active");
    buildCalendar();
  }, 2500);
};

// NO
let noCount = 0;
noBtn.onclick = () => {
  noCount++;
  sadMusic.play();
  startBroken();

  if (noCount === 1) {
    askGif.classList.add("hidden");
    askPage.classList.remove("active");
    sadPage.classList.add("active");
    typeWriter(sadText, "Sai… my heart feels empty 💔");
  } else if (noCount === 2) {
    typeWriter(sadText, "Please don’t leave my love alone 🥀");
  } else if (noCount >= 3) {
    // tease vibe
    askGif.src = "assets/gifs/tease.gif";
    askGif.classList.remove("hidden");
    askPage.classList.add("active");
    sadPage.classList.remove("active");
    typeWriter(askText, "You are already mine ❤️😌");

    // runaway no button
    noBtn.onmouseover = () => {
      noBtn.style.position = "absolute";
      noBtn.style.left = Math.random() * 80 + "vw";
      noBtn.style.top = Math.random() * 80 + "vh";
    };
  }
};

// Think again
thinkBtn.onclick = () => {
  sadMusic.pause();
  askPage.classList.add("active");
  sadPage.classList.remove("active");
  startFloat();
  stopBroken();
};

/* ========= CALENDAR ========= */
backHome.onclick = () => {
  calPage.classList.remove("active");
  askPage.classList.add("active");
  startFloat();
};

backCal.onclick = () => {
  dayPage.classList.remove("active");
  calPage.classList.add("active");
  startFloat();
};

function buildCalendar() {
  calendar.innerHTML = "";
  const today = new Date().getDate();

  for (let d = 7; d <= 14; d++) {
    const box = document.createElement("div");
    box.className = "day";
    box.innerText = "Feb " + d;

    if (d !== 7 && d !== 14 && d !== today) {
      box.classList.add("locked");
      box.onclick = () => alert("My love… wait for the right day 💕");
    } else {
      box.onclick = () => openDay(d);
    }

    calendar.appendChild(box);
  }
}

/* ========= POEMS ========= */
const poems = {
  7: `🌹 Sai my rose blooms for you,
Every petal whispers I love you,
Soft winds carry your name,
My heart burns like gentle flame,
With you life feels divine,
Forever yours, forever mine,
Your smile paints my sky,
With you my dreams fly,
Rose day begins our story,
Sai you are my glory 💖`,

  8: `💍 Sai today I confess,
You are my happiness,
Not just today but forever,
I promise leaving never,
Every heartbeat says your name,
Life with you not same,
Hold my hand always,
Stay with me all days,
This proposal from my soul,
Sai you make me whole 💘`,

  9: `🍫 Sweet like chocolate you,
Sai my world feels new,
Every bite reminds of you,
Every dream comes true,
Stay close never far,
You my shining star,
Melting heart for you,
Only love so true,
Chocolate day we shine,
Sai forever mine 🤎`,

  10: `🧸 Sai my teddy heart,
Hugs that never part,
Soft love warm and tight,
You make world bright,
Holding you feels home,
Never let you roam,
In your arms peace,
All fears cease,
Teddy day feels right,
Sai my pure light 🧸`,

  11: `🤝 Promises in air,
Sai I always care,
Through storm and rain,
I’ll stay the same,
Forever by your side,
With you I reside,
No matter what we face,
You my safe place,
Promise day we vow,
I choose you now 💞`,

  12: `🤗 Sai my warm hug,
Love wrapped snug,
Every heartbeat calm,
In your loving palm,
Your arms my peace,
All worries cease,
Hold me tight,
Day and night,
Hug day says true,
I live for you 💕`,

  13: `💋 Sai your smile kiss,
Heavenly bliss,
Soul meets soul,
You make me whole,
Every glance fire,
You my desire,
Love so deep,
Memories keep,
Kiss day say this,
You’re my bliss 😘`,

  14: `💕 Sai forever we,
Just you and me,
Through time and fate,
Love so great,
Hearts align,
Your hand mine,
Destiny wrote,
Every love note,
Valentine forever,
Leave you never ❤️`
};

/* ========= OPEN DAY ========= */
function openDay(d) {
  stopFloat();
  calPage.classList.remove("active");
  dayPage.classList.add("active");

  dayGif.src = `assets/gifs/day${d}.gif`;

  poemBox.innerHTML = "";
  imagesBox.innerHTML = "";
  typeWriter(poemBox, poems[d], 35);

  // images one by one
  let i = 1;
  const imgInterval = setInterval(() => {
    if (i > 5) { clearInterval(imgInterval); return; }
    const img = document.createElement("img");
    img.src = `assets/images/day${d}-${i}.jpg`;
    imagesBox.appendChild(img);
    i++;
  }, 800);

  // special February 14 heart confetti
  if (d === 14) {
    setTimeout(() => {
      // small burst of hearts
      for (let i = 0; i < 60; i++) {
        const heart = document.createElement("div");
        heart.innerHTML = "💕";
        heart.className = "float";
        heart.style.left = Math.random() * 100 + "vw";
        layer.appendChild(heart);
        setTimeout(() => heart.remove(), 4000);
      }
    }, 1200);
  }
}

