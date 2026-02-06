// ===============================
// 💖 GLOBAL
// ===============================
let noClick = 0;
let rainInterval;
let sadRainInterval;
let happyAudio = new Audio("assets/music/happy.mp3");
let sadAudio = new Audio("assets/music/sad.mp3");

happyAudio.loop = true;
sadAudio.loop = true;

let insideSpecial = false;

// ===============================
// ✨ TYPEWRITER
// ===============================
function typeWriter(el, text, speed=40){
el.innerHTML="";
let i=0;
let timer=setInterval(()=>{
el.innerHTML+=text.charAt(i);
i++;
if(i>=text.length) clearInterval(timer);
},speed);
}

// ===============================
// 🌸 HEART + DAISY RAIN
// ===============================
function startRain(){
stopRain();
rainInterval=setInterval(()=>{
if(insideSpecial) return;

let e=document.createElement("div");
e.className="rain";
e.innerHTML=Math.random()>0.5?"💖":"🌼";
e.style.left=Math.random()*100+"vw";
e.style.fontSize=(22+Math.random()*25)+"px";
e.style.animationDuration=(3+Math.random()*2)+"s";
document.body.appendChild(e);
setTimeout(()=>e.remove(),5000);
},120);
}

function stopRain(){
clearInterval(rainInterval);
}

// ===============================
// 💔 SAD BROKEN HEART RAIN
// ===============================
function startSadRain(){
sadRainInterval=setInterval(()=>{
let e=document.createElement("div");
e.className="rain";
e.innerHTML="💔";
e.style.left=Math.random()*100+"vw";
e.style.fontSize=(25+Math.random()*30)+"px";
e.style.animationDuration=(3+Math.random()*2)+"s";
document.body.appendChild(e);
setTimeout(()=>e.remove(),5000);
},120);
}

function stopSadRain(){
clearInterval(sadRainInterval);
}

// ===============================
// 🌸 ON LOAD
// ===============================
window.onload=()=>{
startRain();

typeWriter(
document.getElementById("questionText"),
"Sai… will you be my Valentine? 💌✨"
);
};

// ===============================
// 😍 YES BUTTON
// ===============================
document.getElementById("yesBtn").onclick=()=>{

sadAudio.pause();
happyAudio.currentTime=0;
happyAudio.play();

document.getElementById("question-screen").classList.add("hidden");
document.getElementById("yes-screen").classList.remove("hidden");

typeWriter(
document.getElementById("yesText"),
"Yaaayyy 💖 Sai said YES… and my heart is dancing in forever with you ♾️💘"
);

confetti({
particleCount:300,
spread:180,
origin:{y:.6}
});
};

// open calendar
document.getElementById("openCal").onclick=()=>{
document.getElementById("yes-screen").classList.add("hidden");
document.getElementById("calendar-screen").classList.remove("hidden");
};

// ===============================
// 😭 NO BUTTON
// ===============================
document.getElementById("noBtn").onclick=()=>{

noClick++;

document.getElementById("question-screen").classList.add("hidden");
document.getElementById("sad-screen").classList.remove("hidden");

document.body.style.background="black";

insideSpecial=true;
stopRain();
startSadRain();

happyAudio.pause();
sadAudio.currentTime=0;
sadAudio.play();

let sadGif=document.getElementById("sadGif");
let sadText=document.getElementById("sadText");

if(noClick<=3){
sadGif.src="assets/gifs/sad.gif";

const lines=[
"Sai… my heart shattered into silent tears 💔",
"Every beat still whispers your name in pain 🌧️",
"I will still wait… because my forever is only you ♾️"
];

typeWriter(sadText,lines[noClick-1]);
}
else{
sadGif.src="assets/gifs/tease.gif";
typeWriter(sadText,"You can run… but you can’t escape loving me 😌💖");
runAwayNo();
}
};

// think again
document.getElementById("thinkBtn").onclick=()=>{
document.getElementById("sad-screen").classList.add("hidden");
document.getElementById("question-screen").classList.remove("hidden");

document.body.style.background="#ffd6e7";

insideSpecial=false;
stopSadRain();
sadAudio.pause();
startRain();
};

// ===============================
// 🏃 RUNNING NO BUTTON AFTER 4
// ===============================
function runAwayNo(){
const btn=document.getElementById("noBtn");

btn.onmouseover=()=>{
let x=Math.random()*(window.innerWidth-100);
let y=Math.random()*(window.innerHeight-60);
btn.style.position="absolute";
btn.style.left=x+"px";
btn.style.top=y+"px";
};
}

// ===============================
// 📅 REAL LIFE SYNC CALENDAR
// ===============================
const calendar=document.getElementById("calendar");

for(let d=7; d<=14; d++){
let box=document.createElement("div");
box.className="day";
box.innerHTML="Feb "+d;

box.onclick=()=>{

if(d===7 || d===14){
openDay(d);
}
else{
alert("Not today my love 🌙\nThis memory will bloom on its destined day 💌");
}
};

calendar.appendChild(box);
}

// ===============================
// 📖 OPEN DAY
// ===============================
function openDay(day){

document.getElementById("calendar-screen").classList.add("hidden");
document.getElementById("day-screen").classList.remove("hidden");

insideSpecial=true;
stopRain();

let gif=document.getElementById("dayGif");
let poem=document.getElementById("poem");
let imgBox=document.getElementById("images");

gif.src=`assets/gifs/day${day}.gif`;

typeWriter(
poem,
"Sai… every moment of this day belongs only to us 💖✨"
);

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

// after 14 final proposal
if(day==14){
setTimeout(finalProposal,7000);
}
}

// back calendar
document.getElementById("backCal").onclick=()=>{
document.getElementById("day-screen").classList.add("hidden");
document.getElementById("calendar-screen").classList.remove("hidden");
insideSpecial=false;
startRain();
};

// back home
document.getElementById("backHome").onclick=()=>{
document.getElementById("calendar-screen").classList.add("hidden");
document.getElementById("question-screen").classList.remove("hidden");
insideSpecial=false;
startRain();
};

// ===============================
// 💍 FINAL PROPOSAL
// ===============================
function finalProposal(){

let box=document.createElement("div");
box.id="finalBox";

box.innerHTML=`
<div class="ringWrap">
<div class="bigRing">💍</div>
<div class="marryGlow">SAI WILL YOU MARRY ME?</div>
<div class="sparkle">✨ FOREVER WITH YOU ✨</div>
</div>
`;

document.body.appendChild(box);

confetti({
particleCount:500,
spread:200,
origin:{y:.6}
});
}
