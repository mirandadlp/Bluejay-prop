/**
 * Agree Realty Recreation - JavaScript
 *
 * This file contains all interactive functionality and content management.
 * Edit the CONTENT object below to change text throughout the site.
 * Edit the PROPERTIES array to update the property listings.
 */

'use strict';

/* ==========================================
   CONTENT OBJECT - Edit text here
   ==========================================
   All text content is stored here for easy editing.
   Simply update the values to change text throughout the site.
*/
const CONTENT = {
    // Site
    siteName: 'Agree Realty',

    // Navigation Labels
    navLinks: [
        { label: 'ACQUIRE', href: 'acquire.html', key: 'acquire' },
        { label: 'DEVELOP', href: 'develop.html', key: 'develop' },
        { label: 'FUND', href: '#fund', key: 'fund' },
        { label: 'INVESTORS', href: '#investors', key: 'investors' },
        { label: 'SUSTAINABILITY', href: '#sustainability', key: 'sustainability' },
        { label: 'ABOUT', href: 'about.html', key: 'about' },
        { label: 'PROPERTIES', href: '#properties', key: 'properties' },
        { label: 'CAREERS', href: '#careers', key: 'careers' }
    ],

    // Hero Section
    heroHeadline: 'Net Lease REIT Excellence',
    heroSubheadline: 'Industry-leading acquisition and development of retail properties throughout the United States',
    heroCta: 'View Our Properties',

    // Stats/Counters
    statsCounters: [
        { value: 2603, suffix: '', label: 'Properties' },
        { value: 54, suffix: 'M', label: 'Square Feet' },
        { value: 50, suffix: '', label: 'States' },
        { value: 67, suffix: '%', label: 'Investment Grade' }
    ],

    // Stats Labels (for data attributes)
    statPropertiesLabel: 'Properties',
    statSqftLabel: 'Square Feet',
    statStatesLabel: 'States',
    statGradeLabel: 'Investment Grade',

    // Properties Section
    propertiesTitle: 'View Our Properties',
    propertiesSubtitle: 'Acquisition Targets',
    searchPlaceholder: 'Search by tenant or City, ST',
    loadMore: 'Load More Properties',
    noResults: 'No properties found matching your search.',

    // About Preview
    aboutEyebrow: 'About Agree Realty',
    aboutPreviewTitle: 'Industry Leader in Net Lease',
    aboutPreviewText: 'For over 50 years, Agree Realty has been a trusted partner in the acquisition and development of properties net leased to industry-leading retailers throughout the United States. Today, we own and operate a portfolio of over 2,600 properties spanning all 50 states.',
    aboutPreviewCta: 'Learn More About Us',

    // Services
    servicesTitle: 'What We Do',
    serviceAcquireTitle: 'Acquire',
    serviceAcquireDesc: '$9B+ acquired throughout the United States',
    serviceDevelopTitle: 'Develop',
    serviceDevelopDesc: '50+ years as a preferred development partner',
    serviceFundTitle: 'Fund',
    serviceFundDesc: 'Flexible capital solutions for sellers',

    // CTA Section
    ctaTitle: 'Ready to Partner with Us?',
    ctaText: 'Contact our team to discuss acquisition opportunities or development partnerships.',
    ctaBtnAcquire: 'Acquisition Inquiries',
    ctaBtnDevelop: 'Development Services',

    // Footer
    footerAddress1: '70 E. Long Lake Road',
    footerAddress2: 'Bloomfield Hills, MI 48304',
    footerPhone: '(248) 737-3980',
    footerEmail: 'info@agreerealty.com',
    footerCopyright: '© 2024 Agree Realty Corporation. All rights reserved.',

    // About Page
    aboutPageTitle: 'About Us',
    aboutPageSubtitle: 'A leading Real Estate Investment Trust focused on net leased retail properties',
    aboutIntroTitle: 'Our Story',
    aboutIntroText: 'Agree Realty Corporation is a fully integrated, self-administered, and self-managed real estate investment trust (REIT) focused on the acquisition and development of properties net leased to industry leading, omni-channel retail tenants throughout the United States.',
    aboutHistoryTitle: 'Our History',
    aboutHistoryText: 'Founded in 1971 as Agree Development Company, we have grown from a regional developer to a national leader in the net lease sector. Today, Agree Realty is a $12B+ industry leader with a portfolio spanning all 50 states.',
    aboutMissionTitle: 'Our Mission',
    aboutMissionText: 'To be the premier net lease REIT, delivering consistent growth and value for our shareholders through disciplined acquisitions, strategic development, and operational excellence.',

    // Acquire Page
    acquirePageTitle: 'Acquire',
    acquirePageSubtitle: 'We acquire high-quality net lease properties throughout the United States',
    acquireStatValue: '$9B+',
    acquireStatLabel: 'Acquired Throughout the United States',
    acquireIntroTitle: 'Acquisition Focus',
    acquireIntroText: 'Agree Realty has acquired over $9 billion in retail net lease properties throughout the United States, with individual acquisitions ranging from $2 million to $50 million per asset. We focus on properties that offer stable, long-term cash flows with industry-leading tenants.',
    acquireCriteriaTitle: 'Acquisition Criteria',
    acquireCriteria: [
        'Single-tenant and multi-tenant net lease properties',
        'Sale-leasebacks with industry-leading tenants',
        'Properties with short or long-term leases',
        'Individual acquisitions from $2M to $50M',
        'Portfolio transactions up to $500M+'
    ],

    // Develop Page
    developPageTitle: 'Develop',
    developPageSubtitle: 'For over 50 years, we have been a preferred development partner for industry-leading retailers',
    developIntroTitle: 'Development Excellence',
    developIntroText: 'For over 50 years, Agree has been a preferred development partner for industry-leading retailers, priding ourselves on our ability to undertake all aspects of the development process from site identification to grand opening.',
    developProcessTitle: 'Our Process',
    developProcess: [
        { title: 'Site Identification', desc: 'Market feasibility and saturation evaluations to identify optimal locations' },
        { title: 'Due Diligence', desc: 'Comprehensive entitlement administration and regulatory compliance' },
        { title: 'Design & Permitting', desc: 'Full architectural design services and permit acquisition' },
        { title: 'Construction', desc: 'Ground-up construction with rigorous quality control' },
        { title: 'Asset Management', desc: 'Lease negotiation and ongoing property management' }
    ],

    // Regional Contacts
    regionalContacts: [
        { region: 'Northeast', name: 'John Smith', title: 'Senior Vice President', email: 'jsmith@agreerealty.com', phone: '(248) 737-3980' },
        { region: 'Southeast', name: 'Jane Doe', title: 'Vice President', email: 'jdoe@agreerealty.com', phone: '(248) 737-3980' },
        { region: 'Midwest', name: 'Bob Johnson', title: 'Vice President', email: 'bjohnson@agreerealty.com', phone: '(248) 737-3980' },
        { region: 'Southwest', name: 'Sarah Williams', title: 'Vice President', email: 'swilliams@agreerealty.com', phone: '(248) 737-3980' },
        { region: 'West', name: 'Mike Brown', title: 'Senior Vice President', email: 'mbrown@agreerealty.com', phone: '(248) 737-3980' },
        { region: 'National Accounts', name: 'Chris Davis', title: 'Executive Vice President', email: 'cdavis@agreerealty.com', phone: '(248) 737-3980' }
    ]
};

