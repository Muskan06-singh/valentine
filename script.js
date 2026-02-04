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

const poems = {
  7:`🌹 Sai my rose blooms only for you... Your name perfumes my sky... Every petal whispers Sai... Your smile is my sunrise... Your voice my soft wind... Love began with your eyes... And grew in my heart... Sai you are my forever rose... My Valentine begins with you 💖`,
  8:`💍 Sai today I gather courage... Not just to love but forever... Your name lives in my heartbeat... Every breath says Sai... If love is a promise... Mine begins with you... Your eyes hold my future... Your smile my home... Will you stay forever Sai... My soul chooses you daily 💞`,
  9:`🍫 Sai you taste like happiness... Sweeter than every chocolate... Your laughter melts me... Your love warms me... Life is sugar with you... Moments turn golden... Every bite feels love... Every second feels magic... Sai my sweetest forever... You are my favorite treat 💝`,
  10:`🧸 Sai my comfort teddy... In your arms I rest... Your hugs heal storms... Your voice feels safe... Love feels soft here... Your warmth surrounds me... Every heartbeat calmer... Every fear disappears... Sai hold me always... You are my home 🤍`,
  11:`💌 Sai I promise you... In chaos and calm... In smiles and tears... I choose you daily... My loyalty is yours... My heart stays yours... Through every season... Through every storm... Sai my forever promise... Is loving you endlessly 💗`,
  12:`🤗 Sai your hugs heal... Your presence soothes... Your silence comforts... Your love protects... I feel safe here... Wrapped in you... Every heartbeat slower... Every moment warmer... Sai hug me always... You are my peace 💞`,
  13:`😘 Sai your smile kisses my soul... Your eyes hold magic... Every glance melts me... Every moment sparks... Love dances softly... Between us always... Your touch feels eternal... Your voice feels warm... Sai my sweetest kiss... Forever yours 💋`,
  14:`❤️ Sai this is our forever... Not just today... But every lifetime... Our souls met gently... Our love grew deeply... Through smiles and storms... I choose you endlessly... My heart beats Sai... You are my always... My Valentine forever 💖`
};

let rainInterval;
function startRain(){
  stopRain();
  rainInterval=setInterval(()=>{
    const e=document.createElement("div");
    e.className="floating";
    e.innerHTML=Math.random()>0.5?"🌼":"❤️";
    e.style.left=Math.random()*100+"vw";
    e.style.transform=`rotate(${Math.random()*60-30}deg)`; // tilt
    emojiRain.appendChild(e);
    setTimeout(()=>e.remove(),8000);
  },500);
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

function typeWriter(el,text,speed=40,callback,fontSize=28){
  el.innerHTML="";
  let i=0;
  el.style.fontSize = fontSize+"px";
  const timer=setInterval(()=>{
    el.innerHTML+=text[i];
    i++;
    el.style.fontSize = (fontSize + i*0.4)+"px"; // increase size
    if(i>=text.length){
      clearInterval(timer);
      if(callback) callback();
    }
  },speed);
}

// INITIAL TITLE TYPEWRITER
typeWriter(title,"Sai… will you be my Valentine 💕",50,()=>{startRain();},50);

let noCount=0;
let brokenInterval;

noBtn.onclick=()=>{
  if(noCount>=3){
    noBtn.style.position="absolute";
    noBtn.style.left=Math.random()*80+"vw";
    noBtn.style.top=Math.random()*60+"vh";
    return; // button keeps running
  }
  noCount++;
  main.classList.add("hidden");
  sadScreen.classList.remove("hidden");
  sadMusic.play();
  brokenInterval=brokenRain();
  const msgs=[
    "Sai… does my love mean nothing? 💔",
    "My heart only beats for you Sai… 🥀",
    "Without you everything feels empty… 🖤"
  ];
  if(noCount<=3){
    typeWriter(sadText,msgs[noCount-1]);
  }
  if(noCount===3){
    setTimeout(()=>{
      sadMusic.pause();
      clearInterval(brokenInterval);
      sadScreen.classList.add("hidden");
      main.classList.remove("hidden");
      typeWriter(title,"You are mine already ❤️",40,()=>startRain(),45);
    },3000);
  }
};

thinkBtn.onclick=()=>{
  sadMusic.pause();
  sadMusic.currentTime=0;
  clearInterval(brokenInterval);
  sadScreen.classList.add("hidden");
  main.classList.remove("hidden");
  startRain();
};

yesBtn.onclick=()=>{
  main.classList.add("hidden");
  happyScreen.classList.remove("hidden");
  stopRain();
  happyMusic.play();

  const duration=4000;
  const end=Date.now()+duration;
  (function frame(){
    confetti({
      particleCount:7,
      spread:120,
      origin:{x:Math.random(),y:Math.random()-0.2}
    });
    if(Date.now()<end) requestAnimationFrame(frame);
  })();
};

document.getElementById("openCal").onclick=()=>{
  happyScreen.classList.add("hidden");
  calendarScreen.classList.remove("hidden");
  loadCalendar();
};

function loadCalendar(){
  const cal=document.getElementById("calendar");
  cal.innerHTML="";
  for(let d=7;d<=14;d++){
    const box=document.createElement("div");
    box.className="day";
    box.innerHTML="Feb "+d;
    if(d!==7 && d!==14){
      box.classList.add("locked");
      box.onclick=()=>alert("Wait for our special day my love 💌");
    }else{
      box.onclick=()=>openDay(d);
    }
    cal.appendChild(box);
  }
}

function openDay(day){
  calendarScreen.classList.add("hidden");
  dayScreen.classList.remove("hidden");
  stopRain();

  const gif=document.getElementById("dayGif");
  gif.src=`assets/gifs/day${day}.gif`;

  const poemEl=document.getElementById("poem");
  poemEl.innerHTML="";

  // AFTER GIF, WRITE POEM
  setTimeout(()=>{
    typeWriter(poemEl,poems[day],40,()=>{
      // AFTER POEM, DISPLAY IMAGES ONE BY ONE
      const imgBox=document.getElementById("images");
      imgBox.innerHTML="";
      for(let i=1;i<=5;i++){
        setTimeout(()=>{
          const im=document.createElement("img");
          im.src=`assets/images/day${day}-${i}.jpg`;
          im.style.display="inline-block";
          imgBox.appendChild(im);
        },i*1200);
      }
    },30);
  },800); // small delay after gif

  // CORNER HEARTS
  ["tl","tr","bl","br"].forEach(p=>{
    const h=document.createElement("div");
    h.className="corner "+p;
    h.innerHTML="❤️";
    document.body.appendChild(h);
  });

  // 14th special confetti
  if(day==14){
    setTimeout(()=>{
      const end=Date.now()+5000;
      (function frame(){
        confetti({
          particleCount:8,
          spread:90,
          shapes:["heart"],
          origin:{x:Math.random(),y:Math.random()-0.2},
          scalar:1.5
        });
        if(Date.now()<end) requestAnimationFrame(frame);
      })();
    },2000);
  }
}

document.getElementById("backBtn").onclick=()=>{
  dayScreen.classList.add("hidden");
  calendarScreen.classList.remove("hidden");
  document.querySelectorAll(".corner").forEach(e=>e.remove());
};
