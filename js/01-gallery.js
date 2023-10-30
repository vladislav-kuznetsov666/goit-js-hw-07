import { galleryItems } from './gallery-items.js';

function createGalleryItem(item) {
    const li = document.createElement('li');
    li.classList.add('gallery__item');

    const a = document.createElement('a');
    a.classList.add('gallery__link');
    a.href = item.original;

    const img = document.createElement('img');
    img.classList.add('gallery__image');
    img.src = item.preview;
    img.alt = item.description;

    img.setAttribute('data-source', item.original);

    a.appendChild(img);
    li.appendChild(a);

    return li;
}

const gallery = document.querySelector('.gallery');
const lightbox = basicLightbox;

galleryItems.forEach((item) => {
    const galleryItem = createGalleryItem(item);
    gallery.appendChild(galleryItem);
});

let isLightboxOpen = false;

gallery.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.tagName === 'IMG') {
        const largeImageUrl = event.target.dataset.source;

       
        lightbox.create(`<img src="${largeImageUrl}">`).show();
        isLightboxOpen = true;
    }
});

// Додавання обробки натискання клавіші "Escape"
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isLightboxOpen) {
        // Очистити вміст модального вікна
        const lightboxContent = document.querySelector('.basicLightbox');
        if (lightboxContent) {
            lightboxContent.innerHTML = '';
        }
        isLightboxOpen = false;
    }
});


console.log(galleryItems);
