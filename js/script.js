// Validasi Form 
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const interest = document.getElementById('interest').value;

    if (!name || !email || !interest) {
      alert('Please fill out all the fields correctly!');
      return;
    }

    alert(`Thank you ${name}! Our sales team will contact you at ${email}.`);
    form.reset();
  });

  // Auto Slide Banner (tambahan)
  const banner = document.querySelector('.banner-img');
  const images = [
    'assets/Banner.jpg',
    'assets/Banner2.jpg',
    'assets/Banner3.jpg'
  ];
  let current = 0;

  setInterval(() => {
    current = (current + 1) % images.length;
    banner.style.backgroundImage = `url('${images[current]}')`;
  }, 3000); // 3 detik per slide
});
