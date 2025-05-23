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


select.addEventListener("change", () => {
  const selected = select.value;
  const { receive, donate } = compatibility[selected];

  receiveEl.textContent = receive.join(", ");
  donateEl.textContent = donate.join(", ");

  anime({
    targets: '.card',
    opacity: [0, 1],
    translateY: [-10, 0],
    duration: 500,
    easing: 'easeOutExpo',
    delay: anime.stagger(100)
  });

  audio.currentTime = 0;
  audio.play();
});


// Initialize the select element with the first blood type
let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('themeToggle')

const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode')
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})
