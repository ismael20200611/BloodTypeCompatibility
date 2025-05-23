// Blood Type Compatibility Checker -start all and info working
const compatibility = {
  "O-": {
    receive: ["🅾️-"],
    donate: ["🅾️-", "🅾️+", "🅰️-", "🅰️+", "🅱️-", "🅱️+", "🆎-", "🆎+"],
    donateWhy: ' You have no A, B, or Rh proteins on your red blood cells. That means your blood won’t trigger an immune response in anyone.This makes you a universal donor.',
    receiveWhy: 'Since your immune system reacts to A, B, or Rh proteins, even a small mismatch can be dangerous. Only O− is completely safe for you.'
  },
  "O+": {
    receive: ["🅾️-", "🅾️+"],
    donate: ["🅾️+", "🅰️+", "🅱️+", "🆎+"],
    donateWhy: 'You have the Rh protein but no A or B. You can safely donate to anyone with Rh+ who doesn’t need A or B proteins.',
    receiveWhy: 'You need O blood (no A or B), and the Rh must match (positive is OK'
  },
  "A-": {
    receive: ["🅾️-", "🅰️-"],
    donate: ["🅰️-", "🅰️+", "🆎-", "🆎+"],
    donateWhy: 'You have A protein but no Rh. You can give to A-, A+, AB-, AB+ (as long as they can accept A).',
    receiveWhy: 'You can’t receive B or Rh-positive blood. Only A− or O− is safe.'
  },
  "A+": {
    receive: ["🅾️-", "🅾️+", "🅰️-", "🅰️+"],
    donate: ["🅰️+", "🆎+"],
    donateWhy: 'Your blood has A and Rh proteins. You can give to others with the same proteins (A+ and AB+).',
    receiveWhy: 'You need blood with A and Rh compatibility, and no B protein.'
  },
  "B-": {
    receive: ["🅾️-", "🅱️-"],
    donate: ["🅱️-", "🅱️+", "🆎-", "🆎+"],
    donateWhy: 'Your blood has B but not Rh. You can donate to people who accept B, whether they are Rh− or Rh+',
    receiveWhy: 'Your body cannot accept A or Rh. Only B− or O− is safe.'
  },
  "B+": {
    receive: ["🅾️-", "🅾️+", "🅱️-", "🅱️+"],
    donate: ["🅱️+", "🆎+"],
    donateWhy: ' You have B and Rh. You can only give to people who also have B and Rh.',
    receiveWhy: 'You need to match B and Rh types — no A is allowed.'
  },
  "AB-": {
    receive: ["🅾️-", "🅰️-", "🅱️-", "🆎-"],
    donate: ["🆎-", "🆎+"],
    donateWhy: 'Your blood has both A and B proteins but no Rh. You can only give to AB people.',
    receiveWhy: 'You must avoid Rh+ and only receive from donors with no conflicting proteins.'
  },
  "AB+": {
    receive: ["🅾️-", "🅾️+", "🅰️-", "🅰️+", "🅱️-", "🅱️+", "🆎-", "🆎+"],
    donate: ["🆎+"],
    donateWhy: 'You have all proteins (A, B, Rh). Your blood can only be safely received by another AB+.',
    receiveWhy: 'You are the universal recipient. You can accept blood from anyone because your immune system recognizes all proteins.'
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
//Blood Type Compatibility Checker -end all and info working

// mode light and dark mode --strat working 
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
// mode light and dark mode --end working 



