const container = document.querySelector(".container");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "i wouldn't take no for an answer...";

  gif.src =
    "https://media.giphy.com/media/p5ncc0eWSGKkw/giphy.gif";
  gif.style.width = "400px"; 
  gif.style.height = "400px"; 
  document.body.style.backgroundColor = "#FCAEAE";
  gif.style.marginTop = "60px";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";


});