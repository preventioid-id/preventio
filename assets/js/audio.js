document.addEventListener('DOMContentLoaded', function () {
    const audio = document.getElementById('bg-music');
    const playAudio = () => {
        audio.play().then(() => {
            console.log("Audio playing");
        }).catch(err => {
            console.warn("Autoplay gagal: ", err);
        });
    };

    // Trigger play on first interaction
    window.addEventListener('click', playAudio, { once: true });
    window.addEventListener('scroll', playAudio, { once: true });
});
