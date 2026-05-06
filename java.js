document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Lógica del Formulario Modal
    const form = document.getElementById('formPostulacion');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button');
            btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Procesando...';
            
            setTimeout(() => {
                alert('¡Registro exitoso! Nos comunicaremos contigo pronto.');
                const modal = bootstrap.Modal.getInstance(document.getElementById('modalPostula'));
                modal.hide();
                form.reset();
                btn.innerHTML = 'ENVIAR SOLICITUD';
            }, 2000);
        });
    }

    // 2. Lógica de Filtros (Para carreras.html)
    const buttons = document.querySelectorAll('.btn-filter');
    const items = document.querySelectorAll('.carrera-item');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            items.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                    setTimeout(() => item.style.opacity = '1', 50);
                } else {
                    item.style.opacity = '0';
                    setTimeout(() => item.style.display = 'none', 300);
                }
            });
        });
    });
});