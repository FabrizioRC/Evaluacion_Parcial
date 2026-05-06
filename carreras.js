document.addEventListener('DOMContentLoaded', () => {
    
    const buttons = document.querySelectorAll('.btn-filter');
    const items = document.querySelectorAll('.carrera-item');

    // Lógica de Filtrado
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Manejo de botones (Active state)
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            // Filtrar cards con animación
            items.forEach(item => {
                item.style.transition = "all 0.4s ease";
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 400);
                }
            });
        });
    });

    // Efecto de Navbar al hacer Scroll
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.main-nav');
        if (window.scrollY > 50) {
            nav.style.padding = '10px 0';
            nav.style.background = '#000';
        } else {
            nav.style.padding = '15px 0';
            nav.style.background = 'rgba(10, 10, 10, 0.95)';
        }
    });
});