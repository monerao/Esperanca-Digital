// Menu hambúrguer
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menu-toggle');
    const links = document.querySelector('.menu-links');

    if (toggle) {
        toggle.addEventListener('click', () => {
            links.classList.toggle('aberto');
        });
    }

    // Fechar menu ao clicar em um link (mobile)
    document.querySelectorAll('.menu-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                links.classList.remove('aberto');
            }
        });
    });
});
