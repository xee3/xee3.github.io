document.addEventListener("DOMContentLoaded", function () {
    const openPopupButton = document.getElementById("openPopupButton");
    const closePopupButton = document.getElementById("closePopupButton");
    const contactPopup = document.getElementById("contactPopup");
    const emailButton = document.getElementById("emailButton");
    const whatsappButton = document.getElementById("whatsappButton");

    // Initially, set the display property to none to hide the popup
    contactPopup.style.display = "none";

    // Add a click event listener to the "Contact Us" button
    openPopupButton.addEventListener("click", function () {
        event.preventDefault(); // Prevent the default click behavior (e.g., following a link)

        // Uncomment this part when you want to verify reCAPTCHA
        // grecaptcha.execute('YOUR_RECAPTCHA_SITE_KEY', { action: 'contact' }).then(function (token) {

            // Show the popup and center it
            contactPopup.style.display = "flex";
            contactPopup.style.alignItems = "center";
            contactPopup.style.justifyContent = "center";
        // }).catch(function (error) {
        //     console.error("reCAPTCHA verification failed: " + error);
        // });
    });

    // Add a click event listener to the "Email" button
    emailButton.addEventListener("click", function () {
        // Replace the placeholder with your actual email
        const email = "user@example.com";
        window.location.href = "mailto:" + email;
    });

    // Add a click event listener to the "WhatsApp" button
    whatsappButton.addEventListener("click", function () {
        // Replace the placeholder with your actual WhatsApp number
        const whatsappNumber = "1234567890";
        window.open("https://wa.me/" + whatsappNumber);
    });

    closePopupButton.addEventListener("click", function () {
        // Hide the popup when the "Close" button is clicked
        contactPopup.style.display = "none";
    });
});
