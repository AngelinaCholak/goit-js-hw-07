import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const instance = basicLightbox.create(`
    <h1>Dynamic Content</h1>
    <p>You can set the content of the lightbox with JS.</p>
`)
console.log(instance);
instance.show();

const gallery = document.querySelector('.gallery');
const markup = galleryItems.map(({preview, original, description, id}) => 
`
<li  class = "gallery">
<img src="${original}" alt="${galleryItems}" witht = "300">
<h2>${description}</h2>
</li>
`
);
gallery.insertAdjacentHTML('beforebegin', markup.join(''));






// data-galleryItems-id = "${id}"