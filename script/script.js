const galleryNew = document.querySelector(".gallery-new");
const cardsNew = galleryNew.querySelectorAll(".card-new");
let cardCountNew = cardsNew.length; // Initial count without clones
let currentPositionNew = 0;
const cardWidthNew = cardsNew[0].offsetWidth;

// Clone the first cardsNew.length elements and append them to create an infinite loop
for (let i = 0; i < cardCountNew; i++) {
  const cloneNew = cardsNew[i].cloneNode(true);
  galleryNew.appendChild(cloneNew);
}

// Updated total card count including clones
cardCountNew = galleryNew.querySelectorAll(".card-new").length;

function moveGalleryNew() {
  currentPositionNew++;
  galleryNew.style.transition = "transform 0.5s ease-in-out";
  galleryNew.style.transform = `translateX(-${
    currentPositionNew * cardWidthNew
  }px)`;

  // Reset the position when reaching the clones
  if (currentPositionNew >= cardCountNew / 2) {
    currentPositionNew = 0;
    galleryNew.style.transition = "none"; // Temporarily disable the transition for a smooth reset
    galleryNew.style.transform = `translateX(0)`;
    setTimeout(() => {
      galleryNew.style.transition = "transform 0.5s ease-in-out"; // Re-enable the transition after resetting
    }, 50);
  }

  // Move to the next card after a delay
  setTimeout(moveGalleryNew, 2500);
}

// Start the carousel
setTimeout(moveGalleryNew, 2000);
