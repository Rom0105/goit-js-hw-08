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

const modalDoc = document.querySelector("div.lightbox");
imagesContainer.addEventListener("click", imagesClick);

const imageOpenModal = document.querySelector(".lightbox__image");

function imagesClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  modalDoc.classList.add("is-open");
  imageOpenModal.src = event.target.dataset.source;
}

const closeModal = document.querySelector(".lightbox__button");
closeModal.addEventListener("click", OnCloseModal);

function OnCloseModal(event) {
  modalDoc.classList.remove("is-open");
  imageOpenModal.src = "";
}
