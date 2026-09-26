// ==========================================
// 1. LÓGICA DEL RELOJ
// ==========================================
function actualizarReloj() {
    const ahora = new Date();
    
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();

    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    const tiempoTexto = `${horas}:${minutos}:${segundos}`;
    document.getElementById('reloj').textContent = tiempoTexto;

    const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fechaTexto = ahora.toLocaleDateString('es-ES', opcionesFecha);
    document.getElementById('fecha').textContent = fechaTexto;
}

setInterval(actualizarReloj, 1000);
actualizarReloj();

// ==========================================
// 2. LÓGICA DEL MODO CLARO/OSCURO
// ==========================================
const btnTema = document.getElementById('btn-tema');

// Escuchar los "clicks" en el botón
btnTema.addEventListener('click', () => {
    // La función "toggle" quita la clase si existe, y la pone si no existe
    document.body.classList.toggle('modo-claro');
    
    // Cambiar el texto y el icono del botón dependiendo del modo activo
    if (document.body.classList.contains('modo-claro')) {
        btnTema.textContent = '🌙 Modo Oscuro';
    } else {
        btnTema.textContent = '☀️ Modo Claro';
    }
});
