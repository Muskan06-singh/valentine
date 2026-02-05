// ------------------------
// ELEMENTS
// ------------------------
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
const openCal = document.getElementById("openCal");

let rainInterval, brokenInterval, noCount = 0;

// ------------------------
// POEMS WITH EMOJIS
// ------------------------
const sadPoems = [
`Sai 💔, my heart aches today,
Without you, skies are gray ☁️,
I call your name in silence 🥀,
Longing for your sweet guidance 🌙,
Return, my love 💖, don't delay ✨.`,

`Oh Sai 💔, my soul is torn,
Each night I wish for dawn 🌅,
Your absence feels like frost ❄️,
Every moment seems lost ⏳,
Come back, my love 💞, be reborn 🌹.`,

`Sai 💔, the world feels so cold,
Without your hand to hold 🤲,
Roses wilt and dreams fade 🌹,
My heart feels heavy, afraid 😢,
Return and our love unfold 💕.`
];

const happyPoem =
`Sai 💖, you said YES 🎉!
Our hearts beat in sweet caress 💞,
The week ahead is ours to share 🌹,
Moments of joy beyond compare ✨,
Thank you, my love 💕, for being there 🌸.`;

// DAYS 7–14 POEMS (10–20 lines)
const dayPoems = {
7:`Sai 🌹, today I dedicate to you 💕,
A morning fresh ☀️, a sky so blue 🌸,
Roses red 🌹 and daisies white 🌼,
Our love shines in golden light ✨,
Moments sweet 🍫, our hands entwined 🤲,
Memories crafted 📝, hearts aligned ❤️,
Laugh 😂 and sing 🎶, dance away 💃,
Treasure every bright new day 🌞,
You are my joy 😍, my heart's own tune 🎵,
Beneath the stars ✨ and silver moon 🌙,
Our souls connect 🔗, forever true 💞,
Sai 💖, my love, I cherish you 🌹.`,

8:`Sai 💕, today we write our tale 📖,
Of laughter shared 😂, and winds that sail 🌬️,
In every glance 👀, your beauty glows ✨,
Like morning dew 💧 on budding rose 🌹,
Moments fleeting 🕊️, yet so dear 💝,
I hold you close 🤗, keep you near 💞,
In every heartbeat ❤️, in every sigh 😌,
Together, love will never die 💖,
Let’s wander paths 🌿 where dreams reside 🌙,
With you, my love 💕, forever side by side ✨.`,

9:`Sai 💖, each moment with you shines ✨,
Our hearts together draw fine lines ❤️,
Through laughter 😂, tears 😢, and whispered words 💌,
Our love soars higher than the birds 🕊️,
Every glance 👀, a spark 🔥, a flame 💘,
Every touch 🤲 calls out your name 💕,
In the quiet 🤫, in the storm 🌧️,
Our love remains our perfect form 💞,
Hand in hand 🤝 through sun 🌞 and rain 🌧️,
Sai 💖, my love, you ease all pain 💝.`,

10:`Sai 💖, today I dream of you 🌙,
Skies are pink 🌸, clouds tinted blue ☁️,
Roses bloom 🌹 for our delight 💕,
Stars shall twinkle ✨ through the night 🌙,
Every heartbeat ❤️ sings your name 💌,
Our love is wild 🌿, untamed, aflame 🔥,
Moments gentle 🍫, moments bold 💞,
Stories of our love unfold 📖,
Laugh 😂 with me, dance 💃 along,
Sai 💖, my love, forever strong ❤️.`,

11:`Sai 💖, the morning sings our song 🎵,
Every second ⏳ feels so long 🕰️,
When you are near 🤗, my heart takes flight ❤️,
Colors glow 🌈 in softest light ✨,
Your smile 😍 ignites the skies above 🌌,
Moments we share 🕊️, full of love 💕,
Roses bloom 🌹 and rivers hum 🌊,
With you 💖, I feel I’ve just begun 🌟,
Hold my hand 🤝, never part 💞,
Sai ❤️, you own my grateful heart 💌.`,

12:`Sai 💖, today the world feels new 🌞,
Every breath 💨 I take is you ❤️,
The sun shines warmly ☀️, hearts align 💞,
Our spirits dance 💃, our souls entwine 🔗,
Moments gentle 🍫, whispers sweet 💌,
Every glance 👀 makes life complete 🌸,
Through valleys low ⛰️ and mountains high 🏔️,
Our love reaches the endless sky 🌌,
Hand in hand 🤝, come what may 💖,
Sai 💕, my love, forever stay ❤️.`,

13:`Sai 💖, my heart beats only for you ❤️,
Every second ⏳, every view 👀,
Roses red 🌹 and violets blue 💜,
Whisper softly 💌, I love you 💕,
Stars above ✨ reflect our flame 🔥,
Every moment ⏰ feels the same 💝,
Joy 😂 and laughter 😍, tears 😢 and sighs 😌,
Love 💖 that sparkles in your eyes 👁️,
Hand in hand 🤝, our journey starts 💞,
Sai 💖, my love, you have my heart ❤️.`,

14:`Sai 💖, our love blooms brightest today 🌹,
A heart-shaped symphony ❤️🎶 lights our way ✨,
Confetti rains 🎉 like sparkling stars 🌟,
Healing moments 🌸, mending scars 💔,
Every kiss 💋, a story told 📖,
Our hands together 🤝, warm to hold 🫶,
Roses 🌹, chocolates 🍫, laughter 😂, delight 💕,
We dance 💃 beneath the moonlit night 🌙,
Every heartbeat ❤️ sings your name 💌,
Forever ours 💞, love's eternal flame 🔥,
Our journey shines 🌈 in radiant hue 🌸,
Sai 💖, my valentine 💘, I love you ❤️.`
};

