import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector('.gallery');
const markup = galleryItems.map(({preview, original, description, id}) => 
`

<li class = "gallery__item" data-galleryItems-id = "${id}">
<img class = "gallery__image" src="${preview}" alt="" >
</li>

`
);


const onClick = (event) => {
    if (event.currentTarget === event.target) {
        return;
    }
    // const currentListItem = event.target.closest(".gallery__item");
    // const itemId = currentListItem.target.dataset.id;
    // const galleryItemsNew = galleryItems.find((item) => item.id === +itemId);
    const currentListItem =
        target.dataset.currentListItem ?? target.closest(".gallery__item").dataset.currentListItem;
    const galleryItemsNew = galleryItems.find(({ id }) => id === +itemId);
    console.log(galleryItemsNew);



    const modalinstance = basicLightbox.create(`
<div>
<img class = "gallery__image" src="${onClick}" alt="" >
</div>
`)
    console.log(modalinstance);
    modalinstance.show();
gallery.addEventListener("click", onClick)
};




gallery.insertAdjacentHTML("afterbegin", markup.join(''));
