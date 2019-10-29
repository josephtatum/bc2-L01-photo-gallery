export const renderImage = (image) => {
    const html = /*html*/`
    
        <li class="gallery-item" style="background-image: url('${image.url}')">
            <div class="item-description">
                <h2 class="image-title">${image.title}</h2>
                <p>Horns: ${image.horns}</p>
            </div>
        </li>
    `;

    return html;
};