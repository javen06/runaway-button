const container = document.querySelector(".container");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.textContent = "i wouldn't take no for an answer...";

  gif.src =
    "https://media.giphy.com/media/osxoHh7xRNLTa/giphy.gif";
  gif.style.width = "200px"; 
  gif.style.height = "200px"; 
  document.body.style.backgroundColor = "#9BBEC8";
  gif.style.marginTop = "60px";
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  
});

function moveNoButton() {
  const noBtnRect = noBtn.getBoundingClientRect();
  const padding = 12;
  const maxX = Math.max(padding, window.innerWidth - noBtnRect.width - padding);
  const maxY = Math.max(padding, window.innerHeight - noBtnRect.height - padding);

  const randomX = padding + Math.floor(Math.random() * (maxX - padding + 1));
  const randomY = padding + Math.floor(Math.random() * (maxY - padding + 1));

  noBtn.style.position = "fixed";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

noBtn.addEventListener("pointerenter", moveNoButton);
noBtn.addEventListener("touchstart", (event) => {
  event.preventDefault();
  moveNoButton();
});
