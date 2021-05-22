'use strict';

function changeFormHandler() {
  let checkedInputsEl = tagsListEl.querySelectorAll('.tags-item');
  checkedInputsEl.forEach( input => {
    let labelEl = tagsListEl.querySelector(`label[for="${input.id}"]`);
    if (input.checked) {
      labelEl.classList.add('checked');
    } else {
      labelEl.classList.remove('checked');
    }
  });
  tagsListEl.submit()
}

function changeSizeHandler(evt) {
  if (evt.currentTarget.innerWidth <= 900) {
    menuOpenEl.classList.remove('hidden');
    tagsListEl.classList.add('hidden');
  } else {
    menuOpenEl.classList.add('hidden');
    tagsListEl.classList.remove('hidden');
    menuCloseEl.classList.add('hidden');
  }
}

function toggleMenu() {
  tagsListEl.classList.toggle('hidden');
  menuOpenEl.classList.toggle('hidden');
  menuCloseEl.classList.toggle('hidden');
}

let tagsListEl = document.querySelector('.tags-list');
let menuOpenEl = document.querySelector('.menu-open');
let menuCloseEl = document.querySelector('.menu-close');

tagsListEl.addEventListener('change', changeFormHandler);
window.addEventListener('load', changeSizeHandler);
window.addEventListener('resize', changeSizeHandler);
menuOpenEl.addEventListener('click', toggleMenu);
menuCloseEl.addEventListener('click', toggleMenu);