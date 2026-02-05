/* ========= TYPEWRITER ========= */
function typeWriter(el,text,speed=40){
el.innerHTML=""
let i=0
let timer=setInterval(()=>{
el.innerHTML+=text[i]
i++
if(i>=text.length)clearInterval(timer)
},speed)
}

/* ========= EMOJI RAIN FULL SCREEN ========= */
let emojiInterval
function startEmojiRain(){
stopEmojiRain()
emojiInterval=setInterval(()=>{
let e=document.createElement("div")
let arr=["❤️","🌸","🌼","💖"]
e.innerHTML=arr[Math.floor(Math.random()*arr.length)]
e.style.position="fixed"
e.style.left=Math.random()*100+"vw"
e.style.top="-5vh"
e.style.fontSize=40+Math.random()*40+"px"
e.style.zIndex=999
e.style.transition="top 5s linear"
document.body.appendChild(e)
setTimeout(()=>{e.style.top="110vh"},50)
setTimeout(()=>e.remove(),5000)
},200)
}
function stopEmojiRain(){
clearInterval(emojiInterval)
}

/* ========= BROKEN HEART RAIN ========= */
let brokenInterval
function startBrokenRain(){
stopEmojiRain()
brokenInterval=setInterval(()=>{
let e=document.createElement("div")
e.innerHTML="💔"
e.style.position="fixed"
e.style.left=Math.random()*100+"vw"
e.style.top="-5vh"
e.style.fontSize="60px"
e.style.transform=`rotate(${Math.random()*360}deg)`
document.body.appendChild(e)
setTimeout(()=>{e.style.top="110vh"},50)
setTimeout(()=>e.remove(),4000)
},150)
}
function stopBrokenRain(){clearInterval(brokenInterval)}

/* ========= MAIN ========= */
const mainText=document.getElementById("mainText")
const yesBtn=document.getElementById("yesBtn")
const noBtn=document.getElementById("noBtn")
const mainGif=document.getElementById("mainGif")

const sadScreen=document.getElementById("sadScreen")
const sadText=document.getElementById("sadText")
const thinkBtn=document.getElementById("thinkBtn")

const calendarPage=document.getElementById("calendarPage")
const calendar=document.getElementById("calendar")

const dayPage=document.getElementById("dayPage")
const dayGif=document.getElementById("dayGif")
const poemText=document.getElementById("poemText")
const imagesDiv=document.getElementById("images")
const backCal=document.getElementById("backCal")

const happyMusic=document.getElementById("happyMusic")
const sadMusic=document.getElementById("sadMusic")

/* start */
typeWriter(mainText,"Sai… will you be my Valentine? 💕")
startEmojiRain()

/* ========= NO BUTTON ========= */
let noCount=0
const sadLines=[
"Sai… my heart breaks without you 💔",
"Please don't leave my love alone 🥀",
"My world feels empty without you 🖤"
]

noBtn.onclick=()=>{
noCount++

if(noCount<=3){
sadScreen.classList.remove("hidden")
typeWriter(sadText,sadLines[noCount-1])
sadMusic.play()
startBrokenRain()
}

if(noCount===3){
mainGif.src="assets/gifs/tease.gif"
mainGif.classList.remove("hidden")
sadText.innerHTML="You are already mine ❤️😌"
}

if(noCount>=4){
noBtn.onmouseover=()=>{
noBtn.style.position="absolute"
noBtn.style.left=Math.random()*80+"vw"
noBtn.style.top=Math.random()*80+"vh"
}
}
}

/* think again */
thinkBtn.onclick=()=>{
sadScreen.classList.add("hidden")
sadMusic.pause()
sadMusic.currentTime=0
stopBrokenRain()
startEmojiRain()
}

/* ========= YES ========= */
yesBtn.onclick=()=>{
mainGif.src="assets/gifs/happy.gif"
mainGif.classList.remove("hidden")
happyMusic.play()
fireConfetti()
setTimeout(showCalendar,3000)
}

/* confetti */
function fireConfetti(){
let duration=3000
let end=Date.now()+duration
;(function frame(){
confetti({
particleCount:5,
spread:360,
origin:{x:Math.random(),y:Math.random()-0.2}
})
if(Date.now()<end)requestAnimationFrame(frame)
})()
}

/* ========= CALENDAR ========= */
function showCalendar(){
calendarPage.classList.remove("hidden")
calendar.innerHTML=""

for(let d=7;d<=14;d++){
let box=document.createElement("div")
box.className="day"
box.innerText="Feb "+d

let today=new Date().getDate()
if(d!==7 && d!==14 && d!==today){
box.classList.add("locked")
}

box.onclick=()=>openDay(d)
calendar.appendChild(box)
}
}

/* ========= POEMS ========= */
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
"If courage had a face, it’d be you 😘",
"If forever had a start, it begins with you 💖",
"Hold my hand through every sky ☁️",
"Promise me you’ll never say goodbye 🌙",
"Propose Day writes our fate today 💌",
"Sai, be mine forever — come what may ❤️"
],

9: [
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

10: [
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

11: [
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

12: [
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

13: [
"😘 Sai, kisses speak without sound",
"In your love my world is found 💞",
"Not lips, but souls that meet ✨",
"Every moment feels so sweet 🍫",
"Your smile feels like a kiss 😌",
"A gentle, endless bliss 💖",
"Kiss Day glows in your name 💋",
"My heart forever the same 💓",
"Sai, you’re my sweetest art 🎨",
"A kiss written on my heart ❤️"
],

14: [
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

}
/* ========= OPEN DAY ========= */
function openDay(d){
dayPage.classList.remove("hidden")
calendarPage.classList.add("hidden")

dayGif.src=`assets/gifs/day${d}.gif`
poemText.innerHTML=""
imagesDiv.innerHTML=""

typeWriter(poemText,poems[d])

let i=1
let imgInterval=setInterval(()=>{
if(i>5){clearInterval(imgInterval);return}
let img=document.createElement("img")
img.src=`assets/images/day${d}-${i}.jpg`
imagesDiv.appendChild(img)
i++
},900)

/* 14 special heart confetti */
if(d==14){
setTimeout(()=>{
for(let i=0;i<80;i++){
let h=document.createElement("div")
h.innerHTML="💕"
h.style.position="fixed"
h.style.left=Math.random()*100+"vw"
h.style.top="-10vh"
h.style.fontSize="30px"
document.body.appendChild(h)
setTimeout(()=>{h.style.top="110vh"},50)
setTimeout(()=>h.remove(),4000)
}
},800)
}
}

backCal.onclick=()=>{
dayPage.classList.add("hidden")
calendarPage.classList.remove("hidden")
}

