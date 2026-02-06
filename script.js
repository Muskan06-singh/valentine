// ============================
// 🌸 GLOBAL VARIABLES
// ============================
let noClickCount = 0;
let rainInterval;
let isInsideSpecialPage = false; // sad page or calendar day open

// ============================
// 🌸 START HEART + DAISY RAIN
// ============================
function startRain() {
    stopRain();

    rainInterval = setInterval(() => {
        if (isInsideSpecialPage) return;

        const emoji = Math.random() > 0.5 ? "💖" : "🌼";
        const drop = document.createElement("div");
        drop.className = "rainDrop";
        drop.innerHTML = emoji;

        drop.style.left = Math.random() * window.innerWidth + "px";
        drop.style.fontSize = (Math.random() * 20 + 20) + "px";

        document.body.appendChild(drop);

        setTimeout(() => {
            drop.remove();
        }, 4000);
    }, 120);
}

function stopRain() {
    clearInterval(rainInterval);
}

// ============================
// 🌸 YES BUTTON CLICK
// ============================
function clickYes() {
    document.getElementById("firstPage").style.display = "none";
    document.getElementById("calendarPage").style.display = "block";

    startRain();
}

// ============================
// 🌸 NO BUTTON CLICK
// ============================
function clickNo() {
    noClickCount++;

    if (noClickCount >= 3) {
        document.getElementById("teaseGif").style.display = "block";
    }

    document.getElementById("sadPage").style.display = "block";
    document.getElementById("firstPage").style.display = "none";

    isInsideSpecialPage = true;
    stopRain();
}

// ============================
// 🌸 BACK FROM SAD PAGE
// ============================
function backFromSad() {
    document.getElementById("sadPage").style.display = "none";
    document.getElementById("firstPage").style.display = "block";

    isInsideSpecialPage = false;
    startRain();
}

// ============================
// 🌸 OPEN CALENDAR DAY
// ============================
function openDay(day) {
    isInsideSpecialPage = true;
    stopRain();

    document.getElementById("calendarPage").style.display = "none";
    document.getElementById("dayPage").style.display = "block";

    let title = document.getElementById("dayTitle");
    let poem = document.getElementById("dayPoem");
    let gif = document.getElementById("dayGif");

    if(day==7){
        title.innerHTML="🌹 Rose Day";
        poem.innerHTML="You are my rose, my heart’s delight 🌹💖<br>Every moment with you feels right ✨";
        gif.src="7.gif";
    }
    if(day==8){
        title.innerHTML="💍 Propose Day";
        poem.innerHTML="From today till forever I say 💍<br>Will you be mine in every way? 💖";
        gif.src="8.gif";
    }
    if(day==9){
        title.innerHTML="🧸 Teddy Day";
        poem.innerHTML="Soft like teddy, warm like you 🧸💗<br>My happiest place is beside you ✨";
        gif.src="9.gif";
    }
    if(day==10){
        title.innerHTML="🍫 Chocolate Day";
        poem.innerHTML="Sweeter than chocolate you are 🍫💖<br>My shining moon, my star ✨";
        gif.src="10.gif";
    }
    if(day==11){
        title.innerHTML="🤝 Promise Day";
        poem.innerHTML="I promise laughs, hugs and care 🤝💗<br>Forever with you, always there ✨";
        gif.src="11.gif";
    }
    if(day==12){
        title.innerHTML="🤗 Hug Day";
        poem.innerHTML="One hug from you heals all 🤗💖<br>In your arms I never fall ✨";
        gif.src="12.gif";
    }
    if(day==13){
        title.innerHTML="😘 Kiss Day";
        poem.innerHTML="A kiss of love soft and true 😘💗<br>My whole world begins with you ✨";
        gif.src="13.gif";
    }
    if(day==14){
        title.innerHTML="❤️ Valentine Day";
        poem.innerHTML="From first hello till life through 💖<br>Every heartbeat belongs to you ✨";
        gif.src="14.gif";
    }
}

// ============================
// 🌸 BACK TO CALENDAR
// ============================
function backToCalendar(){
    document.getElementById("dayPage").style.display="none";
    document.getElementById("calendarPage").style.display="block";

    isInsideSpecialPage=false;
    startRain();
}

// ============================
// 💍 FINAL MARRY ME SCENE
// ============================
function finalProposal(){
    document.getElementById("calendarPage").style.display="none";
    document.getElementById("finalPage").style.display="block";

    isInsideSpecialPage=false;
    startRain();

    let text = document.getElementById("marryText");

    let scale = 1;
    setInterval(()=>{
        scale = scale === 1 ? 1.15 : 1;
        text.style.transform = `scale(${scale})`;
    },600);

    // glitter effect
    setInterval(()=>{
        text.style.textShadow = `
        0 0 10px #ff69b4,
        0 0 20px #ff1493,
        0 0 40px #ff69b4,
        0 0 80px #ff1493`;
    },500);
}

// ============================
// ✨ TEXT GLOW ANIMATION ALL
// ============================
function glowAllText(){
    const texts = document.querySelectorAll("h1,h2,h3,p,button");

    setInterval(()=>{
        texts.forEach(t=>{
            t.style.textShadow = `
            0 0 5px #ff69b4,
            0 0 15px #ff1493,
            0 0 30px #ff69b4`;
        });
    },800);
}

// ============================
// 🌸 ON LOAD
// ============================
window.onload = () => {
    startRain();
    glowAllText();
};
