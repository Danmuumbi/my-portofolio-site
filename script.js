document.addEventListener('DOMContentLoaded', function() {
    emailjs.init('tpyeDzJAncG7r0k5K'); // Replace with your EmailJS user ID

    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Display loading spinner
        document.querySelector('.loading').style.display = 'block';

        const formData = {
            name: document.getElementById('name-field').value,
            email: document.getElementById('email-field').value,
            subject: document.getElementById('subject-field').value,
            message: document.getElementById('message-field').value
        };

        emailjs.send('service_6imkfkm', 'template_5e7ps5d', formData)
            .then((response) => {
                document.querySelector('.loading').style.display = 'none';
                if (response.status === 200) {
                    document.querySelector('.sent-message').style.display = 'block';
                    contactForm.reset();
                } else {
                    document.querySelector('.error-message').style.display = 'block';
                }
            })
            .catch((error) => {
                document.querySelector('.loading').style.display = 'none';
                console.error('Error:', error);
                document.querySelector('.error-message').style.display = 'block';
            });
    });
});