/* ==========================================
   PROPERTIES DATA - Edit property listings here
   ==========================================
   Add, remove, or edit properties in this array.
   Each property should have: tenant, city, state, type
   type: 'lease' or 'sale'
*/
const PROPERTIES = [
    // Properties for Lease
    { tenant: 'Walmart', city: 'Phoenix', state: 'AZ', type: 'lease' },
    { tenant: 'Target', city: 'Austin', state: 'TX', type: 'lease' },
    { tenant: 'CVS Pharmacy', city: 'Miami', state: 'FL', type: 'lease' },
    { tenant: 'Walgreens', city: 'Chicago', state: 'IL', type: 'lease' },
    { tenant: 'Dollar General', city: 'Nashville', state: 'TN', type: 'lease' },
    { tenant: 'Home Depot', city: 'Atlanta', state: 'GA', type: 'lease' },
    { tenant: "Lowe's", city: 'Charlotte', state: 'NC', type: 'lease' },
    { tenant: 'Best Buy', city: 'Denver', state: 'CO', type: 'lease' },
    { tenant: 'Tractor Supply', city: 'Columbus', state: 'OH', type: 'lease' },
    { tenant: 'AutoZone', city: 'Dallas', state: 'TX', type: 'lease' },
    { tenant: "O'Reilly Auto Parts", city: 'Houston', state: 'TX', type: 'lease' },
    { tenant: 'Starbucks', city: 'Seattle', state: 'WA', type: 'lease' },
    { tenant: "McDonald's", city: 'Los Angeles', state: 'CA', type: 'lease' },
    { tenant: 'Chick-fil-A', city: 'San Antonio', state: 'TX', type: 'lease' },
    { tenant: 'Chipotle', city: 'San Diego', state: 'CA', type: 'lease' },
    { tenant: "Wendy's", city: 'Columbus', state: 'OH', type: 'lease' },
    { tenant: 'Advance Auto Parts', city: 'Raleigh', state: 'NC', type: 'lease' },
    { tenant: '7-Eleven', city: 'Fort Worth', state: 'TX', type: 'lease' },
    { tenant: 'Wawa', city: 'Philadelphia', state: 'PA', type: 'lease' },
    { tenant: 'Circle K', city: 'Tempe', state: 'AZ', type: 'lease' },
    { tenant: 'Dollar Tree', city: 'Chesapeake', state: 'VA', type: 'lease' },
    { tenant: 'Family Dollar', city: 'Matthews', state: 'NC', type: 'lease' },
    { tenant: 'Aldi', city: 'Batavia', state: 'IL', type: 'lease' },
    { tenant: 'Kroger', city: 'Cincinnati', state: 'OH', type: 'lease' },
    { tenant: 'Publix', city: 'Lakeland', state: 'FL', type: 'lease' },
    { tenant: 'TJ Maxx', city: 'Framingham', state: 'MA', type: 'lease' },
    { tenant: 'Ross Stores', city: 'Dublin', state: 'CA', type: 'lease' },
    { tenant: "Burlington", city: 'Burlington', state: 'NJ', type: 'lease' },
    { tenant: 'Marshalls', city: 'Framingham', state: 'MA', type: 'lease' },
    { tenant: 'HomeGoods', city: 'Framingham', state: 'MA', type: 'lease' },
    { tenant: 'PetSmart', city: 'Phoenix', state: 'AZ', type: 'lease' },
    { tenant: 'Petco', city: 'San Diego', state: 'CA', type: 'lease' },
    { tenant: 'Ulta Beauty', city: 'Bolingbrook', state: 'IL', type: 'lease' },
    { tenant: 'Sephora', city: 'San Francisco', state: 'CA', type: 'lease' },
    { tenant: 'Dick\'s Sporting Goods', city: 'Coraopolis', state: 'PA', type: 'lease' },
    { tenant: 'Academy Sports', city: 'Katy', state: 'TX', type: 'lease' },
    { tenant: 'Five Below', city: 'Philadelphia', state: 'PA', type: 'lease' },
    { tenant: 'Ollie\'s Bargain Outlet', city: 'Harrisburg', state: 'PA', type: 'lease' },
    { tenant: 'Hobby Lobby', city: 'Oklahoma City', state: 'OK', type: 'lease' },
    { tenant: 'Michaels', city: 'Irving', state: 'TX', type: 'lease' },

    // Properties for Sale
    { tenant: 'Kohl\'s', city: 'Menomonee Falls', state: 'WI', type: 'sale' },
    { tenant: 'JCPenney', city: 'Plano', state: 'TX', type: 'sale' },
    { tenant: 'Macy\'s', city: 'Cincinnati', state: 'OH', type: 'sale' },
    { tenant: 'Bed Bath & Beyond', city: 'Union', state: 'NJ', type: 'sale' },
    { tenant: 'Big Lots', city: 'Columbus', state: 'OH', type: 'sale' },
    { tenant: 'Office Depot', city: 'Boca Raton', state: 'FL', type: 'sale' },
    { tenant: 'Staples', city: 'Framingham', state: 'MA', type: 'sale' },
    { tenant: 'Pier 1 Imports', city: 'Fort Worth', state: 'TX', type: 'sale' },
    { tenant: 'Tuesday Morning', city: 'Dallas', state: 'TX', type: 'sale' },
    { tenant: 'Party City', city: 'Rockaway', state: 'NJ', type: 'sale' },
    { tenant: 'Aaron\'s', city: 'Atlanta', state: 'GA', type: 'sale' },
    { tenant: 'Rent-A-Center', city: 'Plano', state: 'TX', type: 'sale' },
    { tenant: 'GameStop', city: 'Grapevine', state: 'TX', type: 'sale' },
    { tenant: 'GNC', city: 'Pittsburgh', state: 'PA', type: 'sale' },
    { tenant: 'Vitamin Shoppe', city: 'Secaucus', state: 'NJ', type: 'sale' }
];

/* ==========================================
   DEVELOPMENT PROJECTS DATA
   ========================================== */
const DEVELOPMENT_PROJECTS = {
    underConstruction: [
        { tenant: 'Starbucks', city: 'Phoenix', state: 'AZ', sqft: '2,500' },
        { tenant: 'Chipotle', city: 'Austin', state: 'TX', sqft: '2,400' },
        { tenant: '7-Eleven', city: 'Dallas', state: 'TX', sqft: '3,000' },
        { tenant: 'Wawa', city: 'Tampa', state: 'FL', sqft: '5,600' },
        { tenant: 'Quick Quack Car Wash', city: 'Houston', state: 'TX', sqft: '4,200' },
        { tenant: 'Tractor Supply', city: 'Nashville', state: 'TN', sqft: '19,000' }
    ],
    recentlyCompleted: [
        { tenant: "McDonald's", city: 'Charlotte', state: 'NC', sqft: '4,000' },
        { tenant: 'Chick-fil-A', city: 'Atlanta', state: 'GA', sqft: '4,500' },
        { tenant: 'Dollar General', city: 'Raleigh', state: 'NC', sqft: '9,100' },
        { tenant: 'Gerber Collision', city: 'Denver', state: 'CO', sqft: '15,000' },
        { tenant: 'CAVA', city: 'Scottsdale', state: 'AZ', sqft: '2,800' },
        { tenant: 'Dutch Bros', city: 'San Antonio', state: 'TX', sqft: '950' }
    ]
};

/* ==========================================
   INITIALIZATION
   ========================================== */
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all features
    initHeader();
    initNavigation();
    initSearch();
    initCounters();
    initScrollReveal();
    initPropertyList();
    initTabs();
    initAccordions();
    updateContent();
});

/* ==========================================
   HEADER - Sticky behavior on scroll
   ========================================== */
function initHeader() {
    const header = document.getElementById('site-header');
    if (!header) return;

    let ticking = false;
    const scrollThreshold = 20;

    function updateHeader() {
        const scrollY = window.scrollY;

        if (scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }, { passive: true });

    // Initial check
    updateHeader();

    // Set active nav link based on current page
    setActiveNavLink();
}

/* ==========================================
   ACTIVE NAV LINK DETECTION
   ========================================== */
function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const pageName = currentPath.split('/').pop() || 'index.html';

    // Map page names to nav data attributes
    const pageNavMap = {
        'about.html': 'about',
        'criteria.html': 'criteria',
        'properties.html': 'properties',
        'contact.html': 'contact'
    };

    const activeKey = pageNavMap[pageName];

    if (activeKey) {
        // Desktop nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            if (link.dataset.nav === activeKey) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Mobile nav links
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            if (link.dataset.nav === activeKey) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
}

/* ==========================================
   MOBILE NAVIGATION
   ========================================== */
