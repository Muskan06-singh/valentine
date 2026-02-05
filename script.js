function typeWriter(el,text,speed=40){
el.innerHTML="";
let i=0;
let timer=setInterval(()=>{
el.innerHTML+=text.charAt(i);
i++;
if(i>=text.length) clearInterval(timer);
},speed);
}

const qScreen=document.getElementById("question-screen");
const sadScreen=document.getElementById("sad-screen");
const yesScreen=document.getElementById("yes-screen");
const calScreen=document.getElementById("calendar-screen");
const dayScreen=document.getElementById("day-screen");

const yesBtn=document.getElementById("yesBtn");
const noBtn=document.getElementById("noBtn");
const thinkBtn=document.getElementById("thinkBtn");
const openCal=document.getElementById("openCal");

const sadText=document.getElementById("sadText");
const questionText=document.getElementById("questionText");

const sadMusic=new Audio("assets/music/sad.mp3");
const happyMusic=new Audio("assets/music/happy.mp3");
happyMusic.loop=true;

typeWriter(questionText,"Sai, will you be my valentine 💕");

/* LOVE RAIN */
let rainInt;
function startRain(){
stopRain();
rainInt=setInterval(()=>{
let e=document.createElement("div");
e.className="rain";
let emojis=["❤️","🌸","🌼","💖"];
e.innerText=emojis[Math.floor(Math.random()*emojis.length)];
e.style.left=Math.random()*100+"vw";
document.body.appendChild(e);
setTimeout(()=>e.remove(),7000);
},250);
}
function stopRain(){
clearInterval(rainInt);
document.querySelectorAll(".rain").forEach(e=>e.remove());
}
startRain();

/* floating sai */
setInterval(()=>{
let s=document.createElement("div");
s.className="floatSai";
s.innerText="Sai 💕";
s.style.left=Math.random()*100+"vw";
document.body.appendChild(s);
setTimeout(()=>s.remove(),8000);
},900);

/* 💔 HEARTBREAK FIXED */
let heartInt;
function startHeartbreak(){
stopHeartbreak();   // clear first
heartInt=setInterval(()=>{
let b=document.createElement("div");
b.className="broken";
b.innerText="💔";
b.style.left=Math.random()*100+"vw";
document.body.appendChild(b);
setTimeout(()=>b.remove(),3000);
},100);
}
function stopHeartbreak(){
clearInterval(heartInt);
document.querySelectorAll(".broken").forEach(e=>e.remove());
}

/* NO CLICK */
let noCount=0;
const sadLines=[
"Sai… my heart is breaking 💔",
"Please don't leave me 😭",
"I will still love you forever 🖤"
];

noBtn.onclick=()=>{
noCount++;

qScreen.classList.add("hidden");
sadScreen.classList.remove("hidden");

document.getElementById("sadGif").src="assets/gifs/sad.gif";
sadMusic.play();

/* start heartbreak shower */
startHeartbreak();

if(noCount<=3){
typeWriter(sadText,sadLines[noCount-1]);
}

if(noCount===3){
setTimeout(()=>{
document.getElementById("sadGif").src="assets/gifs/tease.gif";
typeWriter(sadText,"You can't escape me 😈❤️");
},2000);
}

if(noCount>=4){
noBtn.onmouseover=()=>{
noBtn.style.position="absolute";
noBtn.style.left=Math.random()*80+"vw";
noBtn.style.top=Math.random()*80+"vh";
};
}
};

/* THINK AGAIN */
thinkBtn.onclick=()=>{
sadMusic.pause();
sadMusic.currentTime=0;
stopHeartbreak();
sadScreen.classList.add("hidden");
qScreen.classList.remove("hidden");
startRain();
};

/* 💍 YES = MARRY ME MODE */
yesBtn.onclick=()=>{
qScreen.classList.add("hidden");
yesScreen.classList.remove("hidden");

happyMusic.play();

/* massive confetti */
for(let i=0;i<6;i++){
setTimeout(()=>{
confetti({
particleCount:400,
spread:140,
origin:{y:0.6}
});
},i*400);
}

typeWriter(document.getElementById("yesText"),
"From today… you are mine forever 💍❤️");
};

/* calendar */
openCal.onclick=()=>{
yesScreen.classList.add("hidden");
showCalendar();
};

function showCalendar(){
calScreen.classList.remove("hidden");
const cal=document.getElementById("calendar");
cal.innerHTML="";

for(let d=7;d<=14;d++){
let box=document.createElement("div");
box.className="day";
box.innerText="Feb "+d;

if(d!==7 && d!==14){
box.classList.add("locked");
box.onclick=()=>alert("Wait for our special day 💕");
}else{
box.onclick=()=>openDay(d);
}
cal.appendChild(box);
}
}

document.getElementById("backHome").onclick=()=>{
calScreen.classList.add("hidden");
qScreen.classList.remove("hidden");
startRain();
};

/* day open */
function openDay(day){
calScreen.classList.add("hidden");
dayScreen.classList.remove("hidden");
stopRain();

document.getElementById("dayGif").src=`assets/gifs/day${day}.gif`;

const poemEl=document.getElementById("poem");
let poem=`Sai my love this is day ${day} 💕
You are my forever 💖
My future wife 💍
I love you endlessly ❤️`;

setTimeout(()=>typeWriter(poemEl,poem),500);

if(day==14){
setTimeout(()=>{
showProposal();
},5000); // proposal after 5 sec
}


document.getElementById("backCal").onclick=()=>{
dayScreen.classList.add("hidden");
showCalendar();
startRain();
};
/* 💍 FINAL PROPOSAL SCENE */
function showProposal(){

// create overlay
let box=document.createElement("div");
box.id="proposalScene";

box.innerHTML=`
<div class="ring">💍</div>
<div class="marryText">Sai… Will you marry me? ❤️</div>
<button class="foreverBtn">YES FOREVER 💕</button>
`;

document.body.appendChild(box);

/* fireworks nonstop */
let fire=setInterval(()=>{
confetti({
particleCount:80,
spread:100,
origin:{x:Math.random(),y:Math.random()-0.2},
colors:["#ff4d88","#ffffff","#ff99cc"]
});
},300);

/* floating hearts blast */
let loveRain=setInterval(()=>{
let e=document.createElement("div");
e.className="rain";
e.innerText="💖";
e.style.left=Math.random()*100+"vw";
document.body.appendChild(e);
setTimeout(()=>e.remove(),4000);
},120);

/* click yes forever */
box.querySelector(".foreverBtn").onclick=()=>{
clearInterval(fire);
clearInterval(loveRain);

box.innerHTML=`
<h1 style="font-size:80px;color:white;text-shadow:0 0 40px hotpink;">
She said YES 💍❤️
</h1>
`;

setInterval(()=>{
confetti({
particleCount:200,
spread:140,
origin:{y:0.6}
});
},500);
};
}
