document.getElementById("contactForm").addEventListener("submit", function (e) {
  let valid = true;

  // Email field
  const email = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

  if (!emailPattern.test(email.value.trim())) {
    email.classList.add("input-error");
    emailError.style.display = "block";
    valid = false;
  } else {
    email.classList.remove("input-error");
    emailError.style.display = "none";
  }

  // Phone field
  const phone = document.getElementById("phone_number");
  const phoneError = document.getElementById("phoneError");
  const phonePattern = /^\d{1,15}$/;

  if (!phonePattern.test(phone.value.trim())) {
    phone.classList.add("input-error");
    phoneError.style.display = "block";
    valid = false;
  } else {
    phone.classList.remove("input-error");
    phoneError.style.display = "none";
  }

  // Prevent form submission if invalid
  if (!valid) {
    e.preventDefault();
  }
});
