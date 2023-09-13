function validateForm() {
    // Add your validation logic here
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const hobbies = document.querySelectorAll('input[name="hobbies[]"]:checked');
    const country = document.getElementById("country").value;

    // Reset error messages
    document.getElementById("name-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("password-error").textContent = "";
    document.getElementById("gender-error").textContent = "";
    document.getElementById("hobbies-error").textContent = "";
    document.getElementById("country-error").textContent = "";

    // Validation checks go here
    let valid = true;

    if (name === "") {
        document.getElementById("name-error").textContent = "Name is required.";
        valid = false;
    }

    if (!validateEmail(email)) {
        document.getElementById("email-error").textContent = "Invalid email format.";
        valid = false;
    }

    if (password.length < 6) {
        document.getElementById("password-error").textContent = "Password must be at least 6 characters.";
        valid = false;
    }

    if (!gender) {
        document.getElementById("gender-error").textContent = "Gender is required.";
        valid = false;
    }

    if (hobbies.length === 0) {
        document.getElementById("hobbies-error").textContent = "Select at least one hobby.";
        valid = false;
    }

    if (country === "") {
        document.getElementById("country-error").textContent = "Country is required.";
        valid = false;
    }

    return valid;
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}