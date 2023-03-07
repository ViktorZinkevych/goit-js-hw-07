import { galleryItems } from './gallery-items.js';
// Change code below this line



// console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const galleryMarkup = handleGalleryMarkup(galleryItems);
 
function handleGalleryMarkup(items) {
    return items.map(item => `<li><a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" data-lightbox = "nature"/>
  </a></li>`).join('');
}
galleryList.insertAdjacentHTML('beforeend',galleryMarkup);


galleryList.addEventListener('click',handleGalleryClick);

function handleGalleryClick(event) {
    event.preventDefault()
    
    if(event.target.nodeName !== 'IMG'){
        return
    }
    const modalImg = event.target.dataset.lightbox;
    console.log(modalImg);

    var lightbox = new SimpleLightbox('.gallery a', {caption: true, captionSelector: 'img', captionDelay:250,
    captionsData: 'alt' });

}

