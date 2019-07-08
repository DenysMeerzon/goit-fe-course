'use strict';
import galleryItems from './gallery-items.js';

const gallery = document.querySelector('.js-gallery');
const modalBox = document.querySelector('.lightbox');
const modalBoxImage = document.querySelector('.lightbox___image');
const dataCloseModal = document.querySelector(
  'button[data-action="close-lightbox"]',
);
const modalOverlay = document.querySelector('.lightbox__content');

galleryItems.forEach(galleryItem => createElement(galleryItem));

gallery.addEventListener('click', openModal);
dataCloseModal.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModalOverlay);

function openModal(event) {
  event.preventDefault();
  modalBox.classList.add('is-open');
  const galleryItemSrcValue = event.target.getAttribute('data-source');
  const galleryItemAltValue = event.target.getAttribute('alt');
  modalBoxImage.setAttribute('src', galleryItemSrcValue);
  modalBoxImage.setAttribute('alt', galleryItemAltValue);
  window.addEventListener('keydown', handleKeyPress);
}
function closeModal(event) {
  modalBox.classList.remove('is-open');
  window.removeEventListener('keydown', handleKeyPress);
}
function closeModalOverlay(event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  closeModal();
}
function handleKeyPress(event) {
  if (event.code !== 'Escape') {
    return;
  }
  closeModal();
}
function createElement(item) {
  const galleryItem = `
<li class="gallery__item">
  <a
    class="gallery__link"
    href=${item.original}
  >
    <img
      class="gallery__image"
      src=${item.preview}
      data-source=${item.original}
      alt=${item.description}
    />

    <span class="gallery__icon">
      <i class="material-icons">zoom_out_map</i>
    </span>
  </a>
</li>`;
  gallery.insertAdjacentHTML('afterbegin', galleryItem);
}
