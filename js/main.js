window.onload = function() {
    Particles.init({
        selector: '.background',
        color: '#89faef',
        maxParticles: 80,
        connectParticles: true,
        responsive: [
        {
            breakpoint: 768,
            options: {
            maxParticles: 80
            }
        }, {
            breakpoint: 375,
            options: {
            maxParticles: 50
            }
        }
        ]
    });
};
