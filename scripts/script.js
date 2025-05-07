const typingText = document.getElementById('typingText');
const phrases = ['FRONT END.', 'BACK END.', 'OPTIMISATION.', 'AUTOMATION.', 'TESTING.', 'SECURITY.', 'PERFORMANCE.'];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 50;
let nextPhraseDelay = 2000;

function typeLoop() {
  const currentPhrase = phrases[phraseIndex];
  console.log(currentPhrase);

  if (!isDeleting) {
    typingText.textContent = currentPhrase.substring(0, charIndex++);
    if (charIndex > currentPhrase.length) {
      isDeleting = true;
      setTimeout(typeLoop, nextPhraseDelay);
    } else {
      setTimeout(typeLoop, typingDelay);
    }
  } else {
    typingText.textContent = currentPhrase.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(typeLoop, typingDelay);
    } else {
      setTimeout(typeLoop, erasingDelay);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(typeLoop, 1000);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // remove if you only want animation once
      }
    });
  }, {
    threshold: 0.1 // trigger when 10% of the element is visible
  });

  document.querySelectorAll('.animate-slide-up').forEach(el => {
    observer.observe(el);
  });

  document.getElementById('scrollTrigger').addEventListener('click', () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  });

});