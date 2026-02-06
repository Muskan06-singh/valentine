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
const openCalBtn=document.getElementById("openCal");
const backHomeBtn=document.getElementById("backHome");

const sadGif=document.getElementById("sadGif");
const sadText=document.getElementById("sadText");
const questionText=document.getElementById("questionText");
const yesText=document.getElementById("yesText");

/* OPENING */
typeWriter(questionText,"Sai… will you be my Valentine? 💌✨");

/* HEART + FLOWER RAIN */
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
},150);
}
function stopRain(){
clearInterval(rainInt);
document.querySelectorAll(".rain").forEach(e=>e.remove());
}
startRain();

/* BROKEN HEART RAIN */
let brokenInt;
function startBrokenRain(){
stopBrokenRain();
brokenInt=setInterval(()=>{
let b=document.createElement("div");
b.innerHTML="💔";
b.style.position="fixed";
b.style.left=Math.random()*100+"vw";
b.style.top="-40px";
b.style.fontSize="40px";
b.style.animation="fall 3s linear";
document.body.appendChild(b);
setTimeout(()=>b.remove(),3000);
},200);
}
function stopBrokenRain(){
clearInterval(brokenInt);
}

/* YES CLICK */
yesBtn.onclick=()=>{
qScreen.classList.add("hidden");
yesScreen.classList.remove("hidden");

typeWriter(yesText,
"Yaaay 💖 Sai said YES… and my heart just found its forever home 💍✨");

confetti({particleCount:300,spread:200,origin:{y:0.6}});
};

/* OPEN CALENDAR BUTTON */
openCalBtn.onclick=()=>{
yesScreen.classList.add("hidden");
showCalendar();
};

/* NO CLICK LOGIC */
let noCount=0;

const sadPoems=[
"Sai… my heart broke hearing that 💔",
"Sai… even your no feels cute to me 🥺",
"Sai… I will still choose you forever 🌙"
];

noBtn.onclick=()=>{
noCount++;

qScreen.classList.add("hidden");
sadScreen.classList.remove("hidden");

/* make sad page black */
document.body.style.background="black";
sadText.style.color="white";

/* broken rain */
startBrokenRain();

/* first 3 times */
if(noCount<=3){
sadGif.src="assets/gifs/sad.gif";
typeWriter(sadText,sadPoems[noCount-1]);
}

/* 4th time tease */
else if(noCount==4){
sadGif.src="assets/gifs/tease.gif";
typeWriter(sadText,"Sai… you are mine already 😌 stop pressing NO");
}

/* after 4th run */
else{
noBtn.style.position="absolute";
noBtn.onmouseover=()=>{
noBtn.style.left=Math.random()*80+"vw";
noBtn.style.top=Math.random()*80+"vh";
};
}
};

/* THINK AGAIN BUTTON */
thinkBtn.onclick=()=>{
sadScreen.classList.add("hidden");
qScreen.classList.remove("hidden");
document.body.style.background="#ffd6e7";
stopBrokenRain();
startRain();
};

/* SHOW CALENDAR */
function showCalendar(){
calScreen.classList.remove("hidden");
document.body.style.background="#ffd6e7";

const cal=document.getElementById("calendar");
cal.innerHTML="";

for(let d=7;d<=14;d++){
let box=document.createElement("div");
box.className="day";
box.innerText="Feb "+d;

if(d==7 || d==14){
box.onclick=()=>openDay(d);
}else{
box.classList.add("locked");
box.onclick=()=>{
alert("Please wait for the correct day my love 💌⏳");
};
}

cal.appendChild(box);
}
}

/* BACK TO VALENTINE */
backHomeBtn.onclick=()=>{
calScreen.classList.add("hidden");
qScreen.classList.remove("hidden");
};

/* CUSTOM POEMS */
const poems={
7:["🌹 Sai every rose whispers your name tonight"],
8:["💍 Sai my heart proposes only to you"],
9:["🍫 Sai sweetness begins with you"],
10:["🧸 Sai my comfort forever"],
11:["💌 Sai promises only yours"],
12:["🤗 Sai hold me forever"],
13:["😘 Sai kiss of destiny"],
14:["❤️ Sai forever ours 💍"]
};

/* OPEN DAY */
function openDay(day){
calScreen.classList.add("hidden");
dayScreen.classList.remove("hidden");

document.getElementById("dayGif").src=`assets/gifs/day${day}.gif`;

/* poem */
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

/* FINAL DAY 14 PROPOSAL */
if(day==14){
setTimeout(()=>{
showFinalProposal();
},8000);
}
}

/* BACK TO CALENDAR */
document.getElementById("backCal").onclick=()=>{
dayScreen.classList.add("hidden");
showCalendar();
};

/* FINAL PROPOSAL AFTER 14 */
function showFinalProposal(){
let box=document.createElement("div");
box.style.position="fixed";
box.style.top="0";
box.style.left="0";
box.style.width="100%";
box.style.height="100%";
box.style.background="black";
box.style.display="flex";
box.style.flexDirection="column";
box.style.justifyContent="center";
box.style.alignItems="center";
box.style.zIndex="9999";
box.style.color="white";

box.innerHTML=`
<h1 style="font-size:70px">💍 MARRY ME SAI 💖</h1>
<p style="font-size:28px">You are my forever</p>
`;

document.body.appendChild(box);

confetti({particleCount:500,spread:360});
}
