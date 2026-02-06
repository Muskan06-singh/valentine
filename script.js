// ============================
// 🌸 VARIABLES
// ============================
let noClickCount = 0;
let rainInterval;
let isInsideSpecialPage = false;

// ============================
// 🌸 SAFE ELEMENT GET
// ============================
function show(id){
    document.getElementById(id).style.display="block";
}
function hide(id){
    document.getElementById(id).style.display="none";
}

// ============================
// 🌧️ HEART + DAISY RAIN
// ============================
function startRain(){
    stopRain();

    rainInterval = setInterval(()=>{
        if(isInsideSpecialPage) return;

        const emoji = Math.random()>0.5 ? "💖":"🌼";
        const drop = document.createElement("div");
        drop.innerHTML = emoji;
        drop.className="rainDrop";

        drop.style.position="fixed";
        drop.style.top="-50px";
        drop.style.left=Math.random()*window.innerWidth+"px";
        drop.style.fontSize=(20+Math.random()*25)+"px";
        drop.style.animation="fall 4s linear forwards";
        drop.style.zIndex="999";

        document.body.appendChild(drop);

        setTimeout(()=>{ drop.remove(); },4000);
    },120);
}

function stopRain(){
    clearInterval(rainInterval);
}

// ============================
// ❤️ YES CLICK
// ============================
function clickYes(){
    hide("firstPage");
    show("calendarPage");

    isInsideSpecialPage=false;
    startRain();
}

// ============================
// 😒 NO CLICK
// ============================
function clickNo(){
    noClickCount++;

    hide("firstPage");
    show("sadPage");

    isInsideSpecialPage=true;
    stopRain();

    if(noClickCount>=3){
        let tease=document.getElementById("teaseGif");
        if(tease) tease.style.display="block";
    }
}

// ============================
// 🔙 BACK FROM SAD
// ============================
function backFromSad(){
    hide("sadPage");
    show("firstPage");

    isInsideSpecialPage=false;
    startRain();
}

// ============================
// 📅 OPEN DAY
// ============================
function openDay(day){
    hide("calendarPage");
    show("dayPage");

    isInsideSpecialPage=true;
    stopRain();

    let title=document.getElementById("dayTitle");
    let poem=document.getElementById("dayPoem");
    let gif=document.getElementById("dayGif");

    if(day==7){
        title.innerHTML="🌹 Rose Day";
        poem.innerHTML="You are my rose 🌹 my heart’s light 💖<br>With you everything feels right ✨";
        gif.src="7.gif";
    }
    if(day==8){
        title.innerHTML="💍 Propose Day";
        poem.innerHTML="A question from heart so true 💍<br>Will you let me love only you? 💖";
        gif.src="8.gif";
    }
    if(day==9){
        title.innerHTML="🧸 Teddy Day";
        poem.innerHTML="Soft teddy hugs and you 🧸💖<br>My happiest dream came true ✨";
        gif.src="9.gif";
    }
    if(day==10){
        title.innerHTML="🍫 Chocolate Day";
        poem.innerHTML="Sweeter than chocolate you 🍫💖<br>My forever boo 😘";
        gif.src="10.gif";
    }
    if(day==11){
        title.innerHTML="🤝 Promise Day";
        poem.innerHTML="Promise to stay always near 🤝💖<br>Love you more each year ✨";
        gif.src="11.gif";
    }
    if(day==12){
        title.innerHTML="🤗 Hug Day";
        poem.innerHTML="One hug from you 🤗💖<br>Feels like whole world too ✨";
        gif.src="12.gif";
    }
    if(day==13){
        title.innerHTML="😘 Kiss Day";
        poem.innerHTML="A kiss so sweet 😘💖<br>Makes my heart skip beat ✨";
        gif.src="13.gif";
    }
    if(day==14){
        title.innerHTML="❤️ Valentine Day";
        poem.innerHTML="From today till forever 💖<br>Let’s stay together ✨";
        gif.src="14.gif";
    }
}

// ============================
// 🔙 BACK TO CALENDAR
// ============================
function backToCalendar(){
    hide("dayPage");
    show("calendarPage");

    isInsideSpecialPage=false;
    startRain();
}

// ============================
// 💍 FINAL PROPOSAL
// ============================
function finalProposal(){
    hide("calendarPage");
    show("finalPage");

    isInsideSpecialPage=false;
    startRain();

    let text=document.getElementById("marryText");

    // bounce animation
    let scale=1;
    setInterval(()=>{
        scale = scale==1?1.2:1;
        text.style.transform=`scale(${scale})`;
    },500);

    // glow animation
    setInterval(()=>{
        text.style.textShadow=`
        0 0 10px #ff69b4,
        0 0 25px #ff1493,
        0 0 60px #ff69b4,
        0 0 90px #ff1493`;
    },400);
}

// ============================
// ✨ ON LOAD FIX (IMPORTANT)
// ============================
window.onload=function(){

    // hide all pages except first
    hide("calendarPage");
    hide("sadPage");
    hide("dayPage");
    hide("finalPage");
    show("firstPage");

    startRain();
};

