const question = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const thinkAgain = document.getElementById("thinkAgain");
const gif = document.getElementById("mainGif");
const happyMusic = document.getElementById("happyMusic");
const sadMusic = document.getElementById("sadMusic");
const weekSection = document.getElementById("weekSection");
const weekYes = document.getElementById("weekYes");
const calendar = document.getElementById("calendar");

let noCount = 0;
let confettiShown = false;

/* TYPEWRITER */
const text = "Sai, in every heartbeat and every silent prayer… will you be my Valentine? 💖";
let i = 0;
function type() {
  if (i < text.length) {
    question.innerHTML += text.charAt(i++);
    setTimeout(type, 80);
  }
}
type();

/* FLOATING HEARTS + DAISIES EVERYWHERE */
for (let i = 0; i < 40; i++) {
  const e = document.createElement("div");
  e.className = "emoji";
  e.innerText = Math.random() > 0.5 ? "❤️" : "🌼";
  e.style.left = Math.random() * 100 + "vw";
  e.style.animationDuration = 5 + Math.random() * 5 + "s";
  document.body.appendChild(e);
}

/* HEART BREAK RAIN */
function heartRain() {
  for (let i = 0; i < 25; i++) {
    const h = document.createElement("div");
    h.className = "rain";
    h.innerText = "💔";
    h.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 3000);
  }
}

/* CONFETTI ONCE */
function confetti() {
  if (confettiShown) return;
  confettiShown = true;
  for (let i = 0; i < 80; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.background = `hsl(${Math.random() * 360},100%,50%)`;
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 3000);
  }
}

/* NO CLICK */
noBtn.onclick = () => {
  noCount++;
  document.body.classList.add("dark");
  sadMusic.play();
  happyMusic.pause();

  gif.src = "assets/gifs/sad.gif";
  gif.hidden = false;
  heartRain();

  thinkAgain.hidden = false;
  yesBtn.hidden = true;

  if (noCount > 1) {
    gif.src = "assets/gifs/tease.gif";
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 80 + "vw";
    noBtn.style.top = Math.random() * 80 + "vh";
  }
};

/* THINK AGAIN */
thinkAgain.onclick = () => {
  document.body.classList.remove("dark");
  sadMusic.pause();
  gif.hidden = true;
  thinkAgain.hidden = true;
  yesBtn.hidden = false;
};

/* YES CLICK */
yesBtn.onclick = () => {
  document.body.classList.remove("dark");
  sadMusic.pause();
  happyMusic.play();

  noBtn.hidden = true;
  thinkAgain.hidden = true;

  gif.src = "assets/gifs/happy.gif";
  gif.hidden = false;

  confetti();
  weekSection.hidden = false;
};

/* WEEK YES */
weekYes.onclick = () => {
  weekSection.hidden = true;
  buildCalendar();
};

/* CALENDAR */
function buildCalendar() {
  calendar.hidden = false;
  for (let d = 7; d <= 14; d++) {
    const btn = document.createElement("button");
    btn.textContent = `Feb ${d}`;
    btn.onclick = () => openDay(d);
    calendar.appendChild(btn);
  }
}

/* DAY OPEN */
function openDay(day) {
  document.body.innerHTML = `
    <h1>For My Sai 💖</h1>
    <img src="assets/gifs/day${day}.gif" width="300"><br><br>
    <p>
      Sai, you rhyme with my every sigh 💕<br>
      In your smile, my forever lies ✨<br>
      Through Feb ${day}, my heart stays true 💖<br>
      Every love song begins with you 🎶
    </p>
  `;
}

