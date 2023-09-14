const cards = document.querySelectorAll(".card");
let isFlipped = false;
let firstCard;
let secondCard;
let score = 0;
let timer = 0;
const timerelement = document.getElementById("timer");
const scoreelement = document.getElementById("yourscore");
const gameover= document.getElementById("gamefinsh");
let timmer = false;

function starttimmer() {
  if (!timmer) {
    timmer = true;
    reset();
    shuffle();
    const currentHighScore = parseInt(getCookie("highScore")) || 0;
    document.getElementById("highscore").innerText = "Max-Score : " + currentHighScore;
    const intervalId = setInterval(() => {
      if (timer < 31000) 
      {
        timer++;
        timerelement.innerText = "Timer : " + timer + " sec";
      } 
    }, 1000);
    setTimeout(()=>
    {
      gameover.classList.remove("d-none");
      timmer=false;
      clearInterval(intervalId);
      
    },31000);
  }
}

cards.forEach((card) => card.addEventListener("click", flip));

function flip() {
  if (!timmer) {
    return;
  }

  if (this === firstCard) return;

  this.classList.add("flip");
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    checkIt();
  }
}

function checkIt() {
  if (firstCard.dataset.image === secondCard.dataset.image) {
    success();
  } else {
    fail();
  }
}

function success() {
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  score++;
  scoreelement.innerText = "Score : " + score;
  const currentHighScore = parseInt(getCookie("highScore")) || 0;
  if (score > currentHighScore) {
    setCookie("highScore", score, 30);
  }
  reset();
}

function fail() {
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 1000);
}

function reset() {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
}

function shuffle() {
  cards.forEach((card) => {
    const randomPos = Math.floor(Math.random() * 16);
    card.style.order = randomPos;
  });
}

function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split('=');
    if (cookieName.trim() === name) {
      return cookieValue;
    }
  }
  return null;
}
