
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
  // Toggle menu functionality
  function toggleMenu() {
    const menu = document.getElementById("navLinks");
    menu.classList.toggle("show");
  }
// Blood Type Compatibility Checker -end all and info working



//Blood Type Compatibility Checker -end all and info working

// Date and Time Display
function updateDateTime() {
    const now = new Date();
    const options = {
      weekday: 'short', year: 'numeric', month: 'short',
      day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'
    };
    document.getElementById('date-time').innerHTML = now.toLocaleString('en-US', options);
  }

  // Update every second
  setInterval(updateDateTime, 1000);

  // Initial call
  updateDateTime();
// Date and Time Display


// Print functionality
 const printBtn = document.getElementById('printBtn');
  printBtn.addEventListener('click', () => {
    window.print();
  });