// ------------------------
// TYPEWRITER
// ------------------------
function typeWriter(el, text, speed=50, callback=null){
    el.innerHTML = "";
    let i=0;
    const timer = setInterval(()=>{
        el.innerHTML += text[i];
        el.style.display="inline-block";
        el.style.animation="bounce 0.6s infinite";
        i++;
        if(i>=text.length){
            clearInterval(timer);
            if(callback) callback();
        }
    }, speed);
}

// ------------------------
// MAGIC RAIN
// ------------------------
function startRain(){
    stopRain();
    rainInterval = setInterval(()=>{
        const e = document.createElement("div");
        e.className = "floating";
        const emojis = ["🌼","❤️","🌸","💖"];
        e.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];
        e.style.left = Math.random()*100 + "vw";
        e.style.fontSize = `${Math.random()*30 + 40}px`;
        e.style.opacity = Math.random()*0.6 + 0.4;
        e.style.transform = `rotate(${Math.random()*360}deg)`;
        emojiRain.appendChild(e);
        setTimeout(()=>e.remove(),10000);
    },150);
}

function brokenRain(){
    stopRain();
    return setInterval(()=>{
        const b = document.createElement("div");
        b.className = "broken";
        b.innerHTML = "💔";
        b.style.left = Math.random()*100 + "vw";
        b.style.fontSize = `${Math.random()*50 + 50}px`;
        b.style.opacity = Math.random()*0.7 + 0.3;
        b.style.transform = `rotate(${Math.random()*360}deg)`;
        document.body.appendChild(b);
        setTimeout(()=>b.remove(),3000);
    },150);
}

function stopRain(){
    clearInterval(rainInterval);
    emojiRain.innerHTML="";
}

// ------------------------
// MAIN TITLE
// ------------------------
typeWriter(title,"Sai, will you be my Valentine 💕",60,startRain);

// ------------------------
// NO BUTTON LOGIC
// ------------------------
noBtn.onclick = ()=>{
    noCount++;
    main.classList.add("hidden");
    sadScreen.classList.remove("hidden");
    sadMusic.play();
    brokenInterval = brokenRain();

    const msgs=[
        `Sai… does my love mean nothing? 💔`,
        `My heart only beats for you Sai… 🥀`,
        `Without you everything feels empty… 🖤`,
        `My heart is yours forever 💞`,
    ];

    if(noCount <= 3){
        typeWriter(sadText,msgs[noCount-1]);
    }
    if(noCount >= 4){
        sadMusic.pause();
        clearInterval(brokenInterval);
        sadScreen.classList.add("hidden");
        main.classList.remove("hidden");
        typeWriter(title,"You are mine already ❤️");
        // runaway NO button
        noBtn.onmouseenter = ()=>{
            noBtn.style.left = Math.random()*80 + "vw";
            noBtn.style.top = Math.random()*60 + "vh";
        };
    }
};

