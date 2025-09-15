const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Kirim ke Email via PHP
    fetch('server/send_email.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === "success") {
            alert("Pesan berhasil dikirim ke Email!");
            form.reset();
        } else {
            alert("Gagal mengirim pesan ke Email.");
        }
    })
    .catch(error => {
        console.error('Error Email:', error);
        alert("Terjadi kesalahan saat mengirim email.");
    });
});
