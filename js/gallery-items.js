import imagesDocList from "./images-items.js";

const imagesContainer = document.querySelector("ul.js-gallery");

function imagDocMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
    <img
      class="gallery__image"
      src='${preview}'
      data-source='${original}'
      alt='${description}'
    />
  </a>
  </li>`;
    })
    .join("");
}

const imageGallery = imagDocMarkup(imagesDocList);
imagesContainer.insertAdjacentHTML("afterbegin", imageGallery);

const modalDoc = document.querySelector(".js-gallery");
imagesContainer.addEventListener("click", imagesClick);

function imagesClick(event) {
  event.imagesDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  modalDoc.classList.add("is-open");
  const imageOpenModal = document.querySelector(".lightbox__image");

  imageOpenModal.src = event.target.dataset.source;
}
const closeModal = document.querySelector(
  'button[data-action="close-lightbox"]'
);
closeModal.addEventListener("click", (event) => {
  modalDoc.classList.remove("is-open");
  event.target.dataset.source = "";
});

/* const lightboxDoc = document.querySelector(".lightbox__image");
const arrayImages = [];

imageGallery.forEach((element) => {
  arrayImages.push(element.getAttribute("data-source"));
  element.addEventListener("click", function () {
    modalDoc.style.display = "block";
    lightboxDoc.src = this.dataset.source;
  });
});

const closeDoc = document.querySelector(".lightbox__button");
closeDoc.addEventListener("click", () => {
  modalDoc.style.display = "none";
});

document.addEventListener("keydown", (el) => {
  let newIndex;
  const currendId = arrayImages.indexOf(lightboxDoc.src);

  if (el.key === "ArrowLeft") {
    newIndex = currendId - 1;
    if (newIndex === -1) {
      newIndex = arrayImages.length - 1;
    }
  } else if (el.key === "ArrowLeft") {
    newIndex = currendId + 1;
    if (currendId === arrayImages.length) {
      newIndex = 0;
    }
  }
  lightboxDoc.src = arrayImages[newIndex];
});
 */
