// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryItemsMarkup);


function createGalleryItemsMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return  `
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
`;
})
.join("");

}
galleryContainer.addEventListener("click", onGalleryContainerClick);

function onGalleryContainerClick(evt) {
    evt.preventDefault();
    const isGalleryImageEl = evt.target.classList.contains("gallery__image");

    if (!isGalleryImageEl) {
        return;
    }

    const urlBigImageEl = evt.target.getAttribute("data-source");
  const gallery = new SimpleLightbox('.gallery a', {
    widthRatio: 0.95,
    heightRatio: 1.00,
    captionsData: "alt",
    captionDelay: 250,
    });
    gallery.on('show.simplelightbox');
    
    gallery.on('error.simplelightbox', function (e) {
    
	console.log(e); 
});   
}