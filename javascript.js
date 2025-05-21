// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (!name || !email) {
        alert("Please fill out all fields.");
    } else {
        alert("Form submitted successfully!");
        // Here you can also send the form data to your server
        this.reset(); // Reset the form after submission
    }
});
  

// Toggle visibility of service details
const serviceToggles = document.querySelectorAll('.service-toggle');

serviceToggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
        const details = this.nextElementSibling; // Assumes details are right after the toggle button
        details.classList.toggle('hidden'); // Toggle the 'hidden' class
    });
});


fetch('services.json') // Assuming you have a services.json file
    .then(response => response.json())
    .then(data => {
        const servicesContainer = document.getElementById('servicesContainer');
        data.forEach(service => {
            const serviceDiv = document.createElement('div');
            serviceDiv.innerHTML = `<h3>${service.title}</h3><p>${service.description}</p>`;
            servicesContainer.appendChild(serviceDiv);
        });
    })
    .catch(error => console.error('Error fetching services:', error));
