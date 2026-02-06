/* ---------- TYPEWRITER ---------- */
function typeWriter(el,text,speed=40){
el.innerHTML="";
let i=0;
let timer=setInterval(()=>{
el.innerHTML+=text.charAt(i);
i++;
if(i>=text.length) clearInterval(timer);
},speed);
}

/* ---------- ELEMENTS ---------- */
const qScreen=document.getElementById("question-screen");
const sadScreen=document.getElementById("sad-screen");
const yesScreen=document.getElementById("yes-screen");
const calScreen=document.getElementById("calendar-screen");
const dayScreen=document.getElementById("day-screen");

const questionText=document.getElementById("questionText");
const yesText=document.getElementById("yesText");
const sadText=document.getElementById("sadText");

/* ---------- OPENING ---------- */
typeWriter(questionText,"Sai… will you be my Valentine? 💌✨");

/* ---------- RAIN ---------- */
let rainInt;
function startRain(){
stopRain();
rainInt=setInterval(()=>{
let e=document.createElement("div");
e.className="rain";
e.innerText=["❤️","🌸","🌼","💖"][Math.floor(Math.random()*4)];
e.style.left=Math.random()*100+"vw";
e.style.fontSize=(25+Math.random()*25)+"px";
e.style.animationDuration=(4+Math.random()*3)+"s";
document.body.appendChild(e);
setTimeout(()=>e.remove(),7000);
},120);
}
function stopRain(){
clearInterval(rainInt);
document.querySelectorAll(".rain").forEach(e=>e.remove());
}
startRain();

/* ---------- YES BUTTON ---------- */
document.getElementById("yesBtn").onclick=()=>{
qScreen.classList.add("hidden");
yesScreen.classList.remove("hidden");

typeWriter(
yesText,
"Yaaay 💖 Sai said YES… and my heart just found its forever home in you 💍✨"
);

/* confetti */
confetti({particleCount:300,spread:360});
showProposalExplosion();
};

/* ---------- PROPOSAL EXPLOSION ---------- */
function showProposalExplosion(){
setTimeout(()=>{
let box=document.createElement("div");
box.id="proposalBox";
box.innerHTML=`
<h1>💍 MARRY ME SAI 💖</h1>
<p style="font-size:28px">You are mine forever 😭💘</p>
<button onclick="openCalendar()">Enter Our Love Story</button>
`;
document.body.appendChild(box);
},2500);
}

function openCalendar(){
document.getElementById("proposalBox").remove();
yesScreen.classList.add("hidden");
showCalendar();
}

/* ---------- NO BUTTON LOGIC ---------- */
let noClick=0;

const sadPoems=[
"Sai… my heart dropped hearing that 💔\nBut it still beats only for you",
"Sai… even your no feels soft to me 🥺\nBecause it came from you",
"Sai… I’ll wait till your heart says yes 🌙\nBecause my forever is you"
];

document.getElementById("noBtn").onclick=()=>{
noClick++;

qScreen.classList.add("hidden");
sadScreen.classList.remove("hidden");

let sadGif=document.getElementById("sadGif");

/* 1-3 sad */
if(noClick<=3){
sadGif.src="assets/gifs/sad.gif";
typeWriter(sadText,sadPoems[noClick-1]);
}

/* 4 tease */
else if(noClick==4){
sadGif.src="assets/gifs/tease.gif";
typeWriter(sadText,"Sai… you are mine already 😌💖 stop pressing no");
}

/* after 4 run */
else{
let noBtn=document.getElementById("noBtn");
noBtn.style.position="absolute";

noBtn.onmouseover=()=>{
let x=Math.random()*(window.innerWidth-100);
let y=Math.random()*(window.innerHeight-60);
noBtn.style.left=x+"px";
noBtn.style.top=y+"px";
};
}
};

/* ---------- BACK FROM SAD ---------- */
document.getElementById("backFromSad").onclick=()=>{
sadScreen.classList.add("hidden");
qScreen.classList.remove("hidden");
};

/* ---------- CALENDAR ---------- */
function showCalendar(){
calScreen.classList.remove("hidden");

const cal=document.getElementById("calendar");
cal.innerHTML="";

for(let d=7; d<=14; d++){
let box=document.createElement("div");
box.className="day";
box.innerText="Feb "+d;

/* 7 & 14 always open */
if(d===7 || d===14){
box.onclick=()=>openDay(d);
}
else{
box.classList.add("locked");
box.onclick=()=>{
alert("Not today my love… 🌙 This day will open when time is right 💌");
};
}

cal.appendChild(box);
}
}

/* ---------- POEMS ---------- */
const poems={
7:["🌹 Sai every rose whispers your name"],
8:["💍 Sai my heart proposes only you"],
9:["🍫 Sai sweetness begins with you"],
10:["🧸 Sai my comfort forever"],
11:["💌 Sai promises only yours"],
12:["🤗 Sai hold me always"],
13:["😘 Sai kiss of destiny"],
14:["❤️ Sai forever ours 💍"]
};

/* ---------- OPEN DAY ---------- */
function openDay(day){
calScreen.classList.add("hidden");
dayScreen.classList.remove("hidden");

document.getElementById("dayGif").src=`assets/gifs/day${day}.gif`;

const poemEl=document.getElementById("poem");
poemEl.innerHTML="";
poems[day].forEach(line=>{
let p=document.createElement("p");
p.innerHTML=line;
poemEl.appendChild(p);
});

/* images */
const imgBox=document.getElementById("images");
imgBox.innerHTML="";
let i=1;

let inter=setInterval(()=>{
let img=new Image();
img.src=`assets/images/day${day}-${i}.jpg`;
img.className="loveImg";

img.onload=()=>imgBox.appendChild(img);
img.onerror=()=>clearInterval(inter);
i++;
},1200);
}

/* ---------- BACK TO CAL ---------- */
document.getElementById("backCal").onclick=()=>{
dayScreen.classList.add("hidden");
showCalendar();
startRain();
};
