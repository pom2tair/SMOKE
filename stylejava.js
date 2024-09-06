document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const numpadButtons = document.querySelectorAll('.numpad-button');
    const clearButton = document.getElementById('clear');
    const submitButton = document.getElementById('submit');

    numpadButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (passwordInput.value.length < 4) {
                passwordInput.value += this.textContent;
            }
        });
    });

    clearButton.addEventListener('click', function() {
        passwordInput.value = '';
    });

    submitButton.addEventListener('click', function() {
        if (passwordInput.value === '0101') {
            alert('Password correct. Redirecting...');
            window.location.href = 'your-next-page.html'; // Redirige vers la page suivante
        } else {
            alert('Incorrect password.');
        }
    });
});