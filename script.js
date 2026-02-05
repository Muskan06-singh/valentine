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
const happyGif = document.getElementById("happyGif");
const happyText = document.getElementById("happyText");

const poems={
7:`🌹 Sai my rose blooms only for you... ... 💖`,
8:`💍 Sai today I gather courage... 💞`,
9:`🍫 Sai you taste like happiness... 💝`,
10:`🧸 Sai my comfort teddy... 🤍`,
11:`💌 Sai I promise you... 💗`,
12:`🤗 Sai your hugs heal... 💞`,
13:`😘 Sai your smile kisses my soul... 💋`,
14:`❤️ Sai this is our forever... 💖`
};

let rainInterval, brokenInterval, noCount=0;

// Typewriter animation
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

// EMOJI RAIN
function startRain(){
    stopRain();
    rainInterval=setInterval(()=>{
        const e=document.createElement("div");
        e.className="floating";
        e.innerHTML = Math.random()>0.5 ? "🌼":"❤️";
        e.style.left = Math.random()*100 + "vw";
        e.style.fontSize = `${30+Math.random()*30}px`;
        emojiRain.appendChild(e);
        setTimeout(()=>e.remove(),8000);
    },200); // faster for smooth continuous rain
}

function stopRain(){
    clearInterval(rainInterval);
    emojiRain.innerHTML="";
}

// BROKEN HEARTS
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

// MAIN TITLE animation
typeWriter(title,"Sai, will you be my Valentine 💕",60,startRain);

// NO BUTTON
noBtn.onclick=()=>{
    noCount++;
    main.classList.add("hidden");
    sadScreen.classList.remove("hidden");
    sadMusic.play();
    brokenInterval = brokenRain();

    const msgs=[
        "Sai… does my love mean nothing? 💔",
        "My heart only beats for you Sai… 🥀",
        "Without you everything feels empty… 🖤"
    ];

    if(noCount<=3){
        typeWriter(sadText,msgs[noCount-1]);
    }

    if(noCount>=4){
        sadMusic.pause();
        clearInterval(brokenInterval);
        sadScreen.classList.add("hidden");
        main.classList.remove("hidden");
        teaseContainer.classList.remove("hidden");
        typeWriter(title,"You are mine already ❤️");
        // runaway NO button
        noBtn.onmouseenter=()=>{
            noBtn.style.left=Math.random()*80+"vw";
            noBtn.style.top=Math.random()*60+"vh";
        };
    }
};

// THINK AGAIN BUTTON
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
    happyGif.src="assets/gifs/happy.gif";
    typeWriter(happyText,"Thank you my love for accepting it, let's begin our love week journey 💖");

    // Canva-style confetti
    const duration=4000;
    const end=Date.now()+duration;
    (function frame(){
        confetti({
            particleCount:7,
            spread:120,
            origin:{x:Math.random(),y:Math.random()-0.2}
        });
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

// BACK TO MAIN (Calendar only)
backToMain.onclick=()=>{
    calendarScreen.classList.add("hidden");
    main.classList.remove("hidden");
    typeWriter(title,"Sai, will you be my Valentine 💕",60,startRain);
};

// CALENDAR
function loadCalendar(){
    const cal=document.getElementById("calendar");
    cal.innerHTML="";
    for(let d=7;d<=14;d++){
        const box=document.createElement("div");
        box.className="day";
        box.innerHTML="Feb "+d;
        if(d!==7 && d!==14){
            box.classList.add("locked");
            box.onclick=()=>alert("Wait for our special day my love 💌");
        }else{
            box.onclick=()=>openDay(d);
        }
        cal.appendChild(box);
    }
}

// OPEN DAY
function openDay(day){
    calendarScreen.classList.add("hidden");
    dayScreen.classList.remove("hidden");
    stopRain();

    document.getElementById("dayGif").src=`assets/gifs/day${day}.gif`;

    const poemEl=document.getElementById("poem");
    setTimeout(()=>{
        typeWriter(poemEl,poems[day],40,()=>{
            const imgBox=document.getElementById("images");
            imgBox.innerHTML="";
            for(let i=1;i<=5;i++){
                setTimeout(()=>{
                    const im=document.createElement("img");
                    im.src=`assets/images/day${day}-${i}.jpg`;
                    im.style.display="inline-block";
                    imgBox.appendChild(im);
                },i*1200);
            }
        });
    },1000);

    ["tl","tr","bl","br"].forEach(p=>{
        const h=document.createElement("div");
        h.className="corner "+p;
        h.innerHTML="❤️";
        document.body.appendChild(h);
    });

    if(day==14){
        setTimeout(()=>{
            const end=Date.now()+5000;
            (function frame(){
                confetti({
                    particleCount:8,
                    spread:100,
                    shapes:["heart"],
                    origin:{x:Math.random(),y:Math.random()-0.2},
                    scalar:1.5
                });
                if(Date.now()<end) requestAnimationFrame(frame);
            })();
        },2000);
    }
}

// BACK BUTTON (Day)
document.getElementById("backBtn").onclick=()=>{
    dayScreen.classList.add("hidden");
    calendarScreen.classList.remove("hidden");
    document.querySelectorAll(".corner").forEach(e=>e.remove());
    startRain();
};
