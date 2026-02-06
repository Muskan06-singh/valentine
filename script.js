// ===============================
// 💖 GLOBAL VARIABLES
// ===============================
let noClick = 0;
let rainInterval;
let sadRainInterval;
let floatingSaiInterval;
let happyAudio = new Audio("assets/music/happy.mp3");
let sadAudio = new Audio("assets/music/sad.mp3");

happyAudio.loop = true;
sadAudio.loop = true;

let insideSpecial = false;

// ===============================
// ✨ DARK BLACK BOUNCY TYPEWRITER
// ===============================
function darkBouncyTypeWriter(el, text, speed=50){
    el.innerHTML="";
    let i=0;
    let timer=setInterval(()=>{
        let span = document.createElement("span");
        span.textContent = text.charAt(i);
        span.style.color="#000"; // dark black
        span.style.fontWeight="bold";
        span.style.textShadow="0 0 10px #000, 0 0 25px #111, 0 0 40px #222"; // glowing black
        span.style.display="inline-block";
        span.style.position="relative";
        // bounce animation
        span.style.animation="bounce 0.6s ease forwards";
        el.appendChild(span);
        i++;
        if(i>=text.length) clearInterval(timer);
    }, speed);
}

// ===============================
// ✨ WHITE PINK TYPEWRITER (for sad screens)
// ===============================
function glowingTypeWriter(el, text, speed=40){
    el.innerHTML="";
    let i=0;
    let timer=setInterval(()=>{
        let span = document.createElement("span");
        span.textContent = text.charAt(i);
        span.style.textShadow = "0 0 10px white,0 0 25px hotpink,0 0 50px red";
        span.style.color="white";
        el.appendChild(span);
        i++;
        if(i>=text.length) clearInterval(timer);
    },speed);
}

