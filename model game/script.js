'use strict';
const modal = document.querySelector('.modal');
console.log(modal);

const overlay = document.querySelector('.overlay');
console.log(overlay);

const closeButton = document.querySelector('.close-modal');
console.log(closeButton);

const openButton = document.querySelectorAll('.show-modal');
console.log(openButton);

for (let i = 0; i < openButton.length; i++)
  openButton[i].addEventListener('click', function () {
    console.log('clicked');

    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key == 'Escape') {
    closeModal();
  }
});

closeButton.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);
