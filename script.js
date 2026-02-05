// --- ELEMENTS ---
const title = document.getElementById("title");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const sadScreen = document.getElementById("sadScreen");
const main = document.getElementById("main");
const happyScreen = document.getElementById("happyScreen");
const calendarScreen = document.getElementById("calendarScreen");
const dayScreen = document.getElementById("dayScreen");
const sadText = document.getElementById("sadText");
const thinkBtn = document.getElementById("thinkBtn");
const happyMusic = document.getElementById("happyMusic");
const sadMusic = document.getElementById("sadMusic");
const emojiRain = document.getElementById("emojiRain");
const teaseGif = document.getElementById("teaseGif");
const teaseText = document.getElementById("teaseText");
const backToMain = document.getElementById("backToMain");
const dayGif = document.getElementById("dayGif");
const poemEl = document.getElementById("poem");
const giftButtons = document.getElementById("giftButtons");
const gift1Btn = document.getElementById("gift1");
const gift2Btn = document.getElementById("gift2");
const images = document.getElementById("images");
const lyrics = document.getElementById("lyrics");
const backBtn = document.getElementById("backBtn");

// --- POEMS ---
const poems={
7:`🌹 Sai, my rose blooms only for you...\nYour petals whisper love...\nEvery morning greets me with your smile...\nI bloom because of your light...\nMy heart beats for your rhythm...\nForever I choose you 💖`,
8:`💍 Sai, today I gather courage...\nTo vow my heart forever yours...\nYour gaze holds eternity...\nI whisper your name in winds...\nForever I am yours 💞`,
9:`🍫 Sai, you taste like sweetest chocolate...\nEvery hug melts my fears...\nMoments turn golden...\nLife is sweet with you 💝`,
10:`🧸 Sai, my comforting teddy...\nYour hugs heal storms...\nEvery heartbeat calmer...\nYou are my home 🤍`,
11:`💌 Sai, I promise you...\nThrough smiles and tears...\nI choose you daily...\nMy heart stays yours 💗`,
12:`🤗 Sai, your hugs heal...\nYour presence soothes...\nEvery moment warmer...\nYou are my peace 💞`,
13:`😘 Sai, your smile kisses my soul...\nEvery glance melts me...\nLove dances softly...\nForever yours 💋`,
14:`❤️ Sai, this is our forever...\nNot just today...\nThrough smiles and storms...\nI choose you endlessly 💖`
};

// --- SONGS ---
const giftLyrics = {
7:`Roses bloom in skies so pink...\nEach petal whispers love we think...\nForever ours, my Valentine...`,
8:`A ring, a vow, a loving gaze...\nEvery word I speak is true...\nI am yours eternally...`,
9:`Chocolate sweet, like your kiss...\nEvery bite brings boundless bliss...\nOur love is cocoa warm and true...`,
10:`Teddy soft, in arms so kind...\nEvery worry left behind...\nSleep wrapped in your gentle care...`,
11:`Promises whispered, vows unseen...\nThrough the laughter, through the pain...\nHearts bound tightly, spirits free...`,
12:`Hugs that heal, hands that guide...\nSilence speaks the words we feel...\nPeace and joy in every beat...`,
13:`Kisses soft, like morning dew...\nMoments twirl and hearts ignite...\nSai, you are my sweetest bliss...`,
14:`Hearts collide in endless dance...\nLove eternal, not by chance...\nValentine’s forever, we unite...`
};

// --- EMOJI RAIN ---
let rainInterval, brokenInterval;
function startRain(){
  stopRain();
  rainInterval=setInterval(()=>{
    const e=document.createElement("div");
    e.className="floating";
    e.innerHTML=Math.random()>0.5?"🌼":"❤️";
    e.style.left=Math.random()*100+"vw";
    e.style.transform=`rotate(${Math.random()*60-30}deg)`;
    emojiRain.appendChild(e);
    setTimeout(()=>e.remove(),5000);
  },150);
}
function stopRain(){clearInterval(rainInterval);emojiRain.innerHTML="";}
function brokenRain(){
  return setInterval(()=>{
    const b=document.createElement("div");
    b.className="broken";
    b.innerHTML="💔";
    b.style.left=Math.random()*100+"vw";
    b.style.transform=`rotate(${Math.random()*60-30}deg)`;
    document.body.appendChild(b);
    setTimeout(()=>b.remove(),5000);
  },700);
}

// --- TYPEWRITER ---
function typeWriter(el,text,speed=40,callback,fontSize=28){
  el.innerHTML="";
  let i=0;
  el.style.fontSize=fontSize+"px";
  const timer=setInterval(()=>{
    el.innerHTML+=text[i];
    i++;
    el.style.fontSize=(fontSize+i*0.2)+"px";
    if(i>=text.length){ clearInterval(timer); if(callback) callback();}
  },speed);
}

