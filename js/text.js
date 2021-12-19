const text = document.querySelector(".smoky ");
const btntext = document.querySelector(".ornament-container3");

btntext.addEventListener("click", () => {
  text.style.display = "block";

  setTimeout(() => {
    text.style.display = "none";
  }, 12000);
});
