import { galleryItems } from './gallery-items.js';

const containerGallery = document.querySelector(".gallery");
 const makeGallery = createGalleryImage(galleryItems);

 containerGallery.innerHTML = makeGallery;

function createGalleryImage(galleryItems){
    return galleryItems.map(image => {
        return `<div class="gallery__item">
         <a class="gallery__link" href="${image.original}">
           <img
             class="gallery__image"
             src="${image.preview}"
             data-source="${image.original}"
             alt="${image.description}"
           />
         </a>
       </div>
        `
    }).join("");

};

    



containerGallery.addEventListener("click" , onOpenModal);

function onOpenModal(event){
    if(event.target.nodeName !== 'IMG'){
        return;
    };
    event.preventDefault();

	 const instance = basicLightbox.create(`
		<img width="1400" height="900"  src="${event.target.dataset.source}">
	`);
    instance.show();

    document.addEventListener("keydown", escCloseModal )

    function escCloseModal(event){
    if(event.code == "Escape"){
        instance.close();
        document.removeEventListener("keydown" , escCloseModal )
     console.log(event.code);
    };
}




};















