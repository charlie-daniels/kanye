function setMobileHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

async function requestNewQuote() {
  try {
    const res = await fetch(
      'https://api.kanye.rest',
      { method: 'GET', mode: 'cors' }
    );
    return await res.json();
  } catch (err) {
    return err;
  }
}

function setNewQuote(container) {
  const animationDelay = 1000;
  const req = requestNewQuote();
  req.then((res) => container.textContent = res.quote);
  req.then(() => {
    container.classList.add('switch', 'hidden');
    container.style.transitionDelay = '1ms';
    setTimeout(() => {
      container.classList = '';
    }, animationDelay)
  })
}

function configureNextButton(button, container) {
  button.addEventListener('click', () => {
    container.classList.add('rolling');
    setNewQuote(container);
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