/**
 * utils.js - Funciones utilitarias
 * Funciones auxiliares para escapar HTML, mostrar mensajes y compartir en redes sociales
 */

function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function showSuccess() {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = '✓ ¡Tarjeta musical creada con éxito!';
    document.querySelector('.container').insertBefore(successDiv, document.querySelector('.container').firstChild);
    setTimeout(() => successDiv.remove(), 3000);
}

function shareTwitter() {
    const cardUrl = generateCardUrl();
    const text = `🎵 ¡Escucha mi música! ${cardData.songName} - ${cardData.artist}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(cardUrl)}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
}

function shareFacebook() {
    const cardUrl = generateCardUrl();
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(cardUrl)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
}

function shareWhatsApp() {
    const cardUrl = generateCardUrl();
    const text = `🎵 ¡Escucha mi música! ${cardData.songName} - ${cardData.artist}\n${cardUrl}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
}

function copyShareLink() {
    const cardUrl = generateCardUrl();
    
    navigator.clipboard.writeText(cardUrl).then(() => {
        showSuccess('🔗 ¡Link copiado al portapapeles!');
    }).catch(err => {
        console.error('Error al copiar:', err);
        alert('URL copiada: ' + cardUrl);
    });
}

function reset() {
    // Ocultar vista previa y mostrar formulario
    document.getElementById('previewSection').classList.add('hidden');
    document.getElementById('formSection').classList.remove('hidden');
    
    // Limpiar formulario
    document.getElementById('songForm').reset();
    
    // Limpiar datos
    cardData = null;
    
    // Detener audio si está reproduciendo
    if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }
    
    console.log('🔄 Formulario reiniciado');
}
