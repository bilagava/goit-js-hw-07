import { galleryItems } from './gallery-items.js';

const gallery = galleryItems.map(({original, preview, description})=> 
    `<div  class="gallery__item">
        <a class="gallery__link" 
            href="${original}">
            <img class="gallery__image"
            src="${preview}"
            alt="${description}"/>
        </a>
    </div>`).join("");

const galleryContainer = document.querySelector(".gallery");

galleryContainer.insertAdjacentHTML("afterbegin", gallery);
console.log(galleryItems);

let ligthBox = new SimpleLightbox('.gallery a', {
    captionData: "alt",
    captionPosition: "bottom",
    fadeSpeed: 250,
});

ligthBox.on("show.simplelightbox", function () {
    /*something*/
});