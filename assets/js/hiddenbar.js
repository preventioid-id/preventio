 document.addEventListener("DOMContentLoaded", function () {
   const hamburger = document.getElementById('hamburger') || document.querySelector('.hamburger');
   const navMenu = document.getElementById('nav-menu');
   const body = document.body;

   function closeMenuOnResize() {
     if (window.innerWidth >= 768) {
       navMenu.classList.remove('show');
       hamburger.classList.remove('active');
       body.classList.remove('menu-open');
     }
   };

   hamburger.addEventListener('click', () => {
     hamburger.classList.toggle('active');
     navMenu.classList.toggle('show');
     body.classList.toggle('menu-open');
   })

   window.addEventListener('resize', closeMenuOnResize);

   // Optional: run once on page load in case user refreshes on desktop
   closeMenuOnResize();
 });