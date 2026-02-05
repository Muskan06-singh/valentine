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
const poems = {
7:`🌹 Sai, my rose blooms only for you,\nYour petals whisper secrets of love,\nEach morning greets me with your smile,\nYour laughter dances in the air,\nMy heart beats in your rhythm,\nEvery sigh carries your name,\nI bloom because of your light,\nYour eyes are the sun of my day,\nThe world pales without your warmth,\nForever I choose you, Sai,\nMy Valentine, my rose, my everything 💖`,
8:`💍 Sai, today I gather courage,\nTo vow my heart forever yours,\nYour gaze holds eternity,\nEvery word you speak is a promise,\nMy soul leaps at your smile,\nI bend, I bow to your grace,\nRings and vows are just symbols,\nYour love is my eternal crown,\nI whisper your name in winds,\nAnd dream of our forever union 💞`,
9:`🍫 Sai, you taste like sweetest chocolate,\nEvery hug melts my fears away,\nYour laughter sprinkles magic,\nMy heart savors each moment,\nLife becomes creamy and rich,\nMoments coated in your love,\nEvery glance like sugar dust,\nEven darkness tastes bright,\nBecause of your glow, Sai,\nMy sweetest chocolate of life 💝`,
10:`🧸 Sai, my comforting teddy,\nIn your arms I find solace,\nYour hugs mend all storms,\nYour voice is my lullaby,\nEvery heartbeat calms with you,\nNight whispers your name,\nMorning blooms with your touch,\nSafety dances in your warmth,\nEvery fear dissolves in you,\nForever I rest in your embrace 🤍`,
11:`💌 Sai, I promise through chaos and calm,\nThrough laughter and tears,\nMy soul chooses only you,\nEvery breath carries devotion,\nSeasons change but not my love,\nStorms may come, yet I stay,\nMy heart beats for your heartbeat,\nMy hands reach only for yours,\nEvery whisper, every silence,\nEchoes: I love you endlessly 💗`,
12:`🤗 Sai, your hugs heal my world,\nPresence like warm sunlight,\nSilence speaks our love,\nMoments linger in your arms,\nPeace wraps around my soul,\nTime slows in your gaze,\nEvery heartbeat sings your name,\nComfort dances in your touch,\nLove shelters and protects,\nForever I rest in your warmth 💞`,
13:`😘 Sai, your smile kisses my soul,\nEyes hold galaxies of magic,\nEvery glance sparks love,\nMoments shimmer and shine,\nYour touch is gentle eternity,\nYour voice, a melody of peace,\nLove blooms in our silence,\nEvery heartbeat beats together,\nEvery sigh whispers forever,\nMy sweetest kiss, my forever 💋`,
14:`❤️ Sai, our forever begins today,\nNot just in this moment,\nBut in every lifetime ahead,\nSouls entwined in gentle rhythm,\nLove grows in every storm,\nSmiles echo in eternity,\nI choose you beyond all time,\nMy heart beats only Sai,\nForever and always my Valentine,\nMy love, my soul, my everything 💖`
};

