import images from '../data/images.js';
import htmlToDOM from '../util/html-to-DOM.js';
import { renderImage } from '../util/render-image.js';

const photoGalleryUl = document.getElementById('photo-gallery');
const selectInput = document.getElementById('selection-menu');

images.forEach(image => {
    const renderedImage = renderImage(image);
    const dom = htmlToDOM(renderedImage);

    photoGalleryUl.appendChild(dom);
});

selectInput.addEventListener('change', () => {
    while(photoGalleryUl.lastElementChild) {
        photoGalleryUl.lastElementChild.remove();
    }
    const userSelectedInput = selectInput.value;
    let filteredArray = null;

    filteredArray = images.filter(image => image.keyword === userSelectedInput);
    
    if(filteredArray.length === 0) {
        filteredArray = images;
    }
    
    filteredArray.forEach(image => {
        const renderedImage = renderImage(image);
        const dom = htmlToDOM(renderedImage);
        console.log(dom)
        photoGalleryUl.appendChild(dom);
    });

    

});

