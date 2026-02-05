// pages
const pages={
home:document.getElementById("page1"),
yes:document.getElementById("yesPage"),
sad:document.getElementById("sadPage"),
cal:document.getElementById("calendarPage"),
day:document.getElementById("dayPage")
};

const mainText=document.getElementById("mainText");
const sadText=document.getElementById("sadText");
const teaseBox=document.getElementById("teaseBox");

// music
const happyMusic=new Audio("assets/music/happy.mp3");
happyMusic.loop=true;
const sadMusic=new Audio("assets/music/sad.mp3");

// typewriter
function typeText(el,text,speed=40){
el.innerHTML="";
let i=0;
let t=setInterval(()=>{
el.innerHTML+=text[i];
i++;
if(i>=text.length)clearInterval(t);
},speed);
}

// show page
function show(p){
for(let k in pages) pages[k].classList.remove("active");
p.classList.add("active");
}

// MAIN TEXT
typeText(mainText,"Sai… will you be my Valentine? 💕");

// emoji rain
let emojiInt;
function startRain(){
emojiInt=setInterval(()=>{
let e=document.createElement("div");
e.className="emoji";
e.innerText=Math.random()>0.5?"💖":"🌼";
e.style.left=Math.random()*100+"vw";
e.style.animationDuration=4+Math.random()*4+"s";
document.body.appendChild(e);
setTimeout(()=>e.remove(),7000);
},250);
}
function stopRain(){clearInterval(emojiInt);}
startRain();

// YES
document.getElementById("yesBtn").onclick=()=>{
show(pages.yes);
happyMusic.play();
confettiFull();
};

// NO logic
let noCount=0;
document.getElementById("noBtn").onclick=()=>{
noCount++;

if(noCount<3){
show(pages.sad);
sadMusic.play();
typeText(sadText,"Sai… don't break my heart 💔");
heartbreakRain();
}
else{
teaseBox.innerHTML=`<img src="assets/gifs/tease.gif" class="mainGif">
<h2 class="glow">You are already mine ❤️😌</h2>`;
runAway();
}
};

// runaway button
function runAway(){
const btn=document.getElementById("noBtn");
btn.onmouseover=()=>{
btn.style.position="absolute";
btn.style.left=Math.random()*80+"vw";
btn.style.top=Math.random()*80+"vh";
};
}

// sad again
document.getElementById("againBtn").onclick=()=>{
sadMusic.pause();
show(pages.home);
};

// confetti
function confettiFull(){
let duration=3*1000;
let end=Date.now()+duration;
(function frame(){
confetti({
particleCount:6,
spread:120,
origin:{x:Math.random(),y:Math.random()-0.2}
});
if(Date.now()<end)requestAnimationFrame(frame);
})();
}

// heartbreak rain
function heartbreakRain(){
let int=setInterval(()=>{
let b=document.createElement("div");
b.className="emoji";
b.innerText="💔";
b.style.left=Math.random()*100+"vw";
b.style.fontSize="70px";
document.body.appendChild(b);
setTimeout(()=>b.remove(),4000);
},200);
setTimeout(()=>clearInterval(int),4000);
}

// open calendar
document.getElementById("openCal").onclick=()=>{
show(pages.cal);
buildCalendar();
};

// calendar
function buildCalendar(){
let cal=document.getElementById("calendar");
cal.innerHTML="";
let today=new Date().getDate();

for(let d=7;d<=14;d++){
let box=document.createElement("div");
box.className="day";
box.innerText="Feb "+d;

if(d!==7 && d!==14 && d>today){
box.classList.add("locked");
}else{
box.onclick=()=>openDay(d);
}

cal.appendChild(box);
}
}

// open day
function openDay(d){
show(pages.day);
stopRain();

let area=document.getElementById("dayContent");
area.innerHTML="";

let gif=document.createElement("img");
gif.src=`assets/gifs/day${d}.gif`;
gif.className="mainGif";
area.appendChild(gif);

// poem
let poem=document.createElement("h2");
area.appendChild(poem);

let text=getPoem(d);
typeText(poem,text,35);

// images one by one
let i=1;
let imgInt=setInterval(()=>{
let im=document.createElement("img");
im.src=`assets/images/day${d}-${i}.jpg`;
im.style.width="140px";
im.style.margin="8px";
area.appendChild(im);
i++;
if(i>5)clearInterval(imgInt);
},800);

// 14 special heart confetti
if(d==14){
setTimeout(()=>{
let int=setInterval(()=>{
let e=document.createElement("div");
e.className="emoji";
e.innerText="💕";
e.style.left=Math.random()*100+"vw";
document.body.appendChild(e);
setTimeout(()=>e.remove(),3000);
},150);
setTimeout(()=>clearInterval(int),4000);
},2000);
}
}

// poems
function getPoem(d){
const p={
7:`🌹 Sai my rose of love,
Your smile blooms in my heart,
Every petal whispers you,
My world begins with you,
Stay mine forever Sai 💖`,
8:`💍 Sai today I propose,
Not with ring but heart,
Every lifetime choose you,
Stay with me always,
You are my forever 💕`,
9:`🍫 Sweet like chocolate Sai,
Love melts near you,
Every bite feels you,
My heart is yours,
Forever yours 💖`,
10:`🧸 My teddy Sai,
Soft love warm hugs,
Your arms my home,
Stay forever near,
I love you always 💕`,
11:`🤝 Promise day Sai,
I promise forever,
Through storms and smiles,
Only yours always,
My heart is yours 💖`,
12:`🤗 Hug day Sai,
Come into my arms,
Let hearts speak,
Feel my love,
Stay forever 💕`,
13:`💋 Kiss day Sai,
Your smile my kiss,
Your eyes magic,
Every breath love,
Forever mine 💖`,
14:`💖 Valentine Sai,
You are my destiny,
My heart chose you,
Every life again,
Forever only you 💕`
};
return p[d];
}

// back buttons
document.getElementById("backHome").onclick=()=>show(pages.home);
document.getElementById("backCal").onclick=()=>{
show(pages.cal);
startRain();
};
