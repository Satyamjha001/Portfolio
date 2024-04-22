
//Skill bar code:-
document.addEventListener("DOMContentLoaded", function() {
    const progressBarElements = document.querySelectorAll('.progress-bar');
  
    progressBarElements.forEach(progressBar => {
        const progress = progressBar.getAttribute('data-progress');
        progressBar.style.width = progress + '%';
    });
  });