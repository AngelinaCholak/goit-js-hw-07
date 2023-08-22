import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
function createGalleryMarkup(galleryObj) {
  return galleryObj
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
          width = "700"
          
        />
      </a>
    </li>`
    )
    .join("");
}

const galleryRef = document.querySelector(".gallery");
galleryRef.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));


const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
});