function initNavigation() {
    const toggle = document.getElementById('nav-toggle');
    const overlay = document.getElementById('mobile-nav-overlay');
    const mobileMenu = document.getElementById('mobile-nav-menu');

    if (!toggle || !overlay) return;

    let scrollPosition = 0;
    let focusableElements = [];
    let firstFocusable = null;
    let lastFocusable = null;

    function openMobileNav() {
        // Store scroll position and lock body
        scrollPosition = window.scrollY;
        document.body.classList.add('mobile-nav-open');
        document.body.style.top = `-${scrollPosition}px`;

        // Show overlay
        overlay.hidden = false;
        // Force reflow for animation
        overlay.offsetHeight;
        overlay.classList.add('active');
        toggle.setAttribute('aria-expanded', 'true');

        // Set up focus trap
        focusableElements = overlay.querySelectorAll(
            'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        firstFocusable = focusableElements[0];
        lastFocusable = focusableElements[focusableElements.length - 1];

        // Focus first menu item
        if (firstFocusable) {
            setTimeout(() => firstFocusable.focus(), 100);
        }
    }

    function closeMobileNav() {
        overlay.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');

        // Restore body scroll
        document.body.classList.remove('mobile-nav-open');
        document.body.style.top = '';
        window.scrollTo(0, scrollPosition);

        // Hide overlay after animation
        setTimeout(() => {
            overlay.hidden = true;
        }, 250);

        // Return focus to toggle
        toggle.focus();
    }

    function isNavOpen() {
        return overlay.classList.contains('active');
    }

    // Toggle button click
    toggle.addEventListener('click', () => {
        if (isNavOpen()) {
            closeMobileNav();
        } else {
            openMobileNav();
        }
    });

    // Close menu when clicking a link
    if (mobileMenu) {
        mobileMenu.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', closeMobileNav);
        });
    }

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isNavOpen()) {
            closeMobileNav();
        }

        // Focus trap - Tab key handling
        if (e.key === 'Tab' && isNavOpen()) {
            if (e.shiftKey) {
                // Shift + Tab
                if (document.activeElement === firstFocusable || document.activeElement === toggle) {
                    e.preventDefault();
                    lastFocusable.focus();
                }
            } else {
                // Tab
                if (document.activeElement === lastFocusable) {
                    e.preventDefault();
                    toggle.focus();
                }
            }
        }
    });

    // Close on click outside (on overlay background)
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeMobileNav();
        }
    });
}

/* ==========================================
   SEARCH OVERLAY
   ========================================== */
function initSearch() {
    const trigger = document.getElementById('search-trigger');
    const overlay = document.getElementById('search-overlay');
    const closeBtn = document.getElementById('search-close');
    const input = document.getElementById('site-search');

    if (!trigger || !overlay) return;

    function openSearch() {
        overlay.hidden = false;
        // Force reflow for animation
        overlay.offsetHeight;
        overlay.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
        document.body.classList.add('search-open');
        if (input) {
            setTimeout(() => input.focus(), 100);
        }
    }

    function closeSearch() {
        overlay.classList.remove('active');
        trigger.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('search-open');
        setTimeout(() => {
            overlay.hidden = true;
        }, 400);
        trigger.focus();
    }

    trigger.addEventListener('click', openSearch);

    if (closeBtn) {
        closeBtn.addEventListener('click', closeSearch);
    }

    // Close on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            closeSearch();
        }
    });

    // Close on click outside
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeSearch();
        }
    });
}

/* ==========================================
   COUNTER ANIMATIONS
   ========================================== */
function initCounters() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    if (counters.length === 0) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const animateCounter = (element) => {
        const target = parseInt(element.dataset.count, 10);
        const suffix = element.dataset.suffix || '';
        const duration = 2000; // 2 seconds
        const startTime = performance.now();

        if (prefersReducedMotion) {
            element.textContent = target.toLocaleString() + suffix;
            return;
        }

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function (ease-out cubic)
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeOut * target);

            element.textContent = current.toLocaleString() + suffix;

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = target.toLocaleString() + suffix;
            }
        }

        requestAnimationFrame(update);
    };

    // Use Intersection Observer to trigger animation when visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    });

    counters.forEach(counter => observer.observe(counter));
}

/* ==========================================
   SCROLL REVEAL ANIMATIONS
   ========================================== */
function initScrollReveal() {
    const sections = document.querySelectorAll('.reveal-section');
    if (sections.length === 0) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        sections.forEach(section => section.classList.add('revealed'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    sections.forEach(section => observer.observe(section));
}

/* ==========================================
   PROPERTY LIST - Rendering and Filtering
   ========================================== */
let currentPage = 1;
const itemsPerPage = 20;
let filteredProperties = { lease: [], sale: [] };
let currentTab = 'lease';

function initPropertyList() {
    const leaseList = document.getElementById('properties-list-lease');
    const saleList = document.getElementById('properties-list-sale');
    const searchInput = document.getElementById('property-search');
    const loadMoreBtn = document.getElementById('load-more');

    if (!leaseList && !saleList) return;

    // Initialize filtered properties
    filteredProperties.lease = PROPERTIES.filter(p => p.type === 'lease');
    filteredProperties.sale = PROPERTIES.filter(p => p.type === 'sale');

    // Render initial lists
    renderPropertyList('lease');
    renderPropertyList('sale');

    // Search filtering with debounce
    if (searchInput) {
        let debounceTimer;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                filterProperties(e.target.value);
            }, 200);
        });
    }

    // Load more functionality
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            currentPage++;
            renderPropertyList(currentTab);
        });
    }
}

function renderPropertyList(type) {
    const listElement = document.getElementById(`properties-list-${type}`);
    const loadMoreBtn = document.getElementById('load-more');
    if (!listElement) return;

    const properties = filteredProperties[type];
    const displayCount = currentPage * itemsPerPage;
    const displayProperties = properties.slice(0, displayCount);

    if (properties.length === 0) {
        listElement.innerHTML = `<li class="no-results">${CONTENT.noResults}</li>`;
        if (loadMoreBtn) loadMoreBtn.style.display = 'none';
        return;
    }

    listElement.innerHTML = displayProperties.map(property => `
        <li class="property-item">
            <span class="property-tenant">${escapeHtml(property.tenant)}</span>
            <span class="property-location">${escapeHtml(property.city)}, ${escapeHtml(property.state)}</span>
        </li>
    `).join('');

    // Show/hide load more button
    if (loadMoreBtn) {
        if (displayCount >= properties.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'inline-flex';
        }
    }
}

function filterProperties(query) {
    const normalizedQuery = query.toLowerCase().trim();
    currentPage = 1;

    if (!normalizedQuery) {
        filteredProperties.lease = PROPERTIES.filter(p => p.type === 'lease');
        filteredProperties.sale = PROPERTIES.filter(p => p.type === 'sale');
    } else {
        filteredProperties.lease = PROPERTIES.filter(p =>
            p.type === 'lease' && (
                p.tenant.toLowerCase().includes(normalizedQuery) ||
                p.city.toLowerCase().includes(normalizedQuery) ||
                p.state.toLowerCase().includes(normalizedQuery) ||
                `${p.city}, ${p.state}`.toLowerCase().includes(normalizedQuery)
            )
        );
        filteredProperties.sale = PROPERTIES.filter(p =>
            p.type === 'sale' && (
                p.tenant.toLowerCase().includes(normalizedQuery) ||
                p.city.toLowerCase().includes(normalizedQuery) ||
                p.state.toLowerCase().includes(normalizedQuery) ||
                `${p.city}, ${p.state}`.toLowerCase().includes(normalizedQuery)
            )
        );
    }

    renderPropertyList('lease');
    renderPropertyList('sale');
}

/* ==========================================
   TABS
   ========================================== */
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.properties-panel');

    if (tabButtons.length === 0) return;

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.dataset.tab;
            currentTab = tab;
            currentPage = 1;

            // Update button states
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });
            button.classList.add('active');
            button.setAttribute('aria-selected', 'true');

            // Update panel visibility
            tabPanels.forEach(panel => {
                panel.classList.remove('active');
                panel.hidden = true;
            });
            const activePanel = document.getElementById(`panel-${tab}`);
            if (activePanel) {
                activePanel.classList.add('active');
                activePanel.hidden = false;
            }

            // Re-render the active list
            renderPropertyList(tab);
        });
    });
}

/* ==========================================
   ACCORDIONS
   ========================================== */
function initAccordions() {
    const accordionTriggers = document.querySelectorAll('.accordion-trigger');

    accordionTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const item = trigger.closest('.accordion-item');
            const content = item.querySelector('.accordion-content');
            const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

            // Close other items in the same accordion
            const accordion = item.closest('.accordion');
            if (accordion) {
                accordion.querySelectorAll('.accordion-item').forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
                    }
                });
            }

            // Toggle current item
            trigger.setAttribute('aria-expanded', !isExpanded);
            item.classList.toggle('active');
        });
    });
}

/* ==========================================
   CONTENT UPDATER
   ========================================== */
