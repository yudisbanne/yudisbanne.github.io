// navbar.js

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  // Loop melalui setiap link navbar
  navLinks.forEach(function (link) {
    // Tambahkan event listener untuk setiap link
    link.addEventListener("click", function () {
      // Hapus kelas 'active' dari semua link navbar
      navLinks.forEach(function (navLink) {
        navLink.classList.remove("active");
      });

      // Tambahkan kelas 'active' hanya pada link yang sedang diklik
      this.classList.add("active");
    });
  });
});
