import { galleryItems } from './gallery-items.js';

const gallery = galleryItems.map(({original, preview, description})=> 
    `<li  class="gallery__item">
        <a class="gallery__link" 
            href="${original}">
            <img class="gallery__image"
            src="${preview}"
            alt="${description}"/>
        </a>
    </li>`).join("");

const galleryContainer = document.querySelector(".gallery");

galleryContainer.insertAdjacentHTML("afterbegin", gallery);
console.log(galleryItems);

let ligthBox = new SimpleLightbox('.gallery a', {
    captionsData: "alt", 
    captionPosition: "bottom",
    fadeSpeed: 250});

