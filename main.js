var h1 = document.getElementById("myHeading");
var originalText = h1.textContent;
var currentText = originalText;
var index = originalText.length;
var deleting = true; // Indicates whether currently deleting or rewriting

function animateText() {
  if (deleting) {
    if (index >= 0) {
      h1.textContent = currentText.substring(0, index);
      index--;
      setTimeout(animateText, 100); // Adjust speed here (milliseconds)
    } else {
      deleting = false;
      currentText = ""; // Clear current text before rewriting
      h1.classList.remove("blue-text"); // Remove blue color class
      setTimeout(animateText, 2000); // Pause before rewriting (milliseconds)
    }
  } else {
    if (index < originalText.length) {
      currentText = originalText.substring(0, index + 1);
      h1.textContent = currentText;
      index++;
      setTimeout(animateText, 100); // Adjust speed here (milliseconds)
    } else {
      deleting = true; // Reset to deleting mode
      index = originalText.length;
      h1.classList.add("blue-text"); // Apply blue color class
      setTimeout(animateText, 2000); // Pause before deleting again (milliseconds)
    }
  }
}

// Start the animation
animateText();




//Skill bar code:-
document.addEventListener("DOMContentLoaded", function() {
  const progressBarElements = document.querySelectorAll('.progress-bar');

  progressBarElements.forEach(progressBar => {
      const progress = progressBar.getAttribute('data-progress');
      progressBar.style.width = progress + '%';
  });
});