thinkBtn.onclick = ()=>{
    sadMusic.pause();
    sadMusic.currentTime = 0;
    clearInterval(brokenInterval);
    sadScreen.classList.add("hidden");
    main.classList.remove("hidden");
    startRain();
};

// ------------------------
// YES BUTTON LOGIC
// ------------------------
yesBtn.onclick = ()=>{
    main.classList.add("hidden");
    happyScreen.classList.remove("hidden");
    stopRain();
    happyMusic.play();
    typeWriter(document.querySelector(".glow"),happyPoem);

    // CANVAS CONFETTI
    const duration = 5000;
    const end = Date.now() + duration;
    (function frame(){
        confetti({
            particleCount:8,
            spread:160,
            origin:{x:Math.random(),y:Math.random()-0.2},
            shapes:["heart","circle"]
        });
        if(Date.now() < end) requestAnimationFrame(frame);
    })();
};

// ------------------------
// OPEN CALENDAR
// ------------------------
openCal.onclick = ()=>{
    happyScreen.classList.add("hidden");
    calendarScreen.classList.remove("hidden");
    loadCalendar();
    startRain();
};

// ------------------------
// BACK TO MAIN
// ------------------------
backToMain.onclick = ()=>{
    calendarScreen.classList.add("hidden");
    main.classList.remove("hidden");
    typeWriter(title,"Sai, will you be my Valentine 💕",60,startRain);
};

// ------------------------
// CALENDAR LOGIC
// ------------------------
function loadCalendar(){
    const cal = document.getElementById("calendar");
    cal.innerHTML = "";
    for(let d=7; d<=14; d++){
        const box = document.createElement("div");
        box.className = "day";
        box.innerHTML = "Feb "+d;
        if(d!==7 && d!==14){
            box.classList.add("locked");
            box.onclick = ()=>alert("Wait for our special day my love 💌");
        }else{
            box.onclick = ()=>openDay(d);
        }
        cal.appendChild(box);
    }
}

// ------------------------
// OPEN DAY
// ------------------------
function openDay(day){
    calendarScreen.classList.add("hidden");
    dayScreen.classList.remove("hidden");
    stopRain();

    document.getElementById("dayGif").src = `assets/gifs/day${day}.gif`;

    const poemEl = document.getElementById("poem");
    setTimeout(()=>{
        typeWriter(poemEl,dayPoems[day],40,()=>{
            const imgBox = document.getElementById("images");
            imgBox.innerHTML = "";
            for(let i=1;i<=5;i++){
                setTimeout(()=>{
                    const im = document.createElement("img");
                    im.src = `assets/images/day${day}-${i}.jpg`;
                    im.style.display="inline-block";
                    imgBox.appendChild(im);
                },i*1200);
            }
        });
    },1000);

    // CORNER HEARTS
    ["tl","tr","bl","br"].forEach(p=>{
        const h = document.createElement("div");
        h.className = "corner " + p;
        h.innerHTML = "❤️";
        document.body.appendChild(h);
    });

    // FEB 14 CONFETTI HEARTS
    if(day==14){
        setTimeout(()=>{
            const end = Date.now()+5000;
            (function frame(){
                confetti({
                    particleCount:10,
                    spread:120,
                    shapes:["heart"],
                    origin:{x:Math.random(),y:Math.random()-0.2},
                    scalar:1.5
                });
                if(Date.now()<end) requestAnimationFrame(frame);
            })();
        },2000);
    }
}

// ------------------------
// BACK BUTTON FROM DAY
// ------------------------
document.getElementById("backBtn").onclick = ()=>{
    dayScreen.classList.add("hidden");
    calendarScreen.classList.remove("hidden");
    document.querySelectorAll(".corner").forEach(e=>e.remove());
};
