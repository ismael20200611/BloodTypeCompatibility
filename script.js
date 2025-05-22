const compatibility = {
  "O-": {
    receive: ["🅾️-"],
    donate: ["🅾️-", "🅾️+", "🅰️-", "🅰️+", "🅱️-", "🅱️+", "🆎-", "🆎+"]
  },
  "O+": {
    receive: ["🅾️-", "🅾️+"],
    donate: ["🅾️+", "🅰️+", "🅱️+", "🆎+"]
  },
  "A-": {
    receive: ["🅾️-", "🅰️-"],
    donate: ["🅰️-", "🅰️+", "🆎-", "🆎+"]
  },
  "A+": {
    receive: ["🅾️-", "🅾️+", "🅰️-", "🅰️+"],
    donate: ["🅰️+", "🆎+"]
  },
  "B-": {
    receive: ["🅾️-", "🅱️-"],
    donate: ["🅱️-", "🅱️+", "🆎-", "🆎+"]
  },
  "B+": {
    receive: ["🅾️-", "🅾️+", "🅱️-", "🅱️+"],
    donate: ["🅱️+", "🆎+"]
  },
  "AB-": {
    receive: ["🅾️-", "🅰️-", "🅱️-", "🆎-"],
    donate: ["🆎-", "🆎+"]
  },
  "AB+": {
    receive: ["🅾️-", "🅾️+", "🅰️-", "🅰️+", "🅱️-", "🅱️+", "🆎-", "🆎+"],
    donate: ["🆎+"]
  }
};

const select = document.getElementById("bloodType");
const receiveEl = document.getElementById("receive");
const donateEl = document.getElementById("donate");
const audio = document.getElementById("selectSound");
const themeBtn = document.getElementById("themeToggle");

select.addEventListener("change", () => {
  const selected = select.value;
  const { receive, donate } = compatibility[selected];

  receiveEl.textContent = receive.join(", ");
  donateEl.textContent = donate.join(", ");

  anime({
    targets: '.card',
    opacity: [0, 1],
    translateY: [-20, 0],
    duration: 600,
    easing: 'easeOutExpo',
    delay: anime.stagger(100)
  });

  audio.currentTime = 0;
  audio.play();
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
