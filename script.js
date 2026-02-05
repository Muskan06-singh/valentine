// ===============================
// ELEMENTS
// ===============================
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");
const gif = document.getElementById("gif");
const calendar = document.getElementById("calendar");
const dayPopup = document.getElementById("dayPopup");
const poemBox = document.getElementById("poemBox");
const imagesBox = document.getElementById("imagesBox");
const backBtn = document.getElementById("backBtn");

const happyMusic = new Audio("assets/music/happy.mp3");
const sadMusic = new Audio("assets/music/sad.mp3");

happyMusic.loop = true;
sadMusic.loop = true;

let noCount = 0;

// ===============================
// TYPEWRITER QUESTION
// ===============================
const valentineText = "Sai… will you be my Valentine 💕";
let i = 0;

function typeQuestion(){
  if(i < valentineText.length){
    question.innerHTML += valentineText.charAt(i);
    i++;
    setTimeout(typeQuestion,60);
  }
}
typeQuestion();

// ===============================
// YES CLICK
// ===============================
yesBtn.onclick = () =>{
  sadMusic.pause();
  happyMusic.play();
  gif.src = "assets/gifs/happy.gif";
  startHearts();
  startConfetti();
  calendar.style.display="block";
}

// ===============================
// NO CLICK
// ===============================
noBtn.onclick = () =>{
  noCount++;

  if(noCount==1){
    gif.src="assets/gifs/sad.gif";
    sadMusic.play();
    startBrokenHearts();
  }

  if(noCount==3){
    gif.src="assets/gifs/tease.gif";
    question.innerHTML="You are mine already Sai ❤️";
    question.classList.add("shineText");
  }

  if(noCount>=3){
    moveNo();
  }
}

function moveNo(){
  const x=Math.random()*window.innerWidth-100;
  const y=Math.random()*window.innerHeight-100;
  noBtn.style.position="absolute";
  noBtn.style.left=x+"px";
  noBtn.style.top=y+"px";
}

// ===============================
// EMOJI RAINS
// ===============================
let rainInterval;

function startHearts(){
  clearInterval(rainInterval);
  rainInterval=setInterval(()=>{
    const el=document.createElement("div");
    el.innerHTML=Math.random()>0.5?"🌼":"💖";
    el.className="rain";
    el.style.left=Math.random()*100+"vw";
    el.style.fontSize=(24+Math.random()*30)+"px";
    document.body.appendChild(el);
    setTimeout(()=>el.remove(),5000);
  },300);
}

function startBrokenHearts(){
  clearInterval(rainInterval);
  rainInterval=setInterval(()=>{
    const el=document.createElement("div");
    el.innerHTML="💔";
    el.className="rain";
    el.style.left=Math.random()*100+"vw";
    el.style.fontSize=(28+Math.random()*40)+"px";
    el.style.transform=`rotate(${Math.random()*360}deg)`;
    document.body.appendChild(el);
    setTimeout(()=>el.remove(),5000);
  },300);
}

// ===============================
// CONFETTI
// ===============================
function startConfetti(){
  const duration=5000;
  const end=Date.now()+duration;

  (function frame(){
    confetti({
      particleCount:6,
      spread:360,
      startVelocity:30,
      origin:{x:Math.random(),y:Math.random()-0.2}
    });
    if(Date.now()<end){
      requestAnimationFrame(frame);
    }
  })();
}

function heartConfetti(){
  const duration=5000;
  const end=Date.now()+duration;

  (function frame(){
    confetti({
      particleCount:5,
      spread:360,
      shapes:["text"],
      shapeOptions:{
        text:{value:"💕",font:"20px Arial"}
      },
      origin:{x:Math.random(),y:Math.random()-0.2}
    });
    if(Date.now()<end){
      requestAnimationFrame(frame);
    }
  })();
}

// ===============================
// CALENDAR
// ===============================
const today=new Date().getDate();

document.querySelectorAll(".day").forEach(day=>{
  const d=parseInt(day.dataset.day);

  if(d!==7 && d!==14 && d!==today){
    day.classList.add("locked");
    day.innerHTML="🔒";
    return;
  }

  day.onclick=()=>openDay(d);
});

// ===============================
// OPEN DAY
// ===============================
function openDay(day){
  calendar.style.display="none";
  dayPopup.style.display="block";
  poemBox.innerHTML="";
  imagesBox.innerHTML="";
  gif.src=`assets/gifs/day${day}.gif`;

  if(day==14){
    heartConfetti();
  }else{
    startConfetti();
  }

  setTimeout(()=>{
    typePoem(day);
  },1500);
}

// ===============================
// POEMS
// ===============================
const poems={
7:[
"🌹 Rose day blooms when I see you Sai",
"💖 Your smile makes my shy heart fly",
"🌹 Every petal whispers your name",
"💕 Loving you feels like a sweet flame",
"🌹 Hold this rose from me to you",
"💘 My love for you is always true",
"🌹 In your arms I softly stay",
"💞 My Sai you color my day",
"🌹 Forever yours in every way",
"💓 Be mine not just today"
],
14:[
"💕 Valentine day finally here",
"💖 With you I hold no fear",
"💕 Your love my sweetest sky",
"💘 With you my heart can fly",
"💕 Sai you are my dream",
"💞 My forever love theme",
"💕 Hold me close and stay",
"💖 Forever mine always"
]
};

function typePoem(day){
  const lines=poems[day]||["💕 Our love story continues Sai"];
  let li=0,ci=0;

  function write(){
    if(li<lines.length){
      if(ci<lines[li].length){
        poemBox.innerHTML+=lines[li].charAt(ci);
        ci++;
        setTimeout(write,35);
      }else{
        poemBox.innerHTML+="<br>";
        li++;ci=0;
        setTimeout(write,300);
      }
    }else{
      showImages(day);
    }
  }
  write();
}

// ===============================
// IMAGES
// ===============================
function showImages(day){
  let i=1;
  function next(){
    if(i>5)return;
    const img=document.createElement("img");
    img.src=`assets/images/day${day}-${i}.jpg`;
    img.className="dayImg";
    imagesBox.appendChild(img);
    i++;
    setTimeout(next,600);
  }
  next();
}

// ===============================
backBtn.onclick=()=>{
  dayPopup.style.display="none";
  calendar.style.display="block";
};
