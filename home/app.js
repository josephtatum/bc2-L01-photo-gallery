import images from '../data/images.js';
import htmlToDOM from '../util/html-to-DOM.js';
import { renderImage } from '../util/render-image.js';

const photoGalleryUl = document.getElementById('photo-gallery');

images.forEach(image => {
    const renderedImage = renderImage(image);
    const dom = htmlToDOM(renderedImage);
    console.log(dom);

    photoGalleryUl.appendChild(dom);
});

