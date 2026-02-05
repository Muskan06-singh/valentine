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

/* 💕 INSANE RAIN */
let rainInt;
function startRain(){
stopRain();
rainInt=setInterval(()=>{
let e=document.createElement("div");
e.className="rain";
let emojis=["❤️","🌸","🌼","💖","💘"];
e.innerText=emojis[Math.floor(Math.random()*emojis.length)];
e.style.left=Math.random()*100+"vw";
document.body.appendChild(e);
setTimeout(()=>e.remove(),7000);
},200);
}
function stopRain(){
clearInterval(rainInt);
document.querySelectorAll(".rain").forEach(e=>e.remove());
}
startRain();

/* FLOATING SAI EVERYWHERE */
setInterval(()=>{
let s=document.createElement("div");
s.className="floatSai";
s.innerText="Sai 💕";
s.style.left=Math.random()*100+"vw";
document.body.appendChild(s);
setTimeout(()=>s.remove(),8000);
},800);

/* 💔 HEARTBREAK MODE */
let heartInt;
function startHeartbreak(){
stopRain();
heartInt=setInterval(()=>{
let b=document.createElement("div");
b.className="broken";
b.innerText="💔";
b.style.left=Math.random()*100+"vw";
document.body.appendChild(b);
setTimeout(()=>b.remove(),3000);
},120);
}
function stopHeartbreak(){
clearInterval(heartInt);
document.querySelectorAll(".broken").forEach(e=>e.remove());
}

/* NO CLICK */
let noCount=0;
const sadLines=[
"Sai… my heart is yours 💔",
"Why are you doing this to me 😭",
"I will still love you forever 🖤"
];

noBtn.onclick=()=>{
noCount++;

document.body.classList.add("shake");
setTimeout(()=>document.body.classList.remove("shake"),400);

qScreen.classList.add("hidden");
sadScreen.classList.remove("hidden");

document.getElementById("sadGif").src="assets/gifs/sad.gif";
sadMusic.play();
startHeartbreak();

if(noCount<=3){
typeWriter(sadText,sadLines[noCount-1]);
}

if(noCount===3){
setTimeout(()=>{
document.getElementById("sadGif").src="assets/gifs/tease.gif";
typeWriter(sadText,"You cannot escape me 😈❤️");
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

/* YES = LOVE EXPLOSION */
yesBtn.onclick=()=>{
qScreen.classList.add("hidden");
yesScreen.classList.remove("hidden");

document.body.classList.add("loveMode");

happyMusic.play();

for(let i=0;i<8;i++){
setTimeout(()=>{
confetti({
particleCount:300,
spread:120,
origin:{y:0.6}
});
},i*400);
}

typeWriter(document.getElementById("yesText"),
"Our love story begins forever 💍❤️");
};

/* CALENDAR */
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

/* BACK HOME */
document.getElementById("backHome").onclick=()=>{
calScreen.classList.add("hidden");
qScreen.classList.remove("hidden");
startRain();
};

/* OPEN DAY */
function openDay(day){
calScreen.classList.add("hidden");
dayScreen.classList.remove("hidden");
stopRain();

document.getElementById("dayGif").src=`assets/gifs/day${day}.gif`;

const poemEl=document.getElementById("poem");
const imgBox=document.getElementById("images");
imgBox.innerHTML="";

let poem=`Sai my love this is day ${day} 💕
You are my heartbeat 💓
My forever person 💖
I love you endlessly ❤️`;

setTimeout(()=>typeWriter(poemEl,poem),500);

/* images */
setTimeout(()=>{
let i=1;
let inter=setInterval(()=>{
if(i>5){clearInterval(inter);return;}
let img=document.createElement("img");
img.src=`assets/images/day${day}-${i}.jpg`;
img.style.width="150px";
img.style.margin="10px";
imgBox.appendChild(img);
i++;
},700);
},3000);

if(day==14){
setInterval(()=>{
confetti({
particleCount:8,
spread:70,
origin:{x:Math.random(),y:Math.random()-0.2},
colors:["#ff4d88","#ff99cc"]
});
},120);
}
}

document.getElementById("backCal").onclick=()=>{
dayScreen.classList.add("hidden");
showCalendar();
startRain();
};
