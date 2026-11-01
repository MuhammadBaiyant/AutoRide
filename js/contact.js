const contactForm = document.getElementById("contact-form");
const contactResponse = document.getElementById("contact-response");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("contact-name").value;
    const email = document.getElementById("contact-email").value;
    const phone = document.getElementById("contact-phone").value;
    const messageType = document.getElementById("message-type").value;
    const message = document.getElementById("contact-message").value;

    const emailSubject = "AutoRide - " + messageType;

    const emailBody =
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Phone: " + phone + "\n" +
        "Message Type: " + messageType + "\n\n" +
        "Message:\n" + message;

    const mailLink =
        "mailto:info-us-today@autoRide.co.za" +
        "?subject=" + encodeURIComponent(emailSubject) +
        "&body=" + encodeURIComponent(emailBody);

    contactResponse.textContent =
        "Your message has been prepared. Your email application will open so you can send it.";

    window.location.href = mailLink;
});
