document.addEventListener('DOMContentLoaded', function() {
    emailjs.init('tpyeDzJAncG7r0k5K'); // Replace with your EmailJS user ID
    
    const contactForm = document.querySelector('#contactModal form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
    
            const formData = {
                name: document.getElementById('contactName').value,
                email: document.getElementById('contactEmail').value,
                message: document.getElementById('contactMessage').value
            };
    
            console.log('Form Data:', formData);
    
            emailjs.send('service_6imkfkm', 'template_5e7ps5d', formData)
                .then((response) => {
                    console.log('EmailJS response:', response);
                    if (response.status === 200) {
                        alert('Message sent successfully!');
                        contactForm.reset();
                        const modal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
                        if (modal) {
                            modal.hide();
                        }
                    } else {
                        alert('There was an error sending your message. Please try again.');
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                    alert('There was an error sending your message. Please try again.');
                });
        });
    } else {
        console.error('Contact form not found');
    }
    });

    document.getElementById('toggle-mode').addEventListener('click', function () {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
    });

    document.addEventListener('DOMContentLoaded', function() {
        // Hide all sections initially except the hero section
        const sections = document.querySelectorAll('section');
        const heroSection = document.querySelector('.hero');
        sections.forEach(section => {
            if (section !== heroSection) {
                section.style.display = 'none';
            }
        });
    
        // Show the hero section by default
        heroSection.style.display = 'block';
    
        // Function to show a specific section
        function showSection(sectionId) {
            sections.forEach(section => {
                if (section.id === sectionId) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        }
    
        // Event listeners for the navigation links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                showSection(targetId);
            });
        });
    });
    

    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
    