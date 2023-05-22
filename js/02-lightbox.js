import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector(".gallery");
const photosCreate = galleryItems.map((element) =>
    `<li class="gallery__item">
  <a class="gallery__link" href="${element.original}">
    <img
      class="gallery__image"
      src="${element.preview}"
      alt="${element.description}"
    />
  </a>
</li>`)
    .join("");

galleryContainer.insertAdjacentHTML("afterbegin", photosCreate);
galleryContainer.addEventListener('click', (e) => e.preventDefault())

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
   
}); 