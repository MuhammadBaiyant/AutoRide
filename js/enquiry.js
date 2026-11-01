
const enquiryForm = document.getElementById("enquiry-form");
const pickupDate = document.getElementById("pickup");
const returnDate = document.getElementById("return");
const response = document.getElementById("enquiry-response");

pickupDate.addEventListener("change", function() {
    returnDate.min = pickupDate.value;
});

enquiryForm.addEventListener("submit", function(event) {
    event.preventDefault();

    if (returnDate.value <= pickupDate.value) {
        response.textContent = "Return date must be after the pickup date.";
        return;
    }

    response.textContent =
        "Thank you for your enquiry. We have received your details and will contact you to confirm availability and pricing.";

    enquiryForm.reset();
    returnDate.min = "";
});
