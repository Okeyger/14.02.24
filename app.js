buttonYes = document.querySelector(".yes");
buttonNo = document.querySelector(".no");
gif = document.querySelector("img");

const phrases = [
  "Пфффф, нет",
  "Ты уверена?",
  "Серьезно нет?",
  "Я буду плакать...",
  "Ты ломаешь мне сердце...",
];

let countNo = 0;

const clickYes = () => {
  buttonYes.style.display = "none";
  let yesText = document.createElement("h2");
  yesText.textContent = "С 14 февраля любимка!!!";
  gif.after(yesText);
  buttonNo.style.display = "none";
  document.querySelector("h1").textContent =
    "Ураааааа, люблю тебя сильно сильно!!!";
  gif.src =
    "https://i.pinimg.com/originals/f6/0b/3e/f60b3e0ebdf7f27e75dc19f0f97e5f0e.gif";
};

const clickNo = () => {
  gif.src =
    "https://i.pinimg.com/originals/0b/17/b0/0b17b0a8914fca52468ca1244a73791f.gif";
  countNo += 1;
  buttonNo.textContent = phrases[countNo % 5];
  buttonNo.style.marginTop = `${countNo * 15}px`;
  buttonYes.style.marginTop = `${countNo * 15}px`;
  buttonYes.style.transform = `scale(${countNo / 2 + 0.8})`;
};

buttonYes.addEventListener("click", () => clickYes());
buttonNo.addEventListener("click", () => clickNo());
