/* ---------- TYPEWRITER ---------- */
function typeWriter(el,text,speed=50){
el.innerHTML="";
let i=0;
let t=setInterval(()=>{
el.innerHTML+=text.charAt(i);
i++;
if(i>=text.length) clearInterval(t);
},speed);
}

/* ---------- ELEMENTS ---------- */
const qScreen=document.getElementById("question-screen");
const sadScreen=document.getElementById("sad-screen");
const yesScreen=document.getElementById("yes-screen");
const calScreen=document.getElementById("calendar-screen");
const dayScreen=document.getElementById("day-screen");

const questionText=document.getElementById("questionText");

/* ---------- OPENING QUESTION ---------- */
typeWriter(questionText,"Sai… will you be my Valentine 💕");

/* ---------- FULL SCREEN HEART + DAISY RAIN ---------- */
let rainInt;
function startRain(){
stopRain();
rainInt=setInterval(()=>{
let e=document.createElement("div");
e.className="rain";
e.innerText=["❤️","🌼","🌸","💖"][Math.floor(Math.random()*4)];
e.style.left=Math.random()*100+"vw";
e.style.fontSize=(25+Math.random()*25)+"px";
e.style.animationDuration=(4+Math.random()*4)+"s";
document.body.appendChild(e);
setTimeout(()=>e.remove(),8000);
},120);
}
function stopRain(){
clearInterval(rainInt);
document.querySelectorAll(".rain").forEach(e=>e.remove());
}
startRain();

/* ---------- YES ---------- */
document.getElementById("yesBtn").onclick=()=>{
qScreen.classList.add("hidden");
yesScreen.classList.remove("hidden");
confetti({particleCount:200,spread:360,origin:{x:0.5,y:0.5}});
};

/* ---------- OPEN CAL ---------- */
document.getElementById("openCal").onclick=()=>{
yesScreen.classList.add("hidden");
showCalendar();
};

/* ---------- CALENDAR ---------- */
function showCalendar(){
calScreen.classList.remove("hidden");
const cal=document.getElementById("calendar");
cal.innerHTML="";

const today=new Date().getDate();

for(let d=7;d<=14;d++){
let box=document.createElement("div");
box.className="day";
box.innerText="Feb "+d;

if((d===7 || d===14) && today>=d){
box.onclick=()=>openDay(d);
}else{
box.classList.add("locked");
box.onclick=()=>{
alert(
"Not today my love 💌\nSome moments bloom only when time allows 🌙"
);
};
}

cal.appendChild(box);
}
}

/* BACK TO VALENTINE */
document.getElementById("backHome").onclick=()=>{
calScreen.classList.add("hidden");
qScreen.classList.remove("hidden");
};

/* ---------- POEMS (YOUR CUSTOM ONES) ---------- */
const poems = {
7:["🌹 Sai, every rose whispers your name tonight","Petals glow soft in your love’s light ✨","My forever begins with Sai 💖"],
8:["💍 Sai, today my heart kneels to you","If forever had a start, it begins with you ❤️"],
9:["🍫 Sai, sweetness learned from you","My forever chocolate 🍫"],
10:["🧸 Sai, my comfort always 💖"],
11:["💌 Sai, promises bloom today"],
12:["🤗 Sai, hold me forever tight 💓"],
13:["😘 Sai, a kiss written on my heart ❤️"],
14:["❤️ Sai, today is our forever day 💍"]
};

/* ---------- OPEN DAY ---------- */
function openDay(day){
calScreen.classList.add("hidden");
dayScreen.classList.remove("hidden");
stopRain();

document.getElementById("dayGif").src=`assets/gifs/day${day}.gif`;

const poemEl=document.getElementById("poem");
poemEl.innerHTML="";
poems[day].forEach(l=>{
let p=document.createElement("p");
p.innerHTML=l;
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

/* BACK TO CAL */
document.getElementById("backCal").onclick=()=>{
dayScreen.classList.add("hidden");
showCalendar();
startRain();
};

