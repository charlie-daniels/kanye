function setMobileHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

async function requestNewQuote() {
  const quote = 
    await fetch(
      'https://api.kanye.rest',
      { method: 'GET', mode: 'cors' }
    );
  return quote.json();
}

function configureNextButton(button, container) {
  const animationDelay = 600;
  button.addEventListener('click', () => {
    container.classList.add('rolling');
    setTimeout(() => {
      container.classList.add('switch', 'hidden');
      container.classList.remove('transition');
      requestNewQuote()
        .then(res => {
          container.textContent = res.quote;
          container.classList = 'transition';
        });
    }, animationDelay);
    
  })
}

function init() {
  setMobileHeight();
  configureNextButton(
    document.querySelector('#content'),
    document.querySelector('#content q')
  );
}

init();