import { galleryItems } from './gallery-items.js';

const gallery = galleryItems.map(({original, preview, description})=> 
    `<div  class="gallery__item">
        <a class="gallery__link" 
            href="${original}">
            <img class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"/>
        </a>
    </div>`).join("");

const galleryContainer = document.querySelector(".gallery");

galleryContainer.insertAdjacentHTML("afterbegin", gallery);
console.log(galleryItems);

galleryContainer.addEventListener("click", openModal);

function openModal(evt) {
    evt.preventDefault()
    if (!evt.target.classList.contains("gallery__image")) {
        return;
    }
 
    const dataSource = evt.target.getAttribute("data-source")
    // console.log(dataSource);

    const instance = basicLightbox.create(
        `<img src="${dataSource}"/> `)
    instance.show();
       // console.log(instance);
      
    // доп
    document.addEventListener("keydown", closeEscModal,{ once: true });
    function closeEscModal(e) {
        if (e.code === "Escape") {
            instance.close();
        }
    }          
}