// ===============================
// ⚡ BOUNCE KEYFRAMES (DYNAMICALLY ADDED)
// ===============================
if(!document.getElementById("bounceStyle")){
    const style=document.createElement("style");
    style.id="bounceStyle";
    style.innerHTML=`
    @keyframes bounce {
        0% { top:0; }
        25% { top:-5px; }
        50% { top:0; }
        75% { top:-3px; }
        100% { top:0; }
    }`;
    document.head.appendChild(style);
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
function stopRain(){ clearInterval(rainInterval); }

// ===============================
// 💔 SAD BROKEN HEART RAIN
// ===============================
function startSadRain(){
    stopSadRain();
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
function stopSadRain(){ clearInterval(sadRainInterval); }

// ===============================
// 🌟 FLOATING SAI NAME
// ===============================
function startFloatingSai(){
    stopFloatingSai();
    floatingSaiInterval=setInterval(()=>{
        if(insideSpecial) return;
        let e=document.createElement("div");
        e.textContent = "Sai 💖";
        e.style.position="fixed";
        e.style.top = Math.random()*100+"vh";
        e.style.left = Math.random()*100+"vw";
        e.style.fontSize = (30 + Math.random()*30)+"px";
        e.style.fontFamily="'Caveat', cursive";
        e.style.color="red";
        e.style.textShadow="0 0 10px white,0 0 20px pink,0 0 40px red";
        e.style.pointerEvents="none";
        e.style.transition="all 4s linear";
        document.body.appendChild(e);
        setTimeout(()=>{
            e.style.top = Math.random()*100+"vh";
            e.style.left = Math.random()*100+"vw";
            e.style.opacity = 0;
        },50);
        setTimeout(()=>e.remove(),4000);
    },300);
}
function stopFloatingSai(){ clearInterval(floatingSaiInterval); }

// ===============================
// 🌸 ON LOAD
// ===============================
window.onload = ()=>{
    startRain();
    startFloatingSai();
    darkBouncyTypeWriter(document.getElementById("questionText"),"Sai… will you be my Valentine? 💌✨");
};

// ===============================
// 😍 YES BUTTON
// ===============================
document.getElementById("yesBtn").onclick = ()=>{
    sadAudio.pause();
    happyAudio.currentTime = 0;
    happyAudio.play();

    document.getElementById("question-screen").classList.add("hidden");
    document.getElementById("yes-screen").classList.remove("hidden");

    darkBouncyTypeWriter(document.getElementById("yesText"),"Yaaayyy 💖 Sai said YES… and my heart is dancing forever with you ♾️💘");

    confetti({particleCount:300,spread:180,origin:{y:.6}});
};

// open calendar
document.getElementById("openCal").onclick = ()=>{
    document.getElementById("yes-screen").classList.add("hidden");
    document.getElementById("calendar-screen").classList.remove("hidden");
};

// ===============================
// 😭 NO BUTTON
// ===============================
document.getElementById("noBtn").onclick = ()=>{
    noClick++;
    document.getElementById("question-screen").classList.add("hidden");
    document.getElementById("sad-screen").classList.remove("hidden");

    document.body.style.background="black";
    insideSpecial = true;
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

        glowingTypeWriter(sadText,lines[noClick-1]);
    }else{
        sadGif.src="assets/gifs/tease.gif";
        glowingTypeWriter(sadText,"You can run… but you can’t escape loving me 😌💖");
        runAwayNo();
    }
};

// think again
document.getElementById("thinkBtn").onclick = ()=>{
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
    btn.onmouseover = ()=>{
        let x=Math.random()*(window.innerWidth-100);
        let y=Math.random()*(window.innerHeight-60);
        btn.style.position="absolute";
        btn.style.left = x+"px";
        btn.style.top = y+"px";
    };
}

// ===============================
// 📅 CALENDAR
// ===============================
const calendar=document.getElementById("calendar");
calendar.innerHTML="";

const today = new Date();
const todayDate = today.getDate();

for(let d=7; d<=14; d++){
    let box=document.createElement("div");
    box.className="day";
    box.innerHTML="Feb "+d;
    box.style.transition="0.4s";
    box.style.animation="textFloat 3s ease-in-out infinite alternate";

    if(d===7 || d===14){
        box.style.boxShadow="0 0 25px hotpink, 0 0 60px pink";
        box.style.transform="scale(1.08)";
        box.style.animation="glowPulse 1.5s infinite alternate";
        box.onclick=()=>openDay(d);
    }else{
        box.classList.add("locked");
        box.onclick=()=>{ alert("⏳ My love… not yet.\nOur memory will bloom on its destined day 🌸💌"); };
    }

    if(todayDate===d){
        box.style.boxShadow="0 0 40px #ff69b4,0 0 90px pink";
        box.style.transform="scale(1.15)";
        box.style.animation="glowPulse 1s infinite alternate";
    }
    calendar.appendChild(box);
}

// ===============================
// 🌸 POEMS FOR EACH DAY
// ===============================
const poems = {
7:[
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
8:[
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
9:[
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
10:[
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
11:[
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
12:[
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
13:[
"😘 Sai, kisses speak without sound",
"In your love my world is found 💞",
"Not lips, but souls that meet ✨",
"Every moment feels so sweet 🍫",
"Your smile feels like sunshine 😌",
"A gentle, endless bliss 💖",
"Kiss Day glows in your name 💋",
"My heart forever the same 💓",
"Sai, you’re my sweetest art 🎨",
"A kiss written on my heart ❤️"
],
14:[
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
    darkBouncyTypeWriter(poem, poems[day].join("\n"));

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

    if(day==14){
        setTimeout(finalProposal,7000);
        setTimeout(startFinalProposal,9000);
    }
}

// ===============================
// back buttons
// ===============================
document.getElementById("backCal").onclick = ()=>{
    document.getElementById("day-screen").classList.add("hidden");
    document.getElementById("calendar-screen").classList.remove("hidden");
    insideSpecial=false;
    startRain();
};
document.getElementById("backHome").onclick = ()=>{
    document.getElementById("calendar-screen").classList.add("hidden");
    document.getElementById("question-screen").classList.remove("hidden");
    insideSpecial=false;
    startRain();
};

// ===============================
// 💍 FINAL PROPOSAL FUNCTIONS
// ===============================
function finalProposal(){
    let box=document.createElement("div");
    box.id="finalBox";
    box.innerHTML=`
    <div class="ringWrap">
        <div class="bigRing">💍</div>
        <div class="marryGlow">SAI WILL YOU MARRY ME?</div>
        <div class="sparkle">✨ FOREVER WITH YOU ✨</div>
    </div>`;
    document.body.appendChild(box);
    finalConfettiChain();
}

function finalConfettiChain(){
    let bursts=0;
    let interval=setInterval(()=>{
        confetti({particleCount:200+Math.random()*200,spread:180,origin:{y:.6}});
        bursts++;
        if(bursts>5) clearInterval(interval);
    },500);
}

// ===============================
// 💍 FINAL SAI PROPOSAL MODE
// ===============================
function startFinalProposal(){
    document.body.innerHTML = `
    <div id="proposalScene" style="
        position:fixed;top:0;left:0;width:100%;height:100%;
        background:radial-gradient(circle at center,#000,#050505,#000);
        display:flex;flex-direction:column;justify-content:center;align-items:center;
        overflow:hidden;font-family:'Caveat',cursive;color:white;text-align:center;
    ">
        <h1 id="proposalText" style="
            font-size:60px;opacity:0;transform:scale(0.5);
            transition:1.5s;text-shadow:0 0 25px pink,0 0 60px red;
        ">Sai 💖</h1>

        <h2 id="marryText" style="
            font-size:80px;margin-top:20px;opacity:0;
            transition:2s;text-shadow:0 0 30px red,0 0 80px hotpink;
        ">Will You Marry Me? 💍</h2>

        <div id="proposalBtns" style="margin-top:40px;display:none;">
            <button onclick="acceptProposal()" style="
                padding:15px 35px;font-size:25px;border:none;border-radius:40px;
                background:linear-gradient(45deg,#ff0080,#ff4d6d);color:white;
                cursor:pointer;box-shadow:0 0 25px pink;margin-right:20px;
            ">YES 💍</button>
            <button onclick="runNoFinal(this)" style="
                padding:15px 35px;font-size:25px;border:none;border-radius:40px;
                background:#111;color:white;cursor:pointer;
            ">NO 😭</button>
        </div>

        <canvas id="explosionCanvas" style="position:absolute;top:0;left:0;"></canvas>
    </div>`;
    playMusic("happy.mp3");

    setTimeout(()=>{ 
        document.getElementById("proposalText").style.opacity=1;
        document.getElementById("proposalText").style.transform="scale(1)"; 
        finalConfettiChain();
    },800);

    setTimeout(()=>{ document.getElementById("marryText").style.opacity=1; proposalExplosion(); },2200);
    setTimeout(()=>{ document.getElementById("proposalBtns").style.display="block"; },4200);
}

// ===============================
// 💥 PROPOSAL EXPLOSION
// ===============================
function proposalExplosion(){
    const canvas = document.getElementById("explosionCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles=[];
    for(let i=0;i<150;i++){
        particles.push({
            x:canvas.width/2,
            y:canvas.height/2,
            radius:Math.random()*4+2,
            color:`hsl(${Math.random()*360},100%,60%)`,
            speedX:(Math.random()-0.5)*8,
            speedY:(Math.random()-0.5)*8,
            life:120
        });
    }

    function animate(){
        ctx.fillStyle="rgba(0,0,0,0.2)";
        ctx.fillRect(0,0,canvas.width,canvas.height);
        particles.forEach(p=>{
            ctx.beginPath();
            ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);
            ctx.fillStyle=p.color;
            ctx.fill();
            p.x+=p.speedX;
            p.y+=p.speedY;
            p.life--;
        });
        particles = particles.filter(p=>p.life>0);
        if(particles.length>0) requestAnimationFrame(animate);
    }
    animate();
}

// ===============================
// 💍 YES ACCEPT FINAL
// ===============================
function acceptProposal(){
    document.body.innerHTML=`<div style="
        height:100vh;background:black;display:flex;justify-content:center;
        align-items:center;flex-direction:column;font-family:'Caveat';
        color:white;text-align:center;">
        <h1 style="font-size:80px;color:pink;text-shadow:0 0 40px red;">
        MY SAI SAID YES 💍😭💖</h1>
        <img src="assets/images/happy.gif" style="width:300px;margin-top:20px;">
    </div>`;
    playMusic("happy.mp3");
}

// ===============================
// 😭 NO BUTTON RUN AWAY FINAL
// ===============================
function runNoFinal(btn){
    btn.style.position="absolute";
    btn.style.top=Math.random()*80+"%";
    btn.style.left=Math.random()*80+"%";
}

// ===============================
// 🔊 MUSIC FUNCTION
// ===============================
let currentAudio;
function playMusic(file){
    if(currentAudio) currentAudio.pause();
    currentAudio = new Audio("assets/music/"+file);
    currentAudio.loop = true;
    currentAudio.play().catch(()=>{});
}
