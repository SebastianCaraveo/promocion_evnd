document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault(); // Evitar el comportamiento por defecto por ejemplo: recargar la página o navegar abruptamente.
      const target = document.querySelector(this.getAttribute("href")); // Obtener el elemento objetivo basado en el href del enlace.
      if (target) {
        // Validamos si hay un elemento objetivo.
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Tabs de curriculum
  function showCurriculum(type) {
    // Ocultar todos los contenidos
    document.querySelectorAll(".curriculum-content").forEach((content) => {
      content.classList.remove("active");
    });

    // Remover active de todos los botones
    document.querySelectorAll(".tab-btn").forEach((btn) => {
      btn.classList.remove("active");
    });

    // Mostrar el contenido seleccionado
    document.getElementById(type + "-content").classList.add("active");

    // Activar el botón correspondiente
    event.target.classList.add("active");
  }

  // Función de descarga de PDF
  function downloadPDF(type) {
    // Aquí puedes poner la ruta real de tus PDFs
    const pdfUrls = {
      tsu: "ruta/al/mapa-curricular-tsu.pdf",
      ingenieria: "ruta/al/mapa-curricular-ingenieria.pdf",
    };

    alert(
      `Descargando Mapa Curricular de ${type.toUpperCase()}...\n\nNota: Configura la ruta del PDF en el código JavaScript.`,
    );

    // Cuando tengas los PDFs reales, usa esto:
    // window.open(pdfUrls[type], '_blank');
  }

  // Animación al hacer scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  document
    .querySelectorAll(
      ".portfolio-item, .teacher-card, .company-card, .subject-card, .event-card",
    )
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(el);
    });

  // Manejo del formulario
  document
    .getElementById("interestForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = {
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        telefono: document.getElementById("telefono").value,
        nivel: document.getElementById("nivel").value,
        mensaje: document.getElementById("mensaje").value,
      };

      console.log("Datos del formulario:", formData);

      alert(
        "¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.",
      );

      this.reset();
    });
});
