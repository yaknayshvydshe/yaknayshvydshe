document.addEventListener('DOMContentLoaded', function() {
    const trigger = document.querySelector('.trigger');
    trigger.addEventListener('click', function() {
        if (/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            window.location.href = "src/frontend/pages/mobile.html"; // Redirecionar para a página mobile
        }
    });
});