// --- SONG LYRICS FOR GIFT2 ---
const giftLyrics = {
7:`Roses bloom in skies so pink,\nEach petal whispers love we think.\nYour smile, my guiding light,\nThrough the day and through the night.\nEvery heartbeat calls your name,\nLove in us will never wane.\nPetals fall, yet I rise,\nYour laughter bright, my sweetest prize.\nForever ours, my Valentine,\nForever yours, my heart entwined.\n`,
8:`A ring, a vow, a loving gaze,\nI promise you my endless days.\nEvery word I speak is true,\nForever I belong to you.\nHearts entwined in gentle light,\nOur souls together, shining bright.\nProposals whispered soft and near,\nI choose you always, my dear.\nYour love a song, my melody,\nForever bound, eternally.\n`,
9:`Chocolate sweet, like your kiss,\nEvery bite brings boundless bliss.\nMoments dipped in sugar skies,\nLove reflected in your eyes.\nEach hug, each laugh, a candy treat,\nWith you, my world is complete.\nMelting fears and soft delights,\nYou are my sweetest, endless nights.\nOur love is cocoa warm and true,\nForever I am yours, Sai, I do.\n`,
10:`Teddy soft, in arms so kind,\nEvery worry left behind.\nHugs that heal and whispers sweet,\nMoments where our hearts meet.\nSleep wrapped in your gentle care,\nMorning finds us always there.\nSoft and warm, our love remains,\nEvery heartbeat drops the chains.\nForever safe within your hold,\nOur story tender, yet so bold.\n`,
11:`Promises whispered, vows unseen,\nLove flowing through our in-between.\nEvery storm and every calm,\nYour presence, my eternal balm.\nThrough the laughter, through the pain,\nForever ours, love’s sweet refrain.\nHearts bound tightly, spirits free,\nI am yours eternally.\nEvery glance, a promise made,\nForever together, never fade.\n`,
12:`Hugs that heal, hands that guide,\nIn your warmth, I cannot hide.\nSilence speaks the words we feel,\nLove is ours, forever real.\nMoments pause in your embrace,\nTime slows down, we find our space.\nEvery sigh and tender touch,\nTells me, Sai, I love you much.\nPeace and joy in every beat,\nLife with you is oh so sweet.\n`,
13:`Kisses soft, like morning dew,\nEvery glance a spark anew.\nMoments twirl and hearts ignite,\nYour love is day, your love is night.\nSoft whispers in a gentle tone,\nTogether we are never alone.\nEvery laugh, a melody,\nEvery touch, a symphony.\nSai, you are my sweetest bliss,\nForever sealed with your soft kiss.\n`,
14:`Hearts collide in endless dance,\nLove eternal, not by chance.\nOur souls entwined, forever near,\nEvery heartbeat, every tear.\nCandles flicker, stars above,\nWhispered vows and endless love.\nTogether strong, together free,\nSai, you are my destiny.\nValentine’s forever, we unite,\nLove eternal, shining bright.\n`
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
    setTimeout(()=>e.remove(),8000);
  },300);
}
function stopRain(){clearInterval(rainInterval);emojiRain.innerHTML="";}
function brokenRain(){
  stopRain();
  return setInterval(()=>{
    const b=document.createElement("div");
    b.className="broken";
    b.innerHTML="💔";
    b.style.left=Math.random()*100+"vw";
    b.style.transform=`rotate(${Math.random()*60-30}deg)`;
    document.body.appendChild(b);
    setTimeout(()=>b.remove(),4000);
  },200);
}

// --- TYPEWRITER ---
function typeWriter(el,text,speed=40,callback,fontSize=28){
  el.innerHTML="";
  let i=0;
  el.style.fontSize=fontSize+"px";
  const timer=setInterval(()=>{
    el.innerHTML+=text[i];
    i++;
    el.style.fontSize = (fontSize + i*0.2)+"px";
    if(i>=text.length){
      clearInterval(timer);
      if(callback) callback();
    }
  },speed);
}

// --- MAIN TITLE ---
typeWriter(title,"Sai… will you be my Valentine 💕",50,()=>{startRain();},36);

// --- NO BUTTON LOGIC ---
let noCount=0;
noBtn.onclick = ()=>{
  noCount++;
  if(noCount>3){
    teaseGif.src="assets/gifs/tease.gif";
    teaseGif.classList.remove("hidden");
    teaseText.innerHTML="";
    typeWriter(teaseText,"You are already mine 🐒",50);
    // Make NO button run away
    noBtn.style.position="absolute";
    noBtn.style.left=Math.random()*80+"vw";
    noBtn.style.top=Math.random()*60+"vh";
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
    box.onclick=()=>openDay(d);
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
  typeWriter(poemEl,poems[day],40);

  ["tl","tr","bl","br"].forEach(p=>{
    const h=document.createElement("div");
    h.className="corner "+p;
    h.innerHTML="❤️";
    document.body.appendChild(h);
  });

  if(day==14){
    setTimeout(()=>{
      const end=Date.now()+5000;
      (function frame(){
        confetti({particleCount:10,spread:100,shapes:["heart"],origin:{x:Math.random(),y:Math.random()-0.2},scalar:1.5});
        if(Date.now()<end) requestAnimationFrame(frame);
      })();
    },1000);
  }

  // --- GIFT1 ---
  gift1Btn.onclick = ()=>{
    let count=0;
    const emoji = ["🌹","💍","🍫","🧸","💌","🤗","😘","❤️"];
    const interval = setInterval(()=>{
      const ic=document.createElement("div");
      ic.className="floating";
      ic.style.fontSize="50px";
      ic.innerHTML = emoji[day-7];
      ic.style.left = Math.random()*100+"vw";
      ic.style.transform = `rotate(${Math.random()*60-30}deg)`;
      document.body.appendChild(ic);
      setTimeout(()=>ic.remove(),8000);
      count++;
      if(count>=40){ clearInterval(interval); }
    },150);
  }

  // --- GIFT2 ---
  gift2Btn.onclick = ()=>{
    typeWriter(lyrics,giftLyrics[day],30);
  }
}

// --- BACK BUTTON ---
backBtn.onclick = ()=>{
  dayScreen.classList.add("hidden");
  calendarScreen.classList.remove("hidden");
  document.querySelectorAll(".corner").forEach(e=>e.remove());
};
