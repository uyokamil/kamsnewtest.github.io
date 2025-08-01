// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Navigation smooth scrolling
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Typing effect for hero section
    const typingElement = document.getElementById('typing-effect');
    if (typingElement) {
        const specializationText = "Gameplay & Systems.";
        let charIndex = 0;

        function type() {
            if (charIndex < specializationText.length) {
                typingElement.textContent += specializationText.charAt(charIndex);
                charIndex++;
                setTimeout(type, 100);
            }
        }
        setTimeout(type, 500); // Initial delay before typing starts
    }

    // Tag hover effects
    const tags = document.querySelectorAll('.tag');
    
    tags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add loading animation for images
    const images = document.querySelectorAll('.project-image img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        img.addEventListener('error', function() {
            this.src = 'https://via.placeholder.com/400x250/e2e8f0/4a5568?text=Image+Not+Found';
        });
    });

    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close any open modals or overlays
            console.log('Escape pressed - close any open elements');
        }
    });

    // Performance optimization: Throttle scroll events
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    // Apply throttling to scroll events
    const throttledScrollHandler = throttle(function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
    }, 16); // ~60fps

    window.removeEventListener('scroll', window.scrollHandler);
    window.addEventListener('scroll', throttledScrollHandler);
    window.scrollHandler = throttledScrollHandler;

    // Navbar scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Project card click navigation
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const project = card.getAttribute('data-project');
            
            // Check if this is a 2023 project (YouTube videos - no full pages)
            const is2023Project = ['souls-like-combat', 'dynamic-mantling', 'little-sapling', 'portals'].includes(project);
            
            if (!is2023Project) {
                // Navigate to project page for 2024 and 2025 projects
                // Determine year based on project name
                let year = '2024';
                if (['bendy-ink-machine', 'unmasked-truths'].includes(project)) {
                    year = '2025';
                }
                
                // Create clean URL
                const cleanUrl = `projects/${year}/${project}`;
                
                // Try to navigate to clean URL
                // If it fails, the server will handle the .html extension automatically
                // thanks to the .htaccess file, or we'll get a 404 and can fallback
                window.location.href = cleanUrl;
            }
            // 2023 projects don't navigate anywhere - they just show the YouTube video
        });
    });
});

// Utility function to create project detail pages
function createProjectPage(projectData) {
    // This function can be used to dynamically create project detail pages
    // For now, it's a placeholder for future functionality
    console.log('Creating project page for:', projectData);
}

// Export functions for potential use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        createProjectPage
    };
} 