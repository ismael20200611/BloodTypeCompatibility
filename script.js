const compatibility = {
  "O-": {
    receive: ["🅾️-"],
    donate: ["🅾️-", "🅾️+", "🅰️-", "🅰️+", "🅱️-", "🅱️+", "🆎-", "🆎+"],
    donateWhy: 'You have no proteins on your red cells, so anyone can safely receive your blood.',
    receiveWhy: 'You can only receive from O− because even one wrong protein would trigger a reaction.'
  },
  "O+": {
    receive: ["🅾️-", "🅾️+"],
    donate: ["🅾️+", "🅰️+", "🅱️+", "🆎+"],
    donateWhy: 'You have Rh protein and no A/B proteins, so can donate to anyone with Rh+.',
    receiveWhy: 'You can only get blood from O types that won’t cause a reaction.'
  },
  "A-": {
    receive: ["🅾️-", "🅰️-"],
    donate: ["🅰️-", "🅰️+", "🆎-", "🆎+"],
    donateWhy: 'You can give to A or AB types, but only if Rh matches or is +.',
    receiveWhy: 'Only A− or O− is safe because your body avoids B and Rh.'
  },
  "A+": {
    receive: ["🅾️-", "🅾️+", "🅰️-", "🅰️+"],
    donate: ["🅰️+", "🆎+"],
    donateWhy: 'You have A and Rh proteins, so you can give to people who accept both.',
    receiveWhy: 'You can get blood from types that don’t have B, and match your A and Rh type.'
  },
  "B-": {
    receive: ["🅾️-", "🅱️-"],
    donate: ["🅱️-", "🅱️+", "🆎-", "🆎+"],
    donateWhy: 'You can give to B or AB types depending on Rh compatibility.',
    receiveWhy: 'You need blood without A or Rh proteins—B− and O− work.'
  },
  "B+": {
    receive: ["🅾️-", "🅾️+", "🅱️-", "🅱️+"],
    donate: ["🅱️+", "🆎+"],
    donateWhy: 'You have B and Rh proteins, so you can donate to people who match.',
    receiveWhy: 'You can receive from types that don’t have A, and match your B and Rh.'
  },
  "AB-": {
    receive: ["🅾️-", "🅰️-", "🅱️-", "🆎-"],
    donate: ["🆎-", "🆎+"],
    donateWhy: 'You can only give to AB types since your blood has A and B proteins.',
    receiveWhy: 'You need blood that won’t trigger reaction—no Rh, no O-only types.'
  },
  "AB+": {
    receive: ["🅾️-", "🅾️+", "🅰️-", "🅰️+", "🅱️-", "🅱️+", "🆎-", "🆎+"],
    donate: ["🆎+"],
    donateWhy: 'You can only donate to AB+ because your blood has all proteins.',
    receiveWhy: 'You can receive from anyone – you’re the universal recipient!'
  },
};

const select = document.getElementById("bloodType");
const receiveEl = document.getElementById("receive");
const donateEl = document.getElementById("donate");
const receiveExplanation = document.getElementById('receiveExplanation');
const donateExplanation = document.getElementById('donateExplanation');
const audio = document.getElementById("selectSound");


select.addEventListener('change', () => {
  const selected = select.value;
  if (selected && compatibility[selected]) {
    const data = compatibility[selected];
    receiveEl.textContent = data.receive.join(', ');
    donateEl.textContent = data.donate.join(', ');
    receiveExplanation.textContent = data.receiveWhy;
    donateExplanation.textContent = data.donateWhy;
  } else {
    receiveEl.textContent = '';
    donateEl.textContent = '';
    receiveExplanation.textContent = '';
    donateExplanation.textContent = '';
  }


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
