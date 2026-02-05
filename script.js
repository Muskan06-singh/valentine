const title = document.getElementById("title");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const sadScreen = document.getElementById("sadScreen");
const main = document.getElementById("main");
const happyScreen = document.getElementById("happyScreen");
const calendarScreen = document.getElementById("calendarScreen");
const dayScreen = document.getElementById("dayScreen");
const sadText = document.getElementById("sadText");
const thinkBtn = document.getElementById("thinkBtn");
const happyMusic = document.getElementById("happyMusic");
const sadMusic = document.getElementById("sadMusic");
const emojiRain = document.getElementById("emojiRain");
const backToMain = document.getElementById("backToMain");
const teaseContainer = document.getElementById("teaseContainer");

const poems={
7:`🌹 Sai my rose blooms only for you... 💖`,
8:`💍 Sai today I gather courage... 💞`,
9:`🍫 Sai you taste like happiness... 💝`,
10:`🧸 Sai my comfort teddy... 🤍`,
11:`💌 Sai I promise you... 💗`,
12:`🤗 Sai your hugs heal... 💞`,
13:`😘 Sai your smile kisses my soul... 💋`,
14:`❤️ Sai this is our forever... 💖`
};

let rainInterval, brokenInterval, noCount=0;

// Typewriter
function typeWriter(el, text, speed=50, callback=null){
    el.innerHTML="";
    let i=0;
    const timer = setInterval(()=>{
        el.innerHTML += text[i];
        el.style.fontSize = `${30 + i/2}px`;
        el.style.display="inline-block";
        el.style.animation="bounce 0.6s infinite";
        i++;
        if(i>=text.length){
            clearInterval(timer);
            if(callback) callback();
        }
    }, speed);
}

// DAISY + HEART RAIN (continuous)
function startRain(){
    stopRain();
    rainInterval=setInterval(()=>{
        if(main.classList.contains("hidden") || happyScreen.classList.contains("hidden") || calendarScreen.classList.contains("hidden")) return;
        const e=document.createElement("div");
        e.className="floating";
        e.innerHTML = Math.random()>0.5 ? "🌼":"❤️";
        e.style.left = Math.random()*100 + "vw";
        emojiRain.appendChild(e);
        setTimeout(()=>e.remove(),8000);
    },400);
}

function stopRain(){ clearInterval(rainInterval); emojiRain.innerHTML=""; }

// BROKEN HEART
function brokenRain(){
    stopRain();
    return setInterval(()=>{
        const b=document.createElement("div");
        b.className="broken";
        b.innerHTML="💔";
        b.style.left=Math.random()*100+"vw";
        b.style.transform=`rotate(${Math.random()*60-30}deg)`;
        document.body.appendChild(b);
        setTimeout(()=>b.remove(),3000);
    },200);
}

// MAIN TITLE
typeWriter(title,"Sai, will you be my Valentine 💕",60,startRain);

// NO BUTTON
noBtn.onclick=()=>{
    noCount++;
    main.classList.add("hidden");
    if(noCount<=3){
        sadScreen.classList.remove("hidden");
        sadMusic.play();
        brokenInterval=brokenRain();
        const msgs=[
            "Sai… does my love mean nothing? 💔",
            "My heart only beats for you Sai… 🥀",
            "Without you everything feels empty… 🖤"
        ];
        typeWriter(sadText,msgs[noCount-1]);
    } else {
        // show tease.gif on main page
        sadScreen.classList.add("hidden");
        main.classList.remove("hidden");
        teaseContainer.classList.remove("hidden");
        noBtn.onmouseenter=()=>{ noBtn.style.left=Math.random()*80+"vw"; noBtn.style.top=Math.random()*60+"vh"; };
    }
};

thinkBtn.onclick=()=>{
    sadMusic.pause();
    sadMusic.currentTime=0;
    clearInterval(brokenInterval);
    sadScreen.classList.add("hidden");
    main.classList.remove("hidden");
    startRain();
};

// YES BUTTON
yesBtn.onclick=()=>{
    main.classList.add("hidden");
    happyScreen.classList.remove("hidden");
    teaseContainer.classList.add("hidden");
    stopRain();
    happyMusic.play();
    const duration=4000;
    const end=Date.now()+duration;
    (function frame(){
        confetti({particleCount:7,spread:120,origin:{x:Math.random(),y:Math.random()-0.2}});
        if(Date.now()<end) requestAnimationFrame(frame);
    })();
};

// OPEN CALENDAR
document.getElementById("openCal").onclick=()=>{
    happyScreen.classList.add("hidden");
    calendarScreen.classList.remove("hidden");
    loadCalendar();
    startRain();
};

// BACK TO MAIN
backToMain.onclick=()=>{
    calendarScreen.classList.add("hidden");
    main.classList.remove("hidden");
    typeWriter(title,"Sai, will you be my Valentine 💕",60,startRain);
};
