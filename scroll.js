const container = document.querySelector('.image-scroll-container');

function scrollImages() {
  container.scrollLeft += 1; // Adjust the speed of scrolling here
  if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
    container.scrollLeft = 0;
  }
}

setInterval(scrollImages, 20); // Adjust the interval for smoothness
