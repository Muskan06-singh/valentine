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
    el.innerHTML += text[i];
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

/* BROKEN HEART RAIN */
function brokenRain() {
  document.querySelectorAll(".broken").forEach(b => b.remove());
  for (let i = 0; i < 25; i++) {
    const b = document.createElement("div");
    b.className = "broken";
    b.innerText = "💔";
    b.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(b);
  }
}

/* START */
typeText(questionText, "Sai… will you be my Valentine? ❤️");

/* NO CLICK */
noBtn.onclick = () => {
  noCount++;
  qs.classList.add("hidden");
  ns.classList.remove("hidden");

  sadMusic.play();
  typeText(sadText, "Sai… don’t you love me anymore? 💔");

  brokenRain();

  if (noCount > 1) {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 80 + "vw";
    noBtn.style.top = Math.random() * 80 + "vh";
  clearInterval(emojiInterval);
  document.getElementById("emoji-layer").innerHTML = "";
  brokenRain();


  }
};

/* THINK AGAIN */
thinkAgain.onclick = () => {
  sadMusic.pause();
  sadMusic.currentTime = 0;
  document.querySelectorAll(".broken").forEach(b => b.remove());
  ns.classList.add("hidden");
  qs.classList.remove("hidden");
};

/* YES CLICK */
yesBtn.onclick = () => {
  sadMusic.pause();
  sadMusic.currentTime = 0;

  qs.classList.add("hidden");
  ys.classList.remove("hidden");

  happyMusic.play();
  fireConfetti();


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

/* CALENDAR */
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
    } else {
      if (d === 7 || d === 14) {
       box.onclick = () => openDay(d);
} else {
  box.onclick = showWaitMessage;
}

    }
    cal.appendChild(box);
  }
  cs.appendChild(cal);
}

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

  typeText(
    poem,
    `Sai 💖\nYou light my heart every day 🌸\nWith you my worries fly away ✨\nForever yours — always stay ❤️`
  );

  for (let i = 1; i <= 5; i++) {
    const img = document.createElement("img");
    img.src = `assets/images/day${day}-${i}.jpg`;
    img.style.width = "140px";
    img.style.margin = "8px";
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
let heartbreakInterval;

function brokenRain() {
  clearInterval(heartbreakInterval);

  heartbreakInterval = setInterval(() => {
    const b = document.createElement("div");
    b.innerText = "💔";
    b.style.position = "fixed";
    b.style.left = Math.random() * 100 + "vw";
    b.style.fontSize = "90px";
    b.style.animation = "fall 4s linear";
    document.body.appendChild(b);

    setTimeout(() => b.remove(), 4000);
  }, 120);
}
function fireConfetti() {
  const end = Date.now() + 3000;

  (function frame() {
    confetti({
      particleCount: 6,
      spread: 80,
      origin: { x: Math.random(), y: Math.random() - 0.2 }
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}
function showWaitMessage() {
  alert(
    "Not today, my love 💗\n" +
    "Some moments bloom only on their day 🌸\n" +
    "Until then… hold my heart gently ✨"
  );
}



