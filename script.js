/* ---------------- HEART RAIN ---------------- */
function heartRain(){
let e=document.createElement("div");
e.innerText="💗";
e.className="rain";
e.style.left=Math.random()*100+"vw";
e.style.fontSize=(20+Math.random()*25)+"px";
document.body.appendChild(e);
setTimeout(()=>e.remove(),4000);
}
setInterval(heartRain,120);


/* ---------------- NO BUTTON STORY FLOW ---------------- */
let noCount=0;
let noBtn=document.getElementById("noBtn");

function clickNo(){

noCount++;

let msg=document.getElementById("message");
let gif=document.getElementById("sadGif");
let tease=document.getElementById("teaseGif");

/* first 3 clicks → SAD MODE */
if(noCount<=3){

tease.style.display="none";
gif.style.display="block";

const sadLines=[
`Sai… my heart just skipped a beat 💔`,
`Sai… don’t do this to our love 🥺`,
`Sai… say yes and save me tonight 😭`
];

msg.innerHTML=`<p>${sadLines[noCount-1]}</p>`;
}


/* 4th click → TEASE MODE */
if(noCount==4){

gif.style.display="none";
tease.style.display="block";

msg.innerHTML=`
<p>Sai… you are mine already 😏</p>
<p>Stop pressing no and accept fate 💘</p>
<p>Because you + me = forever 💍</p>
`;

/* make NO run away */
noBtn.style.position="absolute";

noBtn.onmouseover=()=>{
noBtn.style.left=Math.random()*80+"vw";
noBtn.style.top=Math.random()*80+"vh";
};

/* disable clicking */
noBtn.onclick=()=>{};
}

}


/* ---------------- YES CLICK ---------------- */
function clickYes(){
document.getElementById("firstPage").style.display="none";
document.getElementById("calendarPage").style.display="block";
}


/* ---------------- POEMS ---------------- */
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
"If forever had a start, it begins with you 💖",
"Sai, be mine forever ❤️"
],

9: [
"🍫 Sai, sweetness learned from you",
"Every chocolate envies your hue 🤎",
"My heart melts for you every while 💘",
"Sai, you are my sweetest addiction 💖",
"My forever chocolate of affection 🍫"
],

10: [
"🧸 Sai, today I send you a teddy hug",
"Soft like love, warm and snug 🤗",
"With you I never feel alone 💞",
"Sai, be my comfort always 💖"
],

11: [
"💌 Sai, promises bloom today",
"I promise laughter through tears 💞",
"In storms I’ll hold you tight 🌧️",
"I choose only you now 💖"
],

12: [
"🤗 Sai, today I send you my hug",
"In your arms I feel peace 🥹",
"With you I feel whole 💖",
"Sai, hold me forever tight 💓"
],

13: [
"😘 Sai, kisses speak without sound",
"In your love my world is found 💞",
"Your smile feels like a kiss 😌",
"My heart forever the same 💓"
],

14: [
"❤️ Sai, today is our forever day",
"My world begins with you 💖",
"Valentine writes our destiny 💌",
"Sai, my heart is only yours ❤️"
]

};


/* ---------------- GIF PER DAY ---------------- */
const dayGifs={
7:"7.gif",
8:"8.gif",
9:"9.gif",
10:"10.gif",
11:"11.gif",
12:"12.gif",
13:"13.gif",
14:"14.gif"
};


/* ---------------- OPEN DAY ---------------- */
function openDay(day){

document.getElementById("calendarPage").style.display="none";
let page=document.getElementById("dayPage");
page.style.display="block";

let gif=document.getElementById("dayGif");
gif.src=dayGifs[day];

let poemBox=document.getElementById("poemBox");
poemBox.innerHTML="";

poems[day].forEach(line=>{
let p=document.createElement("p");
p.innerHTML=line;
poemBox.appendChild(p);
});


/* final proposal */
if(day==14){
setTimeout(()=>{
showProposal();
},5000);
}

}


/* ---------------- PROPOSAL ---------------- */
function showProposal(){

let div=document.createElement("div");
div.id="proposalScene";

div.innerHTML=`
<div style="font-size:120px">💍</div>
<h1 style="font-size:60px">Sai… will you marry me? ❤️</h1>
<button onclick="finalYes()" class="foreverBtn">YES 💍</button>
`;

document.body.appendChild(div);

/* confetti */
setInterval(()=>{
confetti({
particleCount:120,
spread:100,
origin:{y:0.6}
});
},400);
}


/* ---------------- FINAL YES ---------------- */
function finalYes(){
let box=document.getElementById("proposalScene");
box.innerHTML=`
<h1 style="font-size:80px;color:white">
Sai said YES 💍❤️
</h1>
`;
setInterval(()=>{
confetti({
particleCount:200,
spread:140,
origin:{y:0.6}
});
},400);
}
