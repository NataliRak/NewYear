const button = document.querySelector(".ornament-container6");
const toasts = document.getElementById("toasts");

const messages = [
  "Твори добро - мири дебилов :)",
  "Улыбнись!",
  "Можно не бояться быть дураком. Кругом все свои.",
  "Хватит париться, живи как нравится!",
  "Шоколад вдвойне вкусней, если его нельзя.",
  "Душа в душу могут жить только матрешки",
  "с Новым Годом!",
];

const types = ["info", "success", "error"];

button.addEventListener("click", () => createNotification());

function createNotification(message = null, type = null, color = null) {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.classList.add(type ? type : getRandomType());

  notif.innerText = message ? message : getRandomMessage();

  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}
