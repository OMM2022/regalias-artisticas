/**
 * ui.js - Gestión de interfaz de usuario
 * Controla el tema oscuro, pestañas y modales
 */

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
    document.querySelector('.theme-toggle').textContent = isDark ? '☀️' : '🌙';
}

function switchTab(tabName, buttonElement) {
    // Ocultar todos los contenidos
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Desactivar todos los botones
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    
    // Activar la pestaña seleccionada (soporta ID con o sin sufijo '-tab')
    const tab = document.getElementById(tabName) || document.getElementById(tabName + '-tab');
    if (!tab) {
        console.warn('⚠️ Pestaña no encontrada:', tabName);
        return;
    }
    tab.classList.add('active');
    
    // Marcar el botón como activo si fue pasado
    if (buttonElement && buttonElement.classList) {
        buttonElement.classList.add('active');
    }
}

function openAdModal() {
    const modal = document.getElementById('adModal');
    if (modal) {
        modal.classList.add('active');
    } else {
        console.warn('⚠️ Modal de anuncios no encontrado');
    }
}

function closeAdModal() {
    const modal = document.getElementById('adModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function closeAdModalOnBackdrop(event) {
    if (event.target.id === 'adModal') {
        closeAdModal();
    }
}

function openGlobalAdModal() {
    const modal = document.getElementById('globalAdModal');
    if (modal) {
        modal.classList.add('active');
    } else {
        console.warn('⚠️ Modal global de anuncios no encontrado');
    }
}

function closeGlobalAdModal() {
    const modal = document.getElementById('globalAdModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function triggerPopunder() {
    // Lógica de popunder si es necesario
    console.log('Popunder triggered');
}

function incrementViewCount() {
    viewCount++;
    const viewCountElement = document.getElementById('viewCount');
    if (viewCountElement) {
        viewCountElement.textContent = viewCount.toLocaleString();
    }
}
