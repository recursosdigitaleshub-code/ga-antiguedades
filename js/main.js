/**
 * G.A. Antigüedades — Main JavaScript
 * Nav toggle, smooth scroll, form validation, scroll animations
 */

(function () {
  'use strict';

  // ============ NAVBAR ============

  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.navbar__link');

  // Toggle mobile menu
  navToggle.addEventListener('click', function () {
    const isOpen = navMenu.classList.toggle('navbar__nav--open');
    navToggle.classList.toggle('navbar__toggle--active');
    navToggle.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close mobile menu on link click
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      navMenu.classList.remove('navbar__nav--open');
      navToggle.classList.remove('navbar__toggle--active');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Navbar scroll effect
  var lastScroll = 0;
  window.addEventListener('scroll', function () {
    var currentScroll = window.scrollY;
    if (currentScroll > 50) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
    lastScroll = currentScroll;
  }, { passive: true });

  // Active link on scroll
  var sections = document.querySelectorAll('section[id]');

  function updateActiveLink() {
    var scrollY = window.scrollY + 120;
    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');
      var link = document.querySelector('.navbar__link[href="#' + id + '"]');
      if (link) {
        if (scrollY >= top && scrollY < top + height) {
          link.classList.add('navbar__link--active');
        } else {
          link.classList.remove('navbar__link--active');
        }
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();

  // ============ FORM VALIDATION ============

  var contactForm = document.getElementById('contactForm');
  var formStatus = document.getElementById('formStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      clearErrors();

      var isValid = true;

      // Validate nombre
      var nombre = document.getElementById('nombre');
      if (!nombre.value.trim()) {
        showError(nombre, 'Por favor, introduzca su nombre');
        isValid = false;
      }

      // Validate email
      var email = document.getElementById('email');
      if (!email.value.trim()) {
        showError(email, 'Por favor, introduzca su correo electrónico');
        isValid = false;
      } else if (!isValidEmail(email.value)) {
        showError(email, 'Por favor, introduzca un correo electrónico válido');
        isValid = false;
      }

      // Validate mensaje
      var mensaje = document.getElementById('mensaje');
      if (!mensaje.value.trim()) {
        showError(mensaje, 'Por favor, escriba su mensaje');
        isValid = false;
      }

      if (isValid) {
        formStatus.textContent = 'Mensaje enviado correctamente. Nos pondremos en contacto con usted pronto.';
        formStatus.className = 'contacto__form-status contacto__form-status--success';
        contactForm.reset();

        setTimeout(function () {
          formStatus.textContent = '';
          formStatus.className = 'contacto__form-status';
        }, 5000);
      }
    });
  }

  function showError(input, message) {
    input.classList.add('form-group__input--error');
    var errorSpan = input.parentElement.querySelector('.form-group__error');
    if (errorSpan) {
      errorSpan.textContent = message;
    }
  }

  function clearErrors() {
    var inputs = contactForm.querySelectorAll('.form-group__input');
    inputs.forEach(function (input) {
      input.classList.remove('form-group__input--error');
    });
    var errors = contactForm.querySelectorAll('.form-group__error');
    errors.forEach(function (error) {
      error.textContent = '';
    });
    formStatus.textContent = '';
    formStatus.className = 'contacto__form-status';
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Clear error on input
  var formInputs = contactForm ? contactForm.querySelectorAll('.form-group__input') : [];
  formInputs.forEach(function (input) {
    input.addEventListener('input', function () {
      this.classList.remove('form-group__input--error');
      var errorSpan = this.parentElement.querySelector('.form-group__error');
      if (errorSpan) errorSpan.textContent = '';
    });
  });

  // ============ SCROLL ANIMATIONS ============

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion) {
    var fadeElements = document.querySelectorAll('.servicio-card, .contacto__form-wrapper, .contacto__info');

    fadeElements.forEach(function (el) {
      el.classList.add('fade-in');
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in--visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(function (el) {
      observer.observe(el);
    });
  }

})();