function updateContent() {
    // Update all elements with data-content attribute
    document.querySelectorAll('[data-content]').forEach(element => {
        const key = element.dataset.content;
        if (CONTENT[key]) {
            element.textContent = CONTENT[key];
        }
    });
}

/* ==========================================
   DEVELOPMENT PROJECTS RENDERER
   ========================================== */
function renderDevelopmentProjects() {
    const underConstructionContainer = document.getElementById('under-construction-list');
    const completedContainer = document.getElementById('completed-list');

    if (underConstructionContainer) {
        underConstructionContainer.innerHTML = DEVELOPMENT_PROJECTS.underConstruction.map(project => `
            <div class="property-card">
                <div class="property-card-image"></div>
                <div class="property-card-content">
                    <h4 class="property-card-tenant">${escapeHtml(project.tenant)}</h4>
                    <p class="property-card-location">${escapeHtml(project.city)}, ${escapeHtml(project.state)}</p>
                    <span class="property-card-status construction">Under Construction</span>
                </div>
            </div>
        `).join('');
    }

    if (completedContainer) {
        completedContainer.innerHTML = DEVELOPMENT_PROJECTS.recentlyCompleted.map(project => `
            <div class="property-card">
                <div class="property-card-image"></div>
                <div class="property-card-content">
                    <h4 class="property-card-tenant">${escapeHtml(project.tenant)}</h4>
                    <p class="property-card-location">${escapeHtml(project.city)}, ${escapeHtml(project.state)}</p>
                    <span class="property-card-status completed">Completed</span>
                </div>
            </div>
        `).join('');
    }
}

/* ==========================================
   REGIONAL CONTACTS RENDERER
   ========================================== */
function renderRegionalContacts() {
    const container = document.getElementById('regional-contacts');
    if (!container) return;

    container.innerHTML = CONTENT.regionalContacts.map(contact => `
        <div class="contact-card">
            <p class="contact-card-region">${escapeHtml(contact.region)}</p>
            <h4 class="contact-card-name">${escapeHtml(contact.name)}</h4>
            <p class="contact-card-title">${escapeHtml(contact.title)}</p>
            <div class="contact-card-links">
                <a href="mailto:${escapeHtml(contact.email)}" class="contact-card-link">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <rect x="2" y="4" width="20" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="2"/>
                        <polyline points="2,4 12,13 22,4" fill="none" stroke="currentColor" stroke-width="2"/>
                    </svg>
                    ${escapeHtml(contact.email)}
                </a>
                <a href="tel:${contact.phone.replace(/[^0-9+]/g, '')}" class="contact-card-link">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" fill="none" stroke="currentColor" stroke-width="2"/>
                    </svg>
                    ${escapeHtml(contact.phone)}
                </a>
            </div>
        </div>
    `).join('');
}

/* ==========================================
   UTILITY FUNCTIONS
   ========================================== */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

/* ==========================================
   ACQUIRED PROPERTIES DATA
   ========================================== */
