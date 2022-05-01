import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery')
console.log(galleryContainer);

function listGalleryItems(items) {

    return items.map(item => 
    `<a class="gallery__item" 
        data-lightbox="images"
        href="${item.original}">
        <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"/>
    </a>`).join("");
}

galleryContainer.innerHTML = listGalleryItems(galleryItems)
// galleryContainer.addEventListener("click", function(event){
//     event.preventDefault()
//   });

// let gallery = new SimpleLightbox('.gallery a', { 
//     overlayOpacity: 0.8, 
//     fadeSpeed :250, 
//     captionsData: 'alt',
// });



// gallery.on('show.simplelingtbox', function (e){
// });

// document.getElementById("myAnchor").addEventListener("click", function(event){
//     event.preventDefault()
//   });