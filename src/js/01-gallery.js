import SimpleLightbox from "simplelightbox";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);


const createElements = (array) => {
    return array.reduce((acc, { preview, original, description }) => {
      return (
        acc +
        `<li>
        <a class="gallery__item" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}" 
        alt="${description}"
      />
    </a>
    </li>`
      );
    }, "");
  };


  
  const pictures = createElements(galleryItems);
  
  const mainContainer = document.querySelector(".gallery");
  mainContainer.style.listStyle = "none";
  
  mainContainer.insertAdjacentHTML("beforeend", pictures);


const lightbox = new SimpleLightbox('.gallery a', {
sourceAttr: "href",
captionType: 'attr',
captionsData: "alt",
captionDelay: "250",
captionPosition: 'bottom',
});
