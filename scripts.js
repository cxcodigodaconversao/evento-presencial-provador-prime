// CURSOR MÁGICO
const cursor = document.querySelector('.magic-cursor');
let mouseX = 0, mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
    requestAnimationFrame(animateCursor);
}
animateCursor();

// MORPHING BACKGROUND
const morphingBg = document.querySelector('.morphing-bg');
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    morphingBg.style.setProperty('--mouse-x', x + '%');
    morphingBg.style.setProperty('--mouse-y', y + '%');
});

// PARTÍCULAS INTERATIVAS
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (3 + Math.random() * 6) + 's';
        particlesContainer.appendChild(particle);
    }
}

// EFEITOS MAGNÉTICOS NOS CARDS
document.querySelectorAll('.floating-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        card.style.setProperty('--mouse-x', x + '%');
        card.style.setProperty('--mouse-y', y + '%');

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        const rotateX = ((mouseY - centerY) / centerY) * 10;
        const rotateY = ((centerX - mouseX) / centerX) * 10;
        
        card.style.transform = `
            translateY(-20px) 
            rotateX(${rotateX}deg) 
            rotateY(${rotateY}deg)
            scale(1.02)
        `;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg) scale(1)';
        card.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        
        setTimeout(() => {
            card.style.transition = '';
        }, 500);
    });
});

// TÍTULOS MAGNÉTICOS
document.querySelectorAll('.magnetic-title').forEach(title => {
    title.addEventListener('mousemove', (e) => {
        const rect = title.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = (e.clientX - centerX) * 0.1;
        const deltaY = (e.clientY - centerY) * 0.1;
        
        title.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    });
    
    title.addEventListener('mouseleave', () => {
        title.style.transform = 'translate(0px, 0px)';
    });
});

// PARALLAX EXTREMO
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hologram-effect, .morphing-bg');
    
    parallaxElements.forEach((element, index) => {
        const speed = (index + 1) * 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });

    // Partículas respondem ao scroll
    document.querySelectorAll('.particle').forEach((particle, index) => {
        const speed = 0.1 + (index % 3) * 0.05;
        particle.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// FAQ TOGGLE
function toggleFaq(element) {
    const answer = element.nextElementSibling;
    const isOpen = answer.style.display === 'block';
    
    // Close all other FAQ items
    document.querySelectorAll('.faq-answer').forEach(item => {
        item.style.display = 'none';
    });
    document.querySelectorAll('.faq-question').forEach(item => {
        item.classList.remove('active');
    });
    
    // Toggle current item
    if (!isOpen) {
        answer.style.display = 'block';
        element.classList.add('active');
    }
}

// INTERSECTION OBSERVER PARA ANIMAÇÕES
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.glass-section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    observer.observe(section);
});

// INICIALIZAÇÃO
window.addEventListener('load', () => {
    createParticles();
    
    // Animate logo entrance
    setTimeout(() => {
        document.querySelector('.logo-text').style.animation = 'liquidGold 6s ease-in-out infinite';
    }, 500);
});

// SMOOTH SCROLLING
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

// HOVER EFFECTS PARA ELEMENTOS INTERATIVOS
document.querySelectorAll('.presencial-tag, .liquid-button, .magic-price').forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
        cursor.style.mixBlendMode = 'normal';
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.mixBlendMode = 'difference';
    });
});
