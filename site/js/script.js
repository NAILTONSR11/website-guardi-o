// Dark Mode Toggle (para ambos os botões)
function initDarkMode() {
    const toggleButtons = document.querySelectorAll('#darkModeToggle, #darkModeToggleMobile');
    
    toggleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
        });
    });
}

// Inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    initDarkMode();

    // Qualquer outra função pode ser adicionada aqui
    // Exemplo: remover preloader após animação (já feito via CSS, mas se quiser manipular via JS)
    const preloader = document.getElementById('preloader');
    if (preloader) {
        // Opcional: remover do DOM após a animação para liberar memória
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 3500); // Um pouco depois da animação fadeOut (3s)
    }
});