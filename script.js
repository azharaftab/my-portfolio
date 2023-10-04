
const phrases = ["AZHAR ALI", "PORTFOLIO", "WEB DEVELOPER"];
let phraseIndex = 0;
let charIndex = 0;
const speed = 100; // Typing speed in milliseconds
const delay = 1500; // Delay between phrases in milliseconds

function typeText() {
  if (phraseIndex < phrases.length) {
    const typingElement = document.querySelector(".typing-text");
    const currentPhrase = phrases[phraseIndex];
    
    if (charIndex < currentPhrase.length) {
      typingElement.textContent += currentPhrase.charAt(charIndex);
      charIndex++;
      setTimeout(typeText, speed);
    } else {
      setTimeout(eraseText, delay);
    }
  }
}
const texts = ["AZHAR ALI", "Front-End Developer", "PROTFOLIO"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing-text").textContent = letter;

  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }

  setTimeout(type, 200); // Adjust typing speed here
})();



// Start the typing effect when the page loads
window.onload = typeText;
const layers = document.querySelectorAll('.parallax-layer');

window.addEventListener('scroll', (event) => {
  const scrollY = window.scrollY;
  
  layers.forEach((layer, index) => {
    const speed = index + 1;
    const offset = scrollY * speed * -0.2; // Adjust the scroll speed here
    layer.style.transform = `translateY(${offset}px)`;
  });
});
// --------------------------------loader--------------------------------------
window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader');
  const content = document.querySelector('.content');

  setTimeout(() => {
    preloader.style.display = 'none';
    content.style.display = 'block';
  }, 2000); // Adjust the delay time as needed
});
