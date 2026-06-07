/**
 * config.js
 * Master Configuration — Single Source of Truth
 * All timing, easing, visual, and feature flags live here.
 * Import or reference via window.CONFIG
 */

;(function() {
  'use strict';

  const CONFIG = {

    /* ══════════════════════════════════════
       TIMING — all durations in seconds
    ══════════════════════════════════════ */
    TIMING: {
      // Scene transitions
      intro:          1.2,
      transition:     0.7,
      transitionDelay:0.35,
      reveal:         1.0,

      // Individual scene element reveals
      eyebrow:        0.9,
      title:          1.1,
      subtitle:       0.85,
      rule:           0.8,
      cta:            0.7,
      stagger:        0.12,

      // Loading screen
      loaderFadeOut:  0.8,
      loaderMinShow:  800,   // ms — always show loader at least this long

      // Countdown
      countdownTick:  1000,  // ms per number

      // Continue buttons appear after this delay on scene enter (ms)
      continueDelay:  900,
    },

    /* ══════════════════════════════════════
       EASING
    ══════════════════════════════════════ */
    EASE: {
      enter:    'power3.out',
      exit:     'power2.in',
      smooth:   'power2.inOut',
      elastic:  'elastic.out(1, 0.4)',
      back:     'back.out(1.7)',
      backHard: 'back.out(2.5)',
    },

    /* ══════════════════════════════════════
       SCENE META
    ══════════════════════════════════════ */
    SCENES: {
      total: 6,
      names: ['intro', 'countdown', 'hero', 'gallery', 'message', 'finale'],
    },

    /* ══════════════════════════════════════
       VISUAL
    ══════════════════════════════════════ */
    VISUAL: {
      // Colour palette (CSS values for JS use)
      gold:    '#d4af6e',
      rose:    '#c4516a',
      cream:   '#f5ede0',
      dark:    '#04030a',

      // Particle counts (desktop / mobile)
      particlesIntro:  { desktop: 700, mobile: 300 },
      particlesHero:   { desktop: 900, mobile: 350 },
      particlesFinal:  { desktop: 1400, mobile: 600 },
      particlesAmbient:{ desktop: 1400, mobile: 700 },

      // Parallax strength
      parallaxMouse:   0.014,
    },

    /* ══════════════════════════════════════
       FEATURE FLAGS
    ══════════════════════════════════════ */
    FEATURES: {
      parallax:         true,
      magneticButtons:  true,
      cardTilt:         true,
      clickBurst:       true,
      ripple:           true,
      transitionOverlay:true,
      keyHint:          true,
      fpsGuard:         true,
      preloader:        true,
    },

    /* ══════════════════════════════════════
       PERFORMANCE THRESHOLDS
    ══════════════════════════════════════ */
    PERF: {
      targetFPS:   45,
      recoveryFPS: 55,
      pixelRatioMax: 1.5,
      fpsStartDelay: 3000,  // ms after load before measuring
    },

  };

  // Freeze to prevent accidental mutation
  Object.freeze(CONFIG.TIMING);
  Object.freeze(CONFIG.EASE);
  Object.freeze(CONFIG.SCENES);
  Object.freeze(CONFIG.VISUAL);
  Object.freeze(CONFIG.FEATURES);
  Object.freeze(CONFIG.PERF);

  window.CONFIG = CONFIG;
  console.log('[Config] ✓ Loaded');

})();
