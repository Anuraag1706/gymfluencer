document.addEventListener('DOMContentLoaded', () => {
  const carouselImages = document.querySelectorAll('.carousel-image');
  let currentIndex = 0;

  function moveCarousel() {
    // Remove the 'active' class from all images
    carouselImages.forEach((image, index) => {
      if (index === currentIndex) {
        image.classList.add('active'); // Show current image
      } else {
        image.classList.remove('active'); // Hide others
      }
    });

    // Increment the index, looping back to the first image
    currentIndex = (currentIndex + 1) % carouselImages.length;
  }

  // Start the carousel
  moveCarousel(); // Initial call to display the first image
  setInterval(moveCarousel, 3000); // Change image every 3 seconds
});

document.addEventListener('DOMContentLoaded', () => {
  const carouselImages = document.querySelector('.carousel-img');
  const images = document.querySelectorAll('.carousel img');
  const totalImages = images.length;
  let index = 0; // Starting index

  // Move carousel function
  const moveCarousel = () => {
    carouselImages.style.transform = `translateX(-${index * 100}%)`;
  };

  // Auto-scroll every 3 seconds
  const autoScroll = setInterval(() => {
    index++;
    if (index >= totalImages) {
      index = 0; // Reset to the first image to create a continuous loop
    }
    moveCarousel();
  }, 3000);

  // Manual navigation: Left arrow click
  const leftArrow = document.querySelector('.carousel-arrow-left');
  leftArrow.addEventListener('click', () => {
    index--;
    if (index < 0) {
      index = totalImages - 1; // Go to the last image
    }
    moveCarousel();
  });

  // Manual navigation: Right arrow click
  const rightArrow = document.querySelector('.carousel-arrow-right');
  rightArrow.addEventListener('click', () => {
    index++;
    if (index >= totalImages) {
      index = 0; // Go to the first image
    }
    moveCarousel();
  });

});

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".count-up");

  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    const isThousand = target >= 100; // Check if the number should include 'k+'
    const duration = 2000; // Animation duration in milliseconds
    const increment = target / (duration / 16); // Increment based on 60fps

    let current = 0;

    const updateCount = () => {
      current += increment;

      if (current < target) {
        // Display formatted value
        const displayValue = isThousand
          ? `${Math.floor(current)}k+`
          : `${Math.floor(current)}+`;
        counter.textContent = displayValue;

        requestAnimationFrame(updateCount);
      } else {
        // Ensure the final value is displayed correctly
        const finalValue = isThousand ? `${target}k+` : `${target}+`;
        counter.textContent = finalValue;
      }
    };

    updateCount();
  });
});
