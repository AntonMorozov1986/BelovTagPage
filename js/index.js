'use strict';

function clickFormHandler() {
  let checkedInputsEl = tagsEl.querySelectorAll('.tags-item');
  checkedInputsEl.forEach( input => {
    let labelEl = tagsEl.querySelector(`label[for="${input.id}"]`);
    if (input.checked) {
      labelEl.classList.add('checked');
    } else {
      labelEl.classList.remove('checked');
    }
  });
}

function changeSizeHandler(evt) {
  if (evt.currentTarget.innerWidth <= 900) {
    menuOpenEl.classList.remove('hidden');
    tagsEl.classList.add('hidden');
  } else {
    menuOpenEl.classList.add('hidden');
    tagsEl.classList.remove('hidden');
    menuCloseEl.classList.add('hidden');
  }
}

function toggleMenu() {
  tagsEl.classList.toggle('hidden');
  menuOpenEl.classList.toggle('hidden');
  menuCloseEl.classList.toggle('hidden');
}

let tagsEl = document.querySelector('.tags');
let menuOpenEl = document.querySelector('.menu-open');
let menuCloseEl = document.querySelector('.menu-close');

tagsEl.addEventListener('click', clickFormHandler);
window.addEventListener('load', changeSizeHandler);
window.addEventListener('resize', changeSizeHandler);
menuOpenEl.addEventListener('click', toggleMenu);
menuCloseEl.addEventListener('click', toggleMenu);