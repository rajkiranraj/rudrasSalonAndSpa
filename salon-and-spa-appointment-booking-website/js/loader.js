function initLoader() {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const loader = document.getElementById('loader');
            const mainContent = document.getElementById('main-content');
            
            loader.style.transition = 'opacity 0.5s';
            loader.style.opacity = '0';
            
            setTimeout(() => {
                loader.style.display = 'none';
                mainContent.style.display = 'block';
            }, 500);
        }, 1500);
    });
}

// Handle page refresh
window.addEventListener('beforeunload', () => {
    localStorage.setItem('pageRefreshed', 'true');
});

// Check if page was refreshed
if (localStorage.getItem('pageRefreshed')) {
    initLoader();
    localStorage.removeItem('pageRefreshed');
}
