const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const backBtn = document.getElementById("back-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I love you too! 😘";
  gif.src =
    "https://media1.tenor.com/m/1gf_Jz8WYH0AAAAC/sami-en-dina-sami-dina.gif";
  noBtn.style.display = "none"; // Hide the No button
  yesBtn.style.display = "none"; // Hide the Yes button
  backBtn.style.display = "block"; // Show the back button
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  // Ensure the button does not go out of the viewport
  const randomX = Math.min(Math.max(Math.floor(Math.random() * maxX), 0), maxX);
  const randomY = Math.min(Math.max(Math.floor(Math.random() * maxY), 0), maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

backBtn.addEventListener("click", () => {
  window.location.href = "https://realkdgo.github.io/Flowers-for-my-honeybunch/"; // Replace with your desired URL
});
