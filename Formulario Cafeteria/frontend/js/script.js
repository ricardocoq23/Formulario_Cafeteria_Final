document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario');
    const cantidad = document.getElementById('cantidad');

    cantidad.addEventListener('input', () => {
        const valor = cantidad.value;
        if (valor !== '' && (!Number.isInteger(Number(valor)) || Number(valor) < 1 || Number(valor) > 99)) {
            cantidad.setCustomValidity('La cantidad debe ser un número entero entre 1 y 99.');
        } else {
            cantidad.setCustomValidity('');
        }
    });

    formulario.addEventListener('reset', () => {
        cantidad.setCustomValidity('');
    });
});
