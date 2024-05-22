document.getElementById('businessForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value.trim();
    const business = document.getElementById('business').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    // Simple form validation
    if (!name || !business || !email || !phone) {
        alert('Please fill in all fields.');
        return;
    }

    // Save to local storage
    const user = {
        name: name,
        business: business,
        email: email,
        phone: phone,
        timestamp: new Date().toISOString()
    };

    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    // Simulate sending eBook
    // Here you would typically make an AJAX call to a backend service
    alert('Thank you! Your eBook is on its way to your email.');

    // Show success message and clear form
    document.getElementById('successMessage').innerText = 'Thank you for your submission! Please check your email for the eBook.';
    document.getElementById('businessForm').reset();
});
