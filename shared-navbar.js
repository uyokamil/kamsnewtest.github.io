// Shared Navbar and Dark Mode Functionality
// This file provides a reusable navbar component and dark mode toggle

class SharedNavbar {
    constructor() {
        this.isMobileMenuOpen = false;
        this.init();
    }

    init() {
        this.renderNavbar();
        this.initDarkMode();
        this.initMobileMenu();
    }

    renderNavbar() {
        // Find the nav element in the header
        const header = document.querySelector('.header .container');
        if (!header) return;

        const existingNav = header.querySelector('.nav');
        if (existingNav) {
            // Replace the existing nav with our enhanced version
            existingNav.remove();
        }

        // Create the enhanced navbar with dark mode toggle and mobile menu
        const nav = document.createElement('nav');
        nav.className = 'nav';
        
        // Determine the correct relative path for navigation links
        const isProjectPage = window.location.pathname.includes('/projects/');
        const basePath = isProjectPage ? '../../' : '';
        
        nav.innerHTML = `
            <div class="nav-desktop">
                <a href="${basePath}index.html#projects" class="nav-link">Projects</a>
                <a href="${basePath}index.html#about" class="nav-link">About</a>
                <a href="${basePath}index.html#contact" class="nav-link">Contact</a>
                <button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode">
                    <svg class="sun-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="5"></circle>
                        <line x1="12" y1="1" x2="12" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="23"></line>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                        <line x1="1" y1="12" x2="3" y2="12"></line>
                        <line x1="21" y1="12" x2="23" y2="12"></line>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </svg>
                    <svg class="moon-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                </button>
            </div>
            <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Toggle mobile menu">
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
            </button>
        `;

        header.appendChild(nav);
        
        // Add click handlers for desktop nav links when on the home page
        if (!isProjectPage) {
            const navLinks = nav.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const href = link.getAttribute('href');
                    const anchor = href.split('#')[1];
                    if (anchor) {
                        const element = document.getElementById(anchor);
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                        }
                    }
                });
            });
        }
    }

    initMobileMenu() {
        // Create mobile menu overlay
        const mobileMenu = document.createElement('div');
        mobileMenu.className = 'mobile-menu-overlay';
        mobileMenu.id = 'mobile-menu-overlay';
        
        // Determine the correct relative path for navigation links
        const isProjectPage = window.location.pathname.includes('/projects/');
        const basePath = isProjectPage ? '../../' : '';
        
        mobileMenu.innerHTML = `
            <div class="mobile-menu-content">
                <div class="mobile-menu-header">
                    <button class="mobile-menu-close" id="mobile-menu-close" aria-label="Close mobile menu">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>
                </div>
                <div class="mobile-menu-links">
                    <a href="${basePath}index.html#projects" class="mobile-nav-link">Projects</a>
                    <a href="${basePath}index.html#about" class="mobile-nav-link">About</a>
                    <a href="${basePath}index.html#contact" class="mobile-nav-link">Contact</a>
                </div>
                <div class="mobile-menu-footer">
                    <button class="mobile-theme-toggle" id="mobile-theme-toggle" aria-label="Toggle dark mode">
                        <svg class="sun-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg>
                        <svg class="moon-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                        <span class="theme-text">Dark Mode</span>
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(mobileMenu);

        // Add event listeners for mobile menu
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        const mobileMenuClose = document.getElementById('mobile-menu-close');
        const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
        const mobileThemeToggle = document.getElementById('mobile-theme-toggle');

        if (mobileMenuToggle) {
            mobileMenuToggle.addEventListener('click', () => {
                this.toggleMobileMenu();
            });
        }

        if (mobileMenuClose) {
            mobileMenuClose.addEventListener('click', () => {
                this.closeMobileMenu();
            });
        }

        if (mobileMenuOverlay) {
            mobileMenuOverlay.addEventListener('click', (e) => {
                if (e.target === mobileMenuOverlay) {
                    this.closeMobileMenu();
                }
            });
        }

        if (mobileThemeToggle) {
            mobileThemeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }

        // Close mobile menu when clicking on a link
        const mobileNavLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMobileMenu();
            });
        });
    }

    toggleMobileMenu() {
        const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        
        if (this.isMobileMenuOpen) {
            this.closeMobileMenu();
        } else {
            this.openMobileMenu();
        }
    }

    openMobileMenu() {
        const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        
        if (mobileMenuOverlay && mobileMenuToggle) {
            mobileMenuOverlay.classList.add('active');
            mobileMenuToggle.classList.add('active');
            document.body.style.overflow = 'hidden';
            this.isMobileMenuOpen = true;
        }
    }

    closeMobileMenu() {
        const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        
        if (mobileMenuOverlay && mobileMenuToggle) {
            mobileMenuOverlay.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            document.body.style.overflow = '';
            this.isMobileMenuOpen = false;
        }
    }

    toggleTheme() {
        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        this.updateToggleState();
    }

    initDarkMode() {
        const html = document.documentElement;
        
        // Check for saved theme preference
        let savedTheme = localStorage.getItem('theme');
        
        // If no preference is stored, check the time of day
        if (!savedTheme) {
            const currentHour = new Date().getHours();
            // If it's past 5pm (17:00), default to dark mode
            savedTheme = currentHour >= 17 ? 'dark' : 'light';
        }
        
        html.setAttribute('data-theme', savedTheme);
        
        // Update toggle button state
        this.updateToggleState();
        
        // Add event listener for theme toggle
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }
    }

    updateToggleState() {
        const themeToggle = document.getElementById('theme-toggle');
        const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
        const html = document.documentElement;
        
        const currentTheme = html.getAttribute('data-theme');
        const isDark = currentTheme === 'dark';
        
        if (themeToggle) {
            themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
        }
        
        if (mobileThemeToggle) {
            mobileThemeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
            const themeText = mobileThemeToggle.querySelector('.theme-text');
            if (themeText) {
                themeText.textContent = isDark ? 'Light Mode' : 'Dark Mode';
            }
        }
    }
}

// Initialize the shared navbar when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new SharedNavbar();
}); 