import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
      </li>`
  )
  .join('');

gallery.innerHTML = galleryMarkup;
gallery.addEventListener('click', (event) => {
  event.preventDefault();

  if (event.target.classList.contains('gallery__image')) {
    const imageUrl = event.target.getAttribute('src');

    const modal = basicLightbox.create(`<img src="${imageUrl}" alt="Modal image" />`);
    modal.show();
  }
});
