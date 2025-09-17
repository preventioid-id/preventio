document.addEventListener('DOMContentLoaded', () => {
    const roadmapContainer = document.querySelector('.roadmap-container');
    const roadmapImageWrapper = document.querySelector('.roadmap-image-wrapper');
    const hotspots = document.querySelectorAll('.hotspot');
    const phaseContents = document.querySelectorAll('.phase-content');

    // Function to hide all phase content
    const hideAllPhaseContent = () => {
        phaseContents.forEach(content => {
            content.style.display = 'none';
        });
    };

    // Function to show a specific phase content
    const showPhaseContent = (phase) => {
        const selectedPhase = document.querySelector(`.phase-content[data-phase="${phase}"]`);
        if (selectedPhase) {
            selectedPhase.style.display = 'block';
        }
    };

    // Set initial state
    hideAllPhaseContent();
    showPhaseContent('2026'); // Show the first phase content by default

    // Event listeners
    hotspots.forEach(hotspot => {
        hotspot.addEventListener('mouseenter', () => {
            // Aktifkan efek spotlight pada gambar
            roadmapImageWrapper.classList.add('spotlight-active');
        });

        hotspot.addEventListener('mouseleave', () => {
            // Nonaktifkan efek spotlight pada gambar
            roadmapImageWrapper.classList.remove('spotlight-active');
        });

        hotspot.addEventListener('click', () => {
            const phase = hotspot.getAttribute('data-phase');
            
            // Hapus kelas 'active' dari semua hotspot dan tambahkan ke yang diklik
            hotspots.forEach(h => h.classList.remove('active'));
            hotspot.classList.add('active');

            // Sembunyikan semua konten dan tampilkan yang sesuai
            hideAllPhaseContent();
            showPhaseContent(phase);
        });
    });
});