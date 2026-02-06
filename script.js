/* ---------- HEART + DAISY RAIN ---------- */
let rainInterval;

function startRain(){
stopRain();
rainInterval=setInterval(()=>{
let e=document.createElement("div");
e.className="rain";
let emojis=["❤️","🌸","🌼","💖"];
e.innerText=emojis[Math.floor(Math.random()*emojis.length)];
e.style.left=Math.random()*100+"vw";
e.style.fontSize=(25+Math.random()*30)+"px";
e.style.animationDuration=(4+Math.random()*4)+"s";
document.body.appendChild(e);
setTimeout(()=>e.remove(),8000);
},120);
}

function stopRain(){
clearInterval(rainInterval);
document.querySelectorAll(".rain").forEach(e=>e.remove());
}

startRain();

/* ---------- HEARTBREAK RAIN ---------- */
let breakInterval;

function startHeartbreak(){
stopRain();
breakInterval=setInterval(()=>{
let b=document.createElement("div");
b.className="broken";
b.innerText="💔";
b.style.left=Math.random()*100+"vw";
b.style.fontSize=(30+Math.random()*40)+"px";
b.style.animationDuration="3s";
document.body.appendChild(b);
setTimeout(()=>b.remove(),3000);
},120);
}

function stopHeartbreak(){
clearInterval(breakInterval);
document.querySelectorAll(".broken").forEach(e=>e.remove());
}

/* ---------- ELEMENTS ---------- */
const qScreen=document.getElementById("question-screen");
const sadScreen=document.getElementById("sad-screen");
const yesScreen=document.getElementById("yes-screen");
const calScreen=document.getElementById("calendar-screen");
const dayScreen=document.getElementById("day-screen");

const yesBtn=document.getElementById("yesBtn");
const noBtn=document.getElementById("noBtn");
const thinkBtn=document.getElementById("thinkBtn");

const sadText=document.getElementById("sadText");
const sadGif=document.getElementById("sadGif");

/* ---------- NO BUTTON STORY ---------- */
let noCount=0;

noBtn.onclick=()=>{
noCount++;
qScreen.classList.add("hidden");
sadScreen.classList.remove("hidden");
startHeartbreak();

/* first 3 sad */
if(noCount<=3){

sadGif.src="assets/gifs/sad.gif";

const sadLines=[
"Sai… my heart hurts without you 💔",
"Sai… don’t break our love story 🥺",
"Sai… please say yes and save me 😭"
];

sadText.innerHTML=sadLines[noCount-1];
}

/* 4th tease */
if(noCount==4){
sadGif.src="assets/gifs/tease.gif";

sadText.innerHTML=`
Sai… you are mine already 😏💘 <br>
Stop pressing NO and accept fate ❤️
`;

noBtn.style.position="absolute";

noBtn.onmouseover=()=>{
noBtn.style.left=Math.random()*80+"vw";
noBtn.style.top=Math.random()*80+"vh";
};

noBtn.onclick=()=>{};
}
};

/* THINK AGAIN */
thinkBtn.onclick=()=>{
sadScreen.classList.add("hidden");
qScreen.classList.remove("hidden");
stopHeartbreak();
startRain();
};

/* YES CLICK */
yesBtn.onclick=()=>{
qScreen.classList.add("hidden");
yesScreen.classList.remove("hidden");
};

/* OPEN CALENDAR */
document.getElementById("openCal").onclick=()=>{
yesScreen.classList.add("hidden");
showCalendar();
};

/* ---------- POEMS ---------- */
const poems = {
7:["🌹 Sai, every rose whispers your name tonight","Petals glow soft in your love’s light ✨","Fragrance travels where you are 💌","My heart blooms only for Sai, my star ⭐","Each thorn fades when you are near 💞","Every bloom sings love so clear 🎶","Rose Day feels warmer with you 🌹","My forever begins with Sai, it’s true 💖","Every garden envies my fate 🌸","Because loving Sai is my destiny ❤️"],
8:["💍 Sai, today my heart kneels to you","Not with a ring, but love so true 💞","Every heartbeat softly says your name 🥹","In every lifetime, I’d love you the same ✨","If forever had a start, it begins with you 💖","Sai be mine forever ❤️"],
9:["🍫 Sai, sweetness learned from you","Every chocolate envies your hue 🤎","My heart melts for you every while 💘","Sai, you are my sweetest addiction 💖","My forever chocolate 🍫"],
10:["🧸 Sai, today I send you a teddy hug","Soft like love, warm and snug 🤗","With you I never feel alone 💞","Sai my comfort always 💖"],
11:["💌 Sai, promises bloom today","I promise laughter through tears 💞","In storms I’ll hold you tight 🌧️","I choose only you 💖"],
12:["🤗 Sai, today I send you my hug","In your arms I feel peace 🥹","With you I feel whole 💖","Sai hold me forever 💓"],
13:["😘 Sai, kisses speak without sound","In your love my world is found 💞","Your smile feels like a kiss 😌","My heart forever same 💓"],
14:["❤️ Sai, today is our forever day","My world begins with you 💖","Valentine writes our destiny 💌","Sai my heart only yours ❤️"]
};

/* ---------- CALENDAR ---------- */
function showCalendar(){
calScreen.classList.remove("hidden");
const cal=document.getElementById("calendar");
cal.innerHTML="";

for(let d=7;d<=14;d++){
let box=document.createElement("div");
box.className="day";
box.innerText="Feb "+d;
box.onclick=()=>openDay(d);
cal.appendChild(box);
}
}

/* BACK HOME */
document.getElementById("backHome").onclick=()=>{
calScreen.classList.add("hidden");
qScreen.classList.remove("hidden");
};

/* ---------- OPEN DAY ---------- */
function openDay(day){
calScreen.classList.add("hidden");
dayScreen.classList.remove("hidden");
stopRain();

document.getElementById("dayGif").src=`assets/gifs/day${day}.gif`;

/* poem */
const poemEl=document.getElementById("poem");
poemEl.innerHTML="";
poems[day].forEach(line=>{
let p=document.createElement("p");
p.innerHTML=line;
poemEl.appendChild(p);
});

/* images one by one */
const imgBox=document.getElementById("images");
imgBox.innerHTML="";
let i=1;

let inter=setInterval(()=>{
let img=document.createElement("img");
img.src=`assets/images/day${day}-${i}.jpg`;
img.className="loveImg";

img.onerror=()=>clearInterval(inter);
img.onload=()=>imgBox.appendChild(img);
i++;
},1200);
}

/* BACK CAL */
document.getElementById("backCal").onclick=()=>{
dayScreen.classList.add("hidden");
showCalendar();
startRain();
};
