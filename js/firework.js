const fireBtn = document.querySelector(".ornament-container2");
const fire = document.querySelector(".fireworks");

fireBtn.addEventListener("click", () => {
  fire.style.display = "block";
  setTimeout(() => {
    fire.style.display = "none";
  }, 3000);
});
