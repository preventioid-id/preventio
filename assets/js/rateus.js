
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const ratingSection = document.getElementById("rating-section");
    const stars = document.querySelectorAll("#stars .star");

    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Cegah reload
      const formData = new FormData(form);

      fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            Swal.fire({
              icon: "success",
              title: "Pesan Terkirim",
              text: "Terima kasih telah menghubungi kami!",
              confirmButtonText: "OK",
            }).then(() => {
              form.reset();
              ratingSection.style.display = "block";
              window.scrollTo({ top: ratingSection.offsetTop - 50, behavior: "smooth" });
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Gagal Mengirim",
              text: "Silakan coba lagi nanti.",
            });
          }
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Terjadi Kesalahan",
            text: error.message,
          });
        });
    });

    // Bintang interaktif
    stars.forEach((star, index) => {
      star.addEventListener("mouseover", () => {
        stars.forEach((s, i) => s.classList.toggle("hover", i <= index));
      });

      star.addEventListener("mouseout", () => {
        stars.forEach(s => s.classList.remove("hover"));
      });

      star.addEventListener("click", () => {
        stars.forEach((s, i) => s.classList.toggle("selected", i <= index));
        Swal.fire({
          title: "Terima kasih atas penilaian Anda!",
          text: `Anda memberi ${index + 1} bintang.`,
          icon: "info"
        });
      });
    });
  });

