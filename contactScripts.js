$.('#contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Clear previous errors
    const errorElements = $(".error-message");
    errorElements.forEach(el => el.style.display = 'none');

    // Get form values
    const name = $("#name").value.trim();
    const email = $("#email").value.trim();
    const phone = $("#phone").value.trim();
    const message = $("#message").value.trim();

    // Validation flags
    let isValid = true;

    // Name validation
    if (name === '') {
        $("#nameError").textContent = 'Name is required';
        $("#nameError").style.display = 'block';
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
        $("#emailError").textContent = 'Valid email is required';
        $("#emailError").style.display = 'block';
        isValid = false;
    }

    // Phone validation
    const phonePattern = /^[0-9]{10}$/;
    if (phone === '' || !phonePattern.test(phone)) {
        $("#phoneError").textContent = 'Valid phone number is required';
        $("#phoneError").style.display = 'block';
        isValid = false;
    }

    // Message validation
    if (message === '') {
        $("#messageError").textContent = 'Message is required';
        $("#messageError").style.display = 'block';
        isValid = false;
    }

    // If form is valid, you can submit it or perform any other action
    if (isValid) {
        alert('Form submitted successfully!');
        // You can also submit the form here using AJAX or similar methods
    }
});