const ACQUIRED_PROPERTIES = {
    "Alabama": [
        { tenant: "Office Depot", address: "3044 South Mckenzie Street, Foley, AL" }
    ],
    "Arizona": [
        { tenant: "7 Eleven", address: "SWC 67th Ave. & Camelback, Glendale, AZ" },
        { tenant: "Church’s Chicken", address: "12045 N 32nd St, Phoenix, AZ" },
        { tenant: "Circle K", address: "SEC Grand Ave. & Court St., Nogales, AZ" },
        { tenant: "Circle K", address: "11025 W Buckeye Rd, Avondale, AZ" },
        { tenant: "Circle K", address: "SWC Chandler Blvd & McQueen, Chandler, AZ" },
        { tenant: "Circle K", address: "SEC Highway 89 & Smokerise, Flagstaff, AZ" },
        { tenant: "Circle K", address: "3130 Stockton Hill Road, Kingman, AZ" },
        { tenant: "Circle K", address: "10068 W Hwy 69, Mayer, AZ" },
        { tenant: "Chase Bank", address: "SEC Greenfield & McKellips, Mesa, AZ" },
        { tenant: "Circle K", address: "7510 W Peoria Ave, Peoria, AZ" },
        { tenant: "Circle K", address: "SEC 83rd Ave. & Camelback, Phoenix, AZ" },
        { tenant: "Circle K", address: "SEC 67th Ave. & Thomas, Phoenix, AZ" },
        { tenant: "Circle K", address: "NEC 59th Ave. & Indian School, Phoenix, AZ" },
        { tenant: "Circle K", address: "SEC 35th Ave. & Union Hills, Phoenix, AZ" },
        { tenant: "Circle K", address: "NWC 40th St. & Greenway, Phoenix, AZ" },
        { tenant: "Circle K", address: "NEC 75th Ave. & McDowell, Phoenix, AZ" },
        { tenant: "Circle K", address: "NEC 67th Ave. & McDowell, Phoenix, AZ" },
        { tenant: "Circle K", address: "SEC 48th St. & Thomas, Phoenix, AZ" },
        { tenant: "Circle K", address: "SEC 35th Ave. & Bethany Home, Phoenix, AZ" },
        { tenant: "Circle K", address: "SWC Parkside & Baseline, Tempe, AZ" },
        { tenant: "Circle K", address: "NEC 12th Ave. & Ajo Way, Tucson, AZ" },
        { tenant: "Circle K", address: "NWC 12th Ave. & Drexel, Tucson, AZ" },
        { tenant: "Circle K", address: "NEC Park & Irvington, Tucson, AZ" },
        { tenant: "Circle K", address: "655 W 22nd St, Tucson, AZ" },
        { tenant: "Fresh & Easy Anchored Shopping Center", address: "SWC 12th St. & Northern, Phoenix, AZ" },
        { tenant: "Jack in the Box", address: "208 N Grand Ave, Nogales, AZ" },
        { tenant: "Strip Shopping Center", address: "SWC Gilbert & Guadalupe, Gilbert, AZ" },
        { tenant: "Target", address: "SWC Dobson & Main, Mesa, AZ" },
        { tenant: "Title Max", address: "NWC 51st Ave. & Thomas, Phoenix, AZ" },
        { tenant: "Vacant Building", address: "SWC Cave Creek & Bell, Phoenix, AZ" },
        { tenant: "Vacant CVS", address: "NNEC Frank Lloyd Wright & Shea, Scottsdale, AZ" },
        { tenant: "Vacant CVS", address: "WSWC Brown & Recker, Mesa, AZ" },
        { tenant: "Vacant Dry Cleaners", address: "ESEC 32nd St. & Thomas, Phoenix, AZ" },
        { tenant: "Vacant Gas Station", address: "NWC Baseline & Alma School, Mesa, AZ" },
        { tenant: "Vacant Gas Station", address: "NEC 35th Ave. & Peoria, Phoenix, AZ" },
        { tenant: "Vacant Gas Station", address: "SWC 75th Ave. & Thomas, Phoenix, AZ" },
        { tenant: "Vacant Gas Station", address: "NWC Rural & Southern, Tempe, AZ" },
        { tenant: "Vacant KFC", address: "NNEC 67th Ave. & Camelback, Glendale, AZ" },
        { tenant: "Vacant KFC", address: "WNWC 35th Ave. & Peoria, Peoria, AZ" },
        { tenant: "Vacant Land", address: "NWC 19th Ave. & Glendale, Phoenix, AZ" },
        { tenant: "Vacant Long John Silvers", address: "NWC Squaw Peak & Bell, Phoenix, AZ" },
        { tenant: "Vacant Osco", address: "NWC Alma School & Elliot, Chandler, AZ" },
        { tenant: "Vacant Osco Drug", address: "NEC Dobson & Baseline, Mesa, AZ" },
        { tenant: "Big 5", address: "19th Ave And Bell Rd, Phoenix, AZ" },
        { tenant: "Burger King", address: "2207 West Happy Valley Road, Phoenix, AZ" }
    ],
    "California": [
        { tenant: "7 Eleven", address: "NWC Wilcox & Pomona, Monterey Park, CA" },
        { tenant: "7 Eleven", address: "711 Oceanside Blvd., Oceanside, CA" },
        { tenant: "7 Eleven", address: "1104 S Blosser Road, Santa Maria, CA" },
        { tenant: "7 Eleven", address: "6625 Lankershim Blvd, North Hollywood, CA" },
        { tenant: "7 Eleven", address: "5203 Olive Drive, Bakersfield, CA" },
        { tenant: "7 Eleven and Autozone", address: "301 S Atlantic Blvd, Alhambra, CA" },
        { tenant: "Bob’s Big Boy", address: "North of NWC PCH & Hawthorne, Torrance, CA" },
        { tenant: "Burger King", address: "82 W Las Tunas Dr, Arcadia, CA" },
        { tenant: "Burger King", address: "1011 N. Western Ave, Los Angeles, CA" },
        { tenant: "Burger King", address: "8295 E Santa Ana Canyon Rd, Anaheim Hills, CA" },
        { tenant: "Carls Jr", address: "85 S Tower Square, Tulare, CA" },
        { tenant: "Carls Jr", address: "21532 Brookhurst St., Huntington Beach, CA" },
        { tenant: "Carrows Restaurant", address: "Imperial Hwy & Beach, La Habra, CA" },
        { tenant: "Cocos", address: "27750 Crown Valley Parkway, Mission Viejo, CA" },
        { tenant: "Enterprise Rental Car", address: "1325 Industrial Park Ave, Redlands, CA" },
        { tenant: "Fast Food Drive Thru", address: "13621 Francisquito Ave., Baldwin Park, CA" },
        { tenant: "Islands", address: "26582 Towne Centre Dr, Foothill Ranch, CA" },
        { tenant: "Jack in the Box", address: "11400 S Figueroa St, Los Angeles, CA" },
        { tenant: "Long John Silvers", address: "6740 N Blackstone Ave, Fresno, CA" },
        { tenant: "Outback Steakhouse", address: "26652 Portola Pkwy, Foothill Ranch, CA" },
        { tenant: "Taco Bell", address: "12786 Van Nuys Blvd, Pacoima, CA" },
        { tenant: "Titlemax", address: "2800 W Florida Ave, Hemet, CA" },
        { tenant: "Vacant Conroys Flowers", address: "NEC Beach & Artesia, Buena Park, CA" },
        { tenant: "Vacant KFC", address: "SEC Washington Pl & Centinela, Culver City, CA" },
        { tenant: "Vacant Land", address: "SWC Colima & Whittier, Whittier, CA" },
        { tenant: "Vacant Retail Building", address: "NWC Valley & Garvey, El Monte, CA" },
        { tenant: "Vacant Gas Station", address: "3550 Florin Rd., Sacramento, CA" },
        { tenant: "Vacant Walmart", address: "Hwy 65 & Five Star, Rocklin, CA" },
        { tenant: "7 Eleven", address: "301 S Atlantic Blvd, Alhambra, CA" },
        { tenant: "El Pollo Loco", address: "18402 Yorba Linda Boulevard, Yorba Linda, CA" },
        { tenant: "Circle K", address: "540 West Big Bear Blvd, Big Bear City, CA" },
        { tenant: "7 Eleven", address: "3868 Delaware Street, Fremont, CA" },
        { tenant: "Del Taco", address: "18600 South Western Avenue, Gardena, CA" },
        { tenant: "New Restaurant Development", address: "200 S State College Blvd, Brea, CA" },
        { tenant: "Del Taco", address: "2525 Watt Ave, Sacramento, CA" },
        { tenant: "7 Eleven", address: "730 E Foothill Blvd, Pomona, CA" },
        { tenant: "Del Taco", address: "22349 El Toro Rd, Lake Forest, CA" },
        { tenant: "7 Eleven", address: "636 N Vine Ave, Ontario, CA" },
        { tenant: "7 Eleven", address: "194 W Napa St, Sonoma, CA" },
        { tenant: "7 Eleven", address: "140 Beach Road, Marina, CA" }
    ],
    "Colorado": [
        { tenant: "7 Eleven", address: "SWC Dartmouth & Broadway, Englewood, CO" },
        { tenant: "7 Eleven", address: "607 E Alameda Ave, Denver, CO" },
        { tenant: "7 Eleven", address: "NWC Uintah & 19th St., Colorado Springs, CO" },
        { tenant: "7 Eleven", address: "402 West 3rd, Wray, CO" },
        { tenant: "7 Eleven", address: "14490 E Colfax Ave, Aurora, CO" },
        { tenant: "O’Riley Auto", address: "SSWC Townsend Ave & Columbia Way, Montrose, CO" },
        { tenant: "Safeway Anchored Shopping Center", address: "SEC Mexico & Buckley, Aurora, CO" },
        { tenant: "7 Eleven", address: "1600 W 92nd Ave, Federal Heights, CO" },
        { tenant: "7 Eleven", address: "1690 Pearl St, Denver, CO" }
    ],
    "Connecticut": [
        { tenant: "Aspen Dental", address: "1128 Farmington Ave, Bristol, CT" }
    ],
    "Florida": [
        { tenant: "7 Eleven", address: "SWC Aloma Ave. & Forsyth Ave., Winter Park, FL" },
        { tenant: "7 Eleven", address: "NWC 15th & Whitfield, Sarasota, FL" },
        { tenant: "7 Eleven", address: "SEC US-19 & New York, Hudson, FL" },
        { tenant: "7 Eleven", address: "8400 N Atlantic Ave, Cape Canaveral, FL" },
        { tenant: "7 Eleven", address: "NEC Park & John Young Parkway, Orlando, FL" },
        { tenant: "7 Eleven", address: "290 Lakeland Park Blvd, Lakeland, FL" },
        { tenant: "7 Eleven", address: "2011 Cortez Blvd, Bradenton, FL" },
        { tenant: "Churchs", address: "SEC 32nd & Hillsborough, Tampa, FL" },
        { tenant: "Hardees", address: "11769 Panama City Beach Pkwy, Panama City Beach, FL" },
        { tenant: "Hooters", address: "7222 Augusta National Dr, Orlando, FL" },
        { tenant: "Wendys", address: "280 Lakeland Park Blvd, Lakeland, FL" },
        { tenant: "7 Eleven", address: "7525 Osceola Polk Line Road, Davenport, FL" },
        { tenant: "Burger King", address: "9675 Bird Rd, Miami, FL" },
        { tenant: "Einstein Bagels", address: "4639 Kirkman Rd, Orlando, FL" }
    ],
    "Illinois": [
        { tenant: "7 Eleven", address: "SWC Harlem & 26th, Riverside, IL" },
        { tenant: "7 Eleven", address: "1156 S York Rd, Bensenville, IL" },
        { tenant: "Autozone", address: "NWC State St. & 27th, East Saint Louis, IL" },
        { tenant: "Autozone", address: "NWC US 6 & US 5, Minooka, IL" },
        { tenant: "Autozone", address: "5509 Main St, Lisle, IL" },
        { tenant: "Burger King", address: "311 N Poplar St, Centralia, IL" },
        { tenant: "Long John Silvers", address: "1208 Charleston Ave, Mattoon, IL" },
        { tenant: "Aspen Dental", address: "17725 Halsted Street, Homewood, IL" },
        { tenant: "7 Eleven", address: "31 Alexander Cir, Romeoville, IL" },
        { tenant: "7 Eleven Strip Center", address: "1636 38th St, Rock Island, IL" },
        { tenant: "White Castle", address: "15801 S Harlem Ave, Orland Park, IL" },
        { tenant: "White Castle", address: "6646 S Halsted St, Chicago, IL" },
        { tenant: "7 Eleven", address: "1230 W Spring St, South Elgin, IL" }
    ],
    "Indiana": [
        { tenant: "Arby's", address: "2101 N Calumet Ave, Valpraraiso, IN" },
        { tenant: "Autozone", address: "SSEC Coliseum & Lake, Fort Wayne, IN" },
        { tenant: "Autozone", address: "SWC Hghwy 66 & 1st Ave, Evansville, IN" },
        { tenant: "O’reilly Auto", address: "SWC Hghwy 66 & 1st Ave, Evansville, IN" },
        { tenant: "Wendys", address: "900 W Main St, Peru, IN" },
        { tenant: "White Castle", address: "8740 Michigan Rd, Indianapolis, IN" },
        { tenant: "Burger King", address: "4360 National Rd E, Richmond, IN" },
        { tenant: "Burger King", address: "11741 Pendleton Pike, Indianapolis, IN" }
    ],
    "Iowa": [
        { tenant: "Advance Auto", address: "2519 Easton Blvd, Des Moines, IA" },
        { tenant: "KFC", address: "509 Lincoln Way, Ames, IA" }
    ],
    "Kansas": [
        { tenant: "Vacant KFC", address: "135th St. & Ridgeview, Olathe, KS" },
        { tenant: "Arby’s", address: "15021 Metcalf Ave, Overland Park, KS" },
        { tenant: "Fazoli’s", address: "3553 N Rock Rd, Wichita, KS" }
    ],
    "Louisiana": [
        { tenant: "Popeyes", address: "3565 Greenwood Road, Shreveport, LA" }
    ],
    "Maine": [
        { tenant: "7 Eleven", address: "52 Maine St, Brunswick, ME" }
    ],
    "Maryland": [
        { tenant: "7 Eleven", address: "NEC Pulaski Hwy & Joppa Rd, Joppa, MD" },
        { tenant: "7 Eleven", address: "2326 Sparrows Point Rd, Sparrows, MD" },
        { tenant: "7 Eleven", address: "19412 Walter Johnson Drive, Germantown, MD" },
        { tenant: "7 Eleven", address: "4213 Ridge Rd, Westminster, MD" }
    ],
    "Massachusetts": [
        { tenant: "7 Eleven", address: "76 Franklin St, Quincy, MA" },
        { tenant: "7 Eleven", address: "97 Union Street, East Hampton, MA" },
        { tenant: "Speedway", address: "354 Main St, Gloucester, MA" }
    ],
    "Michigan": [
        { tenant: "7 Eleven", address: "NWC Ellsworth & Hewitt, Ypsilanti, MI" },
        { tenant: "7 Eleven", address: "3136 Shattuck Road, Saginaw, MI" },
        { tenant: "7 Eleven", address: "35350 Jefferson Ave, Harrison Charter Township, MI" },
        { tenant: "Burger King", address: "3015 S Westnedge Ave, Kalamazoo, MI" },
        { tenant: "Aspen Dental", address: "1817 M-139, Benton Harbor, MI" },
        { tenant: "Family Dollar", address: "481 Pipestone St, Benton Harbor, MI" }
    ],
    "Minnesota": [
        { tenant: "Arby’s", address: "120 12th Street SW, Forest Lake, MN" },
        { tenant: "Hardees", address: "1250 S Pokegama Ave, Grand Rapids, MN" },
        { tenant: "White Castle", address: "9330 Baltimore St NE, Blaine, MN" },
        { tenant: "White Castle", address: "3465 124th Ave NW, Coon Rapids, MN" },
        { tenant: "Arby's", address: "1279 Town Centre Dr, Eagan, MN" }
    ],
    "Mississippi": [
        { tenant: "O’reilly Auto", address: "1937 Jerry Clower Blvd N, Yazoo City, MS" }
    ],
    "Missouri": [
        { tenant: "7 Eleven", address: "SWC Link & Midland, St. Louis, MO" },
        { tenant: "7 Eleven", address: "NWC Bates St. & Virginia, St. Louis, MO" },
        { tenant: "7 Eleven", address: "703 Union Rd, Saint Louis, MO" },
        { tenant: "Hardees", address: "NEC Hwy 30 & Gravois, House Springs, MO" },
        { tenant: "Hardees", address: "NWC Little Hill Expy & Missouri 94, St. Charles, MO" },
        { tenant: "Vacant Taco Bell", address: "Independence, MO" },
        { tenant: "Vacant KFC", address: "7017 N Oak, Gladstone, MO" },
        { tenant: "7 Eleven", address: "1301 Veterans Blvd, Festus, MO" }
    ],
    "Montana": [
        { tenant: "O’reilly Auto", address: "406 Pike Ave, Columbus, MT" }
    ],
    "Nevada": [
        { tenant: "Albertsons", address: "NEC Spring Mountain & Rainbow, Las Vegas, NV" },
        { tenant: "7 Eleven", address: "1100 Las Vegas Blvd S, Las Vegas, NV" }
    ],
    "New Jersey": [
        { tenant: "Autozone", address: "340 W Landis Ave, Vineland, NJ" },
        { tenant: "Popeyes", address: "275 N Delsea Dr, Vineland, NJ" },
        { tenant: "7 Eleven", address: "357 Market St, Elmwood Park, NJ" }
    ],
    "New Mexico": [
        { tenant: "7 Eleven", address: "NEC Lomas Blvd NW & 12th St. NW, Albuquerque, NM" },
        { tenant: "Office Depot", address: "2755 N Main St, Roswell, NM" },
        { tenant: "Taco Bell", address: "1518 E Santa Fe Ave, Grants, NM" },
        { tenant: "Family Dollar", address: "248 NM-50, Pecos, NM" },
        { tenant: "Speedway", address: "507 East Broadway, Farmington, NM" },
        { tenant: "Arby's", address: "3270 Coors Blvd NW, Albuquerque, NM" }
    ],
    "New York": [
        { tenant: "7 Eleven", address: "NEC Salina & Danfort, Syracuse, NY" },
        { tenant: "7 Eleven", address: "SWC Niagara & Hertel, Buffalo, NY" },
        { tenant: "7 Eleven", address: "NWC Park & Lake, Hamburg, NY" },
        { tenant: "7 Eleven", address: "SWC Olean & Emery, South Wales, NY" },
        { tenant: "7 Eleven", address: "358 Mooney Pond Rd, Brookhaven, NY" },
        { tenant: "7 Eleven", address: "154 Oak St, Copiague, NY" },
        { tenant: "Autozone", address: "852 N Clinton Ave, Rochester, NY" },
        { tenant: "Speedway", address: "229 S Brandywine Ave, Schenectady, NY" }
    ],
    "North Carolina": [
        { tenant: "Family Dollar", address: "1545 South Main Street, China Grove, NC" },
        { tenant: "Taco Bell", address: "1329 E Franklin Blvd, Gastonia, NC" },
        { tenant: "Krispy Kreme", address: "3706 W Gate City Blvd, Greensboro, NC" },
        { tenant: "Jack in the Box", address: "1600 E Roosevelt Blvd, Monroe, NC" }
    ],
    "Ohio": [
        { tenant: "Arby’s", address: "1636 W Market St, Akron, OH" },
        { tenant: "Autozone", address: "NEC Byrne Rd. & Schneider, Toledo, OH" },
        { tenant: "Circle K", address: "3871 Noble St, Bellaire, OH" },
        { tenant: "Wendy’s", address: "421 Wagner Ave, Greenville, OH" },
        { tenant: "Circle K", address: "1830 E Waterloo Road, Akron, OH" },
        { tenant: "Fazoli's", address: "1048 N Lexington-Springmill Rd, Mansfield, OH" }
    ],
    "Oregon": [
        { tenant: "7 Eleven", address: "SSWC Garden Home Rd & Oleson Rd, Portland, OR" },
        { tenant: "7 Eleven", address: "6303 SE Harmony Rd, Milwaukie, OR" },
        { tenant: "7 Eleven", address: "1430 NE 181st Ave, Portland, OR" },
        { tenant: "7 Eleven", address: "9111 Southeast Division St, Portland, OR" },
        { tenant: "Wendy’s", address: "641 Lancaster Dr NE, Salem, OR" },
        { tenant: "Jack in the Box", address: "550 NE Circle Blvd, Corvallis, OR" }
    ],
    "Pennsylvania": [
        { tenant: "7 Eleven", address: "SEC Main St. & Hanover, Biglersville, PA" },
        { tenant: "7 Eleven", address: "NEC New Rodgers Rd & New Falls Rd, Levittown, PA" },
        { tenant: "7 Eleven", address: "SWC 70th & Grovers, Philadelphia, PA" },
        { tenant: "7 Eleven", address: "2269 Noblestown Rd, Pittsburg, PA" },
        { tenant: "Autozone", address: "NWC of Pike & Broad, Philadelphia, PA" },
        { tenant: "KFC", address: "313 Lowther St, Lemoyne, PA" },
        { tenant: "McDonalds", address: "897 W Broadway, Red Lion, PA" },
        { tenant: "Pizza Hut", address: "675 E Main St, Hummelstown, PA" },
        { tenant: "7 Eleven", address: "651 W Main Street, Lansdale, PA" }
    ],
    "South Carolina": [
        { tenant: "Advance Auto", address: "NEC Columbia Ave & North Carolina Ave, Batesburg, SC" },
        { tenant: "KFC", address: "602 US-17, North Myrtle Beach, SC" },
        { tenant: "Waffle House", address: "604 Hwy 17 S, North Myrtle Beach, SC" }
    ],
    "Tennessee": [
        { tenant: "Circle K", address: "1725 N Germantown Pkwy, Cordova, TN" },
        { tenant: "Dollar Tree", address: "3060 Thomas St, Memphis, TN" }
    ],
    "Texas": [
        { tenant: "7 Eleven", address: "SWC County Rd W & 8th St, Odessa, TX" },
        { tenant: "7 Eleven", address: "SWC 4th St & Dixie Blvd, Odessa, TX" },
        { tenant: "7 Eleven", address: "WNWC University Blvd & Parkway Blvd, Odessa, TX" },
        { tenant: "7 Eleven", address: "1302 S 14th St, Abilene, TX" },
        { tenant: "Autozone", address: "SEC Nacogdoches Rd. & Judson Rd., San Antonio, TX" },
        { tenant: "Burger King", address: "605 N Main Street, Vidor, TX" },
        { tenant: "Circle K", address: "SEC Sarah Anne & McCombs, El Paso, TX" },
        { tenant: "Jack in the Box", address: "901 Dairy Ashford Road, Houston, TX" },
        { tenant: "Jack In the Box", address: "1329 S Jackson Street, Jacksonville, TX" },
        { tenant: "Jack in the Box", address: "3701 West Expressway 83, Palmview, TX" },
        { tenant: "Vacant Home Depot", address: "35E & Fortworth Dr., Denton, TX" },
        { tenant: "Vacant Gas Station", address: "SWC Beltline & Northgate, Irving, TX" },
        { tenant: "Jack in the Box", address: "3701 West Expressway 83, Palmview, TX" },
        { tenant: "Churchs", address: "234 Valley Hi Drive, San Antonio, TX" },
        { tenant: "Shipley Do Nuts", address: "1739 W 7th Ave, Corsicana, TX" },
        { tenant: "7 Eleven", address: "2417 Jupiter Rd, Plano, TX" }
    ],
    "Utah": [
        { tenant: "7 Eleven", address: "385 W 200 N, Kaysville, UT" },
        { tenant: "7 Eleven", address: "405 N Main St, Logan, UT" },
        { tenant: "7 Eleven", address: "704 E 3300 S, Millcreek, UT" },
        { tenant: "7 Eleven", address: "5203 W Daybreak Parkway, South Jordan, UT" },
        { tenant: "7 Eleven", address: "310 N 2000 W, West Point, UT" },
        { tenant: "Del Taco", address: "142 West Bulldog Blvd, Provo, UT" },
        { tenant: "Zaxby’s", address: "1781 N 2000 W, Clinton, UT 84015" },
        { tenant: "Zaxby’s", address: "141 W 12th St, Ogden, UT 84404" },
        { tenant: "Zaxby’s", address: "9400 Highland Dr, Sandy, UT 84093" },
        { tenant: "Zaxby’s", address: "2683 South High Commons Way, West Valley City, UT" },
        { tenant: "7 Eleven", address: "1515 S 500 W, Woods Cross, UT" }
    ],
    "Virginia": [
        { tenant: "7 Eleven", address: "NEC Bayview & Chesapeake, Norfolk, VA" },
        { tenant: "7 Eleven", address: "SWC Princess Anne & Colonial, Norfolk, VA" },
        { tenant: "7 Eleven", address: "10185 Warwick Blvd, Newport News, VA" },
        { tenant: "7 Eleven", address: "NEC Redgate & Orapax, Norfolk, VA" },
        { tenant: "7 Eleven", address: "NWC Greenwich & Witchduck, Virginia Beach, VA" },
        { tenant: "7 Eleven", address: "SEC Old Buckroe & Nickerson, Hampton, VA" },
        { tenant: "7 Eleven", address: "SWC Warwick Blvd & Youngs Mill, Newport News, VA" },
        { tenant: "7 Eleven", address: "NWC Washington & Massanutten, Strasburg, VA" },
        { tenant: "7 Eleven", address: "SWC General Puller Hwy & 1102, Deltaville, VA" },
        { tenant: "7 Eleven", address: "SSWC University City & Toms Creek, Blacksburg, VA" },
        { tenant: "7 Eleven", address: "SWC Tiffany & Princess Anne, Virginia Beach, VA" },
        { tenant: "7 Eleven", address: "SEC Longhill & Devon, Williamsburg, VA" },
        { tenant: "7 Eleven", address: "7535 Crab Thicket Rd, Gloucester Courthouse, VA" },
        { tenant: "7 Eleven", address: "3600 Washington Avenue, Newport News, VA" },
        { tenant: "7 Eleven", address: "290 S Main St, Broadway, VA" },
        { tenant: "7 Eleven", address: "13307 Warwick Blvd, Newport News, VA" },
        { tenant: "7 Eleven", address: "1160 Portsmouth Blvd, Suffolk, VA" },
        { tenant: "7 Eleven", address: "834 J Clyde Morris Blvd, Newport News, VA" },
        { tenant: "7 Eleven", address: "203 S Stuart Ave, Elkton, VA" },
        { tenant: "7 Eleven", address: "3963 George Washington Memorial Hwy, Hayes, VA" },
        { tenant: "7 Eleven", address: "30 S Reynolds St, Alexandria, VA" },
        { tenant: "7 Eleven", address: "800 Franklin St, Alexandria, VA" }
    ],
    "Washington": [
        { tenant: "7 Eleven", address: "SWC 15th Ave. & 125th St., Seattle, WA" },
        { tenant: "7 Eleven", address: "32740 SR 20, Oak Harbor, WA" },
        { tenant: "Jack in the Box", address: "100 W South Hill Rd, Sunnyside, WA" },
        { tenant: "Jack in the Box", address: "4305 Kitsap Way, Bremerton, WA" },
        { tenant: "7 Eleven", address: "31300 State Route 20, Oak Harbor, WA" },
        { tenant: "31300 State Route 20", address: "Oak Harbor, WA" }
    ],
    "West Virginia": [
        { tenant: "Hardees", address: "1506 Bigley Avenue, Charleston, WV" },
        { tenant: "Speedway", address: "524 Campbells Creek Drive, Charleston, WV" }
    ],
    "Wisconsin": [
        { tenant: "Autozone", address: "SWC Prairie & Mason, Beloit, WI" },
        { tenant: "Boston Market", address: "2678 S 108th St, West Allis, WI" },
        { tenant: "Dollar Tree", address: "3555 S Howell Ave St, Milwaukee, WI" },
        { tenant: "KFC", address: "2860 S 108th St, West Allis, WI" },
        { tenant: "Famous Daves", address: "3030 Milton Ave, Janesville, WI" },
        { tenant: "Dairy Queen", address: "6520 W North Ave, Wauwatosa, WI" },
        { tenant: "Arby's", address: "2601 N 20th Ave, Wausau, WI" }
    ]
};

