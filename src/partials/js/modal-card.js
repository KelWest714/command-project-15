(() => {
  const cards = {
    openPinkBtn: document.querySelector('[data-modal-pink-open]'),
    closePinkBtn: document.querySelector('[data-modal-pink-close]'),
    openCoffeeBtn: document.querySelector('[data-modal-coffee-open]'),
    closeCoffeeBtn: document.querySelector('[data-modal-coffee-close]'),
    openGreenBtn: document.querySelector('[data-modal-green-open]'),
    closeGreenBtn: document.querySelector('[data-modal-green-close]'),
    pink: document.querySelector('[data-modal-pink]'),
    coffee: document.querySelector('[data-modal-coffee]'),
    green: document.querySelector('[data-modal-green]'),
    body: document.querySelector('body'),
  };

  cards.openPinkBtn.addEventListener('click', togglePink);
  cards.closePinkBtn.addEventListener('click', togglePink);

  cards.openCoffeeBtn.addEventListener('click', toggleCoffee);
  cards.closeCoffeeBtn.addEventListener('click', toggleCoffee);

  cards.openGreenBtn.addEventListener('click', toggleGreen);
  cards.closeGreenBtn.addEventListener('click', toggleGreen);

  function togglePink() {
    cards.pink.classList.toggle('is-hidden');
    cards.body.classList.toggle('no-scroll');
  }

  function toggleCoffee() {
    cards.coffee.classList.toggle('is-hidden');
    cards.body.classList.toggle('no-scroll');
  }

  function toggleGreen() {
    cards.green.classList.toggle('is-hidden');
    cards.body.classList.toggle('no-scroll');
  }

  cards.pink.onmousedown = function (e) {
    let target = e.target;
    let content = document.querySelector('.card-pink');
    if (e.target.closest('.' + content.className) === null) {
      togglePink();
    }
  };

  cards.coffee.onmousedown = function (e) {
    let target = e.target;
    let content = document.querySelector('.card-coffee');
    if (e.target.closest('.' + content.className) === null) {
      toggleCoffee();
    }
  };

  cards.green.onmousedown = function (e) {
    let target = e.target;
    let content = document.querySelector('.card-green');
    if (e.target.closest('.' + content.className) === null) {
      toggleGreen();
    }
  };
})();
