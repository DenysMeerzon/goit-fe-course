'use strict';
import galleryItems from './gallery-items.js';

const gallery = document.querySelector('.js-gallery');
const modalBox = document.querySelector('.lightbox');
const modalBoxImage = document.querySelector('.lightbox___image');
const dataCloseModal = document.querySelector(
  'button[data-action="close-lightbox"]',
);

const modalOverlay = document.querySelector('.lightbox__content');

function createGalleryItems(items) {
  return items.reduce(
    (allItems, item) => (allItems += createElement(item)),
    '',
  );
}

const galleryItemsMarkup = createGalleryItems(galleryItems);

gallery.insertAdjacentHTML('afterbegin', galleryItemsMarkup);

gallery.addEventListener('click', openModal);
dataCloseModal.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModalOverlay);

function openModal(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
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
  modalBoxImage.setAttribute('src', '#');
  modalBoxImage.setAttribute('alt', '');
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
function createElement({ original, preview, description }) {
  const galleryItem = `
<li class="gallery__item">
  <a
    class="gallery__link"
    href=${original}
  >
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />

    <span class="gallery__icon">
      <i class="material-icons">zoom_out_map</i>
    </span>
  </a>
</li>`;
  return galleryItem;
}
