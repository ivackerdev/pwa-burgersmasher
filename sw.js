self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
  });
  
  self.addEventListener('fetch', function(event) {
      // Aquí puedes añadir la lógica para manejar peticiones y respuestas,
      // por ejemplo, para servir archivos desde la caché.
  });
  