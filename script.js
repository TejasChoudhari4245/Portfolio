// Form submission feedback
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(contactForm);
    
    fetch(contactForm.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        alert('Message sent successfully!');
        contactForm.reset();
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .catch(error => {
      alert('There was a problem sending your message. Please try again later.');
      console.error('Error:', error);
    });
  });
  // Add this to your existing script.js
document.addEventListener('DOMContentLoaded', function() {
    // Highlight active service in dropdown
    const currentPage = window.location.pathname.split('/').pop();
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    
    dropdownItems.forEach(item => {
        if (item.getAttribute('href') === currentPage) {
            item.classList.add('active');
        }
    });
    
    // If on a service page, highlight the Services dropdown
    if (currentPage === 'it-services.html' || currentPage === 'life-insurance.html') {
        document.querySelector('.nav-link.dropdown-toggle').classList.add('active');
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Keep your existing form submission code
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(contactForm);
    
    fetch(contactForm.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        alert('Message sent successfully!');
        contactForm.reset();
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .catch(error => {
      alert('There was a problem sending your message. Please try again later.');
      console.error('Error:', error);
    });
  });
}
}

