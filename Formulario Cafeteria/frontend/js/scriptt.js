const parametros = new URLSearchParams(window.location.search);

const datos = {
    cliente: parametros.get('cliente'),
    correo: parametros.get('correo'),
    producto: parametros.get('producto'),
    cantidad: parametros.get('cantidad'),
    tamanio: parametros.get('tamanio'),
    llevar: parametros.get('llevar'),
    observacion: parametros.get('observaciones') || parametros.get('observacion')
};

for (const [id, valor] of Object.entries(datos)) {
    const elemento = document.getElementById(id);
    if (elemento) elemento.textContent = valor || '—';
}
