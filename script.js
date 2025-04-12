document.addEventListener('DOMContentLoaded', function() {

    // --- Custom Cursor Logic REMOVED ---

    // --- Particles.js Initialization (Remains the same) ---
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": { "value": 55, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": ["#8e2de2", "#c471ed", "#f64f59", "#333333"] },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.45, "random": true, "anim": { "enable": true, "speed": 0.5, "opacity_min": 0.1, "sync": false } },
                "size": { "value": 2.5, "random": true },
                "line_linked": { "enable": true, "distance": 140, "color": "#222222", "opacity": 0.15, "width": 1 },
                "move": { "enable": true, "speed": 1.0, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false } }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": false }, "resize": true },
                "modes": { "repulse": { "distance": 80, "duration": 0.4 } }
            },
            "retina_detect": true
        });
    } else { console.error("particles.js library not loaded."); }

    // --- Intersection Observer for Scroll Animations ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { entry.target.classList.add('is-visible'); }
        });
    }, { threshold: 0.1 });
    animatedElements.forEach(el => { observer.observe(el); });

}); // End DOMContentLoaded