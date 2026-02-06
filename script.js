// ============================
// 🌸 VARIABLES
// ============================
let noCount = 0;
let rainInterval;
let insideSpecial = false;

// ============================
// 🌧️ HEART + DAISY RAIN
// ============================
function startRain(){
clearInterval(rainInterval);

rainInterval = setInterval(()=>{
if(insideSpecial) return;

const emoji = Math.random()>0.5 ? "💖":"🌼";
const drop = document.createElement("div");
drop.className="rain";
drop.innerHTML=emoji;

drop.style.left=Math.random()*window.innerWidth+"px";
drop.style.fontSize=(20+Math.random()*25)+"px";
drop.style.animationDuration=(3+Math.random()*2)+"s";

document.body.appendChild(drop);

setTimeout(()=>drop.remove(),5000);
},120);
}

function stopRain(){
clearInterval(rainInterval);
}

// ============================
// 🎬 FIRST LOAD
// ============================
window.onload=()=>{

startRain();

// poetic question typing
let text="Sai… will you be my Valentine? 💌✨";
let i=0;
let q=document.getElementById("questionText");

let typing=setInterval(()=>{
q.innerHTML+=text[i];
i++;
if(i>=text.length) clearInterval(typing);
},60);
};

// ============================
// 😍 YES BUTTON
// ============================
document.getElementById("yesBtn").onclick=()=>{

document.getElementById("question-screen").classList.add("hidden");
document.getElementById("yes-screen").classList.remove("hidden");

confetti({
particleCount:200,
spread:120,
origin:{y:.6}
});

document.getElementById("yesText").innerHTML=
"Yaaayyy 💖 Sai said YES 😭✨<br>Now you are officially mine forever ♾️💘";
};

// open calendar
document.getElementById("openCal").onclick=()=>{
document.getElementById("yes-screen").classList.add("hidden");
document.getElementById("calendar-screen").classList.remove("hidden");
};

// ============================
// 😭 NO BUTTON
// ============================
document.getElementById("noBtn").onclick=()=>{

noCount++;

document.getElementById("question-screen").classList.add("hidden");
document.getElementById("sad-screen").classList.remove("hidden");

insideSpecial=true;
stopRain();

let sadGif=document.getElementById("sadGif");
let sadText=document.getElementById("sadText");

if(noCount==1){
sadGif.src="assets/gifs/sad.gif";
sadText.innerHTML="Sai… my heart just cracked 💔<br>Why you do this to your girl 😭";
}
else if(noCount==2){
sadGif.src="assets/gifs/sad.gif";
sadText.innerHTML="Sai… love is crying today 🌧️<br>Come back to me please 💔";
}
else if(noCount==3){
sadGif.src="assets/gifs/sad.gif";
sadText.innerHTML="Sai… last chance 😭<br>Don’t break our love story 💔";
}
else{
sadGif.src="assets/gifs/tease.gif";
sadText.innerHTML="You are mine already 😌💖<br>No escape from loving me 😏";
moveNoButton();
}
};

// think again
document.getElementById("thinkBtn").onclick=()=>{
document.getElementById("sad-screen").classList.add("hidden");
document.getElementById("question-screen").classList.remove("hidden");
insideSpecial=false;
startRain();
};

// ============================
// 🏃 RUNNING NO BUTTON
// ============================
function moveNoButton(){
const btn=document.getElementById("noBtn");

setInterval(()=>{
btn.style.position="absolute";
btn.style.top=Math.random()*80+"%";
btn.style.left=Math.random()*80+"%";
},700);
}

// ============================
// 📅 CALENDAR
// ============================
const days=[7,8,9,10,11,12,13,14];
const calendar=document.getElementById("calendar");

days.forEach(d=>{
let box=document.createElement("div");
box.className="day";
box.innerHTML="Feb "+d;

box.onclick=()=>openDay(d);
calendar.appendChild(box);
});

// ============================
// 📖 OPEN DAY
// ============================
function openDay(day){

document.getElementById("calendar-screen").classList.add("hidden");
document.getElementById("day-screen").classList.remove("hidden");

insideSpecial=true;
stopRain();

let gif=document.getElementById("dayGif");
let poem=document.getElementById("poem");
let images=document.getElementById("images");

images.innerHTML="";

gif.src=`assets/gifs/${day}.gif`;

poem.innerHTML=`Sai 💖<br>
Day ${day} with you feels like magic ✨<br>
Every second loving you more 😭💘`;

// load images
for(let i=1;i<=3;i++){
let img=document.createElement("img");
img.src=`assets/images/${day}-${i}.jpg`;
img.className="loveImg";
images.appendChild(img);
}

// after 14 → proposal
if(day==14){
setTimeout(showProposal,6000);
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

// ============================
// 💍 FINAL PROPOSAL
// ============================
function showProposal(){

let box=document.createElement("div");
box.id="finalBox";

box.innerHTML=`
<div class="ringWrap">
<div class="bigRing">💍</div>
<div class="marryGlow">SAI WILL YOU MARRY ME?</div>
<div class="sparkle">✨✨ FOREVER US ✨✨</div>
</div>
`;

document.body.appendChild(box);

confetti({
particleCount:500,
spread:180,
origin:{y:.5}
});
}

