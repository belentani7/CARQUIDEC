/* ============================================================================
   CARQUIDEC · carquidec.js — mejoras progresivas
   ----------------------------------------------------------------------------
   Todo aquí es OPCIONAL: si este archivo no carga, el sitio sigue siendo
   legible y navegable (el CSS ya contempla html:not(.js)).

   Módulos
     1. Blindaje del cargador (nunca puede dejar la web en blanco)
     2. Revelado al hacer scroll con respaldo (IntersectionObserver)
     3. Navegación: menú móvil accesible, estado de scroll, sección activa
     4. Indicador de diapositivas accesible por teclado
     5. i18n: selector ES/EN/CA/FR/IT con persistencia y aria-pressed
     6. Formularios: validación en vivo + estado accesible (sin alert)
     7. Vídeo y audio: carga diferida, controles accesibles, Media Session
     8. Detalles finos: año del pie, copiar contacto, enlaces externos
   ========================================================================= */
(function () {
  'use strict';

  var html = document.documentElement;
  html.classList.add('js');

  // matchMedia no existe en algunos navegadores incrustados (Instagram, Facebook,
  // motores antiguos). Sin este blindaje, un fallo aquí impediría arrancar el resto
  // de las mejoras: la web se quedaría sin revelar.
  var mm = (typeof window.matchMedia === 'function')
    ? function (query) { return window.matchMedia(query); }
    : function () { return { matches: false, addEventListener: function () { }, addListener: function () { } }; };
  var reduceMotion = mm('(prefers-reduced-motion: reduce)').matches;
  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  /* ---------------------------------------------------------------------
     1 · BLINDAJE DEL CARGADOR
     El cargador cubre toda la pantalla y dependía de GSAP. Si GSAP falla
     (CDN caído, bloqueo, red lenta) la web queda en negro para siempre.
     Aquí: si en 2,6 s no ha desaparecido, lo retiramos y revelamos el sitio.
     --------------------------------------------------------------------- */
  function retireLoader() {
    var loader = $('.loader');
    if (loader && loader.style.display !== 'none' && loader.parentNode) {
      loader.setAttribute('aria-hidden', 'true');
      loader.style.transition = 'opacity .35s ease';
      loader.style.opacity = '0';
      window.setTimeout(function () {
        if (loader.parentNode) loader.parentNode.removeChild(loader);
      }, 400);
    }
    revealAll();
  }

  function revealAll() {
    html.classList.add('cq-static');
    $$('.rv, .rv-left, .rv-right, .rv-scale, .rv-rotate, .clip-rv, .clip-rv-left, .clip-rv-right')
      .forEach(function (el) { el.classList.add('active'); });
  }

  window.setTimeout(function () {
    if ($('.loader')) retireLoader();
  }, 2600);

  /* ---------------------------------------------------------------------
     2 · REVELADO CON RESPALDO
     Si GSAP/ScrollTrigger no están disponibles, el respaldo garantiza que
     todo el contenido sea visible: nunca una sección en blanco.
     --------------------------------------------------------------------- */
  function fallbackReveal() {
    var targets = $$('.rv, .rv-left, .rv-right, .rv-scale, .rv-rotate, .clip-rv, .clip-rv-left, .clip-rv-right');
    if (!targets.length) return;

    if (!('IntersectionObserver' in window)) { revealAll(); return; }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.05 });

    targets.forEach(function (el) { io.observe(el); });

    // Red de seguridad: a los 4 s, todo lo que siga oculto por encima del
    // pliegue se muestra igualmente (evita "huecos" si el observador falla).
    window.setTimeout(function () {
      targets.forEach(function (el) {
        if (el.getBoundingClientRect().top < window.innerHeight * 1.2) el.classList.add('active');
      });
    }, 4000);
  }
  window.addEventListener('load', function () { window.setTimeout(fallbackReveal, 60); });

  /* ---------------------------------------------------------------------
     3 · NAVEGACIÓN
     --------------------------------------------------------------------- */
  function initNav() {
    var nav = $('.nav');
    var toggle = $('#menuToggle');
    var links = $('.nav-links');

    // Estado "compacto" al hacer scroll, con rAF para no saturar el hilo
    if (nav) {
      var ticking = false;
      var onScroll = function () {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(function () {
          nav.classList.toggle('is-scrolled', window.scrollY > 40);
          ticking = false;
        });
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    if (toggle && links) {
      links.id = links.id || 'menu-principal';
      toggle.setAttribute('aria-controls', 'menu-principal');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menú de navegación');
      toggle.setAttribute('type', 'button');

      var setOpen = function (open) {
        links.classList.toggle('show', open);
        document.body.classList.toggle('cq-nav-open', open);
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        toggle.setAttribute('aria-label', open ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
        toggle.innerHTML = open ? '&times;' : '&#9776;';
        if (open) {
          var first = links.querySelector('a');
          if (first) first.focus();
        }
      };

      toggle.addEventListener('click', function () {
        setOpen(!links.classList.contains('show'));
      });
      links.addEventListener('click', function (e) {
        if (e.target.closest('a')) setOpen(false);
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && links.classList.contains('show')) {
          setOpen(false);
          toggle.focus();
        }
      });
      // Al pasar a escritorio, cerramos el menú móvil
      var mq = mm('(min-width: 901px)');
      if (mq.addEventListener) mq.addEventListener('change', function (ev) { if (ev.matches) setOpen(false); });
    }

    // Marca la sección visible en la navegación (aria-current)
    var navLinks = $$('.nav-links a[href^="#"]');
    var sections = navLinks
      .map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); })
      .filter(Boolean);

    if (sections.length && 'IntersectionObserver' in window) {
      var seen = (typeof Map === 'function') ? new Map() : null;
      if (!seen) return;
      var navIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { seen.set(en.target, en.intersectionRatio); });
        var best = null;
        seen.forEach(function (ratio, el) { if (ratio > 0.35 && (!best || ratio > seen.get(best))) best = el; });
        navLinks.forEach(function (a) {
          var on = best && a.getAttribute('href') === '#' + best.id;
          if (on) a.setAttribute('aria-current', 'true');
          else a.removeAttribute('aria-current');
        });
      }, { threshold: [0, 0.35, 0.6, 0.9] });
      sections.forEach(function (s) { navIO.observe(s); });
    }

    // Marca el enlace activo en páginas interiores
    $$('.nav-links a').forEach(function (a) {
      var here = location.pathname.split('/').pop() || 'index.html';
      var href = a.getAttribute('href') || '';
      if (href === here || (here === '' && href === 'index.html')) a.classList.add('active');
    });
  }

  /* ---------------------------------------------------------------------
     4 · INDICADOR DE DIAPOSITIVAS ACCESIBLE
     Los puntos eran <div> con click: invisibles para el teclado.
     --------------------------------------------------------------------- */
  function initSlideDots() {
    var indicator = $('#slideIndicator');
    if (!indicator) return;
    var slides = $$('.slide');
    var dots = $$('.slide-dot', indicator);

    dots.forEach(function (dot, i) {
      if (dot.tagName !== 'BUTTON') {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = dot.className;
        indicator.replaceChild(btn, dot);
        dot = btn;
      }
      dot.setAttribute('type', 'button');
      var label = slides[i] ? (slides[i].querySelector('h1, h2') || {}).textContent : '';
      label = (label || 'Sección ' + (i + 1)).replace(/\s+/g, ' ').trim().slice(0, 60);
      dot.setAttribute('aria-label', 'Ir a: ' + label);
      dot.setAttribute('title', label);
    });

    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting && en.intersectionRatio > 0.5) {
            var idx = slides.indexOf(en.target);
            $$('.slide-dot', indicator).forEach(function (d, i) {
              var on = i === idx;
              d.classList.toggle('active', on);
              if (on) d.setAttribute('aria-current', 'true');
              else d.removeAttribute('aria-current');
            });
          }
        });
      }, { threshold: [0.5] });
      slides.forEach(function (s) { io.observe(s); });
    }
  }

  /* ---------------------------------------------------------------------
     5 · i18n
     --------------------------------------------------------------------- */
  var LANGS = ['es', 'en', 'ca', 'fr', 'it'];

  function applyLang(lang, store) {
    if (LANGS.indexOf(lang) === -1) lang = 'es';

    $$('[data-es]').forEach(function (el) {
      var value = el.getAttribute('data-' + lang) || el.getAttribute('data-es');
      if (!value) return;
      // Conservamos el marcado enriquecido (<em>, <br>) de los titulares
      el.innerHTML = value;
    });

    $$('[data-placeholder-es]').forEach(function (el) {
      var value = el.getAttribute('data-placeholder-' + lang) || el.getAttribute('data-placeholder-es');
      if (value) el.setAttribute('placeholder', value);
    });

    $$('[data-aria-es]').forEach(function (el) {
      var value = el.getAttribute('data-aria-' + lang) || el.getAttribute('data-aria-es');
      if (value) el.setAttribute('aria-label', value);
    });

    $$('.lang-bar button').forEach(function (b) {
      var on = (b.getAttribute('data-lang') || '').toLowerCase() === lang;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });

    html.setAttribute('lang', lang);
    if (store) {
      try { localStorage.setItem('carquidec:lang', lang); } catch (e) { /* modo privado */ }
    }
  }

  function initLang() {
    var bar = $('.lang-bar');
    if (bar) {
      bar.setAttribute('role', 'group');
      bar.setAttribute('aria-label', 'Selección de idioma');
    }

    $$('.lang-bar button').forEach(function (btn) {
      btn.setAttribute('type', 'button');
      btn.setAttribute('aria-pressed', btn.classList.contains('active') ? 'true' : 'false');
      btn.setAttribute('title', (btn.getAttribute('data-lang') || '').toUpperCase());
      btn.addEventListener('click', function () {
        applyLang(btn.getAttribute('data-lang'), true);
        if (window.ScrollTrigger) window.ScrollTrigger.refresh();
      });
    });

    var stored = null;
    try { stored = localStorage.getItem('carquidec:lang'); } catch (e) { /* ignorado */ }
    var nav = (navigator.language || 'es').slice(0, 2).toLowerCase();
    applyLang(stored || (LANGS.indexOf(nav) !== -1 ? nav : 'es'), false);
  }

  /* ---------------------------------------------------------------------
     6 · FORMULARIOS
     Sustituimos alert() por un estado inline anunciado (role=status).
     --------------------------------------------------------------------- */
  function initForms() {
    $$('form').forEach(function (form) {
      var status = form.querySelector('.cq-form-status');
      if (!status) {
        status = document.createElement('p');
        status.className = 'cq-form-status';
        status.setAttribute('role', 'status');
        status.setAttribute('aria-live', 'polite');
        status.hidden = true;
        form.appendChild(status);
      }

      var say = function (msg, state) {
        status.textContent = msg;
        status.hidden = false;
        status.setAttribute('data-state', state || 'ok');
      };

      // Marca los campos obligatorios para lectores de pantalla
      $$('[required]', form).forEach(function (field) {
        field.setAttribute('aria-required', 'true');
      });

      form.addEventListener('invalid', function (e) {
        if (e.target && e.target.setAttribute) {
          e.target.setAttribute('aria-invalid', 'true');
          say('Revisa los campos marcados: falta información por completar.', 'error');
        }
      }, true);

      form.addEventListener('input', function (e) {
        if (e.target && e.target.removeAttribute) e.target.removeAttribute('aria-invalid');
      });

      var action = form.getAttribute('action') || '';
      var isPlaceholder = !action.trim() || action.trim() === '#' ||
        /YOUR_FORM_ID|ejemplo|example/i.test(action) || /^javascript:/i.test(action);

      /* Sin endpoint configurado el formulario no puede quedarse inerte: se
         compone el mensaje y se ofrece enviarlo por correo (mailto) o por
         WhatsApp, que es donde el estudio responde de verdad. */
      var CONTACTO = { email: 'carqdisantos@gmail.com', whatsapp: '34612484884' };
      var componerMensaje = function () {
        var valor = function (nombre) {
          var campo = form.querySelector('[name="' + nombre + '"]');
          return campo && campo.value ? campo.value.trim() : '';
        };
        var nombre = valor('nombre');
        var email = valor('email');
        var texto = valor('mensaje');
        return {
          asunto: 'Nueva consulta desde carquidec.com' + (nombre ? ' — ' + nombre : ''),
          cuerpo: [texto, '', '—', nombre ? 'Nombre: ' + nombre : '', email ? 'Email: ' + email : '']
            .filter(Boolean).join('\n')
        };
      };

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!form.checkValidity()) {
          form.reportValidity();
          say('Revisa los campos marcados: falta información por completar.', 'error');
          return;
        }
        var offerManualSend = function () {
          var datos = componerMensaje();
          var mailto = 'mailto:' + CONTACTO.email +
            '?subject=' + encodeURIComponent(datos.asunto) +
            '&body=' + encodeURIComponent(datos.cuerpo);
          var wa = 'https://wa.me/' + CONTACTO.whatsapp +
            '?text=' + encodeURIComponent(datos.asunto + '\n\n' + datos.cuerpo);
          var enlace = document.createElement('a');
          enlace.href = mailto;
          enlace.className = 'cq-form-send';
          enlace.textContent = 'Abrir mi correo con el mensaje';
          var waLink = document.createElement('a');
          waLink.href = wa;
          waLink.className = 'cq-form-send';
          waLink.target = '_blank';
          waLink.rel = 'noopener noreferrer';
          waLink.textContent = 'Enviar por WhatsApp';
          status.textContent = 'El mensaje no se ha enviado todavía. Selecciona un canal para enviarlo: ';
          status.hidden = false;
          status.setAttribute('data-state', 'error');
          status.appendChild(enlace);
          status.appendChild(document.createTextNode(' · '));
          status.appendChild(waLink);
        };

        if (isPlaceholder) {
          offerManualSend();
          return;
        }

        var button = form.querySelector('[type="submit"]');
        if (button && button.disabled) return;
        var original = button ? button.textContent : '';
        if (button) { button.disabled = true; button.textContent = 'Enviando…'; }
        say('Enviando tu mensaje…', 'ok');

        var controller = typeof AbortController === 'function' ? new AbortController() : null;
        var timer = controller ? window.setTimeout(function () { controller.abort(); }, 12000) : null;
        fetch(action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
          signal: controller ? controller.signal : undefined
        })
          .then(function (r) {
            // Un 200 con HTML puede ser el fallback de una SPA, no una entrega.
            if (!r.ok || !(r.headers.get('content-type') || '').toLowerCase().includes('application/json')) {
              throw new Error('Missing delivery confirmation');
            }
            return r.json();
          })
          .then(function (receipt) {
            if (!receipt || receipt.ok !== true) throw new Error('No delivery receipt');
            form.reset();
            say('Mensaje enviado y confirmado. Gracias por escribirnos.', 'ok');
          })
          .catch(function () { offerManualSend(); })
          .finally(function () {
            if (timer !== null) window.clearTimeout(timer);
            if (button) { button.disabled = false; button.textContent = original; }
          });
      });
    });
  }

  /* ---------------------------------------------------------------------
     7 · VÍDEO Y AUDIO
     Los 6 vídeos del portafolio pesaban en el arranque. Ahora se cargan
     solo cuando se acercan a la ventana y con carátula visible.
     --------------------------------------------------------------------- */
  function initVideos() {
    var videos = $$('video');
    videos.forEach(function (video) {
      if (!video.hasAttribute('playsinline')) video.setAttribute('playsinline', '');
      if (!video.hasAttribute('preload')) video.setAttribute('preload', 'none');
      if (!video.getAttribute('title')) {
        var box = video.closest('.grid-item, .card');
        var title = box && box.querySelector('.grid-title');
        video.setAttribute('title', (title && title.textContent.trim()) || 'Vídeo del estudio CARQUIDEC');
      }
    });

    if (!('IntersectionObserver' in window)) return;
    var lazyIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var video = en.target;
        lazyIO.unobserve(video);
        if (video.dataset && video.dataset.cqSrc && !video.src) {
          video.src = video.dataset.cqSrc;
          video.load();
        }
      });
    }, { rootMargin: '300px 0px' });
    videos.forEach(function (v) { lazyIO.observe(v); });
  }

  function initRadio() {
    var audio = $('#podcastAudio');
    var playBtn = $('#podcastPlayBtn');
    var stopBtn = $('#podcastStopBtn');
    if (!audio) return;

    // Estado accesible del reproductor
    if (playBtn) playBtn.setAttribute('aria-pressed', 'false');
    var state = $('#nowState');

    // Barra de progreso + Media Session (carátula y controles del sistema)
    var bar = document.createElement('div');
    bar.className = 'cq-bar';
    bar.innerHTML = '<i></i>';
    var fill = bar.querySelector('i');
    var container = audio.parentNode;
    if (container) container.insertBefore(bar, audio);

    audio.addEventListener('timeupdate', function () {
      if (!audio.duration || !isFinite(audio.duration)) return;
      fill.style.width = ((audio.currentTime / audio.duration) * 100).toFixed(1) + '%';
    });
    audio.addEventListener('play', function () {
      if (playBtn) { playBtn.setAttribute('aria-pressed', 'true'); playBtn.textContent = 'Pausa'; }
      if (state) state.textContent = 'En emisión';
    });
    audio.addEventListener('pause', function () {
      if (playBtn) { playBtn.setAttribute('aria-pressed', 'false'); playBtn.textContent = 'Reproducir'; }
      if (state) state.textContent = 'En pausa';
    });
    audio.addEventListener('ended', function () {
      fill.style.width = '0%';
      if (state) state.textContent = 'Finalizado';
    });
    audio.addEventListener('error', function () {
      if (state) state.textContent = 'Audio no disponible';
    });

    if ('mediaSession' in navigator) {
      try {
        navigator.mediaSession.metadata = new window.MediaMetadata({
          title: 'Radio Carquidec',
          artist: 'Hernando Carrillo · Arquitecto',
          album: 'CARQUIDEC'
        });
      } catch (e) { /* navegador sin MediaMetadata */ }
      navigator.mediaSession.setActionHandler('play', function () { audio.play(); });
      navigator.mediaSession.setActionHandler('pause', function () { audio.pause(); });
      navigator.mediaSession.setActionHandler('stop', function () { audio.pause(); audio.currentTime = 0; });
    }

    if (stopBtn) stopBtn.setAttribute('aria-label', 'Detener la reproducción');
  }

  /* ---------------------------------------------------------------------
     8 · DETALLES FINOS
     --------------------------------------------------------------------- */
  function initPolish() {
    // Año del pie de página siempre correcto
    var footer = $('.footer');
    if (footer && !$('.cq-year')) {
      var span = document.createElement('span');
      span.className = 'footer-copy cq-year';
      span.setAttribute('data-cq-year', '');
      span.textContent = '© ' + new Date().getFullYear() + ' CARQUIDEC';
      footer.appendChild(span);
    }

    // Enlaces externos: seguridad + aviso para lectores de pantalla
    $$('a[target="_blank"]').forEach(function (a) {
      var rel = (a.getAttribute('rel') || '').split(/\s+/);
      ['noopener', 'noreferrer'].forEach(function (token) {
        if (rel.indexOf(token) === -1) rel.push(token);
      });
      a.setAttribute('rel', rel.join(' ').trim());
      if (!a.querySelector('.cq-sr')) {
        var note = document.createElement('span');
        note.className = 'cq-sr';
        note.textContent = ' (se abre en una pestaña nueva)';
        a.appendChild(note);
      }
    });

    // Copiar datos de contacto con un clic
    $$('.contact-val a[href^="mailto:"], .contact-val a[href^="tel:"]').forEach(function (a) {
      if (!navigator.clipboard) return;
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'cq-copy';
      btn.textContent = 'Copiar';
      btn.setAttribute('aria-label', 'Copiar ' + a.textContent.trim());
      btn.addEventListener('click', function () {
        navigator.clipboard.writeText(a.textContent.trim()).then(function () {
          btn.textContent = 'Copiado';
          window.setTimeout(function () { btn.textContent = 'Copiar'; }, 1800);
        });
      });
      a.parentNode.appendChild(document.createTextNode(' '));
      a.parentNode.appendChild(btn);
    });

    // Enlace "volver arriba" textual en el pie (el botón flotante es extra)
    if (footer && !$('.cq-top-link')) {
      var top = document.createElement('a');
      top.className = 'cq-top-link';
      top.href = '#top';
      top.textContent = '↑ Volver arriba';
      footer.appendChild(top);
    }

    // Progreso de lectura sin coste: rAF bajo demanda
    var bar2 = $('#scrollProgress');
    if (bar2 && !reduceMotion) {
      var raf = false;
      var update = function () {
        var h = document.documentElement.scrollHeight - window.innerHeight;
        var p = h > 0 ? (window.scrollY / h) * 100 : 0;
        bar2.style.width = p.toFixed(2) + '%';
        raf = false;
      };
      window.addEventListener('scroll', function () {
        if (raf) return;
        raf = true;
        window.requestAnimationFrame(update);
      }, { passive: true });
      update();
    } else if (bar2) {
      bar2.style.display = 'none';
    }

    // Marca de "página lista" y cierre de las transiciones
    window.setTimeout(function () { html.classList.add('cq-ready'); }, 100);
  }

  /* ---------------------------------------------------------------------
     ARRANQUE
     --------------------------------------------------------------------- */
  function boot() {
    try { initNav(); } catch (e) { /* nunca rompemos la página por una mejora */ }
    try { initSlideDots(); } catch (e) { }
    try { initLang(); } catch (e) { }
    try { initForms(); } catch (e) { }
    try { initVideos(); } catch (e) { }
    try { initRadio(); } catch (e) { }
    try { initPolish(); } catch (e) { }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  // Si algo se rompe en el arranque, la web sigue siendo visible
  window.addEventListener('error', function () { revealAll(); }, { once: true });

  // Exponer utilidades mínimas (pruebas y depuración)
  window.Carqidec = { applyLang: applyLang, revealAll: revealAll };
})();
