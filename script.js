// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Dynamic Navbar Background on Scroll
const navbar = document.querySelector('.glass-nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 15, 0.8)';
        navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.03)';
        navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.08)';
    }
});

// Download Setup
function downloadSD() {
    window.location.href = "https://github.com/k16dma/NKB-Hub/releases/download/SD64-v1.0/SetupSDx64_Trial07.exe";
}

// Optional: Mouse tracking glow effect on glass cards
const cards = document.querySelectorAll('.glass-card');
cards.forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const glow = card.querySelector('.card-glow');
        if(glow) {
            glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 229, 255, 0.15), transparent 60%)`;
        }
    });
    
    card.addEventListener('mouseleave', () => {
        const glow = card.querySelector('.card-glow');
        if(glow) {
            glow.style.background = `radial-gradient(circle at 50% 0%, rgba(0, 229, 255, 0.1), transparent 70%)`;
        }
    });
});