// --- MAIN TITLE ---
typeWriter(title,"Sai… will you be my Valentine 💕",50,()=>{startRain();},36);

// --- NO BUTTON ---
let noCount=0;
noBtn.onclick = ()=>{
  noCount++;
  if(noCount>3){
    teaseGif.src="assets/gifs/tease.gif";
    teaseGif.classList.remove("hidden");
    teaseText.innerHTML="";
    typeWriter(teaseText,"You are already mine 🐒",50);
    // NO button runs away continuously
    setInterval(()=>{
      noBtn.style.position="absolute";
      noBtn.style.left=Math.random()*80+"vw";
      noBtn.style.top=Math.random()*60+"vh";
    },300);
    return;
  }
  main.classList.add("hidden");
  sadScreen.classList.remove("hidden");
  sadMusic.play();
  brokenInterval = brokenRain();
  const msgs=[
    "Sai… does my love mean nothing? 💔",
    "My heart only beats for you Sai… 🥀",
    "Without you everything feels empty… 🖤"
  ];
  typeWriter(sadText,msgs[noCount-1]);
};
thinkBtn.onclick = ()=>{
  sadMusic.pause();
  sadMusic.currentTime=0;
  clearInterval(brokenInterval);
  sadScreen.classList.add("hidden");
  main.classList.remove("hidden");
  startRain();
};

// --- YES BUTTON ---
yesBtn.onclick = ()=>{
  main.classList.add("hidden");
  happyScreen.classList.remove("hidden");
  stopRain();
  happyMusic.play();
  const duration=4000;
  const end=Date.now()+duration;
  (function frame(){
    confetti({particleCount:7,spread:120,origin:{x:Math.random(),y:Math.random()-0.2}});
    if(Date.now()<end) requestAnimationFrame(frame);
  })();
};

// --- CALENDAR ---
document.getElementById("openCal").onclick = ()=>{
  happyScreen.classList.add("hidden");
  calendarScreen.classList.remove("hidden");
  loadCalendar();
  startRain();
};
backToMain.onclick = ()=>{
  calendarScreen.classList.add("hidden");
  main.classList.remove("hidden");
  startRain();
};

function loadCalendar(){
  const cal=document.getElementById("calendar");
  cal.innerHTML="";
  for(let d=7;d<=14;d++){
    const box=document.createElement("div");
    box.className="day";
    box.innerHTML="Feb "+d;
    if(d!==7 && d!==14){
      box.onclick=()=>alert("Wait for our special day my love 💌");
    }else{
      box.onclick=()=>openDay(d);
    }
    cal.appendChild(box);
  }
}

// --- DAY SCREEN ---
function openDay(day){
  calendarScreen.classList.add("hidden");
  dayScreen.classList.remove("hidden");
  stopRain();
  dayGif.src=`assets/gifs/day${day}.gif`;
  giftButtons.classList.remove("hidden");
  images.innerHTML="";
  lyrics.innerHTML="";
  poemEl.innerHTML="";
  ["tl","tr","bl","br"].forEach(p=>{
    const h=document.createElement("div");
    h.className="corner "+p;
    h.innerHTML="❤️";
    document.body.appendChild(h);
  });
  typeWriter(poemEl,poems[day],40);

  if(day==14){
    setTimeout(()=>{
      const end=Date.now()+5000;
      (function frame(){
        confetti({ particleCount:12, spread:140, shapes:["heart"], origin:{x:Math.random(),y:Math.random()-0.2}, scalar:1.5 });
        if(Date.now()<end) requestAnimationFrame(frame);
      })();
    },1000);
  }

  gift1Btn.onclick = ()=>{
    let count=0;
    const emoji = ["🌹","💍","🍫","🧸","💌","🤗","😘","❤️"];
    const interval = setInterval(()=>{
      const ic=document.createElement("div");
      ic.className="floating";
      ic.style.fontSize="60px";
      ic.innerHTML = emoji[day-7];
      ic.style.left = Math.random()*100+"vw";
      ic.style.transform = `rotate(${Math.random()*60-30}deg)`;
      document.body.appendChild(ic);
      setTimeout(()=>ic.remove(),8000);
      count++;
      if(count>=40){ clearInterval(interval); }
    },120);
  }

  gift2Btn.onclick = ()=>{
    typeWriter(lyrics,giftLyrics[day],30);
  }
}

// --- BACK BUTTON ---
backBtn.onclick = ()=>{
  dayScreen.classList.add("hidden");
  calendarScreen.classList.remove("hidden");
  document.querySelectorAll(".corner").forEach(e=>e.remove());
  startRain();
};
