const mainText=document.getElementById("mainText");
const rain=document.getElementById("rainContainer");
const pages=document.querySelectorAll(".page");

const bgMusic=document.getElementById("bgMusic");
const sadMusic=document.getElementById("sadMusic");
const happyMusic=document.getElementById("happyMusic");

let noCount=0;

// ---------- TYPEWRITER ----------
const msg="Sai… will you be my Valentine 💕🥺";
let i=0;
function type(){
 if(i<msg.length){
  mainText.innerHTML+=msg.charAt(i);
  i++;
  setTimeout(type,60);
 }
}
type();

// ---------- RAIN ----------
function startRain(type){
 rain.innerHTML="";
 let emojis=["💖","🌸","🌼","💗","🌺"];
 if(type==="broken") emojis=["💔","💔","💔"];

 for(let i=0;i<40;i++){
   let e=document.createElement("div");
   e.className="float";
   e.innerText=emojis[Math.floor(Math.random()*emojis.length)];
   e.style.left=Math.random()*100+"vw";
   e.style.animationDuration=(6+Math.random()*6)+"s";
   e.style.fontSize=(20+Math.random()*40)+"px";
   rain.appendChild(e);
 }
}
startRain("love");

// ---------- PAGE SWITCH ----------
function show(id){
 pages.forEach(p=>p.classList.remove("active"));
 document.getElementById(id).classList.add("active");
}

// ---------- NO BUTTON ----------
document.getElementById("noBtn").onclick=()=>{
 noCount++;

 if(noCount==3){
   show("teasePage");
   startRain("love");
   return;
 }

 if(noCount>3){
   const btn=document.getElementById("noBtn");
   btn.style.position="absolute";
   btn.style.left=Math.random()*80+"%";
   btn.style.top=Math.random()*80+"%";
   return;
 }

 show("sadPage");
 startRain("broken");
 sadMusic.play();
};

// think again
document.getElementById("thinkBtn").onclick=()=>{
 show("mainPage");
 sadMusic.pause();
 startRain("love");
};

// tease accept
document.getElementById("acceptBtn").onclick=()=>{
 show("yesPage");
 happyMusic.play();
};

// ---------- YES ----------
document.getElementById("yesBtn").onclick=()=>{
 show("yesPage");
 happyMusic.play();
};

// open calendar
document.getElementById("openCalendar").onclick=()=>{
 show("calendarPage");
 startRain("love");
};

// back home
document.getElementById("backHome").onclick=()=>{
 show("mainPage");
};

// ---------- DAY DATA ----------
const poems={
7:`🌹 Rose day blooms with love for you  
Every petal whispers "I adore you" 💕  
Your smile is my morning sun ☀  
Your eyes outshine every rose 🌹  
My heart chose you forever ❤️  
Let this rose seal our story…  
Of laughter, madness and magic ✨  
Stay mine in every lifetime 😌  
Because loving you feels destiny 💖  
Happy Rose Day my love 🌹💘`,

8:`💍 Today I gather courage to say  
My heart chose you long ago 💕  
Will you walk beside me always?  
Through chaos and calm together 🌙  
I promise laughter and loyalty  
Dreams wrapped in your arms 😌  
Say yes and make my world  
A forever kind of beautiful 💖  
My love kneels only for you 💍  
Happy Propose Day 💘`,

9:`🧸 A teddy as soft as my love  
Comes to hug you tight today 💕  
Whenever you feel alone  
Hold it and feel my arms 🤗  
Its cotton holds my heartbeat ❤️  
Its smile holds my warmth  
Distance will never matter  
Because my soul sits beside you 😌  
Be my forever comfort  
Happy Teddy Day 🧸💖`,

10:`🍫 Sweet like chocolate  
Is every moment with you 💕  
Your words melt my heart  
Like cocoa in warm milk ☕  
I crave your presence daily  
Like my favorite dessert 🍫  
Life tastes better with you  
More sugary and magical 😌  
Stay my sweetness always  
Happy Chocolate Day 🍫💘`,

11:`💌 Every promise I make  
Is carved in my soul for you 💕  
Through storms or sunshine  
My hand won't leave yours 🤝  
I promise loyalty and laughter  
Endless care and madness  
A forever kind of love ❤️  
Where you are my home  
Now and every lifetime  
Happy Promise Day 💍`,

12:`🤗 One hug from you  
Fixes my broken universe 💕  
In your arms I find peace  
A home I never had before 🏡  
Hold me when I’m chaos  
Hold me when I’m quiet  
Because your heartbeat  
Feels like destiny to mine ❤️  
Let me stay there forever  
Happy Hug Day 🤗💘`,

13:`💋 If kisses were stars  
I'd gift you a galaxy tonight 🌌  
Each one sealing my love  
Soft and eternal for you 💕  
Your lips hold my poetry  
Your breath holds my calm 😌  
Come closer and feel  
How loud my heart beats ❤️  
One kiss = forever promise  
Happy Kiss Day 💋`,

14:`💕 Today is ours completely  
A love written by destiny 💖  
You are my today & forever  
My calm in chaos always 😌  
Every heartbeat spells your name  
Every dream holds your face 🌙  
Stay with me through lifetimes  
Through madness and magic  
Because loving you is fate  
Happy Valentine's Day Sai 💕💘`
};

// ---------- DAY CLICK ----------
document.querySelectorAll(".day").forEach(btn=>{
 btn.onclick=()=>{
   const day=btn.dataset.day;
   const today=new Date().getDate();

   if(parseInt(day)!==today){
     alert("Wait for the right day my love 💕");
     return;
   }

   show("dayPage");
   document.getElementById("poem").innerText=poems[day];
   document.getElementById("dayGif").src=`assets/day${day}.gif`;

   // load images
   let imgBox=document.getElementById("images");
   imgBox.innerHTML="";
   let n=1;
   let interval=setInterval(()=>{
     if(n>5){clearInterval(interval); return;}
     let img=document.createElement("img");
     img.src=`assets/day${day}-${n}.jpg`;
     imgBox.appendChild(img);
     n++;
   },800);

   if(day=="14") heartConfetti();
 };
});

// back calendar
document.getElementById("backCal").onclick=()=>{
 show("calendarPage");
};

// ---------- HEART CONFETTI ----------
function heartConfetti(){
 for(let i=0;i<80;i++){
   let h=document.createElement("div");
   h.innerText="💕";
   h.className="float";
   h.style.left=Math.random()*100+"vw";
   h.style.fontSize="35px";
   h.style.animationDuration="4s";
   rain.appendChild(h);
 }
}

