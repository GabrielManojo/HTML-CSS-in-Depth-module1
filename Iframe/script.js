
// This script listens for the form submission, prevents the default
// behavior, and logs the form data to the console.
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log('Form Data:', data);
});