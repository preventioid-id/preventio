 document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('navbar-menu');

    toggle.addEventListener('click', function () {
      menu.classList.toggle('active');
    });
  });

// Smooth scroll for nav menu on click (for one-page navigation)
$('#nav-menu a[href^="#"]').on('click', function(e) {
	e.preventDefault();

	var target = $(this).attr('href');
	var $target = $(target);

	if ($target.length) {
		$('html, body').animate({
			scrollTop: $target.offset().top
		}, 800);

		// Close menu on mobile
		$('#nav-menu').removeClass('show');
		$('.hamburger').removeClass('active');
		$('body').removeClass('menu-open');
	}
});
