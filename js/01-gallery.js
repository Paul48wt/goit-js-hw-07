import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(galleryArray) {
  return galleryArray
    .map(
      item => `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}" >
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"

    />
  </a>
</div>`,
    )
    .join('');
}
galleryContainer.addEventListener('click', onImgClick);
function onImgClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" >
`);

  instance.show();
}
