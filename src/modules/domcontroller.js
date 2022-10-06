function setMobileHeight() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function setNewQuote(target) {
  fetch(
    'https://api.kanye.rest',
    {method: 'GET', mode: 'cors'}
  )
  .then((res) => res.json())
  .then((res) => target.textContent = res.quote)
  .catch((err) => target.textContent = err)
}

function configureNextButton(button, container) {
  button.addEventListener('click', (e) => {
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