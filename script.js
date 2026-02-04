/* ================= POEMS ================= */
const poems = {
  7: [
    "🌹 Sai, roses blush when you pass 🌹",
    "Petals fall just to match your class ✨",
    "Your smile perfumes my every day 💖",
    "Love blooms softly when you stay 🌸",
    "Rose Day bows to you, my king 👑",
    "Hearts learn romance from everything you bring ❤️",
    "Crimson dreams wrapped in you 💌",
    "Every rose whispers Sai is true 🌹",
    "Hands full of petals, skies so blue 💕",
    "Rose Day exists because of you 💘"
  ],
  8: [
    "💍 Sai, my courage wears your name 💍",
    "Love burns bright like gentle flame 🔥",
    "I don’t kneel for rings or gold 💖",
    "Just your forever, brave and bold 🤍",
    "My heart proposes soft and slow 💞",
    "Every tomorrow wants to know 🌷",
    "Will you walk this life with me ✨",
    "Through calm and stormy sea 🌊",
    "Propose Day writes destiny 💌",
    "Sai, forever starts with we ❤️"
  ],
  9: [
    "🍫 Sai, sweetness learned from you 🍫",
    "Chocolate melts like hearts do 💕",
    "Every bite tastes like your smile 😋",
    "Love lingers, stays a while 💖",
    "Cocoa dreams and sugar skies ✨",
    "Your name echoes in every sigh 🤎",
    "Chocolate Day wrapped in delight 🍬",
    "You’re my craving day and night 🌙",
    "No dessert sweeter than you 💞",
    "Sai, my forever flavor too 🍫"
  ],
  10: [
    "🧸 Sai, comfort has your face 🧸",
    "Every hug feels like safe space 🤍",
    "Soft arms, heartbeat near 💓",
    "All my worries disappear ✨",
    "Teddy Day stitched with care 💖",
    "Love sewn gently everywhere 🪡",
    "If home had arms, it’s you 🏠",
    "Every cuddle feels brand new 💕",
    "Warmth written into my soul 🫂",
    "Sai, you make me whole ❤️"
  ],
  11: [
    "🤞 Sai, promises breathe your name 🤞",
    "Quiet love, steady flame 🔥",
    "Through chaos, calm, and fear 💖",
    "I choose you every year ✨",
    "My vow is soft but strong 💞",
    "With you is where I belong 🌷",
    "Promise Day carved in time ⏳",
    "Your heart forever next to mine ❤️",
    "Every oath sealed in you 💌",
    "Sai, my promise stays true 🤍"
  ],
  12: [
    "🤗 Sai, hugs speak what words can’t 🤗",
    "They heal wounds I never plant 💖",
    "Wrapped in you, the world feels right ✨",
    "Dark turns softly into light 🌙",
    "Your arms rewrite my fears 💞",
    "Hold me close, erase the years ⏳",
    "Hug Day breathes peace into me 🌷",
    "My safest place is where you be 🤍",
    "Every squeeze resets my soul 🫂",
    "Sai, you make me whole ❤️"
  ],
  13: [
    "💋 Sai, kisses aren’t just lips 💋",
    "They’re smiles, glances, fingertips 💕",
    "Every kiss slows down time ⏳",
    "Love tasting sweet like rhyme ✨",
    "Not rushed, not loud, just true 💞",
    "Every kiss pulls me to you 🌷",
    "Kiss Day signed in fate 💖",
    "Hearts sealed, no debate ❤️",
    "Breathless moments, soft bliss 😘",
    "Sai, even air feels like a kiss 💋"
  ],
  14: [
    "❤️ Sai, Valentine is not a day ❤️",
    "It’s every heartbeat finding its way 💖",
    "Through storms, silence, and time ✨",
    "Your name lives in every rhyme 💞",
    "Hands locked, souls tied 💕",
    "Walking forever side by side 🌷",
    "Love didn’t ask, it chose 💌",
    "In every future that flows ⏳",
    "Forever written in you ❤️",
    "My Valentine — always Sai 💘"
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
const happyMusic = new Audio("assets/music/happy.mp3");
const sadMusic = new Audio("assets/music/sad.mp3");
happyMusic.loop = true;

/* ================= TYPEWRITER ================= */
function typeText(el, text, speed=45) {
  el.innerHTML = "";
  let i = 0;
  const t = setInterval(()=>{
    el.innerHTML += text[i]==="\n"?"<br>":text[i];
    i++;
    if(i>=text.length) clearInterval(t);
  },speed);
}

typeText(questionText,"Sai… will you be my Valentine? ❤️");

/* ================= EMOJI RAIN ================= */
let emojiInt;
function startEmojis() {
  emojiInt = setInterval(()=>{
    const e=document.createElement("div");
    e.className="emoji";
    e.innerText=Math.random()>0.5?"❤️":"🌼";
    e.style.left=Math.random()*100+"vw";
    document.body.appendChild(e);
    setTimeout(()=>e.remove(),6000);
  },120);
}
function stopEmojis(){ clearInterval(emojiInt); }
startEmojis();

/* ================= HEARTBREAK ================= */
let heartInt;
function startHeartbreak(){
  stopEmojis();
  sadMusic.play();
  heartInt=setInterval(()=>{
    const b=document.createElement("div");
    b.className="broken";
    b.innerText="💔";
    b.style.left=Math.random()*100+"vw";
    document.body.appendChild(b);
    setTimeout(()=>b.remove(),3000);
  },150);
}
function stopHeartbreak(){
  clearInterval(heartInt);
}

/* ================= BUTTONS ================= */
let noCount=0;
noBtn.onclick=()=>{
  noCount++;
  qs.classList.add("hidden");
  ns.classList.remove("hidden");
  startHeartbreak();
  typeText(sadText, poems[7][noCount%poems[7].length]);
  if(noCount>=4){
    noBtn.style.position="absolute";
    noBtn.style.left=Math.random()*80+"vw";
    noBtn.style.top=Math.random()*80+"vh";
  }
};

thinkAgain.onclick=()=>{
  sadMusic.pause();
  stopHeartbreak();
  ns.classList.add("hidden");
  qs.classList.remove("hidden");
  startEmojis();
};

yesBtn.onclick=()=>{
  stopHeartbreak();
  qs.classList.add("hidden");
  ys.classList.remove("hidden");
  happyMusic.play();
  confetti({particleCount:300,spread:180});
  typeText(readyText,"Our love story begins… 💖");
};

readyBtn.onclick=showCalendar;

/* ================= CALENDAR ================= */
function showCalendar(){
  ys.classList.add("hidden");
  cs.classList.remove("hidden");
  cs.innerHTML="";
  const cal=document.createElement("div");
  cal.className="calendar";
  for(let d=7;d<=14;d++){
    const box=document.createElement("div");
    box.className="day";
    box.innerText=`Feb ${d}`;
    box.onclick=()=>openDay(d);
    cal.appendChild(box);
  }
  cs.appendChild(cal);
}

/* ================= OPEN DAY ================= */
function openDay(day){
  cs.classList.add("hidden");
  ds.classList.remove("hidden");
  ds.innerHTML="";

  const gif=document.createElement("img");
  gif.src=`assets/gifs/day${day}.gif`;
  gif.className="gif";
  ds.appendChild(gif);

  const poem=document.createElement("h2");
  ds.appendChild(poem);
  typeText(poem,poems[day].join("\n"));

  ["tl","tr","bl","br"].forEach(p=>{
    const h=document.createElement("div");
    h.className=`corner ${p}`;
    h.innerText="❤️";
    ds.appendChild(h);
  });

  let i=1;
  const imgInt=setInterval(()=>{
    if(i>5){clearInterval(imgInt);return;}
    const img=document.createElement("img");
    img.src=`assets/images/day${day}-${i}.jpg`;
    img.style.width="160px";
    img.style.margin="10px";
    ds.appendChild(img);
    i++;
  },600);

  if(day===14){
    confetti({particleCount:400,spread:360});
  }

  const back=document.createElement("button");
  back.className="backBtn";
  back.innerText="⬅ Back to Calendar";
  back.onclick=()=>{
    ds.classList.add("hidden");
    cs.classList.remove("hidden");
  };
  ds.appendChild(back);
}
