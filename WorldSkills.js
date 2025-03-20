const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-image");
const closeModal = document.querySelector(".close-modal");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const images = document.querySelectorAll(".img-container img");

let currentIndex = 0;

// Open modal and show clicked image
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    openModal(img.src);
  });
});

function openModal(src) {
  modal.style.display = "flex";
  modalImg.src = src;
}

// Change image function
function changeImage(increment) {
  currentIndex = (currentIndex + increment + images.length) % images.length;
  modalImg.src = images[currentIndex].src;
}

// close modal
function closeModalFunction() {
  modal.style.display = "none";
}

// Event listeners for open and close
closeModal.addEventListener("click", closeModalFunction);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModalFunction();
});

// Navigaation through images
prevBtn.addEventListener("click", () => changeImage(-1));
nextBtn.addEventListener("click", () => changeImage(1));