/* ==========================================
   ACQUIRED PROPERTIES PAGE FUNCTIONALITY
   ========================================== */
function initAcquiredProperties() {
    const container = document.getElementById('acquired-properties');
    const searchInput = document.getElementById('property-search');
    const searchClear = document.getElementById('search-clear');
    const noResults = document.getElementById('no-results');
    const propertiesCount = document.getElementById('properties-count');
    const expandAllBtn = document.getElementById('expand-all-btn');
    const clearSearchBtn = document.getElementById('clear-search-btn');

    if (!container) return;

    // State management
    let allExpanded = true;
    let searchTerm = '';
    let debounceTimer = null;

    // Render the properties list
    renderAcquiredProperties();

    // Set up IntersectionObserver for reveal animations
    setupRevealAnimations();

    // Search functionality with debounce
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                searchTerm = e.target.value.trim().toLowerCase();
                filterAcquiredProperties(searchTerm);

                // Show/hide clear button
                if (searchClear) {
                    searchClear.hidden = !e.target.value;
                }
            }, 200);
        });
    }

    // Clear search
    if (searchClear) {
        searchClear.addEventListener('click', clearSearch);
    }

    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', clearSearch);
    }

    // Expand/Collapse all
    if (expandAllBtn) {
        expandAllBtn.addEventListener('click', () => {
            allExpanded = !allExpanded;
            toggleAllStates(allExpanded);
            updateExpandAllButton();
        });
    }

    function clearSearch() {
        if (searchInput) {
            searchInput.value = '';
            searchTerm = '';
            filterAcquiredProperties('');
            if (searchClear) searchClear.hidden = true;
            searchInput.focus();
        }
    }

    function updateExpandAllButton() {
        if (expandAllBtn) {
            const textEl = expandAllBtn.querySelector('.expand-all-text');
            if (textEl) {
                textEl.textContent = allExpanded ? 'Collapse All' : 'Expand All';
            }
            expandAllBtn.classList.toggle('collapsed', !allExpanded);
        }
    }

    function toggleAllStates(expand) {
        const stateSections = container.querySelectorAll('.state-section');
        stateSections.forEach(section => {
            const toggle = section.querySelector('.state-toggle');
            const propsCol = section.querySelector('.props-col');
            if (toggle && propsCol) {
                toggle.setAttribute('aria-expanded', expand ? 'true' : 'false');
                if (expand) {
                    propsCol.classList.remove('collapsed');
                    propsCol.style.maxHeight = propsCol.scrollHeight + 'px';
                } else {
                    propsCol.classList.add('collapsed');
                    propsCol.style.maxHeight = '0';
                }
            }
        });
    }

    function renderAcquiredProperties() {
        const states = Object.keys(ACQUIRED_PROPERTIES).sort();
        let totalProperties = 0;

        const html = states.map(state => {
            const properties = ACQUIRED_PROPERTIES[state];
            totalProperties += properties.length;
            const stateId = state.replace(/\s+/g, '-').toLowerCase();

            return `
                <section class="state-section" data-state="${escapeHtml(state)}" role="listitem">
                    <div class="state-col">
                        <button class="state-toggle" aria-expanded="true" aria-controls="state-${stateId}-list">
                            <div>
                                <span class="state-name">${escapeHtml(state)}</span>
                                <span class="state-count">${properties.length} ${properties.length === 1 ? 'property' : 'properties'}</span>
                            </div>
                            <span class="state-icon">
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <polyline points="6,9 12,15 18,9" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div class="props-col" id="state-${stateId}-list">
                        <div class="props-col-inner">
                            ${properties.map(prop => `
                                <article class="prop-row" data-tenant="${escapeHtml(prop.tenant.toLowerCase())}" data-address="${escapeHtml(prop.address.toLowerCase())}" data-state="${escapeHtml(state.toLowerCase())}">
                                    <div class="prop-tenant">${escapeHtml(prop.tenant)}</div>
                                    ${prop.address ? `<div class="prop-address">${escapeHtml(prop.address)}</div>` : ''}
                                </article>
                            `).join('')}
                        </div>
                    </div>
                </section>
            `;
        }).join('');

        container.innerHTML = html;

        // Update count
        if (propertiesCount) {
            propertiesCount.textContent = `${totalProperties} properties across ${states.length} states`;
        }

        // Set initial max-height for animation
        container.querySelectorAll('.props-col').forEach(col => {
            col.style.maxHeight = col.scrollHeight + 'px';
        });

        // Add toggle event listeners
        container.querySelectorAll('.state-toggle').forEach(toggle => {
            toggle.addEventListener('click', () => {
                const section = toggle.closest('.state-section');
                const propsCol = section.querySelector('.props-col');
                const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

                toggle.setAttribute('aria-expanded', !isExpanded);

                if (isExpanded) {
                    propsCol.classList.add('collapsed');
                    propsCol.style.maxHeight = '0';
                } else {
                    propsCol.classList.remove('collapsed');
                    propsCol.style.maxHeight = propsCol.scrollHeight + 'px';
                }

                // Update allExpanded state
                const allToggles = container.querySelectorAll('.state-toggle');
                allExpanded = Array.from(allToggles).every(t => t.getAttribute('aria-expanded') === 'true');
                updateExpandAllButton();
            });
        });
    }

    function filterAcquiredProperties(term) {
        const stateSections = container.querySelectorAll('.state-section');
        let visibleProperties = 0;
        let visibleStates = 0;

        stateSections.forEach(section => {
            const state = section.dataset.state.toLowerCase();
            const propRows = section.querySelectorAll('.prop-row');
            let visibleInState = 0;

            propRows.forEach(row => {
                const tenant = row.dataset.tenant;
                const address = row.dataset.address;
                const stateData = row.dataset.state;

                const matches = !term ||
                    tenant.includes(term) ||
                    address.includes(term) ||
                    stateData.includes(term);

                if (matches) {
                    row.classList.remove('hidden');
                    visibleInState++;
                    visibleProperties++;

                    // Highlight matching text
                    if (term) {
                        highlightText(row, term);
                    } else {
                        removeHighlight(row);
                    }
                } else {
                    row.classList.add('hidden');
                    removeHighlight(row);
                }
            });

            // Hide entire state section if no visible properties
            if (visibleInState === 0) {
                section.classList.add('hidden');
            } else {
                section.classList.remove('hidden');
                visibleStates++;

                // Update property count in state
                const countEl = section.querySelector('.state-count');
                if (countEl) {
                    countEl.textContent = `${visibleInState} ${visibleInState === 1 ? 'property' : 'properties'}`;
                }
            }
        });

        // Update total count
        if (propertiesCount) {
            if (term) {
                propertiesCount.textContent = `${visibleProperties} results in ${visibleStates} states`;
            } else {
                const totalProps = Object.values(ACQUIRED_PROPERTIES).reduce((sum, arr) => sum + arr.length, 0);
                const totalStates = Object.keys(ACQUIRED_PROPERTIES).length;
                propertiesCount.textContent = `${totalProps} properties across ${totalStates} states`;
            }
        }

        // Show/hide no results message
        if (noResults) {
            noResults.hidden = visibleProperties > 0;
        }
        container.style.display = visibleProperties > 0 ? '' : 'none';
    }

    function highlightText(row, term) {
        const tenantEl = row.querySelector('.prop-tenant');
        const addressEl = row.querySelector('.prop-address');
        const tenant = row.dataset.tenant;
        const address = row.dataset.address;

        if (tenantEl) {
            const originalTenant = ACQUIRED_PROPERTIES[row.closest('.state-section').dataset.state]
                ?.find(p => p.tenant.toLowerCase() === tenant)?.tenant || tenant;
            tenantEl.innerHTML = highlightMatch(originalTenant, term);
        }

        if (addressEl) {
            const originalAddress = ACQUIRED_PROPERTIES[row.closest('.state-section').dataset.state]
                ?.find(p => p.address?.toLowerCase() === address)?.address || address;
            addressEl.innerHTML = highlightMatch(originalAddress, term);
        }
    }

    function highlightMatch(text, term) {
        if (!term || !text) return escapeHtml(text);
        const regex = new RegExp(`(${escapeRegExp(term)})`, 'gi');
        return escapeHtml(text).replace(regex, '<mark class="highlight">$1</mark>');
    }

    function removeHighlight(row) {
        const tenantEl = row.querySelector('.prop-tenant');
        const addressEl = row.querySelector('.prop-address');
        const state = row.closest('.state-section')?.dataset.state;
        const tenant = row.dataset.tenant;
        const address = row.dataset.address;

        if (tenantEl && state) {
            const originalTenant = ACQUIRED_PROPERTIES[state]
                ?.find(p => p.tenant.toLowerCase() === tenant)?.tenant;
            if (originalTenant) tenantEl.textContent = originalTenant;
        }

        if (addressEl && state) {
            const originalAddress = ACQUIRED_PROPERTIES[state]
                ?.find(p => p.address?.toLowerCase() === address)?.address;
            if (originalAddress) addressEl.textContent = originalAddress;
        }
    }

    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    function setupRevealAnimations() {
        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
            // Immediately reveal all elements
            container.querySelectorAll('.state-section, .prop-row').forEach(el => {
                el.classList.add('revealed');
            });
            return;
        }

        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.1
        };

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');

                    // Reveal property rows with stagger
                    const rows = entry.target.querySelectorAll('.prop-row');
                    rows.forEach((row, index) => {
                        setTimeout(() => {
                            row.classList.add('revealed');
                        }, index * 30); // 30ms stagger
                    });

                    sectionObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        container.querySelectorAll('.state-section').forEach(section => {
            sectionObserver.observe(section);
        });
    }
}

// Export for potential use in other pages
window.AgreeRealty = {
    CONTENT,
    PROPERTIES,
    DEVELOPMENT_PROJECTS,
    ACQUIRED_PROPERTIES,
    renderPropertyList,
    renderDevelopmentProjects,
    renderRegionalContacts,
    filterProperties,
    initAcquiredProperties
};
