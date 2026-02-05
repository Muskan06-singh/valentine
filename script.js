/* =========================
   💖 FULL VALENTINE POEMS 7–14
========================= */

const poems = {

7: [
"🌹 Sai, every rose whispers your name tonight",
"Petals glow soft in your love’s light ✨",
"Fragrance travels where you are 💌",
"My heart blooms only for Sai, my star ⭐",
"Each thorn fades when you are near 💞",
"Every bloom sings love so clear 🎶",
"Rose Day feels warmer with you 🌹",
"My forever begins with Sai, it’s true 💖",
"Every garden envies my fate 🌸",
"Because loving Sai is my destiny and my date ❤️"
],

8: [
"💍 Sai, today my heart kneels to you",
"Not with a ring, but love so true 💞",
"Every heartbeat softly says your name 🥹",
"In every lifetime, I’d love you the same ✨",
"If courage had a face, it’d be you 😘",
"If forever had a start, it begins with you 💖",
"Hold my hand through every sky ☁️",
"Promise me you’ll never say goodbye 🌙",
"Propose Day writes our fate today 💌",
"Sai, be mine forever — come what may ❤️"
],

9: [
"🍫 Sai, sweetness learned from you",
"Every chocolate envies your hue 🤎",
"Sugar feels shy near your smile 😊",
"My heart melts for you every while 💘",
"Each bite whispers your name softly 😋",
"Love tastes warmer when you’re with me 💞",
"Chocolate Day feels heavenly sweet 🍬",
"When your heart and mine meet 💓",
"Sai, you are my sweetest addiction 💖",
"My forever chocolate of affection 🍫"
],

10: [
"🧸 Sai, today I send you a teddy hug",
"Soft like love, warm and snug 🤗",
"In your arms I find my home 🏡",
"With you I never feel alone 💞",
"Every cuddle whispers your name 🥹",
"Every heartbeat does the same 💓",
"Teddy Day wraps us tight 🧸",
"In a world that feels so right ✨",
"Sai, be my comfort always 💖",
"My safe place in countless ways 🤍"
],

11: [
"💌 Sai, promises bloom today",
"In silent love that won’t fade away 🌙",
"I promise laughter through tears 💞",
"I promise love through years 🥹",
"In storms I’ll hold you tight 🌧️",
"In darkness be your light ✨",
"Promise Day seals my vow 💍",
"I choose only you now 💖",
"Every tomorrow I choose Sai ❤️",
"My forever promise — only you and I 🤍"
],

12: [
"🤗 Sai, today I send you my hug",
"Soft like moonlight, warm and snug 🌙",
"In your arms I feel peace 🥹",
"Every fear starts to cease 💞",
"Your presence heals my soul ✨",
"With you I feel whole 💖",
"Hug Day wraps my heart in you 🤍",
"In every life I’ll hug you too 😘",
"Sai, hold me forever tight 💓",
"Be my warmth every night 🌌"
],

13: [
"😘 Sai, kisses speak without sound",
"In your love my world is found 💞",
"Not lips, but souls that meet ✨",
"Every moment feels so sweet 🍫",
"Your smile feels like a kiss 😌",
"A gentle, endless bliss 💖",
"Kiss Day glows in your name 💋",
"My heart forever the same 💓",
"Sai, you’re my sweetest art 🎨",
"A kiss written on my heart ❤️"
],

14: [
"❤️ Sai, today is our forever day",
"Where love chooses to stay 💞",
"Not just today but every year ✨",
"I promise to keep you near 🥹",
"In laughter, in pain, in all we do 🤍",
"My world begins with you 💖",
"Valentine writes our destiny 💌",
"You and I — eternity 💍",
"Sai, my heart is only yours ❤️",
"Today, tomorrow, forevermore 💕"
]

};
/* TYPEWRITER */
function typeWriter(el,text,speed=40){
el.innerHTML="";
let i=0;
let timer=setInterval(()=>{
el.innerHTML+=text.charAt(i);
i++;
if(i>=text.length) clearInterval(timer);
},speed);
}

/* ELEMENTS */
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

/* MUSIC */
const sadMusic=new Audio("assets/music/sad.mp3");
const happyMusic=new Audio("assets/music/happy.mp3");
happyMusic.loop=true;

/* QUESTION */
typeWriter(questionText,"Sai, will you be my valentine 💕");

/* RAIN */
let rainInt;
function startRain(){
stopRain();
rainInt=setInterval(()=>{
let e=document.createElement("div");
e.className="rain";
e.innerText=Math.random()>0.5?"❤️":"🌼";
e.style.left=Math.random()*100+"vw";
document.body.appendChild(e);
setTimeout(()=>e.remove(),8000);
},500);
}
function stopRain(){
clearInterval(rainInt);
document.querySelectorAll(".rain").forEach(e=>e.remove());
}
startRain();

/* HEARTBREAK */
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
},200);
}
function stopHeartbreak(){
clearInterval(heartInt);
document.querySelectorAll(".broken").forEach(e=>e.remove());
}

/* NO CLICK */
let noCount=0;
const sadLines=[
"Sai… my heart is yours 💔",
"Don’t leave me in silence 🥀",
"I will still choose you 🖤"
];

noBtn.onclick=()=>{
noCount++;
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
typeWriter(sadText,"You are mine already ❤️😌");
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

/* YES */
yesBtn.onclick=()=>{
qScreen.classList.add("hidden");
yesScreen.classList.remove("hidden");

happyMusic.play();
confetti({particleCount:200,spread:120,origin:{y:0.6}});
typeWriter(document.getElementById("yesText"),
"Our love week begins now 💕");
};

/* OPEN CALENDAR */
openCal.onclick=()=>{
yesScreen.classList.add("hidden");
showCalendar();
};

/* CALENDAR */
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
box.onclick=()=>alert("Wait for the special day my love 💕");
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
You make every moment magical ✨
Your smile lights my world 💖
Forever yours my Sai ❤️`;

setTimeout(()=>typeWriter(poemEl,poem),500);

/* corner hearts */
["tl","tr","bl","br"].forEach(c=>{
let h=document.createElement("div");
h.className="corner "+c;
h.innerText="❤️";
document.body.appendChild(h);
});

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
},800);
},4000);

/* 14 confetti */
if(day==14){
setTimeout(()=>{
let int=setInterval(()=>{
confetti({
particleCount:6,
spread:70,
origin:{x:Math.random(),y:Math.random()-0.2},
shapes:["circle"],
colors:["#ff4d88","#ff99cc"]
});
},120);
setTimeout(()=>clearInterval(int),3000);
},2000);
}
}

/* BACK CAL */
document.getElementById("backCal").onclick=()=>{
dayScreen.classList.add("hidden");
showCalendar();
startRain();
};
