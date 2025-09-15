document.addEventListener('DOMContentLoaded', function () {
    const glitterContainer = document.createElement('div');
    glitterContainer.className = 'glitter-container';
    document.body.appendChild(glitterContainer);

    function createGlitter() {
      const glitter = document.createElement('div');
    glitter.className = 'glitter';
    glitter.style.left = Math.random() * 100 + 'vw';
    glitter.style.top = -10 + 'px';
    glitter.style.animationDelay = (Math.random() * 1.5) + 's';
    glitter.style.animationDuration = (1.5 + Math.random() * 2) + 's';

    glitterContainer.appendChild(glitter);

      // Hapus glitter setelah animasinya selesai
      setTimeout(() => {
        glitter.remove();
      }, 3000);
    }

    // Spawn glitter terus-menerus setiap 200ms
    const glitterInterval = setInterval(() => {
      for (let i = 0; i < 5; i++) {
        createGlitter();
      }
    }, 200);

    // Bersihkan glitter saat keluar halaman (opsional)
    window.addEventListener('beforeunload', () => {
        clearInterval(glitterInterval);
    });
  });

