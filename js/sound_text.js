const sounds = ["hohoho", "boo", "boy", "dog", "star"];
const text = document.querySelector(".smoky ");
const btntext = document.querySelector(".ornament-container3");

sounds.forEach((sound) => {
  const btn = document.querySelector(".ornament-container1");
  const santa = document.querySelector(".santa");
  const gopher = document.querySelector(".gopher");
  const dog = document.querySelector(".sausage-dog-animation");
  const star = document.querySelector(".star");

  btn.addEventListener("click", () => {
    stopSongs();
    document.getElementById("boo").play();
  });

  santa.addEventListener("click", () => {
    stopSongs();
    document.getElementById("hohoho").play();
  });

  gopher.addEventListener("click", () => {
    stopSongs();
    document.getElementById("boy").play();
  });
  dog.addEventListener("click", () => {
    stopSongs();
    document.getElementById("dog").play();
  });
  star.addEventListener("click", () => {
    stopSongs();
    document.getElementById("star").play();
  });
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
}

btntext.addEventListener("click", () => {
  text.style.display = "block";

  setTimeout(() => {
    text.style.display = "none";
  }, 8000);
});
