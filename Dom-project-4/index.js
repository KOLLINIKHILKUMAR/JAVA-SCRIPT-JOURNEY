const cards = document.querySelectorAll(".card");
var isFlipped = false;
var firstCard;
var secondCard;

var score = 0;
var timer = 0;

var timerelement = document.getElementById("timer");
var scoreelement = document.getElementById("yourscore");

setInterval(()=>
{
  if(timer<31000)
  {
      timer++;
      timerelement.innerText = "Timer : "+timer + " sec";
  }
},1000);

setTimeout(()=>
{
    window.location.reload();
    console.log("Page Reloaded");
},31000);

cards.forEach((card) => card.addEventListener("click", flip));

function flip() {
  this.classList.add("flip");
  if (!isFlipped) {
    isFlipped = true;
    firstCard = this;
  } else {
    secondCard = this;
    console.log(firstCard);
    console.log(secondCard);
    checkIt();
  }
}

function checkIt() {
  if (firstCard.dataset.image === secondCard.dataset.image) 
  {
    success();
  } else 
  {
    fail();
  }
}

function success() {
  firstCard.removeEventListener("click", flip);
  secondCard.removeEventListener("click", flip);
  score++;
  scoreelement.innerText = "Score : "+score;
  if(score>highScoreelement.innerText)
  {
    highScoreelement.innerText = score;
      writeTextFile("score.txt", score, function() {});
  }
  reset();
}

function fail() {
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
  }, 300);
}

function reset() {
  isFlipped = false;
  firstCard = null;
  secondCard = null;
  score=0;
}

function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function() 
  {
      if (rawFile.readyState === 4 && (rawFile.status === 200 || rawFile.status === 0)) 
      {
          callback(rawFile.responseText);
      }
  }
  rawFile.send(null);
}

function writeTextFile(file, content, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("PUT", file, true);
  rawFile.setRequestHeader("Content-Type", "text/plain");
  rawFile.onreadystatechange = function() 
  {
      if (rawFile.readyState === 4 && rawFile.status === 200) 
      {
          callback();
      }
  }
  rawFile.send(content);
}

(function shuffle() {
  cards.forEach((card) => 
  {
    var index = Math.floor(Math.random() * 16);
    card.style.order = index;
    var highScoreelement = document.getElementById("highscore");
    readTextFile("score.txt", function(content) 
    {
      highScoreelement.innerText = content;
    });

  });
})();
