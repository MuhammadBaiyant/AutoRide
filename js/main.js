
const questions = document.querySelectorAll(".faq-question");

questions.forEach(function(question) {
    question.addEventListener("click", function() {

        const answer = question.nextElementSibling;

        if (answer.hidden) {
            answer.hidden = false;
            question.setAttribute("aria-expanded", "true");
        } else {
            answer.hidden = true;
            question.setAttribute("aria-expanded", "false");
        }

    });
});

const galleryImages = document.querySelectorAll(".gallery-image");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeLightbox = document.getElementById("close-lightbox");

galleryImages.forEach(function(image) {
    image.addEventListener("click", function() {
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        lightbox.hidden = false;
    });
});

closeLightbox.addEventListener("click", function() {
    lightbox.hidden = true;
});