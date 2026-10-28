
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
