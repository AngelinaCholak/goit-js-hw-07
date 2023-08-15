import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


function createGalleryMarkup(galleryObj) {
    return galleryObj
        .map(
        ({ preview, original, description }) => 
`
<li class = "gallery__item">
<a class = "gallery__link" href="${original}">
<img
    class = "gallery__image"
    src="${preview}"
    data-source = "${original}"
    alt="${description}"
/>
</a>
</li>
`
    )
    .join('');
}


const galleryRef = document.querySelector('.gallery'); 
galleryRef.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));
galleryRef.addEventListener("click", onClick)

let modalImage;

function onClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains("gallery__item")) {
        return;
    }
 
    const currentListItem = event.target.getAttribute("data-source");
    openModal(currentListItem);

}

function openModal(currentListItem) {
    modalImage = basicLightbox.create (
        `<img src="${currentListItem} width="800" height = "600">`
    );
    modalImage.show();
    window.addEventListener("keydown", clickOnEsc); 
}

function clickOnEsc(event) {
    if (event.code === "Escape" && modalImage.visible()) {
        modalImage.close();
        window.removeEventListener("keydown", clickOnEsc);
       }
   }
    





