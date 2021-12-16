const nums = document.querySelectorAll(".nums span");
const numBlock = document.querySelector(".nums");
const textBlock = document.querySelector(".nums-text");
const counter = document.querySelector(".counter");
const finalMessage = document.querySelector(".final");
const replay = document.querySelector(".ornament-container5");
const rocket = document.querySelector(".rocket");

runAnimation();

function resetDOM() {
  counter.classList.remove("hide");
  nums.forEach((num) => {
    num.classList.value = "";
  });

  nums[0].classList.add("in");
}

function runAnimation() {
  nums.forEach((num, idx) => {
    const nextToLast = nums.length - 1;

    num.addEventListener("animationend", (e) => {
      if (e.animationName === "goIn" && idx !== nextToLast) {
        num.classList.remove("in");
        num.classList.add("out");
      } else if (e.animationName === "goOut" && num.nextElementSibling) {
        num.nextElementSibling.classList.add("in");
      } else {
        counter.classList.add("hide");
        finalMessage.classList.add("show");
      }
    });
  });
}

replay.addEventListener("click", () => {
  numBlock.style.display = "block";
  textBlock.style.display = "block";
  resetDOM();
  setTimeout(() => {
    rocket.style.display = "block";
  }, 3800);

  setTimeout(() => {
    rocket.style.display = "none";
  }, 11000);
});
