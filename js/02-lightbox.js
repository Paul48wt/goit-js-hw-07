import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
// console.log(galleryMarkup);
galleryContainer.innerHTML = galleryMarkup;

function createGalleryMarkup(galleryArray) {
  return galleryArray
    .map(
      item => `<li class="gallery__item">
      <a class="gallery__item" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}"  title="${item.description}"/>
    </a>
</li>`,
    )
    .join('');
}
galleryContainer.addEventListener('click', onImgClick);

function onImgClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }

  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionPosition: 'bottom',
    captionDelay: 250,
  });
}
