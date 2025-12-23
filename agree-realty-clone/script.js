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
    initUSMap();
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
   INTERACTIVE US MAP
   Using Albers USA projection - viewBox 0 0 960 600
   Paths derived from Natural Earth / US Census TIGER data
   ========================================== */
const US_STATES_PATHS = {
    "Alabama": "M637.99,484.365L641.789,483.449L641.859,482.958L642.868,483.717L642.299,484.237L641.559,483.986L639,484.57ZM631.733,377.687L631.663,377.418L645.797,376.315L656.213,375.591L674.675,373.792L678.633,373.436L679.333,376.175L682.592,387.496L691.648,420.023L692.268,420.368L692.078,421.097L693.027,421.851L693.667,424.682L694.487,425.979L695.806,427.17L696.216,428.717L696.886,429.33L696.426,431.654L697.765,432.039L698.635,432.722L698.035,433.791L696.626,434.83L695.846,435.922L696.196,436.979L696.256,438.643L695.976,440.33L695.056,442.712L695.756,445.036L695.726,445.888L697.186,447.407L697.705,449.649L697.326,450.816L697.525,451.628L697.206,453.21L697.425,454.717L697.006,455.184L697.376,457.169L698.935,458.751L699.844,461.069L682.952,463.118L671.057,464.35L659.242,465.349L650.545,466.19L650.785,466.908L650.115,469.185L651.855,470.82L652.304,471.736L654.843,473.044L655.183,474.008L654.394,476.787L655.133,477.914L656.023,478.433L655.013,479L654.663,480.448L653.854,481.154L654.444,481.452L653.504,482.03L650.905,482.947L647.466,483.752L645.077,483.904L645.527,483.151L646.387,483.571L648.776,482.847L648.936,482.188L647.047,480.418L645.817,479.805L645.147,478.112L645.587,476.95L645.297,475.216L644.758,474.329L643.338,473.832L642.389,474.807L642.609,475.52L641.899,477.884L642.019,480.845L641.569,482.153L640.519,482.322L640.519,481.621L639.07,480.973L638.02,481.335L637.691,480.95L636.521,481.469L635.182,470.423L632.833,451.932L632.313,447.564L632.593,436.605L633.132,406.378L633.522,389.563L633.782,379.859L632.693,379.263Z",
    "Alaska": "M102.565,542.559L103.035,541.257L103.475,541.438ZM97.577,560.543L97.997,559.941L98.607,560.344L98.587,559.34L100.196,558.137L100.846,557.267L100.606,556.578L101.856,555.971L101.336,558.207L101.896,557.658L102.805,558.633L103.415,558.184L103.075,559.737L102.116,559.235L102.325,559.9L100.946,559.591L100.726,560.525L99.387,561.144ZM93.619,572.465L94.799,571.905L95.388,572.745L94.179,572.868ZM91.9,566.002L92.55,564.881L94.239,563.707L95.258,563.801L95.648,564.939L95.768,563.789L95.448,562.522L96.338,561.909L96.958,562.364L97.987,562.23L97.447,561.331L98.957,562.084L98.197,561.366L99.836,561.547L99.776,562.253L100.506,562.137L101.506,561.278L102.265,562.954L101.656,562.732L101.586,564.128L102.895,563.929L102.155,565.494L100.446,564.881L101.066,565.832L100.166,566.767L98.707,567.45L99.966,567.666L98.507,568.273L98.157,568.944L97.707,568.25L97.927,567.368L96.518,569.943L95.598,570.679L94.549,570.877L95.828,569.342L95.278,569.242L95.998,567.654L93.909,570.089L92.949,568.944L92.929,567.444L91.84,566.609ZM91.7,573.294L92.889,572.004L93.499,572.372L92,573.534ZM87.512,577.977L88.221,577.317L88.191,578.491ZM70.689,583.927L70.779,583.045L71.278,583.769ZM69.949,581.971L70.619,581.527L70.529,583.185L69.909,583.068ZM67.14,583.757L67.93,582.864L67.56,582.321L68.18,581.731L69.249,582.006L68.959,582.63ZM64.741,580.47L65.461,579.88L67.12,580.435L66.97,581.217L66.191,580.417L66.061,582.087L65.391,581.387L64.871,581.93ZM66.47,554.902L66.67,554.038L68.26,553.314L67.28,555.054ZM59.933,581.515L60.323,581.077L61.373,581.79L60.603,582.093ZM57.384,582.683L58.304,582.537L57.794,583.53ZM65.131,515.328L66.231,515.135L66.261,515.725ZM55.105,586.151L55.175,585.812L57.184,586.898L56.655,587.202ZM43.92,587.208L45.239,587.149L45.099,587.593ZM42.021,585.701L42.301,585.375L43.23,586.209L42.451,586.869ZM40.002,586.174L41.131,585.807L41.871,586.893L40.102,586.986ZM43.51,538.496L45.489,538.951L46.459,538.14L47.788,538.175L48.748,537.702L48.848,538.63L49.628,538.607L50.087,539.541L50.177,542.168L48.408,542.221L47.608,542.962L46.919,542.028L46.129,541.9L43.71,539.675ZM30.785,590.939L32.795,590.343L33.234,590.577L35.304,588.656L36.113,589.234L36.293,588.726L35.254,588.341L34.824,587.698L35.503,586.893L37.363,586.706L37.213,587.401L37.892,587.751L38.572,586.974L39.202,587.698L37.393,589.082L39.502,588.376L39.432,588.983L38.522,589.549L37.193,589.777L36.033,591.003L34.244,590.769L33.334,591.295L31.735,591.657ZM49.927,496.276L52.047,495.406L54.635,494.093L58.224,492.528L60.303,491.851L62.882,491.36L64.671,491.547L64.701,492.633L63.922,494.595L64.241,495.663L66.121,495.949L67.47,495.885L68.54,496.51L69.379,496.218L70.279,496.773L71.388,495.196L73.128,495.43L72.788,494.595L71.598,493.988L70.349,494.25L70.619,492.977L69.599,491.232L68.949,491.051L68.64,490.07L69.649,489.474L70.439,490.852L70.139,491.868L71.488,493.649L72.288,493.427L70.789,491.383L71.208,490.14L72.108,489.439L71.308,488.838L69.139,489.141L65.521,487.472L65.631,486.467L65.211,484.208L61.962,479.905L60.473,478.906L59.893,477.762L58.444,476.466L59.453,476.261L60.023,475.333L60.563,472.875L63.032,473.482L66.141,473.424L68.39,472.116L69.379,470.977L69.959,468.677L70.559,467.206L72.858,464.473L74.097,463.656L75.647,464.088L76.986,463.615L78.705,462.377L80.355,460.719L81.654,460.205L82.944,460.981L85.323,460.444L86.272,459.726L87.961,457.437L88.691,457.408L91.08,458.412L91.26,458.996L90.021,459.989L90.111,460.946L90.87,461.069L91.23,460.187L92.12,459.539L92.51,458.64L93.579,459.569L93.679,461.098L94.709,461.548L95.468,460.649L97.178,460.357L99.846,461.057L99.217,462.108L99.367,462.716L101.246,463.072L100.856,464.041L102.815,464.38L103.315,463.726L104.744,463.65L104.904,464.029L107.243,463.048L109.103,463.802L109.562,463.609L110.332,464.455L110.692,464.088L112.191,465.092L113.631,465.29L114.34,464.981L117.119,464.817L118.459,465.687L119.758,466.073L120.648,465.868L122.437,464.432L124.096,463.924L129.604,466.517L130.843,466.663L145.017,538.093L146.917,538.367L147.017,537.655L149.046,538.233L149.885,536.803L152.154,536.16L152.194,538.297L153.004,538.893L154.404,539.243L154.963,540.236L159.841,543.301L161.101,545.683L163.01,543.167L163.95,542.869L164.149,541.847L163.75,540.493L164.409,540.312L163.94,539.342L165.349,538.432L166.828,536.908L169.037,538.192L169.197,539.302L169.917,540.247L170.977,540.201L172.696,541.421L173.595,542.6L175.485,543.085L177.974,544.761L177.764,545.175L179.443,546.577L180.193,547.569L181.392,548.468L183.461,550.582L185.401,552.31L185.231,553.367L186.63,553.256L186.77,554.663L187.979,554.827L188.649,556.28L189.649,555.837L192.198,556.648L193.537,556.485L195.166,556.952L195.606,557.617L196.986,557.302L197.855,558.657L197.755,559.935L198.355,561.261L199.784,563.258L199.285,566.422L198.325,568.454L197.655,567.841L197.196,568.279L195.386,565.587L196.046,564.507L195.406,562.744L194.537,561.226L193.797,560.875L195.056,562.516L195.396,564.817L195.086,565.651L193.847,565.745L192.418,565.295L191.368,564.274L191.598,563.281L191.078,561.331L191.068,563.176L190.638,563.754L190.908,564.63L189.789,564.268L189.339,563.485L189.579,562.323L189.099,560.718L189.249,559.457L188.639,560.8L189.079,561.459L188.169,562.417L187.31,561.162L186.3,561.121L186,560.35L186.44,559.258L187.24,558.908L186.66,557.915L187.49,557.869L185.58,557.063L185.331,556.123L184.261,555.813L182.882,554.663L180.423,554.26L180.253,552.847L179.513,551.259L178.723,551.125L178.603,550.436L180.792,550.775L178.823,549.84L178.194,549.91L176.224,548.316L175.665,546.682L175.525,547.411L173.506,547.627L172.326,545.981L170.147,543.727L168.877,541.269L167.658,540.551L167.388,541.094L168.748,542.151L169.127,543.342L170.687,545.444L171.966,548.556L170.647,548.276L170.027,547.406L169.187,547.411L168.198,548.077L167.678,546.285L166.568,544.988L166.089,545.631L164.949,545.245L164.489,544.323L164.159,545.018L163.21,544.708L163.14,545.228L164.469,545.31L165.789,546.203L166.369,546.209L167.668,548.229L166.468,549.233L165.819,549.251L165.399,550.15L164.079,549.093L163.42,549.268L161.241,548.241L159.461,547.131L159.281,546.466L157.542,545.391L156.053,545.134L154.743,544.486L152.574,543.926L150.625,543.091L150.955,542.203L151.565,542.308L150.905,540.317L150.995,538.945L150.435,540.808L148.636,542.262L146.307,542.343L144.058,541.707L144.508,540.65L143.268,541.182L139.49,540.89L138.43,540.983L133.232,542.589L131.933,544.375L132.353,543.173L133.102,542.268L133.732,542.162L132.593,541.38L130.244,541.246L130.843,540.814L129.934,540.592L130.294,539.477L128.824,540.72L126.825,539.687L126.035,539.938L126.805,538.834L125.406,539.897L125.586,540.709L123.337,541.602L123.477,539.996L124.086,540.09L126.465,538.794L125.945,537.9L124.966,538.729L125.396,537.737L123.726,538.437L122.907,538.04L124.776,536.995L123.407,537.445L122.557,536.376L122.917,535.063L121.727,536.645L121.237,535.249L120.938,536.744L120.248,537.246L119.758,536.662L118.958,537.842L117.409,538.151L117.949,535.921L117.139,536.032L116.589,538.467L117.589,538.583L116.919,540.72L117.769,539.704L118.429,540.837L117.859,542.519L119.188,543.809L118.409,544.819L117.579,544.942L117.089,543.359L116.829,544.924L116.11,545.199L114.18,544.842L113.121,545.928L113.431,544.965L112.921,543.809L112.881,545.415L111.781,545.257L111.921,547.686L110.742,546.571L111.172,547.487L109.632,549.56L109.292,549.677L108.753,548.241L108.643,549.537L108.093,549.572L107.133,551.195L105.924,551.358L105.504,550.827L104.804,551.779L104.175,551.825L103.235,551.107L103.555,549.788L104.994,549.239L107.003,546.81L106.494,546.88L105.014,548.065L103.535,547.055L104.115,544.971L105.214,543.394L105.644,540.86L105.054,539.541L106.484,538.875L108.843,536.861L109.592,537.9L110.342,538.151L111.162,537.287L113.701,537.807L111.252,536.89L109.922,535.88L111.212,534L112.191,533.451L111.482,533.136L110.552,534.047L110.222,535.22L108.413,535.273L107.723,534.899L106.354,535.892L105.864,536.949L104.694,537.275L103.525,538.548L103.925,539.488L103.375,539.494L101.666,541.328L101.976,542.203L100.086,543.961L100.746,544.755L99.836,546.29L98.257,546.436L99.087,546.711L98.907,547.773L96.128,548.959L96.258,549.805L94.719,550.354L94.549,553.081L94.929,552.655L96.178,552.806L97.597,553.478L98.057,554.278L97.597,555.229L96.488,556.263L95.598,556.304L94.949,557.22L95.188,558.108L94.319,559.988L93.269,560.595L92.23,560.607L90.56,561.378L90.63,562.072L89.681,562.329L89.751,563.164L88.491,562.715L87.931,564.49L86.632,564.338L86.702,565.319L85.912,565.021L84.433,566.405L85.353,566.084L85.313,567.286L84.323,568.81L82.924,568.915L81.494,570.381L80.774,569.604L79.405,571.508L79.175,570.976L78.375,571.724L78.495,572.518L77.486,572.086L76.536,572.319L75.777,573.382L77.326,574.357L75.707,575.373L75.497,576.202L74.907,575.233L74.857,576.325L74.007,575.916L73.727,576.43L71.109,576.85L70.839,578.316L69.879,578.981L70.599,577.136L69.519,576.821L68.56,577.673L67.01,578.462L66.281,579.396L64.871,578.847L63.122,579.991L61.902,579.816L62.762,577.901L61.653,577.872L60.983,579.6L60.013,580.838L59.393,580.598L59.663,581.568L58.754,581.077L58.304,582.082L57.344,581.708L57.364,580.131L56.914,579.664L56.425,580.266L56.944,580.99L56.825,582.28L55.555,582.461L54.715,580.89L53.986,581.334L54.725,582.222L53.066,583.109L53.886,583.43L54.316,584.388L53.156,583.535L51.907,584.435L49.678,584.037L48.468,584.557L48.288,585.048L46.909,585.41L46.019,585.059L45.749,583.763L46.939,583.278L47.828,581.924L51.017,580.931L52.626,581.089L53.396,582.531L53.686,580.628L55.655,580.453L57.214,578.537L58.884,576.891L61.023,575.571L63.882,574.947L65.441,574.976L64.781,576.511L65.301,577.23L65.481,576.085L66.76,576.383L67.64,577.241L67.93,576.751L66.44,575.42L67.54,573.417L70.199,571.327L71.448,570.825L74.047,569.266L75.227,569.774L75.307,568.279L76.656,566.422L78.016,565.564L79.695,564.046L80.435,559.684L81.224,559.34L80.655,558.493L81.134,556.73L82.834,555.194L83.054,553.916L82.634,553.962L78.395,555.714L76.866,554.254L77.186,552.614L75.986,553.595L75.517,554.885L76.036,556.596L75.197,557.267L74.537,556.952L73.428,554.202L72.158,552.771L71.348,553.887L70.839,552.999L69.809,552.374L69.919,551.463L68.06,552.544L65.571,553.6L65.371,554.184L63.732,554.897L63.082,553.997L63.872,553.151L63.992,551.633L63.192,549.157L63.712,548.351L64.791,547.61L63.662,543.891L62.822,542.028L62.342,542.162L62.152,543.272L61.353,543.237L59.753,544.043L57.454,544.235L55.745,543.657L55.675,542.151L54.995,541.631L54.066,539.739L53.116,539.243L52.606,538.408L53.386,537.789L51.817,537.69L53.606,536.265L53.656,535.068L53.066,534.187L53.856,534.006L52.996,532.523L52.566,533.229L51.887,533.042L51.887,531.641L51.027,530.958L50.997,530.281L51.717,529.779L51.217,529.23L50.287,529.399L50.497,528.436L51.747,528.395L50.957,527.105L52.606,527.163L52.386,525.89L52.896,524.88L56.585,521.178L56.575,520.39L57.814,518.101L58.694,517.336L59.733,517.126L61.093,517.693L62.352,519.263L63.342,519.211L64.831,518.084L66.45,516.256L67.26,516.671L68.79,516.852L70.389,516.583L71.888,514.621L71.508,512.093L71.548,510.949L70.719,509.583L69.929,509.302L70.409,508.491L71.638,508.864L72.438,508.1L72.578,507.276L71.398,505.548L70.659,506.628L69.709,506.401L67.95,507.043L66.57,508.047L65.521,509.53L65.481,508.146L64.571,506.92L64.061,507.253L64.891,508.24L64.131,508.199L63.082,507.311L60.333,507.037L58.214,507.568L54.376,505.706L53.786,504.404L54.216,503.481L53.476,502.343L53.076,501.041L53.836,501.391L55.015,500.322L54.456,499.721L51.617,498.565L49.967,496.913ZM24.498,593.157L26.197,591.885L26.387,591.032L27.287,590.513L28.446,590.857L28.147,590.209L28.806,589.234L30.496,588.878L31.395,589.427L30.945,590.407L28.746,591.079L27.577,592.311L24.208,593.397ZM28.017,563.865L29.186,564.203L28.736,564.688ZM20.09,592.241L21.239,592.136L21.369,592.976L20.17,592.714ZM26.427,559.025L27.617,558.838L26.917,559.48ZM15.792,593.14L16.901,592.638L16.861,593.397L15.892,593.642ZM33.914,509.308L34.734,507.621L34.964,508.52L37.103,509.962L38.802,509.372L39.912,510.342L39.842,511.317L41.401,512.695L44.13,513.88L43.27,514.89L41.501,514.446L40.212,515.859L39.812,514.627L38.372,512.601L36.933,511.194L36.153,510.914L34.684,511.469L33.884,510.768ZM6.935,593.146L7.925,592.679L8.435,593.023L7.835,593.584ZM23.069,531.028L23.848,530.427L23.738,531.18L25.778,533.364L24.008,532.476ZM-0.022,592.41L1.048,592.959L1.978,592.866L3.077,593.66L4.926,594.22L2.757,594.109L0.318,593.128ZM-6.149,591.301L-4.54,591.575L-0.981,591.441L-1.021,590.618L0.008,590.098L0.698,591.067L-0.561,591.733L-0.182,592.398L-1.951,592.655L-3.49,592.34ZM-10.017,589.567L-9.078,590.197L-9.648,590.91L-10.207,590.577ZM-10.827,591.365L-9.488,591.114L-9.518,591.651L-10.617,591.908ZM-14.805,591.581L-13.386,590.536L-12.926,589.473L-11.857,589.648L-12.346,590.699L-10.957,590.939L-11.287,591.896L-12.117,591.564L-13.976,592.007ZM-17.864,589.812L-15.325,589.876L-14.975,589.076L-14.336,589.52L-15.135,590.629L-15.905,590.752L-16.355,590.151ZM-19.743,587.663L-18.414,587.879L-18.044,589.03L-19.174,590.197L-19.693,589.17L-19.004,589.281ZM-29.759,582.788L-28.829,582.841L-28.5,583.419L-29.509,583.833ZM-34.647,583.611L-33.468,584.312L-32.608,586.42L-33.478,584.925ZM-40.125,578.94L-38.515,578.853L-37.816,578.076L-37.506,578.608L-39.885,579.658ZM-54.949,567.134L-53.449,567.041L-53.569,568.302ZM-56.748,561.535L-55.778,561.413L-53.829,562.545L-53.109,564.384L-53.829,563.76L-54.309,564.034L-55.528,563.672L-56.018,561.956ZM194.357,567.964L195.166,567.275L195.676,567.748L195.166,568.437ZM193.457,567.572L193.597,566.632L193.137,565.622L194.057,565.908L194.607,567.362ZM191.668,565.47L191.808,565.027L192.757,565.576L192.787,567.035ZM184.701,560.677L184.871,560.28L185.72,561.307ZM184.221,559.795L184.551,558.855L185.97,558.925L186.09,559.848L185.291,560.397ZM183.361,567.444L183.361,566.615L184.681,566.101L185.341,566.597L185.091,567.485L184.141,568.454L184.071,567.461ZM182.062,563.701L182.672,561.845L182.042,561.675L182.112,560.502L183.921,560.21L185.74,562.061L187.08,562.429L188.109,563.234L189.769,565.062L188.429,564.822L188.269,565.622L189.039,565.149L190.428,565.908L190.628,567.041L191.408,566.434L191.688,566.983L191.518,568.653L192.048,568.121L192.767,569.832L192.687,570.603L191.458,570.877L190.438,570.708L190.958,569.949L189.549,569.482L189.179,567.958L188.599,568.413L188.879,569.452L188.049,569.33L187.57,568.127L186.69,568.075L188.529,570.392L189.099,569.849L189.999,570.889L189.289,570.76L189.969,571.689L189.089,571.805L187.22,570.305L186.3,568.384L185.351,568.775L185.111,568.022L186.48,566.837L185.311,565.914L182.962,564.887L183.451,564.32L183.271,562.884L182.632,564.104ZM179.883,564.817L180.882,564.63L180.423,565.319ZM177.544,557.857L177.934,557.022L178.873,556.835L179.573,557.582L179.293,556.391L178.613,556.047L179.113,555.329L181.572,555.335L182.502,555.008L183.801,556.245L185.82,557.384L184.911,558.423L183.501,558.569L183.441,559.293L182.452,559.229L181.552,559.895L181.102,559.2L181.162,562.942L180.623,563.801L179.853,563.1L179.173,561.401L179.163,559.959L178.603,559.935ZM171.866,546.833L173.066,547.546L173.406,548.316L173.905,547.937L175.495,547.744L175.655,548.369L177.384,550.045L177.984,551.37L176.864,550.115L175.984,549.753L176.534,550.699L177.714,551.528L178.573,553.361L176.794,556.59L176.364,556.695L175.745,555.305L176.114,553.84L175.255,553.11L174.295,551.691L174.155,550.856L172.466,548.206ZM171.206,555.516L171.886,553.682L173.625,554.359L174.515,554.173L174.905,555.375L176.924,559.019L177.964,562.493L178.044,563.275L177.314,562.931L174.805,560.058L172.776,559.136L173.376,559.054L173.336,557.693L172.606,557.302L172.786,555.994L172.066,556.327ZM170.827,556.613L170.977,555.714L172.156,556.467L172.196,558.108L171.336,558.464L171.476,557.384ZM166.498,552.228L166.259,551.072L166.868,550.325L166.478,549.432L167.328,550.015L168.308,549.502L168.887,548.649L170.527,549.426L172.626,549.519L173.076,550.418L172.336,550.932L173.196,551.247L174.415,553.466L173.386,554.015L171.037,553.028L171.466,554.441L171.127,555.498L170.317,555.399L169.007,554.272L168.558,554.359L167.538,552.748ZM118.948,545.987L119.328,544.872L120.748,543.196L121.687,541.024L122.347,541.906L120.508,544.714L120.978,545.058ZM118.539,542.408L118.978,540.533L119.758,539.634L119.718,541.31L119.308,543.038Z",
    "Arizona": "M142.838,400.376L143.488,400.072L144.828,400.423L146.537,400.23L146.597,399.465L147.986,398.502L148.366,397.141L147.856,394.245L146.357,394.053L145.137,393.521L144.718,392.079L145.517,390.818L146.047,388.383L145.197,387.478L146.037,386.299L145.747,385.26L147.596,385.079L147.846,384.471L149.336,383.047L150.045,382.72L150.495,379.894L151.185,379.625L151.245,376.175L151.815,375.83L151.515,374.242L153.714,372.537L154.424,370.85L156.273,370.505L157.622,369.962L159.681,368.427L160.261,367.504L159.761,366.354L158.952,365.817L157.352,363.575L156.463,363.224L156.883,361.66L156.273,360.118L156.453,359.721L156.053,357.292L154.843,355.821L154.533,354.18L153.844,353.188L154.434,350.344L155.263,348.838L154.673,348.225L155.963,347.74L156.273,347.01L156.513,343.338L156.333,341.364L155.793,339.42L156.753,336.828L156.293,335.806L156.283,334.422L156.643,333.476L156.573,332.309L157.042,331.281L157.672,330.948L156.853,329.197L157.242,327.346L157.052,325.95L157.472,325.635L159.681,325.483L160.551,325.168L161.611,325.39L161.641,325.88L164.02,326.044L164.889,327.778L164.679,328.122L165.809,329.343L167.338,329.424L169.517,326.248L169.947,326.02L170.807,321.665L171.846,315.785L173.316,308.166L181.862,309.795L199.595,312.994L219.206,316.299L235.14,318.757L235.649,318.979L250.403,321.168L260.569,322.587L255.491,359.073L253.682,372.292L248.964,406.168L247.524,416.672L243.026,448.773L225.134,446.198L216.497,444.902L204.952,443.109L173.585,424.992L169.087,422.417L140.13,404.971L140.709,403.792L140.749,402.285L141.709,401.736Z",
    "Arkansas": "M514.942,349.445L527.607,349.229L541.481,348.885L555.995,348.383L577.016,347.443L594.319,346.462L594.579,348.102L595.738,348.564L596.098,349.533L595.858,351.46L595.158,352.47L593.539,353.579L593.329,354.612L591.91,355.815L590.99,357.999L602.505,357.164L602.805,357.876L604.225,359.225L603.675,359.68L602.965,359.266L602.086,359.657L602.155,360.399L603.255,361.233L601.926,361.619L601.406,362.67L600.306,363.16L599.766,362.792L598.997,363.306L598.967,364.392L599.617,365.145L600.736,364.76L600.826,365.537L599.077,366.757L599.986,367.557L599.876,368.322L598.547,367.364L597.667,367.691L597.567,368.684L598.157,369.536L597.557,370.949L597.278,369.559L596.358,369.559L595.508,370.669L595.378,371.504L596.178,371.65L596.468,370.838L597.258,371.41L596.758,373.232L595.778,373.489L596.048,374.376L597.008,374.423L597.517,375.293L596.768,375.871L597.787,376.869L597.168,377.453L596.448,377.103L595.848,377.5L595.328,379.596L593.809,379.345L593.559,380.402L594.699,381.336L594.749,382.323L593.179,383.473L591.7,384.144L591.37,383.035L590.62,383.105L591.11,384.431L591.28,385.995L591,386.608L590.181,386.597L590.091,384.974L589.221,386.568L589.651,387.251L590.94,387.204L591.14,387.788L590.43,388.675L589.711,388.833L589.551,387.56L588.921,387.992L589.011,389.23L589.871,390.941L589.131,392.173L589.641,393.282L589.401,393.831L588.021,394.695L588.101,395.781L587.452,395.927L587.572,394.876L586.142,395.045L586.602,396.336L586.192,396.943L584.973,397.299L584.773,398.689L583.663,397.912L583.203,398.584L584.063,399.278L585.373,399.185L585.063,400.218L583.683,399.67L582.904,400.318L583.034,400.925L584.503,401.491L584.233,402.694L582.424,403.033L582.954,403.885L582.264,404.23L581.874,403.418L580.645,404.113L580.834,404.58L582.114,405.158L581.084,406.536L581.664,407.715L582.694,408.299L579.875,408.684L579.885,409.747L580.405,410.202L581.304,409.905L581.974,410.845L580.894,411.236L579.605,410.202L578.385,410.926L580.105,412.012L580.235,412.707L578.525,413.46L579.435,414.903L578.545,416.292L579.745,415.924L579.795,414.908L580.535,415.428L580.465,416.391L579.165,416.759L579.885,417.553L580.844,417.203L581.274,415.866L581.824,416.351L580.395,418.166L580.435,419.334L581.274,420.671L581.824,419.539L582.274,419.906L581.444,421.051L581.614,422.744L581.314,423.065L579.835,422.913L579.535,423.649L581.014,424.595L580.315,425.984L565.701,426.592L560.663,426.761L539.172,427.281L526.787,427.555L526.527,415.58L525.418,415.195L525.038,415.615L523.928,414.733L523.149,415.632L521.809,415.13L520.7,415.895L520.34,415.195L518.85,414.687L518.81,413.636L518.321,413.805L518.521,387.04L518.681,374.283L515.572,353.929Z",
    "California": "M76.006,368.164L77.046,368.508L78.585,369.927L79.865,370.733L80.535,372.543L80.075,373.285L79.295,372.607L77.686,372.088L77.426,371.317L77.766,369.939L76.576,369.338ZM73.597,377.92L74.167,377.985L75.207,380.787L77.066,383.584L75.647,383.736L74.627,382.311ZM64.171,352.487L65.341,352.849L65.221,353.41L64.121,353.205ZM57.384,368.17L58.334,368.263L59.793,369.951L58.884,370.015L57.734,369.308ZM55.745,349.229L57.394,350.216L58.544,350.42L59.563,351.535L60.743,351.915L61.393,351.308L62.602,351.968L61.672,352.633L59.793,352.382L58.614,352.692L56.015,351.547L56.255,350.409ZM49.478,349.358L50.937,349.591L53.306,349.562L53.106,350.467L54.156,351.004L54.016,351.915L51.117,352.248L50.407,351.524ZM46.099,347.647L47.848,347.273L48.628,348.634L47.588,348.558ZM32.095,157.329L39.712,159.671L45.739,161.416L48.988,162.135L50.547,162.736L57.054,164.581L61.153,165.644L67.11,167.454L82.384,171.903L94.319,175.073L98.907,176.229L92.6,200.652L90.55,208.797L87.462,220.644L83.213,236.56L82.014,241.5L93.309,258.449L99.896,268.393L114.79,290.761L130.054,313.748L142.179,331.97L154.434,350.344L153.844,353.188L154.533,354.18L154.843,355.821L156.053,357.292L156.453,359.721L156.273,360.118L156.883,361.66L156.463,363.224L157.352,363.575L158.952,365.817L159.761,366.354L160.261,367.504L159.681,368.427L157.622,369.962L156.273,370.505L154.424,370.85L153.714,372.537L151.515,374.242L151.815,375.83L151.245,376.175L151.185,379.625L150.495,379.894L150.045,382.72L149.336,383.047L147.846,384.471L147.596,385.079L145.747,385.26L146.037,386.299L145.197,387.478L146.047,388.383L145.517,390.818L144.718,392.079L145.137,393.521L146.357,394.053L147.856,394.245L148.366,397.141L147.986,398.502L146.597,399.465L146.537,400.23L144.828,400.423L143.488,400.072L142.838,400.376L97.967,395.074L98.167,392.984L97.427,391.39L96.428,391.618L96.828,388.623L96.558,388.126L97.348,387.105L97.507,383.963L97.198,381.371L95.048,375.988L93.689,374.458L93.069,373.068L91.91,372.344L91.07,370.278L89.671,368.783L88.841,368.281L87.772,366.903L86.572,364.877L85.093,363.756L84.843,364.62L83.393,364.725L80.854,363.23L80.714,362.442L81.484,361.94L81.714,361.152L81.334,358.764L80.415,356.528L79.605,356.002L76.416,355.447L75.177,355.862L74.467,354.922L73.028,354.356L70.649,352.499L69.919,352.277L68.63,350.887L68.25,348.318L66.84,346.421L66.47,346.362L65.531,344.827L64.002,343.531L62.022,342.964L61.253,343.25L59.853,342.375L58.404,342.211L56.315,340.477L54.036,339.584L51.157,338.982L48.058,338.614L47.778,336.793L45.739,334.907L47.159,332.694L46.899,331.141L47.888,329.378L47.568,327.936L47.169,327.76L48.798,324.526L48.998,322.762L47.648,321.495L47.159,321.787L45.679,320.322L45.209,319.23L46.189,317.642L46.599,315.978L46.189,314.804L44.59,314.104L43.4,311.727L42.78,309.538L40.951,308.142L40.671,307.15L40.781,305.55L39.142,302.707L39.122,300.021L38.102,299.244L37.623,296.944L36.603,294.772L35.174,293.464L34.294,291.263L34.554,289.838L34.504,287.398L35.114,285.827L34.604,285.15L35.713,284.251L36.113,285.126L37.543,284.233L39.062,281.22L38.572,278.097L37.693,276.765L36.823,277.081L34.564,276.409L33.214,274.669L32.155,271.966L31.635,271.797L31.465,270.448L30.965,269.771L31.065,268.562L32.045,266.25L31.795,264.376L31.935,263.371L31.095,262.174L32.455,258.695L32.745,256.563L34.734,256.418L34.794,258.222L34.334,258.735L34.014,260.283L34.174,261.386L35.693,262.28L36.863,264.218L37.363,264.271L37.892,265.672L38.662,265.829L37.852,264.417L37.743,262.496L37.962,260.691L36.883,259.121L37.153,258.455L35.853,257.381L36.743,256.137L36.723,254.771L35.653,254.362L35.294,253.019L36.433,252.99L36.593,252.342L37.753,252.599L38.602,252.05L38.322,250.555L37.023,249.289L35.164,249.586L34.504,251.478L35.114,252.465L34.294,252.698L33.854,253.416L34.644,254.759L33.674,254.187L33.704,255.629L32.735,255.664L32.395,254.8L31.125,253.2L30.286,253.212L29.296,251.577L28.946,250.41L28.107,249.493L27.187,249.072L26.357,249.756L25.808,249.335L27.337,247.216L27.857,246.165L27.587,244.46L28.047,243.783L27.537,242.632L26.827,242.621L27.117,241.348L26.677,239.094L25.058,237.197L24.038,235.614L22.869,231.708L20.62,228.018L19.8,226.08L19.82,225.221L21.05,224.007L21.229,223.213L20.86,217.894L21.08,215.845L21.769,214.221L23.249,212.166L23.249,210.946L23.678,209.206L23.329,208.184L23.678,205.726L22.969,204.78L22.909,203.665L21.869,200.915L21.259,200.343L21.249,198.597L20.18,197.64L18.201,193.961L18.81,192.881L18.91,191.071L18.631,189.921L19.6,188.309L21.1,186.482L24.398,183.043L26.227,180.766L27.297,178.681L26.797,177.934L27.307,175.984L28.706,174.372L30.775,170.063L31.185,167.646L31.135,163.11L30.696,163.069L29.976,161.749L31.425,159.717Z",
    "Colorado": "M272.834,233.273L281.5,234.47L296.454,236.321L315.916,238.592L319.834,239.118L328.021,239.999L342.495,241.389L345.493,241.599L355.859,242.504L365.125,243.257L376.3,244.092L389.245,244.962L387.806,267.412L386.126,295.496L385.117,311.435L384.547,321.285L383.657,335.111L372.092,334.288L366.744,333.792L343.184,332.034L331.539,330.977L329.43,330.726L310.428,328.823L298.683,327.55L298.573,327.363L287.967,326.114L274.503,324.45L260.569,322.587L261.718,314.191L262.268,310.723L264.227,296.57L264.247,294.054L265.637,284.134L267.026,275.09L271.274,244.437L271.694,241.786Z",
    "Connecticut": "M857.748,180.953L865.465,179.324L868.594,178.6L868.754,179.464L869.523,179.148L869.523,178.378L884.847,174.769L884.957,175.102L887.146,182.71L888.325,187.959L887.686,188.239L888.225,189.67L887.865,190.324L886.396,190.3L885.287,191.071L884.257,191.27L883.567,191.918L882.738,191.591L882.348,192.42L879.709,193.774L878.559,193.669L877.17,194.674L876.69,194.387L875.061,194.825L874.821,195.397L873.731,195.158L871.402,196.168L871.103,195.135L869.863,197.569L869.253,197.581L868.304,199.286L867.424,199.035L866.315,200.448L865.865,200.314L864.605,201.178L864.605,202.235L862.936,202.871L861.716,204.261L861.317,204.027L860.607,204.891L860.507,204.301L858.858,202.637L862.236,199.234L860.697,197.686L859.477,190.481Z",
    "Delaware": "M836.117,241.797L836.287,242.311L836.117,241.797ZM831.859,240.589L832.579,239.001L833.478,237.956L834.928,237.232L836.137,237.097L837.687,237.483L837.127,238.44L836.667,240.379L835.547,241.43L835.398,242.702L836.377,243.298L836.277,245.236L838.646,247.864L839.656,248.319L840.945,250.55L840.885,251.677L841.605,253.784L843.254,255.034L843.664,256.406L846.283,258.543L847.363,258.876L848.032,258.379L849.112,261.281L850.421,265.829L844.594,267.108L839.476,268.042L832.799,244.343Z",
    "District of Columbia": "M813.177,262.618L814.236,260.995L816.915,262.811L815.176,265.491L815.036,264.16L814.226,263.214Z",
    "Florida": "M802.052,584.709L802.941,583.401L803.341,583.967L802.511,584.942ZM800.222,586.198L800.792,585.363L801.312,585.836ZM795.005,589.181L798.543,586.881L799.063,587.377L796.024,589.403ZM781.49,594.343L782.54,592.159L785.558,589.987L787.128,588.498L788.167,587.879L791.176,588.708L791.586,589.643L792.705,590.279L789.657,591.879L789.357,591.406L787.428,591.803L787.308,592.293L784.099,594.173L781.55,594.851ZM777.442,595.522L779.961,594.495L779.601,595.557L777.482,595.995ZM774.323,595.528L774.663,594.81L775.473,594.804L775.343,595.691ZM765.487,549.151L765.897,549.432L767.846,553.198L769.775,553.974L770.245,553.571L771.274,553.822L769.675,554.663L767.526,553.49L765.597,550.103ZM758.43,596.246L759.489,595.861L759.889,596.229L758.46,596.626ZM709.36,487.104L711.27,485.965L711.01,486.929L709.56,487.565ZM699.844,461.069L700.374,462.494L701.384,463.504L701.584,465.004L702.223,466.417L703.213,467.194L729.352,465.413L736.419,464.963L754.002,463.726L753.682,464.31L754.531,465.536L754.561,466.902L755.531,468.245L757.85,467.807L758.06,465.162L758,463.259L756.861,461.343L756.91,458.366L757.89,458.407L758.18,457.256L759.23,457.245L759.829,457.799L761.019,457.688L762.808,458.436L764.097,458.29L766.307,458.617L767.236,458.185L768.146,458.412L768.506,458.623L768.546,460.812L768.985,462.523L769.565,463.346L770.755,467.877L773.264,474.37L774.493,476.693L774.893,478.293L777.472,483.069L780.591,488.166L782.7,491.448L789.037,499.26L792.266,502.605L793.685,505.209L792.645,506.476L792.606,508.724L793.445,511.597L794.195,513.331L795.774,515.894L799.053,520.542L801.702,525.499L802.921,528.01L805.43,531.799L805.57,532.435L807.399,535.384L809.458,540.037L810.158,545.018L810.188,547.814L810.468,551.814L810.528,555.784L811.238,561.185L811.168,565.126L810.778,563.929L810.028,563.55L809.189,564.303L808.829,566.159L808.419,566.755L808.579,567.753L808.169,568.606L808.239,570.095L808.719,571.525L809.149,571.759L808.739,572.851L808.039,573.446L808.319,574.112L809.718,573.119L811.278,568.343L811.108,570.76L809.318,575.326L808.949,576.961L805.35,582.017L803.811,583.524L803.551,583.331L806.53,579.734L806.939,578.666L807.109,576.465L805.04,576.418L802.651,577.235L801.102,578.38L799.673,577.749L798.433,578.21L798.043,579.045L794.495,580.073L793.105,579.291L792.276,578.111L792.376,575.63L792.895,575.414L791.516,572.839L790.576,572.062L790.576,571.414L789.607,570.112L788.927,569.879L788.297,568.337L787.078,568.477L786.118,566.685L784.329,566.364L780.91,564.787L779.731,565.961L778.162,563.789L776.702,561.15L775.393,556.736L774.403,554.996L773.394,554.062L771.155,552.97L770.995,552.141L769.935,552.252L770.275,553.034L769.335,553.39L768.206,550.121L767.186,549.28L768.246,548.725L769.005,549.373L769.315,546.261L768.995,544.65L768.326,544.475L768.386,542.91L767.586,543.114L766.556,544.107L767.526,546.81L765.567,547.698L765.357,548.684L765.107,547.277L764.587,546.39L763.088,544.802L760.739,541.725L759.869,540.043L757.55,536.849L754.691,533.982L753.382,532.038L754.282,532.838L755.241,532.137L756.311,530.351L757.93,526.748L758.73,526.229L759.309,524.5L758.71,523.152L757.16,522.965L757.81,525.055L756.121,524.711L756.511,524.004L755.751,522.101L752.892,521.149L753.172,522.358L752.472,522.988L753.622,523.619L754.482,523.555L755.581,525.505L754.991,526.416L754.991,527.969L753.452,528.453L753.852,530.041L753.332,530.392L752.952,528.342L751.663,526.62L750.813,526.048L750.173,524.699L750.213,521.692L749.654,520.501L748.964,517.442L749.574,517.331L749.813,519.088L750.393,520.729L750.993,520.775L750.803,519.193L750.183,518.668L750.883,517.132L751.873,512.152L751.843,508.637L751.263,507.44L751.233,506.366L750.303,505.928L750.463,505.093L749.554,503.125L750.183,501.788L748.434,499.914L748.564,499.295L747.894,498.326L747.175,498.367L747.195,496.778L746.725,496.58L743.396,496.597L742.437,497.794L741.507,495.996L741.337,494.893L739.708,494.577L739.428,493.392L738.378,491.827L736.849,491.64L736.409,490.846L734.58,490.157L734.31,488.038L733.85,486.8L733.051,486.777L731.331,485.954L730.222,484.71L730.142,484.108L728.932,482.596L727.893,481.884L725.774,480.956L722.865,479.934L720.906,478.737L719.016,479.257L718.447,479.735L716.228,479.449L716.278,480.109L714.618,481.65L715.468,483.455L715.248,484.091L713.589,484.079L713.189,483.618L711.63,484.231L709.271,486.345L708.841,486.391L705.262,489.206L705.432,488.061L704.672,487.915L703.343,489.603L700.864,489.871L701.884,490.695L702.054,491.419L703.213,491.699L707.121,489.451L708.801,487.629L709.001,487.857L707.571,489.62L702.673,492.557L699.035,490.934L697.685,490.946L696.556,491.623L695.486,489.93L694.877,488.009L695.346,486.841L695.586,488.832L696.166,490.531L696.716,490.887L697.286,490.07L697.196,488.464L695.746,486.339L694.847,485.551L693.207,485.218L692.098,484.564L690.788,483.349L688.859,482.649L687.21,481.493L685.101,480.383L682.632,479.408L678.204,478.235L675.415,477.82L670.227,477.855L667.978,478.171L664.799,478.959L660.361,480.337L658.232,480.81L657.692,480.681L653.504,482.03L654.444,481.452L653.854,481.154L654.663,480.448L655.013,479L656.023,478.433L655.133,477.914L654.394,476.787L655.183,474.008L654.843,473.044L652.304,471.736L651.855,470.82L650.115,469.185L650.785,466.908L650.545,466.19L659.242,465.349L671.057,464.35L682.952,463.118Z",
    "Georgia": "M678.633,373.436L682.612,373.039L690.628,372.006L701.754,370.663L714.398,369.092L714.378,368.97L723.555,367.551L723.525,368.906L721.585,370.657L721.225,371.942L720.316,372.782L719.966,374.213L720.416,375.246L722.515,376.537L723.664,376.548L725.414,378.306L727.073,379.076L728.153,378.609L729.692,379.047L730.472,381.056L731.271,381.5L732.361,383.012L732.931,384.991L734.04,385.838L734.91,387.169L735.869,387.916L736.819,389.674L737.419,389.633L739.518,391.145L740.997,391.6L742.916,393.013L744.406,395.728L745.685,396.452L746.165,396.266L747.365,396.814L748.724,398.367L750.203,399.173L749.883,400.977L750.673,401.766L751.863,401.982L751.943,403.243L752.912,403.967L753.632,403.786L753.902,405.024L755.121,405.818L756.841,406.04L757.76,406.828L759.409,407.622L759.439,409.198L760.289,410.033L760.139,410.477L761.289,411.265L761.349,412.439L761.808,413.239L761.639,414.237L762.428,415.305L762.048,415.819L763.188,416.835L764.847,417.045L766.756,418.82L766.606,419.504L768.776,422.534L768.246,423.608L769.145,424.712L769.415,426.294L770.445,426.749L771.524,426.335L773.224,427.415L774.013,427.45L774.843,427.549L774.673,428.822L773.863,429.534L773.124,429.348L772.894,430.323L773.554,430.369L772.644,431.683L771.224,431.467L771.195,432.565L771.894,432.588L771.554,433.878L770.545,435.081L769.345,435.029L770.085,435.863L770.635,435.677L770.845,437.288L770.335,438.9L768.815,439.133L768.716,439.682L769.905,439.378L770.395,439.77L769.005,443.384L769.355,445.094L769.285,446.986L768.895,447.01L768.116,448.749L767.536,448.895L767.546,451.552L766.297,452.632L767.636,452.901L767.906,452.381L768.206,453.911L767.756,456.194L767.746,457.747L768.146,458.412L767.236,458.185L766.307,458.617L764.097,458.29L762.808,458.436L761.019,457.688L759.829,457.799L759.23,457.245L758.18,457.256L757.89,458.407L756.91,458.366L756.861,461.343L758,463.259L758.06,465.162L757.85,467.807L755.531,468.245L754.561,466.902L754.531,465.536L753.682,464.31L754.002,463.726L736.419,464.963L729.352,465.413L703.213,467.194L702.223,466.417L701.584,465.004L701.384,463.504L700.374,462.494L699.844,461.069L698.935,458.751L697.376,457.169L697.006,455.184L697.425,454.717L697.206,453.21L697.525,451.628L697.326,450.816L697.705,449.649L697.186,447.407L695.726,445.888L695.756,445.036L695.056,442.712L695.976,440.33L696.256,438.643L696.196,436.979L695.846,435.922L696.626,434.83L698.035,433.791L698.635,432.722L697.765,432.039L696.426,431.654L696.886,429.33L696.216,428.717L695.806,427.17L694.487,425.979L693.667,424.682L693.027,421.851L692.078,421.097L692.268,420.368L691.648,420.023L682.592,387.496L679.333,376.175Z",
    "Hawaii": "M300.732,574.917L300.882,574.077L302.671,572.407L303.491,572.319L304.181,570.684L305.39,569.704L305.53,568.384L304.71,567.426L304.021,565.938L303.871,564.618L304.191,563.503L304.98,563.141L307.219,563.999L307.519,564.595L309.189,565.435L310.308,566.335L311.188,566.218L313.107,566.813L317.285,568.781L320.234,571.157L321.233,572.419L321.064,574.912L322.893,574.865L323.443,575.939L323.393,577.031L325.102,578.596L326.981,579.483L326.811,580.575L323.503,583.535L320.284,585.194L318.765,585.544L316.845,585.433L315.496,586.723L314.306,587.196L313.547,588.002L312.447,588.323L311.348,589.573L311.408,590.197L310.428,592.036L308.949,593.251L307.799,592.101L306.1,591.114L304.501,590.618L303.651,588.738L304.351,583.927L303.591,580.779L302.951,580.558L302.411,577.901L300.582,575.18ZM287.138,548.778L287.857,546.863L289.397,546.285L290.366,546.903L291.866,549.35L293.735,548.789L295.014,548.106L297.004,548.509L297.004,548.819L299.053,550.068L299.413,550.821L301.772,551.516L302.122,553.133L300.732,554.657L298.863,555.346L297.803,555.165L295.504,556.187L293.925,556.362L292.556,555.58L292.096,551.855L291.216,551.463L290.546,551.931L288.577,550.985L287.588,549.887ZM287.098,557.396L289.737,555.743L290.446,556.333L290.306,557.658L289.167,557.571L287.508,557.962ZM279.531,549.146L281.06,548.527L283,548.9L284.259,550.045L284.839,551.253L284.239,552.246L282.75,552.801L281.52,552.9L280.611,550.249ZM274.323,544.767L275.463,543.225L275.323,542.122L280.86,542.98L281.62,542.32L281.97,543.12L283.609,543.371L285.638,543.027L286.938,543.5L286.308,544.55L284.989,545.531L283.419,545.928L278.841,544.726L275.543,545.076ZM254.092,534.128L257.28,533.965L259.539,531.466L260.579,531.192L261.509,533.042L263.318,535.249L263.228,536.808L264.537,537.865L264.827,536.773L265.707,536.82L265.367,538.035L265.987,539.167L267.196,540.382L265.967,541.187L264.807,540.814L263.628,541.217L262.188,540.195L260.269,539.979L257.52,540.277L256.95,538.683L256.141,537.999L255.871,537.03L255.021,536.149L255.001,534.987ZM222.585,523.887L222.685,523.123L223.495,522.404L223.814,521.47L227.413,519.59L228.412,520.116L228.902,519.543L230.682,519.491L231.781,519.894L232.941,521.464L232.871,522.334L232.101,523.525L232.141,525.528L230.931,526.778L229.722,527.531L229.082,527.227L226.413,526.976L225.064,525.61L223.035,524.857ZM212.989,527.782L213.289,526.959L215.268,525.604L215.788,524.582L216.637,524.413L216.467,526.783L214.728,527.455L213.789,529.329L212.879,528.529Z",
    "Idaho": "M167.898,100.682L167.748,98.283L168.638,96.841L168.308,93.991L167.488,92.602L168.128,90.909L171.826,74.513L175.565,57.71L177.684,48.835L180.762,35.313L195.026,38.401L190.288,60.512L190.538,60.658L191.858,63.887L192.548,64.669L192.568,66.094L193.807,67.612L193.427,68.482L193.857,69.913L192.817,70.607L193.417,71.355L193.387,72.306L193.977,72.99L192.278,73.066L194.797,75.675L194.947,76.761L196.496,77.97L197.715,78.408L198.485,80.959L199.205,81.549L200.354,83.721L200.614,85.496L201.324,85.584L202.163,86.938L201.634,88.199L202.303,89.484L203.653,90.43L203.643,92.286L204.852,91.545L205.892,92.497L205.452,93.045L205.682,93.985L207.891,94.604L208.651,94.096L209.65,94.102L210.16,94.704L209.101,97.646L208.281,97.699L208.441,98.995L207.511,100.075L207.421,101.22L206.842,102.452L206.262,102.551L206.232,104.664L205.162,104.594L204.882,105.505L205.692,106.299L204.982,107.298L205.092,108.483L205.932,109.557L205.432,109.919L205.862,111.215L205.402,111.823L204.033,111.572L202.673,113.049L203.393,114.368L203.243,115.548L202.173,115.997L202.383,116.791L202.004,117.766L203.373,118.023L203.843,119.284L204.892,120.639L206.152,120.055L206.572,118.998L207.381,119.366L208.351,119.08L209.69,117.743L210.53,117.428L210.7,116.453L211.25,116.295L212.349,117.877L213.589,119.063L212.819,120.768L213.879,120.972L213.319,122.356L213.829,123.874L213.529,125.345L214.019,127.062L215.078,128.685L215.208,130.133L216.098,130.6L215.908,131.067L216.827,132.007L216.547,134.208L215.708,134.313L215.988,136.252L217.337,137.542L217.417,138.354L219.046,137.787L220.646,139.218L220.866,140.969L221.265,141.448L221.255,142.773L220.706,143.106L221.595,144.998L221.185,145.582L221.355,146.662L222.975,148.203L223.475,149.149L224.044,148.799L223.864,147.754L224.964,146.539L226.013,146.283L226.853,146.855L228.572,147.176L229.282,147.795L229.772,147.497L230.991,148.437L231.751,146.732L233.041,146.055L233.71,146.183L234.5,147.112L235.659,147.59L236.919,147.217L237.699,147.579L239.528,147.263L240.088,148.6L241.877,148.122L242.117,147.783L243.486,148.268L243.986,148.034L245.225,148.758L245.765,148.577L245.075,147.263L246.115,146.061L246.065,145.097L247.205,145.214L247.674,144.344L248.674,145.138L249.863,147.625L249.694,148.56L250.813,149.762L250.993,150.743L252.083,151.362L245.975,190.149L245.145,194.965L243.366,206.135L235.849,204.967L225.024,203.21L224.724,203.052L197.086,198.352L194.707,197.768L185.71,195.993L181.982,195.071L178.703,194.557L174.155,193.623L157.142,190.02L146.577,187.603L155.483,148.005L155.823,146.913L156.463,146.855L156.743,145.827L157.972,143.667L157.612,142.114L158.372,141.95L159.202,140.928L158.952,139.977L158.252,139.691L158.442,138.85L157.242,138.716L156.623,137.454L155.463,137.647L154.843,136.62L155.543,135.919L155.023,134.389L155.603,133.817L155.743,132.55L157.092,131.756L157.372,130.974L159.451,127.809L161.7,127.009L164.01,124.113L163.83,123.021L164.199,122.105L165.169,121.456L166.568,119.944L168.328,116.178L170.217,113.819L170.827,113.498L171.147,112.482L172.956,110.468L172.276,108.822L172.336,107.245L171.756,106.492L170.677,106.171L170.377,105.237L169.347,105.091L168.268,102.557Z",
    "Illinois": "M567.6,260.364L568.28,260.078L568.4,257.585L567.64,256.657L568.53,255.104L570.199,254.374L571.248,254.333L572.268,253.545L572.598,251.355L572.528,250.351L574.057,248.097L574.637,247.689L574.847,245.12L574.707,243.818L573.917,242.527L573.038,242.34L571.748,240.711L572.318,239.234L572.648,236.846L573.827,236.262L574.587,236.508L575.757,235.737L577.746,235.69L579.085,235.34L580.095,234.143L582.234,233.781L582.984,232.794L584.103,232.222L584.123,230.155L584.373,228.906L584.933,228.129L586.382,227.23L586.802,224.877L586.582,223.657L586.892,222.693L586.432,221.847L586.362,220.171L585.433,219.33L582.464,217.958L581.744,216.814L581.934,215.804L580.964,214.607L579.645,213.9L579.245,213.281L577.966,212.674L577.976,211.851L587.272,211.302L600.726,210.636L608.313,210.216L619.258,209.247L624.406,208.908L624.536,211.314L624.216,213.217L624.956,215.261L626.075,216.966L627.365,218.431L627.455,219.079L628.674,222.063L628.984,223.511L630.484,226.051L631.253,235.246L632.933,253.983L634.132,268.603L635.092,278.99L634.312,279.229L634.002,281.051L634.612,281.962L633.592,283.217L633.852,284.554L634.972,285.57L635.012,287.117L636.211,287.789L635.741,289.978L636.831,291.712L636.601,293.575L635.392,294.357L634.992,295.023L634.482,297.294L634.612,298.047L633.252,298.894L633.472,299.519L632.763,301.294L632.323,301.51L631.653,303.547L631.143,302.952L630.733,303.781L630.394,303.133L629.534,305.211L630.644,306.665L629.974,306.934L629.414,308.066L630.124,307.646L630.104,308.393L628.864,309.152L629.484,310.484L628.674,311.844L629.624,312.329L628.175,312.2L629.554,314.495L629.044,315.908L628.075,316.644L627.515,317.776L628.135,319.703L629.474,320.917L629.184,321.91L625.766,322.652L624.396,323.913L623.586,323.446L622.477,324.397L621.967,326.762L623.307,328.479L623.806,329.652L623.337,331.41L621.827,331.614L620.238,330.586L618.409,330.207L617.039,329.302L614.76,328.589L613.551,328.753L612.141,330.183L611.791,331.264L611.072,331.993L610.752,333.552L611.632,334.37L610.592,334.492L610.422,333.786L609.253,332.688L608.403,332.618L609.322,333.605L609.053,334.405L607.213,333.383L607.193,332.46L605.494,329.891L605.434,328.741L604.355,327.936L604.804,326.914L605.724,326.598L605.914,325.612L605.514,324.52L604.015,322.4L603.865,321.379L604.624,321.005L603.875,320.129L603.865,319.026L602.575,318.483L601.926,317.706L601.026,317.543L601.116,316.93L599.637,315.663L598.897,315.528L597.727,314.46L596.788,315.33L595.878,315.085L595.448,314.296L596.248,313.327L594.989,313.333L593.829,312.224L593.329,312.253L592.53,311.249L591.8,311.132L590.5,310.238L589.891,309.258L588.441,308.078L588.001,306.566L588.391,304.213L589.171,303.226L589.641,300.902L590.73,299.244L590.91,298.246L590.221,296.494L591.63,294.696L591.73,293.534L589.281,292.098L588.261,292.051L585.772,291.216L584.293,293.394L583.623,293.569L582.204,292.384L581.764,290.743L581.144,289.535L581.634,288.729L580.675,285.109L578.625,283.205L575.117,280.957L573.947,278.984L573.128,278.867L572.418,277.565L571.448,277.051L569.179,274.926L569.189,273.49L568.01,272.532L567.66,271.645L568.09,270.5L566.69,268.118L566.331,266.069L566.281,263.628L566.92,261.205Z",
    "Indiana": "M630.484,226.051L631.433,226.769L632.583,226.559L632.273,227.37L634.992,227.633L637.271,226.845L640.19,225.128L641.889,223.82L658.902,222.109L675.095,220.253L675.265,221.683L677.894,243.304L678.983,252.821L680.113,263.827L681.882,279.632L680.713,280.975L681.852,282.224L682.012,282.96L681.572,284.321L683.022,284.525L682.532,285.593L682.832,286.802L681.542,286.72L680.033,287.246L676.944,289.675L675.565,288.84L674.515,288.735L672.356,289.254L672.056,290.2L673.126,293.318L671.886,295.227L670.087,296.08L669.567,298.684L668.238,300.138L667.288,299.805L666.658,300.138L666.409,301.381L665.569,302.876L665.789,304.552L665.649,305.871L665.199,306.437L663.83,306.934L663.73,307.675L662.46,306.548L661.241,306.724L659.471,305.638L659.341,304.055L657.892,302.899L657.552,303.641L658.362,303.781L657.102,305.007L656.063,304.809L656.643,305.486L656.413,306.332L655.303,306.618L655.333,308.3L655.743,309.112L654.334,309.468L654.204,310.904L653.194,311.033L653.354,309.847L652.145,310.32L651.535,309.929L650.605,308.3L649.546,308.44L648.836,309.439L646.637,310.542L646.217,312.953L645.257,313.426L644.498,312.224L643.838,312.229L640.549,310.449L639.31,310.437L638.33,311.313L636.781,309.876L636.291,310.881L636.981,311.867L636.721,313.099L635.691,313.292L635.342,311.64L632.843,312.469L631.453,311.494L630.963,312.264L631.643,314.133L631.053,314.915L629.554,314.495L628.175,312.2L629.624,312.329L628.674,311.844L629.484,310.484L628.864,309.152L630.104,308.393L630.124,307.646L629.414,308.066L629.974,306.934L630.644,306.665L629.534,305.211L630.394,303.133L630.733,303.781L631.143,302.952L631.653,303.547L632.323,301.51L632.763,301.294L633.472,299.519L633.252,298.894L634.612,298.047L634.482,297.294L634.992,295.023L635.392,294.357L636.601,293.575L636.831,291.712L635.741,289.978L636.211,287.789L635.012,287.117L634.972,285.57L633.852,284.554L633.592,283.217L634.612,281.962L634.002,281.051L634.312,279.229L635.092,278.99L634.132,268.603L632.933,253.983L631.253,235.246Z",
    "Iowa": "M483.046,192.04L494.541,192.064L507.865,191.959L525.908,191.667L540.831,191.246L559.074,190.516L567.46,190.113L567.26,191.083L567.83,191.999L567.66,193.126L569.459,194.212L570.329,195.473L568.54,198.34L568.68,200.425L569.229,202.094L569.319,203.379L570.069,203.852L570.999,207.063L572.958,208.19L576.546,208.955L577.596,210.531L577.976,211.851L577.966,212.674L579.245,213.281L579.645,213.9L580.964,214.607L581.934,215.804L581.744,216.814L582.464,217.958L585.433,219.33L586.362,220.171L586.432,221.847L586.892,222.693L586.582,223.657L586.802,224.877L586.382,227.23L584.933,228.129L584.373,228.906L584.123,230.155L584.103,232.222L582.984,232.794L582.234,233.781L580.095,234.143L579.085,235.34L577.746,235.69L575.757,235.737L574.587,236.508L573.827,236.262L572.648,236.846L572.318,239.234L571.748,240.711L573.038,242.34L573.917,242.527L574.707,243.818L574.847,245.12L574.637,247.689L574.057,248.097L572.528,250.351L572.598,251.355L572.268,253.545L571.248,254.333L570.199,254.374L568.53,255.104L567.64,256.657L568.4,257.585L568.28,260.078L567.6,260.364L566.5,260.294L565.791,259.722L565.671,258.636L565.081,258.625L564.141,257.679L563.962,256.815L563.002,256.645L562.142,255.314L555.985,255.845L544.89,256.558L536.433,257.001L531.595,257.142L522.469,257.521L513.373,257.72L494.301,257.562L494.541,257.025L493.901,255.892L493.001,255.489L492.222,254.263L493.001,253.381L492.921,251.25L493.441,250.935L493.031,249.58L493.231,248.851L492.542,248.022L492.651,246.241L492.302,244.746L492.961,244.168L491.862,244.08L491.532,241.815L492.192,241.967L492.392,241.202L491.242,240.717L491.652,237.979L490.282,237.605L490.482,236.712L489.903,236.058L489.473,236.782L488.763,235.924L489.013,235.311L488.433,234.248L488.743,233.845L488.413,232.613L489.213,230.161L488.643,229.852L487.684,227.861L488.223,226.378L486.574,225.864L486.644,224.947L485.884,224.725L485.964,223.26L484.725,222.127L484.505,220.895L485.045,220.568L484.305,218.799L483.505,217.83L483.545,216.732L484.125,215.699L483.875,214.852L483.066,214.7L482.326,214.029L482.556,213.229L481.576,210.993L480.067,209.848L480.037,208.447L481.496,206.596L481.556,204.95L482.226,204.173L482.076,202.141L482.846,201.849L483.275,200.553L482.796,199.893L482.506,198.229L481.286,198.223L480.976,196.565L481.856,196.302L481.936,194.609L480.766,193.512L480.697,192.023Z",
    "Kansas": "M387.806,267.412L398.541,268.077L415.944,268.988L425.71,269.42L436.615,269.806L446.941,270.109L457.606,270.366L472.56,270.617L487.744,270.734L502.088,270.705L503.847,272.754L504.926,272.976L505.166,273.513L506.706,273.688L507.115,272.912L508.545,273.145L508.325,273.776L509.454,274.599L508.635,275.376L508.865,276.059L509.594,275.744L509.354,276.789L508.135,276.374L507.885,277.711L506.925,278.196L506.316,280.193L505.586,280.274L505.606,281.086L506.576,281.985L506.746,282.68L507.755,283.252L508.595,284.484L509.364,284.321L509.005,285.243L509.195,286.399L510.124,287.106L510.524,288.419L511.314,288.554L512.033,289.318L512.873,288.98L513.313,289.558L514.522,289.599L514.272,290.404L514.352,301.901L514.532,316.725L514.532,320.748L514.782,338.188L498.989,338.34L481.516,338.352L464.523,338.177L451.879,337.949L436.475,337.499L425.9,337.114L421.901,336.91L407.777,336.32L395.732,335.765L383.657,335.111L384.547,321.285L385.117,311.435L386.126,295.496Z",
    "Kentucky": "M611.632,334.37L610.752,333.552L611.072,331.993L611.791,331.264L612.141,330.183L613.551,328.753L614.76,328.589L617.039,329.302L618.409,330.207L620.238,330.586L621.827,331.614L623.337,331.41L623.806,329.652L623.307,328.479L621.967,326.762L622.477,324.397L623.586,323.446L624.396,323.913L625.766,322.652L629.184,321.91L629.474,320.917L628.135,319.703L627.515,317.776L628.075,316.644L629.044,315.908L629.554,314.495L631.053,314.915L631.643,314.133L630.963,312.264L631.453,311.494L632.843,312.469L635.342,311.64L635.691,313.292L636.721,313.099L636.981,311.867L636.291,310.881L636.781,309.876L638.33,311.313L639.31,310.437L640.549,310.449L643.838,312.229L644.498,312.224L645.257,313.426L646.217,312.953L646.637,310.542L648.836,309.439L649.546,308.44L650.605,308.3L651.535,309.929L652.145,310.32L653.354,309.847L653.194,311.033L654.204,310.904L654.334,309.468L655.743,309.112L655.333,308.3L655.303,306.618L656.413,306.332L656.643,305.486L656.063,304.809L657.102,305.007L658.362,303.781L657.552,303.641L657.892,302.899L659.341,304.055L659.471,305.638L661.241,306.724L662.46,306.548L663.73,307.675L663.83,306.934L665.199,306.437L665.649,305.871L665.789,304.552L665.569,302.876L666.409,301.381L666.658,300.138L667.288,299.805L668.238,300.138L669.567,298.684L670.087,296.08L671.886,295.227L673.126,293.318L672.056,290.2L672.356,289.254L674.515,288.735L675.565,288.84L676.944,289.675L680.033,287.246L681.542,286.72L682.832,286.802L682.532,285.593L683.022,284.525L681.572,284.321L682.012,282.96L681.852,282.224L680.713,280.975L681.882,279.632L683.072,278.54L684.201,279.469L685.69,279.889L687.21,279.258L687.8,278.558L688.449,278.914L688.669,279.889L690.159,280.187L690.948,280.782L691.368,281.88L692.458,283.165L693.067,285.08L695.586,285.564L697.126,284.992L699.265,285.407L699.655,286.096L700.734,286.604L701.034,287.421L702.903,287.859L703.643,286.487L705.202,285.856L706.192,286.352L707.981,286.498L709.53,287.637L710.25,286.872L711.919,286.726L712.289,285.617L713.239,284.939L713.519,284.221L714.398,284.093L715.768,283.205L717.227,286.884L717.977,287.298L719.286,287.246L721.515,288.892L721.965,289.955L722.135,291.683L722.675,292.267L722.785,293.435L722.225,294.147L722.455,295.583L721.895,295.799L722.475,296.739L723.804,297.685L724.614,299.157L725.564,299.39L725.094,300.634L725.674,301.299L726.693,301.568L726.773,302.345L728.362,303.512L729.532,305.976L730.512,306.04L731.151,306.776L732.601,307.284L732.981,308.002L735.619,308.107L729.782,315.166L728.213,315.879L726.573,317.011L723.844,319.318L724.074,320.993L723.145,321.963L721.745,322.856L722.065,323.901L721.815,324.859L720.316,325.781L718.537,326.096L717.717,327.865L717.757,328.735L716.737,328.957L714.848,329.851L712.929,331.106L711.03,331.41L709.111,332.624L708.691,333.179L708.481,333.617L703.223,334.136L693.407,335.199L688.099,335.631L684.861,335.689L681.832,335.899L676.684,336.717L670.597,337.219L667.038,337.412L661.69,337.546L658.592,337.774L657.642,338.299L657.142,337.92L647.886,339.041L642.409,339.578L634.852,340.419L634.852,339.73L630.923,339.735L631.853,342.766L631.563,343.776L617.699,344.745L609.432,345.253L607.363,345.58L607.923,342.906L608.763,342.48L610.082,343.904L610.622,343.764L611.052,342.386L611.681,341.499L610.882,340.43L611.392,339.414L612.271,339.058L611.122,338.352L611.761,337.406L612.241,334.72ZM606.164,345.703L605.204,345.755L604.544,344.564L604.954,343.922L606.134,344.068L606.454,344.803Z",
    "Louisiana": "M627.715,489.241L628.724,490.385L629.164,491.798L629.044,494.274L628.335,495.768L628.864,492.902L628.694,491.202ZM618.838,489.754L621.587,487.261L620.998,488.797L622.107,489.877L621.098,490.911L620.848,490.023L618.968,490.175ZM614.13,501.806L615.33,501.531L614.7,502.384ZM600.166,512.222L600.786,511.743L601.616,512.876L601.026,513.173ZM596.628,512.753L599.377,513.243L598.047,513.46ZM592.919,513.816L594.639,513.354L594.849,513.664L592.989,514.16ZM567.68,503.09L569.389,502.086L570.939,502.138L573.627,503.621L572.648,504.351L572.628,505.122L571.119,505.437L567.46,503.505ZM526.787,427.555L539.172,427.281L560.663,426.761L565.701,426.592L580.315,425.984L579.505,427.683L580.705,428.262L581.054,427.678L580.914,426.504L581.824,426.533L582.224,428.478L580.914,429.534L580.615,430.276L580.754,431.823L582.674,432.121L582.264,432.921L580.984,434.118L581.684,435.332L582.944,434.772L583.343,433.867L583.803,434.38L582.434,435.939L584.223,437.183L584.033,437.516L582.074,436.652L581.844,437.615L583.523,438.643L584.173,438.222L584.723,438.859L584.223,439.273L584.423,440.435L586.202,440.873L585.482,441.755L584.683,441.661L584.863,442.636L584.443,443.53L583.903,443.057L581.274,444.073L581.374,445.515L583.443,445.597L583.433,444.376L584.293,444.814L583.753,446.163L582.674,447.336L582.084,446.735L581.484,447.144L583.143,448.025L581.084,449.38L581.284,450.338L579.705,451.873L578.385,451.978L577.976,453.817L579.895,453.794L579.685,454.29L578.186,454.454L577.426,455.166L577.456,457.21L576.916,457.437L575.597,456.737L575.257,457.467L575.897,458.05L577.066,457.747L577.376,458.354L576.606,459.061L575.377,459.312L575.507,461.25L576.346,462.295L576.246,462.996L575.537,462.908L574.927,461.53L574.327,462.319L575.757,464.187L575.587,465.034L574.547,465.401L573.268,465.331L573.248,466.061L574.357,467.264L573.727,468.297L574.877,469.669L574.967,470.364L573.627,471.31L584.623,470.785L596.498,470.113L609.542,469.255L610.022,469.413L609.552,470.563L608.853,473.99L608.373,474.58L608.503,475.526L608.143,476.985L608.823,477.546L609.233,479.227L610.152,480.331L611.671,481.446L611.741,482.468L612.871,483.887L612.691,485.054L613.281,486.362L614.26,487.355L615.14,487.285L613.981,488.038L613.381,487.95L612.291,489.101L612.231,489.825L611.402,490.181L611.671,490.934L609.682,490.724L608.983,491.64L609.432,492.925L610.662,493.036L611.552,492.499L611.342,493.643L612.371,494.46L614.17,494.052L614.5,492.283L614.32,491.506L615.94,490.362L616.11,489.492L618.289,490.297L617.169,491.016L617.209,491.67L618.269,491.926L618.569,493.077L619.558,492.744L620.268,491.115L621.357,491.512L621.188,492.58L620.238,492.662L619.488,493.555L621.048,493.392L620.828,493.97L618.379,494.717L619.718,495.745L620.478,495.272L620.018,496.44L618.409,495.838L617.669,496.948L617.689,498.851L617.079,498.997L616.549,497.374L615.82,497.409L615.74,499.161L613.221,499.453L614.5,500.101L614.53,500.725L612.881,499.885L613.781,500.924L612.971,501.251L613.921,502.524L615.31,502.646L616.16,503.47L616.659,504.964L619.138,504.666L620.358,505.233L620.468,504.661L621.977,506.295L622.697,505.402L624.516,507.393L625.076,508.736L626.305,508.105L626.795,508.859L625.156,509.279L625.046,509.904L626.175,509.898L625.716,510.931L624.916,510.529L624.216,511.912L624.396,513.243L622.867,512.665L622.837,511.924L622.127,511.358L620.108,514.148L619.078,515.001L620.378,512.157L621.008,511.714L620.888,510.68L621.517,510.184L621.377,509.215L620.638,508.818L620.128,510.464L618.978,510.581L617.419,508.742L614.95,508.082L614.25,507.271L610.262,506.897L609.482,507.212L606.254,510.172L603.165,512.566L602.895,511.609L602.036,511.346L602.265,510.488L601.356,508.631L600.426,507.831L599.467,509.466L599.567,508L598.757,506.979L597.917,508.251L596.968,508.041L596.458,508.491L595.598,508.135L595.818,509.244L595.028,510.155L594.809,511.188L594.239,511.101L593.939,512.21L593.359,512L591.94,512.969L591.73,514.184L590.64,513.932L590.74,513.062L588.661,511.253L587.921,511.544L586.072,511.235L585.353,510.645L583.973,510.593L582.404,510.079L581.254,508.999L582.074,508.678L582.534,507.545L583.953,508.713L584.403,508.251L584.453,509.559L585.453,509.845L585.133,507.86L583.423,506.71L583.383,505.904L582.614,505.823L582.064,506.628L581.164,506.932L581.214,506.144L580.555,506.307L581.334,504.982L580.575,504.246L578.615,505.303L577.856,503.797L577.186,503.995L576.646,501.759L574.797,501.823L575.187,501.169L575.227,499.528L572.968,499.318L570.749,500.352L570.219,500.247L570.209,499.277L570.709,498.472L571.169,498.758L571.079,497.619L569.939,497.514L569.019,497.987L568.36,497.619L568.25,498.396L565.641,499.855L565.221,499.248L564.002,499.61L564.651,500.772L565.931,500.877L565.311,501.479L565.911,502.652L567.32,502.197L566.75,502.839L567.22,503.201L564.961,503.411L563.182,504.421L561.802,504.655L556.095,503.656L553.616,502.927L549.558,501.128L547.908,500.562L545.059,499.885L542.76,499.85L541.781,500.159L539.282,500.077L534.134,500.941L532.295,502.004L530.596,499.178L531.895,498.121L533.134,495.284L534.704,493.824L534.134,493.065L534.954,491.874L534.294,490.356L534.374,488.464L533.354,487.618L533.474,486.415L534.614,485.189L534.254,483.455L533.744,482.993L533.964,482.217L534.864,481.621L534.784,480.705L535.943,479.461L535.953,478.41L537.153,476.524L536.853,475.111L537.613,473.949L536.783,472.583L537.743,472.057L537.143,470.75L537.043,468.426L536.063,468.689L535.633,466.575L534.324,465.734L534.764,464.601L534.014,462.879L533.075,462.208L533.504,461.402L531.715,460.31L531.295,459.323L531.915,457.367L531.385,456.036L531.525,455.406L530.516,454.355L529.826,452.766L528.526,452.048L527.717,450.618L527.257,450.437Z",
    "Maine": "M925.3,112.938L926.099,112.529L925.82,113.335ZM923.531,114.234L923.451,112.593L925.34,113.814L924.76,114.894ZM921.921,110.404L922.101,109.47L922.841,110.713ZM917.853,114.123L918.573,113.884L918.982,114.573ZM919.142,122.7L919.412,121.865L919.832,123.249ZM917.023,117.253L917.223,116.371L918.393,115.139L918.813,116.172L919.972,117.399L919.622,118.292L918.663,118.817L917.853,118.578L917.593,117.153ZM915.804,114.362L916.174,112.909L915.984,111.361L916.723,111.472L916.633,114.333ZM896.182,147.666L893.863,146.738L893.503,144.77L890.614,142.785L889.675,141.191L889.435,138.079L888.985,137.758L887.436,133.017L883.867,121.258L881.078,112.395L877.18,100.717L878.24,100.122L878.05,99.521L879.659,99.906L880.349,101.284L881.068,101.436L881.318,99.684L881.098,98.289L880.539,97.623L881.438,96.73L882.318,97.366L883.527,97.197L882.958,95.982L881.668,95.293L881.438,94.721L882.058,92.427L883.088,90.739L885.237,88.596L884.377,87.434L885.157,85.905L886.176,84.731L886.146,83.511L884.877,83.4L885.177,82.588L884.537,82.215L884.907,81.351L884.367,81.21L884.967,79.132L883.877,78.408L884.097,76.61L884.537,75.728L884.317,75.056L885.037,74.222L885.506,72.925L886.056,72.604L885.267,66.386L891.964,46.826L894.283,46.978L894.803,46.745L895.472,49.536L895.992,50.616L898.441,51.439L900.73,49.325L901.58,49.179L902.429,48.397L902.469,47.731L903.309,47.288L905.418,46.832L905.038,45.676L905.548,45.139L908.417,45.075L908.867,45.624L912.205,46.926L913.895,48.59L915.404,48.934L918.473,58.872L920.662,65.662L922.871,72.82L923.491,73.217L922.921,74.187L924.03,75.249L923.471,75.891L924.27,78.577L925.61,78.525L925.64,78.122L927.039,79.231L929.398,79.12L930.038,78.554L931.197,80.516L929.988,81.216L930.857,82.448L931.727,82.939L931.997,84.089L931.557,85.566L932.677,86.524L933.646,87.791L934.846,88.223L935.336,87.575L935.176,86.67L936.345,86.862L937.345,86.611L938.974,88.264L940.593,90.646L941.623,91.09L942.333,93.238L940.313,97.757L939.164,98.633L938.104,96.998L936.815,98.002L937.775,98.867L937.385,99.871L936.735,99.807L936.325,101.091L935.036,101.383L935.336,101.984L936.455,102.434L935.595,103.865L934.616,103.234L933.956,102.294L932.897,103.52L932.197,102.545L932.147,103.812L931.747,104.215L931.707,105.71L930.747,105.75L929.928,107.012L929.468,106.62L929.328,108.506L928.329,108.168L928.049,107.374L926.949,107.946L927.449,109.131L926.989,110.702L927.729,111.134L925.91,112.004L924.46,111.805L923.021,110.083L923.181,109.44L924.22,108.6L923.66,107.887L923.291,108.746L922.831,107.922L921.032,109.505L921.601,110.252L921.511,111.157L922.601,112.173L922.701,113.037L921.861,114.841L921.911,115.665L922.821,116.511L922.921,117.86L922.131,118.298L921.481,116.797L921.331,115.653L920.162,115.104L919.572,113.983L920.142,112.798L918.842,112.366L918.453,111.776L917.563,112.447L917.043,110.345L917.383,109.353L916.703,108.284L916.024,110.194L915.214,109.767L914.234,110.778L915.444,112.05L915.544,112.99L914.974,113.615L914.804,115.086L914.974,116.482L914.654,116.727L914.984,118.49L915.904,118.374L915.314,119.098L916.074,119.845L915.864,120.838L914.334,121.205L914.035,122.741L913.205,122.998L913.385,124.101L912.835,124.446L912.745,122.694L912.185,122.554L911.536,123.599L911.466,122.321L910.566,122.753L910.856,123.716L910.186,124.656L910.146,125.66L909.247,124.895L909.366,125.8L908.737,126.624L907.897,126.338L908.117,127.605L907.227,126.787L906.848,128.784L905.528,130.069L904.868,128.603L903.949,128.755L903.229,130.582L902.469,130.571L901.99,131.814L901.07,131.855L900.52,133.128L901.07,134.564L900.75,135.282L899.91,134.944L898.731,136.047L898.561,136.871L899.261,138.003L898.541,139.358L898.881,139.918L897.172,140.958L896.782,143.1L897.222,143.614L897.012,145.705L896.602,147.31Z",
    "Maryland": "M836.777,280.298L835.877,280.49L835.587,278.739L836.587,278.762ZM834.238,276.882L834.038,275.37L834.668,274.985L835.987,277.618ZM770.245,252.663L785.968,249.791L803.851,246.422L811.827,244.828L824.452,242.183L831.859,240.589L832.799,244.343L839.476,268.042L844.594,267.108L850.421,265.829L850.431,268.76L850.201,269.111L849.712,274.19L849.232,275.89L842.884,278.044L842.315,279.171L841.455,278.762L840.265,279.107L839.216,280.59L838.536,280.578L838.296,279.492L838.456,278.073L839.366,277.314L838.136,277.209L838.756,275.726L837.487,275.825L836.847,276.602L836.547,274.961L838.076,274.097L836.617,273.198L837.077,270.88L836.307,271.511L835.827,273.764L834.898,272.614L835.527,272.018L834.648,271.049L834.168,272.778L834.668,273.221L834.568,274.132L833.988,274.009L833.059,274.669L832.499,274.541L831.039,273.075L828.43,269.654L829.61,269.146L828.86,267.791L828.85,266.863L829.49,266.291L830,266.688L830.61,266.04L830.829,266.699L832.169,266.606L833.338,266.898L832.069,265.835L830.969,265.789L829.91,265.234L828.67,263.984L828.51,264.551L827.681,264.346L827.801,265.479L827.341,265.415L827.161,263.459L827.861,261.497L828.93,262.18L829.32,261.696L828.65,259.565L828.111,259.354L827.261,260.452L826.521,260.528L826.801,261.427L826.101,261.894L825.942,259.886L826.481,257.457L827.151,258.63L828.46,258.572L828.98,257.854L828.43,256.896L828.86,255.729L827.921,256.096L828.181,257.784L827.521,257.486L827.391,256.079L826.381,255.034L826.831,252.266L827.321,250.544L828.141,249.452L829.97,249.172L829.33,248.874L830.02,247.309L829.4,247.321L829.61,244.869L827.611,245.768L827.441,246.743L828.61,247.613L827.981,248.022L826.331,250.281L825.762,249.791L825.981,248.675L825.422,248.243L825.232,250.17L825.852,250.701L825.612,251.653L824.852,249.931L823.912,249.837L824.742,251.484L823.992,252.541L824.762,252.809L823.393,254.52L822.353,254.415L822.213,253.924L820.674,253.568L821.873,254.946L823.922,255.875L824.112,257.649L825.062,258.409L823.892,259.541L824.442,260.937L823.852,260.995L823.632,262.116L824.242,262.554L823.383,264.37L824.142,265.205L824.262,266.238L824.902,267.546L825.222,269.479L825.832,270.413L828.041,272.141L827.811,273.683L826.951,273.723L827.381,274.459L828.141,273.875L828.69,274.109L828.44,275.014L828.88,275.884L830.35,277.402L830.13,277.875L830.799,279.492L828.78,278.476L828.221,277.326L827.731,277.6L827.851,278.698L826.801,278.243L826.161,277.151L825.402,276.684L823.892,276.532L821.773,276.911L821.493,275.96L820.224,274.43L820.934,276.678L819.424,276.129L818.245,275.09L817.115,273.058L814.246,275.603L813.417,275.247L812.567,273.14L812.877,271.464L814.336,269.263L814.126,268.416L815.456,267.12L815.176,265.491L816.915,262.811L814.236,260.995L813.177,262.618L812.597,262.046L810.758,261.918L810.698,261.141L808.889,260.516L806.77,260.633L805.61,259.833L805.59,258.432L806.15,257.258L804.75,256.756L804.021,255.892L803.211,256.131L801.382,256.061L800.722,255.898L800.382,253.913L799.782,253.107L798.133,252.243L797.683,251.221L798.403,250.906L798.303,250.24L796.344,250.258L795.304,250.772L793.335,249.329L792.126,249.242L790.966,251.221L789.427,251.023L788.917,252.336L788.097,252.406L788.507,253.06L788.057,254.024L786.338,254.374L784.759,254.316L782.44,253.218L783.129,252.763L782,252.476L782.09,253.2L780.101,257.282L778.681,256.955L777.572,257.071L777.072,258.601L775.453,260.078L775.033,261.462L774.603,261.427L773.534,262.501L772.834,263.733L772.084,264.119Z",
    "Massachusetts": "M913.405,183.703L914.264,183.936L915.924,183.387L916.833,182.792L917.173,181.297L918.653,182.979L918.023,184.111L916.334,184.479L913.845,184.1ZM904.189,185.227L905.228,184.946L905.858,182.967L907.117,181.426L907.837,181.536L908.407,182.622L909.596,182.984L909.936,182.085L910.366,183.662L906.248,184.94L905.428,186.114ZM857.598,164.896L870.463,162.146L878.08,160.517L889.025,158.03L889.525,156.833L890.554,156.675L890.185,155.543L890.844,154.649L892.014,154.69L892.224,153.406L893.693,152.401L895.082,152.594L895.502,152.215L897.162,155.922L898.811,156.413L899.291,155.438L900.25,155.852L899.78,157.802L899.321,157.639L897.302,159.192L896.572,159.507L897.192,159.963L896.712,161.457L895.982,161.86L895.502,163.034L896.432,164.12L895.592,164.406L896.002,165.795L896.842,165.848L896.992,165.077L897.781,164.704L898.521,165.451L899.91,165.521L900.92,166.204L901.28,167.016L902.929,168.434L902.949,170.209L902.269,170.507L903.339,171.307L905.268,171.5L906.128,172.919L906.128,173.917L907.567,174.793L909.237,174.863L910.606,174.588L911.236,174.886L912.125,173.754L914.524,172.253L914.734,171.704L913.575,169.211L912.995,170.005L912.485,168.201L911.915,167.255L910.896,166.858L910.306,167.553L909.346,167.249L910.126,166.601L912.455,166.928L914.154,168.575L915.804,171.383L916.643,173.894L916.613,175.569L916.294,176.831L916.124,174.927L915.394,174.705L912.735,176.071L911.965,176.679L910.446,176.918L909.047,178.027L908.467,179.429L906.308,180.34L904.339,183.02L902.02,184.514L902.219,183.948L904.059,182.757L905.868,180.34L905.908,179.405L905.008,177.35L905.478,176.825L903.769,176.428L904.059,177.531L903.429,177.484L903.579,178.676L902.799,178.541L902.969,179.23L901.35,179.797L901.32,182.237L900.03,183.055L898.741,183.341L897.611,179.884L896.502,179.802L895.832,179.154L895.003,178.401L893.783,178.074L892.923,175.558L892.274,175.85L891.554,173.123L884.957,175.102L884.847,174.769L869.523,178.378L869.523,179.148L868.754,179.464L868.594,178.6L865.465,179.324L857.748,180.953L857.218,180.234Z",
    "Michigan": "M666.678,128.696L667.348,128.644L667.738,129.403L671.486,130.156L670.657,131.388L669.337,131.195ZM653.254,130.985L654.484,131.592L654.364,132.299L653.214,131.703ZM652.174,136.304L652.364,134.401L652.794,133.694L652.764,132.603L653.794,132.62L654.304,135.808L653.304,136.76ZM650.725,133.367L651.485,133.128L651.285,134.191ZM648.616,140.158L649.396,140.415L649.536,141.53ZM646.487,147.193L646.757,146.732L647.866,147.088L648.046,148.776L647.476,148.811L646.637,147.976ZM645.347,150.229L645.867,149.319L646.517,149.651L645.737,150.492ZM635.611,137.595L636.861,138.704L636.451,139.171ZM641.889,223.82L643.538,222.325L644.978,220.498L646.677,215.261L648.476,212.009L649.206,209.585L649.696,206.777L649.845,201.365L649.236,196.921L648.746,194.79L647.686,192.186L645.427,188.356L643.638,184.047L642.838,182.745L642.359,181.262L642.469,180.503L643.398,178.857L643.728,177.187L642.868,173.859L641.859,172.002L643.068,170.49L644.138,167.459L645.107,165.206L645.267,163.489L645.107,162.111L645.367,160.202L644.648,158.445L644.858,157.119L647.037,156.097L647.217,155.443L647.007,152.407L648.366,152.256L648.976,150.784L650.015,151.339L650.975,150.994L651.685,148.641L652.604,147.608L653.354,145.413L654.524,144.759L654.743,145.477L653.564,146.72L654.494,148.157L653.394,150.189L654.054,149.733L654.254,151.158L653.894,151.327L653.704,153.359L654.234,154.743L654.773,154.655L655.463,151.858L654.913,151.794L655.423,149.967L656.083,149.511L655.913,152.752L655.193,153.68L655.063,154.819L655.863,154.994L657.482,150.708L657.462,146.528L656.833,143.935L657.012,143.118L659.321,140.923L660.311,140.508L662.07,140.508L663.81,139.591L663.64,138.967L661.74,138.85L660.901,138.044L660.181,136.059L660.721,134.646L661.591,134.045L662.53,132.205L661.321,131.633L664.689,131.534L664.989,130.553L668.588,132.077L670.177,133.005L670.877,132.532L672.196,132.486L674.045,132.924L675.585,134.36L676.054,135.586L679.213,135.621L680.992,136.894L682.332,136.853L684.411,137.945L686,137.63L688.049,139.352L687.63,139.924L688.699,141.652L689.449,142.318L690.498,144.554L688.359,143.784L687.62,144.753L688.049,145.232L688.009,146.493L688.939,147.479L690.159,147.824L690.618,148.904L690.918,150.755L691.388,151.415L691.078,154.141L691.358,155.35L691.578,159.822L691.098,160.062L690.298,161.527L688.989,161.673L688.489,162.788L688.429,166.648L686.97,167.296L687.09,168.236L684.741,168.656L683.691,170.39L683.741,173.573L683.421,174.209L684.361,175.85L685.351,176.352L685.82,175.639L686.19,176.323L687.35,176.579L688.209,177.21L688.729,176.831L690.079,174.332L691.168,173.695L690.668,172.784L691.338,170.139L691.708,171.068L692.917,169.731L691.638,169.316L693.057,169.176L693.797,167.816L695.056,167.448L697.076,166.414L697.336,165.714L698.975,164.914L701.074,165.69L702.034,166.321L703.323,168.534L704.203,169.596L704.832,171.576L705.452,174.588L706.951,178.121L707.881,182.792L708.871,185.437L710.44,188.052L709.93,189.267L709.87,191.959L710.25,192.963L709.84,196.524L708.711,198.019L708.101,197.961L707.481,198.872L707.391,197.616L706.802,197.172L707.991,195.415L706.712,195.106L705.262,196.116L705.032,197.003L705.752,198.095L704.932,198.112L704.423,199.187L704.712,200.792L704.143,203.116L701.974,204.191L701.174,206.094L701.544,209.457L700.704,210.064L700.864,211.413L699.774,213.083L698.885,213.521L698.765,214.554L698.135,214.846L697.376,216.802L697.835,217.836L697.366,218.081L682.562,220.568L675.265,221.683L675.095,220.253L658.902,222.109ZM592.13,90.879L593.189,89.496L598.147,86.43L598.537,86.43L600.696,84.404L602.285,83.488L602.635,83.674L604.115,82.985L603.765,83.628L601.976,85.519L601.996,86.092L600.716,87.236L597.368,88.783L595.878,89.887L597.288,90.167L594.189,91.784L593.189,91.79ZM576.316,121.042L580.115,119.045L582.164,118.274L583.753,116.704L584.743,115.408L585.602,114.841L587.372,114.398L588.221,114.66L589.801,114.041L591.31,113.89L593.759,112.395L595.608,110.24L597.607,110.024L598.497,108.962L598.937,107.625L600.746,106.258L602.265,104.589L603.485,104.04L604.515,102.901L605.624,101.085L609.063,98.878L612.091,98.143L614.79,98.049L616.15,98.674L616.3,99.41L614.75,100.023L612.601,100.151L612.971,101.12L611.282,102.247L609.782,104.197L609.053,104.408L608.863,105.838L608.023,106.27L607.953,106.971L607.153,107.689L607.023,108.81L605.944,109.943L605.584,113.107L606.154,114.672L607.083,112.926L609.073,110.643L610.542,109.697L610.482,110.211L609.173,111.624L608.653,112.85L610.172,111.11L611.572,110.637L613.061,110.836L614.36,110.643L616.879,111.42L617.089,112.161L618.629,112.453L619.268,113.043L619.558,114.187L620.558,115.04L620.948,115.921L621.967,116.826L622.887,116.961L623.317,118.835L625.016,119.109L627.325,118.718L628.634,117.755L629.264,117.854L629.834,119.016L630.873,119.6L631.923,119.582L632.273,118.654L633.073,118.631L633.732,119.39L633.822,118.047L633.332,117.072L634.162,116.616L634.612,117.177L634.422,118.263L635.402,118.671L637.001,116.54L638.77,115.764L641.789,113.335L642.429,113.679L645.737,112.517L647.027,112.599L650.215,112.395L651.815,112.091L655.073,110.089L656.323,109.721L658.012,109.657L659.691,109.201L658.712,110.923L658.812,113.072L659.122,114.333L658.712,114.754L659.461,115.717L660.631,115.367L662.85,116.067L664.599,114.929L665.339,114.905L666.049,116.383L668.028,115.565L668.518,114.158L671.057,113.849L671.396,113.066L672.896,112.961L673.236,113.504L672.946,115.46L673.635,117.696L673.885,119.483L672.336,119.722L671.996,121.024L673.925,120.686L674.395,121.287L675.575,121.567L674.995,122.519L676.424,123.681L677.134,123.617L678.403,124.277L678.663,123.553L679.543,124.113L679.693,122.84L678.773,121.789L679.613,121.964L681.682,121.404L682.552,121.614L683.521,123.243L684.521,123.716L684.111,125.012L683.361,125.485L681.792,124.954L680.113,125.468L678.284,124.895L676.204,125.363L674.705,125.111L671.386,126.028L670.737,126.653L668.927,125.614L668.228,126.116L667.578,124.785L666.888,125.001L666.089,124.51L665.599,125.141L665.859,126.314L665.099,127.027L665.929,129.006L665.269,129.479L663.87,128.825L663.63,128.264L662.38,127.686L660.861,126.168L658.452,125.444L657.762,125.654L655.513,124.843L654.833,125.152L652.654,125.193L651.535,126.676L650.755,128.183L650.255,128.393L648.456,128.142L647.217,128.562L646.897,129.631L644.788,128.93L642.529,129.146L641.319,129.742L640.689,130.612L640.329,133.251L639.52,133.251L639.33,133.852L638.08,134.319L637.761,135.347L637.081,135.487L637.141,136.339L636.521,136.561L636.811,137.711L635.302,136.906L635.102,136.147L635.841,135.668L636.211,133.84L636.951,133.852L637.631,132.112L637.361,131.306L636.691,131.178L635.861,132.713L633.692,132.34L633.932,133.408L633.272,134.389L633.112,135.481L631.533,136.228L630.883,136.065L630.604,133.747L630.064,133.163L629.524,133.805L629.714,136.117L628.055,137.32L626.865,139.889L625.985,142.318L626.135,142.686L625.216,144.14L624.276,146.37L622.297,149.71L622.677,150.504L621.537,150.317L620.248,149.009L620.748,146.131L621.287,145.156L620.468,144.093L619.608,145.08L618.339,145.15L617.649,144.624L617.759,143.328L618.469,142.604L618.699,141.67L618.009,140.304L618.519,140.409L618.739,139.335L617.939,138.552L618.549,137.916L617.999,137.11L616.479,136.17L615.56,136.269L614.99,135.487L613.481,135.831L612.771,135.142L613.631,134.045L613.091,132.813L610.792,132.083L610.052,132.41L608.673,131.616L608.163,132.019L606.654,131.178L605.154,131.347L605.014,131.995L603.035,131.26L602.495,131.557L601.306,131.102L597.407,129.199L581.214,125.859L580.355,123.617L579.265,122.122L577.916,121.941L577.666,121.246L576.746,121.766Z",
    "Minnesota": "M472.12,69.521L484.345,69.644L499.729,69.656L502.917,69.627L502.847,61.137L504.257,61.809L505.826,61.452L507.275,62.416L507.715,63.07L508.535,66.882L508.875,67.338L509.934,72.079L509.674,73.235L509.854,74.414L510.614,75.22L512.153,76.043L513.643,76.195L513.973,75.833L516.232,76.061L516.851,77.141L520.1,77.217L522.539,77.468L523.149,78.758L523.339,79.955L525.568,79.873L528.207,79.179L528.227,78.157L529.836,77.678L529.946,77.339L532.025,76.931L532.475,77.339L535.364,77.246L539.262,78.98L540.641,78.852L540.651,79.815L539.732,79.943L539.552,80.656L540.411,81.21L542.63,80.883L543.43,81.888L543.27,82.98L544.89,85.829L546.359,85.157L545.749,83.669L546.379,82.793L547.219,82.968L549.478,82.577L550.337,83.377L550.287,84.614L551.047,85.303L552.017,85.157L552.476,85.811L554.725,85.887L554.615,86.524L555.955,88.094L557.154,87.791L557.104,89.221L558.264,88.626L559.174,89.017L560.033,88.515L561.832,88.1L563.452,86.576L565.781,84.901L567.12,84.247L567.82,84.346L567.96,85.461L568.859,86.004L568.58,86.518L569.159,87.399L570.959,87.183L571.818,86.687L572.238,87.277L578.595,86.553L580.265,87.043L581.194,88.544L582.694,89.081L583.423,88.386L584.473,88.135L585.223,88.468L587.052,88.573L588.401,88.065L586.982,89.239L585.373,89.898L584.003,91.095L582.084,91.866L581.364,92.613L577.296,94.149L576.066,94.809L574.497,95.229L573.038,95.947L570.129,97.857L568.2,99.462L565.961,101.622L563.842,103.923L563.592,104.518L561.163,107.601L559.423,109.487L557.994,110.351L556.655,112.091L556.085,112.319L554.585,113.977L553.446,114.649L550.327,117.404L551.607,119.162L550.427,118.257L548.928,119.022L548.778,120.423L547.388,120.295L547.878,133.391L547.359,133.595L547.059,134.704L545.719,134.658L545.189,135.755L544.41,135.534L543.99,136.263L542.62,136.73L541.601,137.624L540.741,139.165L540.501,140.578L539.212,141.664L538.982,143.422L539.092,144.84L540.821,144.94L542.8,147.415L542.88,148.659L542.171,150.072L541.261,151.123L541.201,153.377L541.621,155.192L540.911,155.852L541.371,156.979L541.661,159.011L541.311,160.021L541.501,161.171L540.891,163.197L542.041,163.921L544.79,166.368L545.129,167.132L548.348,167.273L548.898,167.681L549.448,169.013L550.557,169.847L553.156,170.571L555.255,172.002L556.175,174.892L557.144,175.715L558.894,176.614L561.033,178.605L563.472,179.178L566.011,182.412L566.73,184L566.411,185.472L566.51,187.585L567.13,188.268L566.99,189.051L567.46,190.113L559.074,190.516L540.831,191.246L525.908,191.667L507.865,191.959L494.541,192.064L483.046,192.04L483.205,165.106L483.245,151.812L482.686,150.492L480.677,149.342L479.637,149.254L478.897,148.238L478.457,146.942L476.948,144.893L477.348,143.877L480.187,141.781L481.276,140.152L481.596,137.589L481.446,135.3L481.756,134.272L481.136,131.242L481.086,128.784L480.047,127.774L479.017,125.462L478.887,123.523L478.078,121.305L478.387,119.927L478.078,117.877L478.457,116.19L477.808,114.59L477.798,110.398L477.578,109.394L477.628,106.404L477.248,104.664L477.448,100.788L475.539,95.971L474.999,93.437L474.349,92.462L474.189,90.517L473.749,90.062L473.12,87.913L473.599,85.461L473.16,83.68L473.41,81.473L473.14,79.43L473.819,77.666L473.979,76.452L473.43,75.559L472.87,72.785L471.96,70.228Z",
    "Mississippi": "M634.572,485.043L636.531,484.85L635.711,485.574ZM629.504,484.797L630.574,484.459L633.093,485.113L631.463,485.148ZM625.386,485.761L627.195,485.44L625.756,486.076ZM622.057,485.498L623.497,485.416L623.097,486.158ZM580.315,425.984L581.014,424.595L579.535,423.649L579.835,422.913L581.314,423.065L581.614,422.744L581.444,421.051L582.274,419.906L581.824,419.539L581.274,420.671L580.435,419.334L580.395,418.166L581.824,416.351L581.274,415.866L580.844,417.203L579.885,417.553L579.165,416.759L580.465,416.391L580.535,415.428L579.795,414.908L579.745,415.924L578.545,416.292L579.435,414.903L578.525,413.46L580.235,412.707L580.105,412.012L578.385,410.926L579.605,410.202L580.894,411.236L581.974,410.845L581.304,409.905L580.405,410.202L579.885,409.747L579.875,408.684L582.694,408.299L581.664,407.715L581.084,406.536L582.114,405.158L580.834,404.58L580.645,404.113L581.874,403.418L582.264,404.23L582.954,403.885L582.424,403.033L584.233,402.694L584.503,401.491L583.034,400.925L582.904,400.318L583.683,399.67L585.063,400.218L585.373,399.185L584.063,399.278L583.203,398.584L583.663,397.912L584.773,398.689L584.973,397.299L586.192,396.943L586.602,396.336L586.142,395.045L587.572,394.876L587.452,395.927L588.101,395.781L588.021,394.695L589.401,393.831L589.641,393.282L589.131,392.173L589.871,390.941L589.011,389.23L588.921,387.992L589.551,387.56L589.711,388.833L590.43,388.675L591.14,387.788L590.94,387.204L589.651,387.251L589.221,386.568L590.091,384.974L590.181,386.597L591,386.608L591.28,385.995L591.11,384.431L590.62,383.105L591.37,383.035L591.7,384.144L593.179,383.473L594.749,382.323L594.699,381.336L593.559,380.402L609.392,379.421L620.468,378.592L631.733,377.687L632.693,379.263L633.782,379.859L633.522,389.563L633.132,406.378L632.593,436.605L632.313,447.564L632.833,451.932L635.182,470.423L636.521,481.469L634.502,482.707L633.852,482.269L633.003,482.608L632.613,482.065L631.373,482.042L629.804,482.485L628.504,481.75L628.404,482.298L626.365,481.709L623.317,482.509L619.428,484.243L619.578,483.186L618.858,482.666L617.919,483.25L618.689,484.301L617.049,485.504L616.599,487.08L615.14,487.285L614.26,487.355L613.281,486.362L612.691,485.054L612.871,483.887L611.741,482.468L611.671,481.446L610.152,480.331L609.233,479.227L608.823,477.546L608.143,476.985L608.503,475.526L608.373,474.58L608.853,473.99L609.552,470.563L610.022,469.413L609.542,469.255L596.498,470.113L584.623,470.785L573.627,471.31L574.967,470.364L574.877,469.669L573.727,468.297L574.357,467.264L573.248,466.061L573.268,465.331L574.547,465.401L575.587,465.034L575.757,464.187L574.327,462.319L574.927,461.53L575.537,462.908L576.246,462.996L576.346,462.295L575.507,461.25L575.377,459.312L576.606,459.061L577.376,458.354L577.066,457.747L575.897,458.05L575.257,457.467L575.597,456.737L576.916,457.437L577.456,457.21L577.426,455.166L578.186,454.454L579.685,454.29L579.895,453.794L577.976,453.817L578.385,451.978L579.705,451.873L581.284,450.338L581.084,449.38L583.143,448.025L581.484,447.144L582.084,446.735L582.674,447.336L583.753,446.163L584.293,444.814L583.433,444.376L583.443,445.597L581.374,445.515L581.274,444.073L583.903,443.057L584.443,443.53L584.863,442.636L584.683,441.661L585.482,441.755L586.202,440.873L584.423,440.435L584.223,439.273L584.723,438.859L584.173,438.222L583.523,438.643L581.844,437.615L582.074,436.652L584.033,437.516L584.223,437.183L582.434,435.939L583.803,434.38L583.343,433.867L582.944,434.772L581.684,435.332L580.984,434.118L582.264,432.921L582.674,432.121L580.754,431.823L580.615,430.276L580.914,429.534L582.224,428.478L581.824,426.533L580.914,426.504L581.054,427.678L580.705,428.262L579.505,427.683Z",
    "Missouri": "M494.301,257.562L513.373,257.72L522.469,257.521L531.595,257.142L536.433,257.001L544.89,256.558L555.985,255.845L562.142,255.314L563.002,256.645L563.962,256.815L564.141,257.679L565.081,258.625L565.671,258.636L565.791,259.722L566.5,260.294L567.6,260.364L566.92,261.205L566.281,263.628L566.331,266.069L566.69,268.118L568.09,270.5L567.66,271.645L568.01,272.532L569.189,273.49L569.179,274.926L571.448,277.051L572.418,277.565L573.128,278.867L573.947,278.984L575.117,280.957L578.625,283.205L580.675,285.109L581.634,288.729L581.144,289.535L581.764,290.743L582.204,292.384L583.623,293.569L584.293,293.394L585.772,291.216L588.261,292.051L589.281,292.098L591.73,293.534L591.63,294.696L590.221,296.494L590.91,298.246L590.73,299.244L589.641,300.902L589.171,303.226L588.391,304.213L588.001,306.566L588.441,308.078L589.891,309.258L590.5,310.238L591.8,311.132L592.53,311.249L593.329,312.253L593.829,312.224L594.989,313.333L596.248,313.327L595.448,314.296L595.878,315.085L596.788,315.33L597.727,314.46L598.897,315.528L599.637,315.663L601.116,316.93L601.026,317.543L601.926,317.706L602.575,318.483L603.865,319.026L603.875,320.129L604.624,321.005L603.865,321.379L604.015,322.4L605.514,324.52L605.914,325.612L605.724,326.598L604.804,326.914L604.355,327.936L605.434,328.741L605.494,329.891L607.193,332.46L607.213,333.383L609.053,334.405L609.322,333.605L608.403,332.618L609.253,332.688L610.422,333.786L610.592,334.492L611.632,334.37L612.241,334.72L611.761,337.406L611.122,338.352L612.271,339.058L611.392,339.414L610.882,340.43L611.681,341.499L611.052,342.386L610.622,343.764L610.082,343.904L608.763,342.48L607.923,342.906L607.363,345.58L606.794,346.473L606.164,345.703L606.454,344.803L606.134,344.068L604.954,343.922L604.544,344.564L605.204,345.755L605.594,346.24L605.194,347.18L605.904,348.406L605.474,349.358L604.175,349.381L604.205,350.087L605.624,350.864L604.744,351.623L602.805,351.454L602.645,351.827L604.285,352.995L604.794,354.151L603.325,355.261L602.975,357.123L602.505,357.164L590.99,357.999L591.91,355.815L593.329,354.612L593.539,353.579L595.158,352.47L595.858,351.46L596.098,349.533L595.738,348.564L594.579,348.102L594.319,346.462L577.016,347.443L555.995,348.383L541.481,348.885L527.607,349.229L514.942,349.445L514.782,338.188L514.532,320.748L514.532,316.725L514.352,301.901L514.272,290.404L514.522,289.599L513.313,289.558L512.873,288.98L512.033,289.318L511.314,288.554L510.524,288.419L510.124,287.106L509.195,286.399L509.005,285.243L509.364,284.321L508.595,284.484L507.755,283.252L506.746,282.68L506.576,281.985L505.606,281.086L505.586,280.274L506.316,280.193L506.925,278.196L507.885,277.711L508.135,276.374L509.354,276.789L509.594,275.744L508.865,276.059L508.635,275.376L509.454,274.599L508.325,273.776L508.545,273.145L507.115,272.912L506.706,273.688L505.166,273.513L504.926,272.976L503.847,272.754L502.088,270.705L501.438,270.068L500.408,269.969L500.158,269.385L500.538,267.867L499.169,266.542L499.329,265.59L497.859,264.633L497.909,264.171L496.89,263.657L495.53,260.166L495.41,259.36L496.06,259.086L495.88,258.064L495.46,258.835L494.351,258.841Z",
    "Montana": "M195.026,38.401L207.241,40.999L219.356,43.376L229.292,45.367L239.268,47.183L261.329,51.024L268.606,52.192L280.171,53.944L298.113,56.525L309.269,58.008L320.974,59.473L335.148,61.114L347.392,62.41L358.828,63.543L371.053,64.611L369.243,86.71L369.033,89.665L368.004,101.12L366.185,122.367L365.375,132.1L364.305,145.652L363.676,153.12L363.386,153.166L352.28,152.139L334.248,150.323L333.998,150.463L328.74,149.903L315.866,148.384L315.106,148.215L293.715,145.559L284.609,144.327L284.309,144.146L274.193,142.803L268.586,141.927L267.166,141.886L259.27,140.765L258.06,140.333L253.842,139.702L252.512,148.017L252.083,151.362L250.993,150.743L250.813,149.762L249.694,148.56L249.863,147.625L248.674,145.138L247.674,144.344L247.205,145.214L246.065,145.097L246.115,146.061L245.075,147.263L245.765,148.577L245.225,148.758L243.986,148.034L243.486,148.268L242.117,147.783L241.877,148.122L240.088,148.6L239.528,147.263L237.699,147.579L236.919,147.217L235.659,147.59L234.5,147.112L233.71,146.183L233.041,146.055L231.751,146.732L230.991,148.437L229.772,147.497L229.282,147.795L228.572,147.176L226.853,146.855L226.013,146.283L224.964,146.539L223.864,147.754L224.044,148.799L223.475,149.149L222.975,148.203L221.355,146.662L221.185,145.582L221.595,144.998L220.706,143.106L221.255,142.773L221.265,141.448L220.866,140.969L220.646,139.218L219.046,137.787L217.417,138.354L217.337,137.542L215.988,136.252L215.708,134.313L216.547,134.208L216.827,132.007L215.908,131.067L216.098,130.6L215.208,130.133L215.078,128.685L214.019,127.062L213.529,125.345L213.829,123.874L213.319,122.356L213.879,120.972L212.819,120.768L213.589,119.063L212.349,117.877L211.25,116.295L210.7,116.453L210.53,117.428L209.69,117.743L208.351,119.08L207.381,119.366L206.572,118.998L206.152,120.055L204.892,120.639L203.843,119.284L203.373,118.023L202.004,117.766L202.383,116.791L202.173,115.997L203.243,115.548L203.393,114.368L202.673,113.049L204.033,111.572L205.402,111.823L205.862,111.215L205.432,109.919L205.932,109.557L205.092,108.483L204.982,107.298L205.692,106.299L204.882,105.505L205.162,104.594L206.232,104.664L206.262,102.551L206.842,102.452L207.421,101.22L207.511,100.075L208.441,98.995L208.281,97.699L209.101,97.646L210.16,94.704L209.65,94.102L208.651,94.096L207.891,94.604L205.682,93.985L205.452,93.045L205.892,92.497L204.852,91.545L203.643,92.286L203.653,90.43L202.303,89.484L201.634,88.199L202.163,86.938L201.324,85.584L200.614,85.496L200.354,83.721L199.205,81.549L198.485,80.959L197.715,78.408L196.496,77.97L194.947,76.761L194.797,75.675L192.278,73.066L193.977,72.99L193.387,72.306L193.417,71.355L192.817,70.607L193.857,69.913L193.427,68.482L193.807,67.612L192.568,66.094L192.548,64.669L191.858,63.887L190.538,60.658L190.288,60.512Z",
    "Nebraska": "M359.667,197.733L370.173,198.585L385.037,199.701L395.372,200.378L397.581,200.571L415.134,201.493L427.499,202.048L441.263,202.544L449.769,202.783L450.249,203.939L453.608,205.662L455.677,206.906L457.186,208.219L458.566,208.126L459.595,207.081L459.825,206.152L460.595,205.942L461.465,206.386L463.194,206.567L464.253,206.24L466.922,206.538L467.292,206.117L469.091,206.106L470.511,206.614L470.641,207.437L471.92,208.289L474.349,208.575L474.639,209.475L475.569,209.188L477.208,209.866L477.268,210.584L478.477,210.712L479.127,211.185L478.737,212.038L479.927,213.305L480.487,214.373L481.666,214.14L482.156,214.875L483.066,214.7L483.875,214.852L484.125,215.699L483.545,216.732L483.505,217.83L484.305,218.799L485.045,220.568L484.505,220.895L484.725,222.127L485.964,223.26L485.884,224.725L486.644,224.947L486.574,225.864L488.223,226.378L487.684,227.861L488.643,229.852L489.213,230.161L488.413,232.613L488.743,233.845L488.433,234.248L489.013,235.311L488.763,235.924L489.473,236.782L489.903,236.058L490.482,236.712L490.282,237.605L491.652,237.979L491.242,240.717L492.392,241.202L492.192,241.967L491.532,241.815L491.862,244.08L492.961,244.168L492.302,244.746L492.651,246.241L492.542,248.022L493.231,248.851L493.031,249.58L493.441,250.935L492.921,251.25L493.001,253.381L492.222,254.263L493.001,255.489L493.901,255.892L494.541,257.025L494.301,257.562L494.351,258.841L495.46,258.835L495.88,258.064L496.06,259.086L495.41,259.36L495.53,260.166L496.89,263.657L497.909,264.171L497.859,264.633L499.329,265.59L499.169,266.542L500.538,267.867L500.158,269.385L500.408,269.969L501.438,270.068L502.088,270.705L487.744,270.734L472.56,270.617L457.606,270.366L446.941,270.109L436.615,269.806L425.71,269.42L415.944,268.988L398.541,268.077L387.806,267.412L389.245,244.962L376.3,244.092L365.125,243.257L355.859,242.504Z",
    "Nevada": "M98.907,176.229L103.285,177.309L111.542,179.458L119.728,181.507L122.877,182.185L136.931,185.443L146.577,187.603L157.142,190.02L174.155,193.623L178.703,194.557L181.982,195.071L185.71,195.993L194.707,197.768L194.277,200.174L189.299,225.759L187.969,232.415L179.703,274.985L177.574,286.049L173.715,305.871L173.316,308.166L171.846,315.785L170.807,321.665L169.947,326.02L169.517,326.248L167.338,329.424L165.809,329.343L164.679,328.122L164.889,327.778L164.02,326.044L161.641,325.88L161.611,325.39L160.551,325.168L159.681,325.483L157.472,325.635L157.052,325.95L157.242,327.346L156.853,329.197L157.672,330.948L157.042,331.281L156.573,332.309L156.643,333.476L156.283,334.422L156.293,335.806L156.753,336.828L155.793,339.42L156.333,341.364L156.513,343.338L156.273,347.01L155.963,347.74L154.673,348.225L155.263,348.838L154.434,350.344L142.179,331.97L130.054,313.748L114.79,290.761L99.896,268.393L93.309,258.449L82.014,241.5L83.213,236.56L87.462,220.644L90.55,208.797L92.6,200.652Z",
    "New Hampshire": "M872.512,108.711L872.232,107.461L872.982,105.902L873.002,104.186L872.132,103.695L873.012,103.497L874.161,101.599L875.311,102.51L876.8,102.212L877.18,100.717L881.078,112.395L883.867,121.258L887.436,133.017L888.985,137.758L889.435,138.079L889.675,141.191L890.614,142.785L893.503,144.77L893.863,146.738L896.182,147.666L895.472,150.65L895.502,152.215L895.082,152.594L893.693,152.401L892.224,153.406L892.014,154.69L890.844,154.649L890.185,155.543L890.554,156.675L889.525,156.833L889.025,158.03L878.08,160.517L870.463,162.146L868.684,160.704L868.104,159.081L868.044,157.475L868.873,156.868L869.123,155.916L868.534,155.041L868.704,153.493L868.174,153.009L867.904,150.486L868.224,149.143L867.674,148.133L867.524,145.547L867.084,144.852L867.034,143.404L867.684,142.575L867.514,140.304L868.664,138.43L868.454,136.52L869.273,133.963L868.784,133.233L869.553,130.798L868.484,128.796L868.494,127.669L868.004,127.044L868.264,125.835L870.133,124.726L871.452,124.224L871.292,123.628L872.762,122.548L873.362,120.931L874.241,120.084L873.641,119.004L874.191,118.625L873.871,117.165L873.222,116.704L872.002,114.859L872.622,113.936L872.632,112.167L873.212,110.894L872.122,109.487Z",
    "New Jersey": "M836.117,241.797L836.667,240.379L837.127,238.44L837.687,237.483L838.856,236.14L839.846,235.912L841.675,234.739L841.645,232.993L844.374,229.846L845.443,229.291L845.903,228.158L846.593,228.135L847.383,227.037L846.303,226.016L844.954,225.513L844.304,224.626L842.914,223.954L842.205,222.746L840.615,222.664L840.186,221.858L839.786,219.943L839.146,219.494L837.597,219.692L836.837,217.158L836.977,215.121L837.577,215.097L838.406,212.604L836.617,210.759L836.567,210.309L838.036,208.856L838.706,207.659L838.416,207.192L839.686,205.236L840.096,202.532L840.955,201.131L841.845,200.67L849.152,203.256L856.379,205.522L856.689,205.545L856.679,208.032L855.779,212.849L855.559,213.591L853.55,214.753L853.68,216.393L853.25,217.789L853.42,218.624L854.659,218.881L855.569,218.303L858.018,218.787L858.088,217.906L858.948,221.152L858.988,225.227L859.307,230.056L859.747,233.372L859.377,235.165L857.798,240.571L856.549,243.421L854.969,244.869L853.77,246.743L852.73,249.867L852.051,252.973L851.111,254.38L850.011,254.899L849.302,254.789L849.282,253.387L849.781,250.69L849.642,249.662L848.232,249.259L847.143,249.423L847.043,248.991L845.633,249.324L845.353,250.094L844.374,248.909L842.275,248.29L841.105,247.187L840.755,247.432L839.166,246.375L838.606,245.657L837.317,245.441L836.967,243.666L837.147,242.767L836.287,242.311Z",
    "New Mexico": "M260.569,322.587L274.503,324.45L287.967,326.114L298.573,327.363L298.683,327.55L310.428,328.823L329.43,330.726L331.539,330.977L343.184,332.034L366.744,333.792L365.905,345.019L365.205,344.967L364.485,354.969L361.027,400.849L359.028,422.54L357.288,445.848L344.904,444.89L333.508,443.933L322.453,442.917L312.867,441.988L290.566,439.629L290.256,441.545L289.797,441.93L290.386,443.506L291.716,444.662L274.923,442.706L260.179,440.867L258.89,450.869L243.026,448.773L247.524,416.672L248.964,406.168L253.682,372.292L255.491,359.073Z",
    "New York": "M885.417,192.461L885.576,191.988L886.966,191.258L885.956,192.385ZM882.928,194.79L883.757,194.247L883.287,195.217ZM855.559,213.591L856.129,214.776L855.129,216.715L853.25,217.789L853.68,216.393L853.55,214.753ZM802.961,151.31L803.611,150.183L803.561,151.094ZM801.632,151.222L802.122,150.317L802.681,150.305ZM755.701,196.98L757.41,195.637L760.469,192.531L761.479,190.978L763.068,189.716L764.497,188.963L764.857,187.533L765.497,186.704L765.557,185.676L767.466,184.234L768.316,183.014L767.986,181.764L766.367,179.446L764.977,179.032L764.677,177.28L763.598,177.163L763.858,175.622L762.928,173.076L766.476,171.179L769.485,169.713L771.734,168.907L775.803,168.271L777.832,167.74L779.891,167.494L783.509,167.524L785.399,168.475L787.488,169.094L789.577,167.722L793.955,166.584L795.274,166.706L796.564,166.455L797.234,165.836L798.893,165.089L800.262,164.009L801.012,162.275L803.991,159.145L805.83,158.993L806.72,158.433L807.019,157.318L806.78,155.659L805.55,152.378L804.301,151.858L804.7,150.778L805.47,150.416L805.7,151.006L806.72,149.984L806.4,149.214L805.1,148.56L803.971,149.085L804.011,148.198L803.061,147.707L802.211,147.876L801.972,146.353L802.421,144L803.451,143.678L804.55,142.622L804.401,141.711L806.59,139.72L807.869,138.978L808.999,137.262L809.448,135.253L812.587,130.238L815.896,125.806L818.295,123.821L819.474,122.338L820.464,122.116L821.563,121.124L823.153,121.346L823.832,120.978L829.23,119.915L832.129,119.249L836.257,118.058L844.364,115.892L844.924,117.901L844.714,119.781L845.573,120.341L845.443,121.818L845.993,125.193L847.622,126.846L848.172,128.375L847.882,129.736L848.752,131.779L848.722,132.486L847.962,133.893L848.002,137.244L848.512,137.536L849.042,139.574L849.891,140.724L849.881,141.927L850.811,142.896L850.321,146.148L850.611,147.269L851.141,147.485L851.251,146.195L852.33,145.862L852.62,146.68L853.73,147.83L854.999,153.674L856.899,162.952L856.889,163.775L857.598,164.896L857.218,180.234L857.748,180.953L859.477,190.481L860.697,197.686L862.236,199.234L858.858,202.637L860.507,204.301L860.607,204.891L860.377,205.785L859.367,206.865L859.567,208.383L858.798,208.523L859.577,209.539L860.287,207.63L861.267,207.542L861.447,206.701L863.516,205.744L863.606,205.066L865.035,205.329L864.935,204.57L865.865,204.979L867.994,204.961L869.173,204.12L869.103,203.274L870.703,202.97L875.061,201.82L877.22,200.898L879.399,198.72L880.908,196.297L882.698,195.462L881.788,197.266L882.968,198.048L884.147,197.967L884.517,197.377L885.686,198.469L887.686,196.705L887.676,196.162L889.175,195.643L889.165,196.215L885.726,198.971L881.748,202.433L879.159,204.325L876.27,206.246L872.112,209.48L869.793,210.87L868.254,211.483L867.864,211.29L864.325,213.328L860.747,213.982L858.288,215.675L858.268,214.916L856.958,215.255L856.199,214.268L856.419,213.427L855.779,212.849L856.679,208.032L856.689,205.545L856.379,205.522L849.152,203.256L841.845,200.67L840.915,199.87L840.775,199.228L839.976,199.613L839.516,199.228L838.166,199.601L837.727,198.877L836.587,199.035L835.438,197.365L834.458,196.612L834.838,196.291L834.078,193.313L833.148,193.021L833.268,192.134L831.539,191.112L830.25,191.643L829.53,190.032L827.941,188.992L821.783,190.37L812.087,192.426L802.751,194.271L799.473,194.989L788.037,197.266L775.643,199.578L771.145,200.46L756.751,202.982Z",
    "North Carolina": "M850.961,323.749L852.22,323.854L853.27,325.086L853.51,325.968L852.53,325.997L852.48,325.115ZM850.021,343.922L850.301,342.684L857.508,337.61L857.328,332.758L856.938,330.207L855.219,326.616L855.829,327.141L857.298,330.189L857.638,332.811L857.868,338.428L856.409,338.895L853.81,340.541ZM743.886,328.508L749.244,327.988L752.732,327.509L758.72,326.85L761.049,326.4L768.296,325.629L782.01,323.358L799.573,320.182L827.371,314.711L829.24,314.174L845.593,310.741L847.353,314.81L848.762,317.461L850.261,319.802L851.751,321.63L855.069,326.283L854.49,326.131L852.27,323.043L851.531,322.29L850.701,322.26L849.372,319.107L847.772,316.387L847.133,316.06L847.213,315.271L846.503,313.654L845.343,312.375L843.724,312.445L843.644,311.733L842.734,312.276L843.364,313.339L844.564,314.034L845.203,313.701L845.503,315.108L848.832,320.135L849.032,321.017L847.592,320.071L847.502,319.353L846.083,317.7L845.293,317.63L845.713,318.839L846.763,319.394L844.704,319.323L842.215,317.519L841.245,317.484L842.844,319.078L843.534,319.271L844.134,320.299L842.165,321.314L840.166,320.316L842.015,321.717L841.635,322.068L837.037,321.005L838.736,322.103L840.176,322.243L839.816,322.698L838.316,323.165L837.717,324.526L836.837,325.139L835.667,325.349L834.918,324.8L833.818,324.894L832.559,322.751L832.359,321.606L832.819,319.96L832.459,319.773L831.859,321.402L832.029,322.873L832.899,324.549L833.998,326.044L833.768,326.721L834.358,327.276L836.867,326.552L838.966,325.185L839.786,325.985L842.814,324.175L844.824,323.755L845.833,324.362L845.993,325.168L845.453,326.832L845.903,327.813L846.663,331.048L847.203,330.686L847.203,328.426L846.753,325.547L847.442,324.409L847.013,324.146L848.622,323.329L849.991,323.965L851.561,326.493L851.531,327.428L852.35,329.027L851.961,329.611L852.39,330.586L851.811,331.783L849.732,332.373L848.422,334.907L848.212,336.489L847.552,336.711L847.612,337.482L846.513,338.69L844.784,338.562L842.934,339.029L840.255,339.017L839.106,338.352L837.847,336.355L839.766,335.894L839.946,334.965L838.276,335.806L837.467,335.753L836.987,336.501L837.797,337.47L838.516,339.017L836.037,338.609L835.198,338.971L833.808,338.591L831.729,338.422L830.08,337.803L830.15,338.352L831.449,339.303L832.789,339.122L837.217,340.238L840.226,340.162L841.075,341.382L840.236,343.729L840.315,344.716L839.616,346.129L836.507,349.147L832.849,347.682L833.198,348.891L834.908,349.632L837.397,349.977L839.356,347.991L841.625,347.11L841.835,345.615L842.585,345.743L843.024,346.946L843.674,347.419L844.824,347.273L843.954,345.989L845.443,346.345L845.933,347.752L845.004,349.509L843.944,349.977L842.854,352.931L842.724,354.356L841.555,354.21L841.305,352.68L840.545,352.452L840.945,353.988L839.956,354.338L842.884,355.004L844.264,351.804L845.493,349.655L846.783,347.898L848.992,343.986L849.672,344.225L848.202,346.17L844.714,351.582L843.364,354.682L842.954,356.457L842.455,355.249L839.966,354.671L838.276,354.928L833.778,356.668L830.849,358.542L829.12,360.48L826.891,362.395L825.062,364.381L822.773,367.761L821.643,370.499L820.594,376.432L820.604,377.78L819.734,377.827L819.394,377.214L816.406,377.185L812.727,378.16L810.098,379.818L794.995,368.97L792.566,367.125L785.868,362.372L782.36,362.962L765.677,365.402L765.537,362.781L762.188,359.406L760.499,361.105L760.089,358.77L747.954,359.99L741.237,360.726L737.888,361L736.049,361.566L735.719,360.965L735.11,362.138L734.17,362.162L730.122,364.521L729.312,365.315L729.132,364.853L723.555,367.551L714.378,368.97L714.398,369.092L701.754,370.663L701.674,365.291L702.963,364.211L703.253,364.684L705.072,364.375L706.262,363.125L705.852,361.946L706.332,361.391L705.992,360.696L706.412,359.879L707.751,358.845L708.151,357.859L709.151,357.578L710,356.598L715.098,355.798L715.678,354.729L717.007,353.941L717.497,353.27L718.187,353.351L718.986,351.676L719.956,351.471L720.326,350.625L721.685,349.883L723.275,350.017L723.714,349.591L724.584,347.594L724.404,345.971L725.204,345.767L725.834,346.298L726.353,345.539L726.403,344.441L728.752,342.62L729.522,343.332L729.442,344.757L730.422,344.926L731.971,343.478L732.711,341.551L734.59,340.185L735.35,340.185L735.719,339.543L737.049,339.514L737.499,340.43L739.178,339.864L740.787,335.491L742.587,333.949L744.116,334.259L743.416,332.618L743.976,331.229L743.566,329.967Z",
    "North Dakota": "M371.053,64.611L381.008,65.44L398.161,66.678L414.334,67.63L424.58,68.138L438.044,68.704L447.79,69.013L461.425,69.346L472.12,69.521L471.96,70.228L472.87,72.785L473.43,75.559L473.979,76.452L473.819,77.666L473.14,79.43L473.41,81.473L473.16,83.68L473.599,85.461L473.12,87.913L473.749,90.062L474.189,90.517L474.349,92.462L474.999,93.437L475.539,95.971L477.448,100.788L477.248,104.664L477.628,106.404L477.578,109.394L477.798,110.398L477.808,114.59L478.457,116.19L478.078,117.877L478.387,119.927L478.078,121.305L478.887,123.523L479.017,125.462L480.047,127.774L481.086,128.784L481.136,131.242L481.756,134.272L481.446,135.3L481.596,137.589L469.841,137.478L452.808,137.11L436.035,136.503L425.51,136.03L406.108,135.026L397.501,134.494L386.156,133.724L372.912,132.725L365.375,132.1L366.185,122.367L368.004,101.12L369.033,89.665L369.243,86.71Z",
    "Ohio": "M709.55,219.354L710.45,218.898L710.16,219.675ZM707.641,218.624L707.591,217.228L708.491,217.444ZM675.265,221.683L682.562,220.568L697.366,218.081L697.575,218.641L698.785,218.939L699.545,218.495L701.274,219.564L704.143,220.288L705.412,221.403L706.562,221.794L707.731,220.86L707.981,219.932L708.921,220.866L710.03,220.679L710.04,221.251L712.049,222.974L714.428,223.703L716.258,222.413L717.987,221.987L718.896,221.169L721.715,219.593L723.005,219.949L726.193,219.57L728.323,217.579L730.512,214.677L732.761,212.353L733.38,212.23L736.949,209.556L738.688,208.943L744.506,205.528L749.404,235.241L747.564,236.058L747.185,237.086L747.974,237.821L748.754,239.164L748.714,240.741L749.224,242.597L749.054,243.899L748.614,244.355L748.064,246.498L748.174,247.741L747.784,248.348L748.134,250.684L748.074,251.992L747.225,252.371L747.634,253.206L747.145,253.79L747.315,254.748L746.815,255.863L747.504,256.523L747.045,257.346L747.095,258.695L746.165,259.121L744.206,261.69L743.316,263.476L742.557,263.891L742.077,264.989L741.287,265.117L740.128,266.209L739.318,266.197L738.228,265.03L736.599,266.915L736.629,268.533L734.9,268.603L734.71,269.73L733.77,270.938L734.23,272.76L733.17,273.256L734.22,274.844L734.06,275.819L734.52,276.678L733.57,276.322L732.531,278.114L731.801,277.606L732.131,276.73L731.411,275.697L730.702,275.697L730.012,274.949L728.792,276.351L728.133,278.225L728.293,279.51L727.203,280.689L728.083,282.616L728.552,284.513L728.342,285.097L726.883,285.337L726.643,285.71L726.503,288.682L725.144,289.102L723.115,290.171L721.965,289.955L721.515,288.892L719.286,287.246L717.977,287.298L717.227,286.884L715.768,283.205L714.398,284.093L713.519,284.221L713.239,284.939L712.289,285.617L711.919,286.726L710.25,286.872L709.53,287.637L707.981,286.498L706.192,286.352L705.202,285.856L703.643,286.487L702.903,287.859L701.034,287.421L700.734,286.604L699.655,286.096L699.265,285.407L697.126,284.992L695.586,285.564L693.067,285.08L692.458,283.165L691.368,281.88L690.948,280.782L690.159,280.187L688.669,279.889L688.449,278.914L687.8,278.558L687.21,279.258L685.69,279.889L684.201,279.469L683.072,278.54L681.882,279.632L680.113,263.827L678.983,252.821L677.894,243.304Z",
    "Oklahoma": "M366.744,333.792L372.092,334.288L383.657,335.111L395.732,335.765L407.777,336.32L421.901,336.91L425.9,337.114L436.475,337.499L451.879,337.949L464.523,338.177L481.516,338.352L498.989,338.34L514.782,338.188L514.942,349.445L515.572,353.929L518.681,374.283L518.521,387.04L518.321,413.805L517.681,414.295L516.451,412.912L515.352,413.145L515.102,412.637L514.162,412.736L512.943,411.248L511.584,411.615L510.274,410.576L509.344,408.912L507.875,408.854L506.346,407.231L504.517,406.711L503.557,408.585L501.268,408.86L498.729,408.562L498.439,407.406L495.63,408.463L494.841,408.293L494.901,409.111L494.031,409.006L493.241,409.508L491.552,408.428L491.442,409L490.562,408.883L490.003,409.473L488.513,409.303L487.124,410.051L487.234,411.055L486.294,411.563L485.245,411.055L484.645,412.386L484.035,412.912L482.566,410.903L481.136,410.979L480.657,409.887L479.807,409.922L478.757,409.204L479.587,408.352L477.928,407.885L477.638,409.216L476.328,409.782L475.739,408.772L474.699,409.251L474.099,408.778L473.709,406.997L472.07,406.933L472.22,408.346L470.311,410.074L470.121,411.89L468.742,411.656L468.142,410.208L468.871,409.344L468.652,408.176L468.082,407.633L467.222,408.807L465.753,408.573L465.063,409.765L464.083,409.753L463.414,409.239L463.484,407.844L462.744,407.476L461.804,407.949L460.985,407.581L461.125,406.688L460.325,406.051L459.325,405.911L458.786,406.781L456.587,408.76L455.997,408.935L453.848,407.82L454.587,405.783L454.118,405.391L453.088,405.642L451.979,405.345L451.449,403.552L452.009,402.536L451.409,401.976L450.549,402.863L448.16,402.349L447.001,401.818L445.971,403.459L444.702,403.885L443.082,401.9L441.793,401.515L441.003,402.198L439.774,402.349L438.874,401.62L437.015,401.082L435.715,400.137L434.566,400.539L432.847,400.008L431.907,400.09L431.607,397.334L428.588,394.514L428.229,396.277L427.429,396.336L426.059,395.378L424.92,395.285L424.52,396.213L422.761,396.003L421.741,395.057L419.312,391.968L418.393,391.367L417.383,391.746L419.222,348.12L409.516,347.694L399.94,347.209L390.374,346.666L379.249,345.948L365.905,345.019Z",
    "Oregon": "M69.859,69.089L70.939,69.177L71.458,70.257L71.109,71.256L71.758,72.277L73.108,72.709L75.077,72.266L75.807,72.563L78.325,75.652L78.385,76.89L78.905,78.671L78.765,80.796L78.246,81.981L78.455,82.729L77.776,85.397L78.865,86.617L81.624,88.334L83.034,88.789L83.593,89.595L84.843,89.957L86.002,89.589L87.272,89.817L90.61,89.11L91.46,88.445L92.38,88.386L93.449,88.982L96.688,89.122L98.467,90.389L99.497,90.389L101.136,91.615L101.236,93.145L102.046,93.285L102.975,92.654L105.154,93.04L105.804,93.53L106.574,93.075L109.332,92.789L110.322,92.356L111.422,92.818L112.011,93.857L113.551,94.283L116.619,94.464L117.429,93.845L119.068,93.74L120.868,93.302L123.457,93.431L125.506,93.74L126.475,92.864L127.365,92.631L128.524,93.367L132.193,93.513L134.132,94.155L136.151,93.594L136.591,93.226L149.596,96.362L167.898,100.682L168.268,102.557L169.347,105.091L170.377,105.237L170.677,106.171L171.756,106.492L172.336,107.245L172.276,108.822L172.956,110.468L171.147,112.482L170.827,113.498L170.217,113.819L168.328,116.178L166.568,119.944L165.169,121.456L164.199,122.105L163.83,123.021L164.01,124.113L161.7,127.009L159.451,127.809L157.372,130.974L157.092,131.756L155.743,132.55L155.603,133.817L155.023,134.389L155.543,135.919L154.843,136.62L155.463,137.647L156.623,137.454L157.242,138.716L158.442,138.85L158.252,139.691L158.952,139.977L159.202,140.928L158.372,141.95L157.612,142.114L157.972,143.667L156.743,145.827L156.463,146.855L155.823,146.913L155.483,148.005L146.577,187.603L136.931,185.443L122.877,182.185L119.728,181.507L111.542,179.458L103.285,177.309L98.907,176.229L94.319,175.073L82.384,171.903L67.11,167.454L61.153,165.644L57.054,164.581L50.547,162.736L48.988,162.135L45.739,161.416L39.712,159.671L32.095,157.329L31.065,155.759L30.586,154.13L30.945,152.693L30.626,150.953L30.875,149.12L31.505,146.767L33.104,144.093L33.294,142.195L32.825,141.635L32.835,140.304L32.225,140.018L32.335,137.612L34.874,134.64L35.993,132.27L36.953,130.95L37.813,129.21L37.733,128.352L38.982,127.669L40.391,126.104L42.001,123.763L44.66,118.677L47.299,112.558L48.868,108.115L50.117,105.529L50.477,104.244L51.887,100.986L52.886,97.261L53.856,95.93L56.305,90.955L57.374,88.135L57.694,86.494L58.384,84.93L58.524,83.598L58.944,83.242L60.203,80.089L60.553,78.536L60.193,77.76L60.993,76.248L61.363,74.712L61.223,73.772L62.262,73.363L62.612,72.721L63.012,70.362L62.772,67.787L63.032,67.589L63.992,69.422L64.651,69.895L64.721,69.165L66.45,69.142L66.88,69.831L67.83,69.434L68.52,69.708Z",
    "Pennsylvania": "M744.506,205.528L747.365,203.718L749.933,201.493L750.333,200.255L751.333,200.576L753.202,198.848L755.701,196.98L756.751,202.982L771.145,200.46L775.643,199.578L788.037,197.266L799.473,194.989L802.751,194.271L812.087,192.426L821.783,190.37L827.941,188.992L829.53,190.032L830.25,191.643L831.539,191.112L833.268,192.134L833.148,193.021L834.078,193.313L834.838,196.291L834.458,196.612L835.438,197.365L836.587,199.035L837.727,198.877L838.166,199.601L839.516,199.228L839.976,199.613L840.775,199.228L840.915,199.87L841.845,200.67L840.955,201.131L840.096,202.532L839.686,205.236L838.416,207.192L838.706,207.659L838.036,208.856L836.567,210.309L836.617,210.759L838.406,212.604L837.577,215.097L836.977,215.121L836.837,217.158L837.597,219.692L839.146,219.494L839.786,219.943L840.186,221.858L840.615,222.664L842.205,222.746L842.914,223.954L844.304,224.626L844.954,225.513L846.303,226.016L847.383,227.037L846.593,228.135L845.903,228.158L845.443,229.291L844.374,229.846L841.645,232.993L841.675,234.739L839.846,235.912L838.856,236.14L837.687,237.483L836.137,237.097L834.928,237.232L833.478,237.956L832.579,239.001L831.859,240.589L824.452,242.183L811.827,244.828L803.851,246.422L785.968,249.791L770.245,252.663L763.938,253.767L752.742,255.623L749.404,235.241Z",
    "Rhode Island": "M896.502,179.802L897.611,179.884L898.741,183.341L897.811,184.508L896.972,182.687L896.462,180.964L896.112,181.204L896.962,184.141L896.022,184.368L896.042,185.057L895.072,185.18L895.642,182.313L895.552,181.35ZM894.463,185.326L894.163,183.177L894.563,183.078L894.973,184.672ZM892.763,192.77L893.013,191.118L893.803,192.694ZM887.865,190.324L888.225,189.67L887.686,188.239L888.325,187.959L887.146,182.71L884.957,175.102L891.554,173.123L892.274,175.85L892.923,175.558L893.783,178.074L895.003,178.401L895.832,179.154L895.892,180.036L895.292,181.011L894.813,179.61L892.763,178.267L893.333,180.433L892.374,180.614L893.153,180.976L893.673,182.547L893.013,182.932L893.763,183.796L894.103,185.151L893.643,187.62L891.434,188.449L890.055,189.495L887.995,190.616Z",
    "South Carolina": "M723.555,367.551L729.132,364.853L729.312,365.315L730.122,364.521L734.17,362.162L735.11,362.138L735.719,360.965L736.049,361.566L737.888,361L741.237,360.726L747.954,359.99L760.089,358.77L760.499,361.105L762.188,359.406L765.537,362.781L765.677,365.402L782.36,362.962L785.868,362.372L792.566,367.125L794.995,368.97L810.098,379.818L807.169,381.523L805.61,383.105L803.751,385.808L802.531,388.459L801.712,389.744L800.982,392.278L800.882,395.133L801.062,396.937L800.182,398.204L798.793,399.249L798.563,401.188L797.374,401.211L796.324,401.707L795.474,401.077L794.515,401.906L794.075,403.383L794.945,403.482L794.995,404.107L793.015,405.724L792.616,406.804L790.556,408.311L789.747,407.709L789.087,408.585L790.276,408.825L790.157,409.998L788.667,411.271L788.317,412.094L786.918,412.392L785.698,413.163L785.199,414.126L784.739,413.846L782.67,415.954L782.02,415.65L781.2,416.368L780.91,415.79L780.021,415.965L779.921,416.8L781.2,418.207L780.78,419.883L779.001,421.214L777.812,421.816L777.572,421.039L776.152,420.49L775.313,421.378L776.302,421.798L777.382,422.761L776.622,424.169L775.113,425.564L774.283,425.926L773.583,427.123L774.013,427.45L773.224,427.415L771.524,426.335L770.445,426.749L769.415,426.294L769.145,424.712L768.246,423.608L768.776,422.534L766.606,419.504L766.756,418.82L764.847,417.045L763.188,416.835L762.048,415.819L762.428,415.305L761.639,414.237L761.808,413.239L761.349,412.439L761.289,411.265L760.139,410.477L760.289,410.033L759.439,409.198L759.409,407.622L757.76,406.828L756.841,406.04L755.121,405.818L753.902,405.024L753.632,403.786L752.912,403.967L751.943,403.243L751.863,401.982L750.673,401.766L749.883,400.977L750.203,399.173L748.724,398.367L747.365,396.814L746.165,396.266L745.685,396.452L744.406,395.728L742.916,393.013L740.997,391.6L739.518,391.145L737.419,389.633L736.819,389.674L735.869,387.916L734.91,387.169L734.04,385.838L732.931,384.991L732.361,383.012L731.271,381.5L730.472,381.056L729.692,379.047L728.153,378.609L727.073,379.076L725.414,378.306L723.664,376.548L722.515,376.537L720.416,375.246L719.966,374.213L720.316,372.782L721.225,371.942L721.585,370.657L723.525,368.906Z",
    "South Dakota": "M363.386,153.166L363.676,153.12L364.305,145.652L365.375,132.1L372.912,132.725L386.156,133.724L397.501,134.494L406.108,135.026L425.51,136.03L436.035,136.503L452.808,137.11L469.841,137.478L481.596,137.589L481.276,140.152L480.187,141.781L477.348,143.877L476.948,144.893L478.457,146.942L478.897,148.238L479.637,149.254L480.677,149.342L482.686,150.492L483.245,151.812L483.205,165.106L483.046,192.04L480.697,192.023L480.766,193.512L481.936,194.609L481.856,196.302L480.976,196.565L481.286,198.223L482.506,198.229L482.796,199.893L483.275,200.553L482.846,201.849L482.076,202.141L482.226,204.173L481.556,204.95L481.496,206.596L480.037,208.447L480.067,209.848L481.576,210.993L482.556,213.229L482.326,214.029L483.066,214.7L482.156,214.875L481.666,214.14L480.487,214.373L479.927,213.305L478.737,212.038L479.127,211.185L478.477,210.712L477.268,210.584L477.208,209.866L475.569,209.188L474.639,209.475L474.349,208.575L471.92,208.289L470.641,207.437L470.511,206.614L469.091,206.106L467.292,206.117L466.922,206.538L464.253,206.24L463.194,206.567L461.465,206.386L460.595,205.942L459.825,206.152L459.595,207.081L458.566,208.126L457.186,208.219L455.677,206.906L453.608,205.662L450.249,203.939L449.769,202.783L441.263,202.544L427.499,202.048L415.134,201.493L397.581,200.571L395.372,200.378L385.037,199.701L370.173,198.585L359.667,197.733L360.697,185.262L361.816,172.259Z",
    "Tennessee": "M602.505,357.164L602.975,357.123L603.325,355.261L604.794,354.151L604.285,352.995L602.645,351.827L602.805,351.454L604.744,351.623L605.624,350.864L604.205,350.087L604.175,349.381L605.474,349.358L605.904,348.406L605.194,347.18L605.594,346.24L605.204,345.755L606.164,345.703L606.794,346.473L607.363,345.58L609.432,345.253L617.699,344.745L631.563,343.776L631.853,342.766L630.923,339.735L634.852,339.73L634.852,340.419L642.409,339.578L647.886,339.041L657.142,337.92L657.642,338.299L658.592,337.774L661.69,337.546L667.038,337.412L670.597,337.219L676.684,336.717L681.832,335.899L684.861,335.689L688.099,335.631L693.407,335.199L703.223,334.136L708.481,333.617L708.691,333.179L715.728,332.303L716.008,332.367L725.963,331.001L739.348,329.045L739.478,328.525L744.336,327.895L743.886,328.508L743.566,329.967L743.976,331.229L743.416,332.618L744.116,334.259L742.587,333.949L740.787,335.491L739.178,339.864L737.499,340.43L737.049,339.514L735.719,339.543L735.35,340.185L734.59,340.185L732.711,341.551L731.971,343.478L730.422,344.926L729.442,344.757L729.522,343.332L728.752,342.62L726.403,344.441L726.353,345.539L725.834,346.298L725.204,345.767L724.404,345.971L724.584,347.594L723.714,349.591L723.275,350.017L721.685,349.883L720.326,350.625L719.956,351.471L718.986,351.676L718.187,353.351L717.497,353.27L717.007,353.941L715.678,354.729L715.098,355.798L710,356.598L709.151,357.578L708.151,357.859L707.751,358.845L706.412,359.879L705.992,360.696L706.332,361.391L705.852,361.946L706.262,363.125L705.072,364.375L703.253,364.684L702.963,364.211L701.674,365.291L701.754,370.663L690.628,372.006L682.612,373.039L678.633,373.436L674.675,373.792L656.213,375.591L645.797,376.315L631.663,377.418L631.733,377.687L620.468,378.592L609.392,379.421L593.559,380.402L593.809,379.345L595.328,379.596L595.848,377.5L596.448,377.103L597.168,377.453L597.787,376.869L596.768,375.871L597.517,375.293L597.008,374.423L596.048,374.376L595.778,373.489L596.758,373.232L597.258,371.41L596.468,370.838L596.178,371.65L595.378,371.504L595.508,370.669L596.358,369.559L597.278,369.559L597.557,370.949L598.157,369.536L597.567,368.684L597.667,367.691L598.547,367.364L599.876,368.322L599.986,367.557L599.077,366.757L600.826,365.537L600.736,364.76L599.617,365.145L598.967,364.392L598.997,363.306L599.766,362.792L600.306,363.16L601.406,362.67L601.926,361.619L603.255,361.233L602.155,360.399L602.086,359.657L602.965,359.266L603.675,359.68L604.225,359.225L602.805,357.876Z",
    "Texas": "M365.905,345.019L379.249,345.948L390.374,346.666L399.94,347.209L409.516,347.694L419.222,348.12L417.383,391.746L418.393,391.367L419.312,391.968L421.741,395.057L422.761,396.003L424.52,396.213L424.92,395.285L426.059,395.378L427.429,396.336L428.229,396.277L428.588,394.514L431.607,397.334L431.907,400.09L432.847,400.008L434.566,400.539L435.715,400.137L437.015,401.082L438.874,401.62L439.774,402.349L441.003,402.198L441.793,401.515L443.082,401.9L444.702,403.885L445.971,403.459L447.001,401.818L448.16,402.349L450.549,402.863L451.409,401.976L452.009,402.536L451.449,403.552L451.979,405.345L453.088,405.642L454.118,405.391L454.587,405.783L453.848,407.82L455.997,408.935L456.587,408.76L458.786,406.781L459.325,405.911L460.325,406.051L461.125,406.688L460.985,407.581L461.804,407.949L462.744,407.476L463.484,407.844L463.414,409.239L464.083,409.753L465.063,409.765L465.753,408.573L467.222,408.807L468.082,407.633L468.652,408.176L468.871,409.344L468.142,410.208L468.742,411.656L470.121,411.89L470.311,410.074L472.22,408.346L472.07,406.933L473.709,406.997L474.099,408.778L474.699,409.251L475.739,408.772L476.328,409.782L477.638,409.216L477.928,407.885L479.587,408.352L478.757,409.204L479.807,409.922L480.657,409.887L481.136,410.979L482.566,410.903L484.035,412.912L484.645,412.386L485.245,411.055L486.294,411.563L487.234,411.055L487.124,410.051L488.513,409.303L490.003,409.473L490.562,408.883L491.442,409L491.552,408.428L493.241,409.508L494.031,409.006L494.901,409.111L494.841,408.293L495.63,408.463L498.439,407.406L498.729,408.562L501.268,408.86L503.557,408.585L504.517,406.711L506.346,407.231L507.875,408.854L509.344,408.912L510.274,410.576L511.584,411.615L512.943,411.248L514.162,412.736L515.102,412.637L515.352,413.145L516.451,412.912L517.681,414.295L518.321,413.805L518.81,413.636L518.85,414.687L520.34,415.195L520.7,415.895L521.809,415.13L523.149,415.632L523.928,414.733L525.038,415.615L525.418,415.195L526.527,415.58L526.787,427.555L527.257,450.437L527.717,450.618L528.526,452.048L529.826,452.766L530.516,454.355L531.525,455.406L531.385,456.036L531.915,457.367L531.295,459.323L531.715,460.31L533.504,461.402L533.075,462.208L534.014,462.879L534.764,464.601L534.324,465.734L535.633,466.575L536.063,468.689L537.043,468.426L537.143,470.75L537.743,472.057L536.783,472.583L537.613,473.949L536.853,475.111L537.153,476.524L535.953,478.41L535.943,479.461L534.784,480.705L534.864,481.621L533.964,482.217L533.744,482.993L534.254,483.455L534.614,485.189L533.474,486.415L533.354,487.618L534.374,488.464L534.294,490.356L534.954,491.874L534.134,493.065L534.704,493.824L533.134,495.284L531.895,498.121L530.596,499.178L532.295,502.004L532.305,502.261L529.136,502.278L526.577,503.096L516.991,507.627L515.772,508.444L515.072,509.489L514.142,509.676L514.372,508.958L516.182,507.072L517.691,506.71L518.221,505.811L519.61,505.945L518.601,504.912L514.842,505.998L514.052,505.893L515.432,503.773L515.712,502.22L515.632,500.813L514.452,500.299L513.313,500.865L512.233,502.786L511.294,503.09L510.414,502.156L509.514,503.756L510.114,504.369L509.434,505.42L510.154,506.383L511.564,506.687L511.164,507.726L511.943,508.094L511.913,510.891L510.774,511.305L507.945,513.938L506.786,513.6L506.666,515.287L507.065,515.789L509.804,513.676L512.203,511.387L513.263,510.926L513.523,509.863L515.082,510.324L513.683,511.515L509.374,514.493L507.455,516.309L505.246,518.084L502.457,520.828L501.338,520.997L494.041,525.353L488.833,527.764L486.534,528.973L484.385,530.316L482.666,531.641L481.626,533.066L477.878,535.156L474.699,537.632L472.82,539.389L470.481,542.087L469.641,543.721L467.702,546.314L466.243,548.97L464.533,552.707L463.224,556.958L462.764,560.829L462.944,564.706L463.294,566.697L464.283,570.655L465.103,573.207L466.193,577.592L466.902,582.537L466.423,581.632L466.083,578.835L464.503,572.325L462.824,571.998L464.073,571.502L462.474,566.586L462.264,564.56L462.364,559.603L463.204,554.359L464.393,550.926L465.803,548.118L466.782,546.804L467.512,545.158L468.122,544.498L467.952,543.587L468.911,541.964L470.211,541.252L472.97,537.211L474.169,536.896L474.749,535.886L475.849,535.857L478.547,533.591L481.676,532.505L481.436,530.818L478.897,532.26L478.118,533.013L476.868,533.113L476.368,531.051L475.069,531.063L474.389,533.626L474.829,534.403L474.559,535.104L471.88,537.311L470.061,536.744L469.881,535.915L467.562,537.054L466.353,538.058L467.862,538.753L470.081,537.55L470.061,539.115L469.601,539.547L466.812,543.92L466.053,543.873L465.563,542.746L464.083,542.91L463.774,542.559L461.525,542.74L460.765,542.501L460.315,543.225L461.155,543.838L463.014,543.558L462.704,544.778L463.194,545.701L465.453,546.734L464.063,549.502L463.144,552.17L463.054,553.017L462.164,555.025L460.245,556.023L459.485,555.661L460.465,555.282L460.705,554.167L460.155,554.103L458.236,555.761L457.826,556.695L459.535,557.028L461.405,556.315L461.954,556.432L461.435,562.429L460.925,566.358L460.675,566.416L461.275,570.801L461.834,572.045L461.884,573.65L462.544,573.674L464.503,578.345L463.874,579.226L464.243,582.017L464.633,582.426L466.073,582.654L466.143,583.325L467.032,582.992L467.122,585.351L464.473,585.392L464.463,585.766L462.484,586.355L462.494,587.844L461.025,587.605L460.955,587.12L459.485,586.776L459.006,585.713L458.276,585.62L456.956,583.746L454.737,583.471L453.888,582.835L452.168,582.665L450.519,582.951L449.29,582.601L449.06,583.156L448.32,582.549L446.891,582.928L444.832,582.356L443.122,580.885L443.102,580.248L442.093,580.412L440.543,578.946L439.904,579.139L438.134,578.17L436.425,578.526L434.746,576.511L434.056,576.348L433.376,575.46L432.027,575.712L430.518,574.766L429.078,574.392L428.209,574.731L427.649,574.053L428.069,572.944L427.379,571.852L426.519,571.49L426.439,569.704L426.009,568.898L425.89,567.38L425.28,566.889L424.78,564.711L423.6,563.859L423.77,563.263L422.641,562.615L422.711,561.74L421.981,560.753L421.361,560.601L421.761,559.106L421.591,557.769L421.891,557.22L421.641,555.574L420.562,555.054L420.632,554.348L419.772,554.038L420.452,553.571L421.062,550.313L420.112,549.986L420.512,548.544L419.682,547.406L418.743,546.758L418.023,547.067L417.453,546.308L416.743,546.39L415.494,544.626L413.435,543.044L413.025,541.59L413.095,540.522L412.385,539.862L412.535,538.969L411.366,538.618L410.906,537.036L410.226,536.563L409.686,535.22L407.277,534.082L405.668,531.916L405.808,531.197L404.698,529.236L404.968,528.354L404.409,527.56L405.018,527.04L404.039,526.684L403.639,525.861L403.929,525.143L402.989,524.553L403.029,523.823L402,523.333L401.94,521.575L401.47,521.044L401.26,519.643L400.8,519.608L400.27,517.897L399.691,517.844L399.501,515.97L398.881,513.168L397.172,511.685L397.372,511.206L396.832,510.026L395.342,509.221L395.162,508.578L392.823,507.095L391.964,505.04L390.205,504.538L389.825,503.68L388.155,503.09L388.525,502.384L388.115,501L387.586,502.273L387.206,501.718L387.236,500.381L386.266,500.136L385.447,498.022L384.317,497.421L383.187,497.718L382.958,496.977L382.368,497.444L379.819,497.555L378.489,496.878L377.05,496.51L375.541,496.697L374.701,496.177L373.212,496.644L371.952,496.405L370.743,495.126L369.863,495.12L368.484,494.268L367.704,494.402L366.674,496.627L364.695,496.107L363.696,496.767L363.206,496.51L360.777,497.21L360.597,498.232L359.697,498.95L359.577,499.89L359.018,499.949L358.888,500.971L358.118,501.502L357.188,505.116L356.479,505.169L355.799,507.206L356.449,507.662L355.469,508.73L353.87,509.016L353.47,510.038L351.691,511.428L351.281,513.016L349.092,512.712L348.042,512.841L347.133,511.883L345.283,511.282L344.524,510.616L343.944,509.454L342.934,508.573L341.245,508.345L339.766,507.504L338.636,505.933L337.717,505.39L335.088,504.777L331.989,502.559L329.9,499.453L328.48,499.196L327.391,497.923L326.171,496.989L324.892,495.377L324.582,493.229L323.822,492.072L322.693,489.603L322.793,488.476L322.423,486.748L322.923,486.012L323.063,483.916L321.893,481.078L320.194,478.918L320.394,478.299L319.824,474.837L319.394,474.025L318.505,473.821L318.005,472.069L316.945,471.964L316.146,470.604L315.366,470.347L314.216,469.109L313.397,469.109L310.938,467.579L310.958,466.826L308.189,464.269L307.519,462.12L306.74,461.291L304.491,459.919L302.951,457.017L301.822,456.346L301.532,455.154L300.632,454.436L299.223,454.144L297.014,452.393L296.434,450.635L295.834,450.098L295.544,448.755L294.365,446.105L293.115,445.229L292.366,445.515L291.716,444.662L290.386,443.506L289.797,441.93L290.256,441.545L290.566,439.629L312.867,441.988L322.453,442.917L333.508,443.933L344.904,444.89L357.288,445.848L359.028,422.54L361.027,400.849L364.485,354.969L365.205,344.967Z",
    "Utah": "M194.707,197.768L197.086,198.352L224.724,203.052L225.024,203.21L235.849,204.967L243.366,206.135L239.798,228.421L248.814,229.904L264.797,232.205L272.834,233.273L271.694,241.786L271.274,244.437L267.026,275.09L265.637,284.134L264.247,294.054L264.227,296.57L262.268,310.723L261.718,314.191L260.569,322.587L250.403,321.168L235.649,318.979L235.14,318.757L219.206,316.299L199.595,312.994L181.862,309.795L173.316,308.166L173.715,305.871L177.574,286.049L179.703,274.985L187.969,232.415L189.299,225.759L194.277,200.174Z",
    "Vermont": "M844.364,115.892L851.951,113.895L860.217,112.115L872.512,108.711L872.122,109.487L873.212,110.894L872.632,112.167L872.622,113.936L872.002,114.859L873.222,116.704L873.871,117.165L874.191,118.625L873.641,119.004L874.241,120.084L873.362,120.931L872.762,122.548L871.292,123.628L871.452,124.224L870.133,124.726L868.264,125.835L868.004,127.044L868.494,127.669L868.484,128.796L869.553,130.798L868.784,133.233L869.273,133.963L868.454,136.52L868.664,138.43L867.514,140.304L867.684,142.575L867.034,143.404L867.084,144.852L867.524,145.547L867.674,148.133L868.224,149.143L867.904,150.486L868.174,153.009L868.704,153.493L868.534,155.041L869.123,155.916L868.873,156.868L868.044,157.475L868.104,159.081L868.684,160.704L870.463,162.146L857.598,164.896L856.889,163.775L856.899,162.952L854.999,153.674L853.73,147.83L852.62,146.68L852.33,145.862L851.251,146.195L851.141,147.485L850.611,147.269L850.321,146.148L850.811,142.896L849.881,141.927L849.891,140.724L849.042,139.574L848.512,137.536L848.002,137.244L847.962,133.893L848.722,132.486L848.752,131.779L847.882,129.736L848.172,128.375L847.622,126.846L845.993,125.193L845.443,121.818L845.573,120.341L844.714,119.781L844.924,117.901Z",
    "Virginia": "M842.315,279.171L842.884,278.044L849.232,275.89L848.092,279.655L847.632,280.274L846.643,280.105L845.963,281.103L845.173,283.491L844.894,286.487L845.313,287.368L844.404,289.961L844.904,290.113L844.124,292.968L843.234,294.059L843.524,295.134L843.404,296.395L842.535,298.135L841.375,298.532L841.075,299.233L840.805,297.785L839.506,295.759L839.356,294.071L839.646,293.166L839.436,291.701L839.776,287.281L840.945,283.807L840.545,283.223L841.755,282.616L842.405,281.203L841.875,280.42L841.045,280.525ZM836.777,280.298L836.297,281.29L835.877,280.49ZM735.619,308.107L736.429,308.522L735.33,309.538L736.529,310.279L736.689,311.523L738.448,313.38L739.578,313.286L741.797,314.845L743.826,314.413L745.555,312.691L746.105,312.551L746.825,310.968L749.564,312.883L751.373,311.605L754.931,310.209L755.701,309.357L754.981,308.627L755.231,307.541L756.99,308.569L758.03,307.891L760.399,305.702L761.079,305.404L761.908,306.607L764.647,304.207L764.847,303.594L764.008,303.676L763.938,303.045L765.557,301.323L764.687,301.048L764.028,300.114L764.647,299.145L764.457,298.579L764.927,297.271L766.906,293.908L767.956,292.576L768.835,289.815L768.426,289.324L769.695,286.627L770.555,285.85L770.065,285.08L771.015,283.795L771.644,281.915L771.304,280.998L771.714,278.243L773.763,278.791L775.183,280.706L778.162,281.22L779.581,279.112L779.531,278.4L780.421,275.142L780.92,275.06L780.75,274.109L781.17,271.978L781.83,270.53L784.299,272.077L785.179,269.122L786.108,267.891L786.318,268.463L787.618,266.437L788.017,266.775L788.657,265.432L788.237,265.193L790.516,261.661L789.807,261.094L790.266,259.95L789.877,259.716L790.806,257.346L790.227,254.876L800.362,260.592L801.002,256.867L801.382,256.061L803.211,256.131L804.021,255.892L804.75,256.756L806.15,257.258L805.59,258.432L805.61,259.833L806.77,260.633L808.889,260.516L810.698,261.141L810.758,261.918L812.597,262.046L813.177,262.618L814.226,263.214L815.036,264.16L815.176,265.491L815.456,267.12L814.126,268.416L814.336,269.263L813.197,269.899L812.447,269.555L812.557,270.641L811.907,272.994L811.847,274.039L813.107,276.304L815.066,275.761L816.296,275.002L816.855,274.144L817.505,274.611L817.465,276.065L818.884,277.046L819.064,277.986L821.403,278.675L822.723,278.33L823.513,278.838L823.782,278.365L825.302,278.219L825.702,279.019L826.991,279.685L827.521,280.566L828.38,280.683L829.51,281.524L830.829,281.699L832.929,282.598L832.939,283.889L832.079,284.542L832.739,287.246L832.249,288.11L833.158,288.378L832.079,289.196L829.93,288.367L829.39,289.021L827.541,286.493L825.292,285.716L823.163,283.795L822.473,283.731L822.043,282.919L821.094,282.528L821.134,283.124L823.163,284.455L824.842,286.364L826.011,287.1L827.051,287.146L828.281,289.149L829.24,289.768L830.809,289.406L831.379,290.002L833.368,290.048L832.529,291.199L833.178,291.625L833.948,291.164L834.718,292.395L835.128,293.703L834.958,295.507L833.648,294.538L832.129,293.978L831.779,294.877L833.258,296.436L833.858,296.57L831.489,297.627L832.009,298.287L833.308,297.808L833.518,299.256L834.348,298.847L835.527,299.612L836.087,300.465L835.897,302.42L835.208,302.245L834.218,303.658L833.009,302.42L831.049,301.679L829.93,300.943L829.98,299.997L828.92,298.818L827.551,299.262L827.191,299.846L826.391,299.098L825.232,299.104L824.892,298.678L823.722,299.653L824.542,300.132L826.391,299.857L827.551,300.716L828.121,300.657L828.4,299.431L829.3,301.294L829.29,302.345L829.83,302.882L830.889,302.829L832.959,304.16L833.288,305.387L834.928,304.966L835.408,304.33L836.197,305.03L835.697,303.425L836.697,303.098L837.357,303.407L839.946,303.693L841.255,302.911L841.735,303.267L843.164,306.408L844.794,309.065L845.593,310.741L829.24,314.174L827.371,314.711L799.573,320.182L782.01,323.358L768.296,325.629L761.049,326.4L758.72,326.85L752.732,327.509L749.244,327.988L743.886,328.508L744.336,327.895L739.478,328.525L739.348,329.045L725.963,331.001L716.008,332.367L715.728,332.303L708.691,333.179L709.111,332.624L711.03,331.41L712.929,331.106L714.848,329.851L716.737,328.957L717.757,328.735L717.717,327.865L718.537,326.096L720.316,325.781L721.815,324.859L722.065,323.901L721.745,322.856L723.145,321.963L724.074,320.993L723.844,319.318L726.573,317.011L728.213,315.879L729.782,315.166Z",
    "Washington": "M91.78,50.026L92.52,48.152L93.459,46.996L93.799,48.117L93.369,49.36L94.199,50.026L92.739,50.657L91.73,50.598ZM97.218,24.172L97.447,23.448L98.287,24.499L97.268,24.721ZM97.348,20.015L97.697,19.84L98.437,22.316L97.737,21.294ZM96.188,23.075L96.708,22.654L97.088,23.682L96.178,24.067ZM93.569,30.513L95.738,28.219L96.158,27.261L97.008,27.273L97.008,28.61L97.807,30.122L96.958,30.239L96.458,29.719L94.339,31.045L95.578,31.214L95.938,32.154L95.968,33.689L95.658,34.005L95.628,35.978L96.778,34.507L97.348,35.803L98.077,36.253L97.957,38.086L97.228,39.014L96.558,38.576L96.408,36.836L95.198,36.977L95.438,36.375L94.709,35.371L95.328,33.713L95.348,32.603L94.429,32.434ZM94.079,17.651L96.048,19.344L94.609,18.696ZM92.17,19.239L93.179,19.023L93.069,19.63ZM93.759,12.764L94.589,13.575L93.689,13.336ZM89.621,20.879L90.141,20.436L91.16,20.728L91.67,22.1L92.51,22.514L91.99,21.002L94.429,19.589L95.028,19.793L96.628,21.405L95.408,22.041L95.608,23.402L95.168,24.505L94.499,24.797L94.159,26.204L93.239,26.035L92.749,24.908L91.13,24.459L90.181,23.431ZM89.721,18.777L90.42,19.075L91.25,20.5ZM180.762,35.313L177.684,48.835L175.565,57.71L171.826,74.513L168.128,90.909L167.488,92.602L168.308,93.991L168.638,96.841L167.748,98.283L167.898,100.682L149.596,96.362L136.591,93.226L136.151,93.594L134.132,94.155L132.193,93.513L128.524,93.367L127.365,92.631L126.475,92.864L125.506,93.74L123.457,93.431L120.868,93.302L119.068,93.74L117.429,93.845L116.619,94.464L113.551,94.283L112.011,93.857L111.422,92.818L110.322,92.356L109.332,92.789L106.574,93.075L105.804,93.53L105.154,93.04L102.975,92.654L102.046,93.285L101.236,93.145L101.136,91.615L99.497,90.389L98.467,90.389L96.688,89.122L93.449,88.982L92.38,88.386L91.46,88.445L90.61,89.11L87.272,89.817L86.002,89.589L84.843,89.957L83.593,89.595L83.034,88.789L81.624,88.334L78.865,86.617L77.776,85.397L78.455,82.729L78.246,81.981L78.765,80.796L78.905,78.671L78.385,76.89L78.325,75.652L75.807,72.563L75.077,72.266L73.108,72.709L71.758,72.277L71.109,71.256L71.458,70.257L70.939,69.177L69.859,69.089L68.1,68.389L67.51,67.414L66.82,67.811L66.191,67.419L64.871,68.044L64.411,67.776L63.702,66.077L63.222,65.779L62.012,66.538L63.122,64.103L63.832,61.832L64.531,58.854L64.901,60.08L64.221,61.879L63.702,64.459L64.611,64.734L64.531,63.169L64.871,62.06L65.401,62.684L66.51,61.628L66.181,59.216L66.96,58.609L68.58,58.037L67.91,57.097L67.4,57.488L65.971,57.622L64.891,56.273L65.241,54.884L65.311,52.7L65.941,52.992L65.781,53.722L67.75,53.033L69.659,53.021L69.259,52.356L67.6,51.41L67.76,50.552L66.43,49.88L65.871,50.184L65.761,51.947L64.831,52.07L65.841,49.127L66.211,46.739L66.351,44.152L65.591,42.337L66.301,38.144L66.53,33.561L66.011,32.86L66.131,31.798L65.411,30.437L64.641,29.69L64.471,27.868L65.141,24.966L64.971,23.256L65.461,23.075L67.07,20.185L66.361,18.801L67.55,18.947L68.66,19.823L70.759,22.392L72.118,23.513L72.648,23.489L74.327,25.054L74.137,25.387L75.727,26.683L77.416,27.436L79.745,27.845L81.154,29.001L83.383,29.521L83.843,30.28L85.962,30.875L87.492,30.169L88.631,31.547L88.781,32.498L90.59,32.784L90.29,33.275L90.9,33.9L90.61,34.991L91.17,35.021L91.62,34.116L91.07,33.281L91.31,32.551L93.189,32.347L93.189,32.954L92.25,33.357L92.49,34.425L93.839,33.456L93.719,35.406L92.889,35.377L93.269,36.62L93.249,37.852L93.789,38.413L92.46,38.477L92.31,39.277L91.26,39.686L90.77,40.801L89.581,41.986L89.391,41.566L90.59,39.674L89.701,39.768L88.321,41.735L86.842,42.687L83.913,45.454L82.554,47.422L84.363,48.064L86.332,47.755L87.112,47.188L84.083,47.574L83.303,46.815L86.742,43.335L88.751,42.442L90.37,42.407L90.98,41.087L92.17,39.995L93.629,39.073L94.139,39.201L94.209,37.309L95.098,38.366L94.679,41.98L93.739,41.665L94.139,42.628L93.679,43.825L93.659,45.256L92.739,45.746L92.49,46.429L93.159,46.926L92.39,47.656L91.63,49.162L91.73,49.617L90.84,50.686L91.02,51.503L89.791,52.718L88.811,50.902L89.701,49.244L88.681,49.793L88.001,50.843L88.111,51.813L89.141,52.823L88.531,52.963L87.752,54.294L87.002,53.08L86.512,50.849L87.362,50.359L87.722,49.255L86.292,50.493L86.282,51.918L85.702,52.735L86.462,52.636L86.682,54.002L87.991,54.825L89.071,53.664L89.721,53.611L91.35,51.457L91.42,50.896L92.42,52.332L93.039,51.305L94.669,51.089L94.939,48.099L94.639,45.834L95.958,45.443L95.018,44.03L96.268,42.769L96.478,41.017L97.467,40.404L98.567,38.355L99.906,38.103L100.146,36.947L99.557,36.317L98.797,34.355L99.217,33.053L98.977,32.031L98.137,31.798L97.537,32.563L97.707,33.929L98.477,35.745L97.338,33.835L96.718,33.579L96.658,32.411L97.158,31.033L98.247,30.869L98.967,31.506L99.687,30.881L99.387,29.912L98.197,28.692L97.767,27.617L98.017,26.922L96.358,27.098L95.978,25.918L96.528,24.891L97.597,24.92L98.197,25.393L98.387,26.397L99.347,26.584L99.457,24.453L100.346,24.587L100.806,24.038L100.066,22.532L100.146,21.247L100.786,20.558L100.286,19.84L99.387,19.688L98.057,20.185L98.677,19.426L97.857,18.912L98.087,17.446L97.387,16.506L98.217,15.695L97.248,15.228L98.497,14.136L107.913,16.822L112.841,18.31L120.328,20.278L127.675,22.275L137.94,24.978L150.445,28.125L163.93,31.395Z",
    "West Virginia": "M721.965,289.955L723.115,290.171L725.144,289.102L726.503,288.682L726.643,285.71L726.883,285.337L728.342,285.097L728.552,284.513L728.083,282.616L727.203,280.689L728.293,279.51L728.133,278.225L728.792,276.351L730.012,274.949L730.702,275.697L731.411,275.697L732.131,276.73L731.801,277.606L732.531,278.114L733.57,276.322L734.52,276.678L734.06,275.819L734.22,274.844L733.17,273.256L734.23,272.76L733.77,270.938L734.71,269.73L734.9,268.603L736.629,268.533L736.599,266.915L738.228,265.03L739.318,266.197L740.128,266.209L741.287,265.117L742.077,264.989L742.557,263.891L743.316,263.476L744.206,261.69L746.165,259.121L747.095,258.695L747.045,257.346L747.504,256.523L746.815,255.863L747.315,254.748L747.145,253.79L747.634,253.206L747.225,252.371L748.074,251.992L748.134,250.684L747.784,248.348L748.174,247.741L748.064,246.498L748.614,244.355L749.054,243.899L749.224,242.597L748.714,240.741L748.754,239.164L747.974,237.821L747.185,237.086L747.564,236.058L749.404,235.241L752.742,255.623L763.938,253.767L770.245,252.663L772.084,264.119L772.834,263.733L773.534,262.501L774.603,261.427L775.033,261.462L775.453,260.078L777.072,258.601L777.572,257.071L778.681,256.955L780.101,257.282L782.09,253.2L782,252.476L783.129,252.763L782.44,253.218L784.759,254.316L786.338,254.374L788.057,254.024L788.507,253.06L788.097,252.406L788.917,252.336L789.427,251.023L790.966,251.221L792.126,249.242L793.335,249.329L795.304,250.772L796.344,250.258L798.303,250.24L798.403,250.906L797.683,251.221L798.133,252.243L799.782,253.107L800.382,253.913L800.722,255.898L801.382,256.061L801.002,256.867L800.362,260.592L790.227,254.876L790.806,257.346L789.877,259.716L790.266,259.95L789.807,261.094L790.516,261.661L788.237,265.193L788.657,265.432L788.017,266.775L787.618,266.437L786.318,268.463L786.108,267.891L785.179,269.122L784.299,272.077L781.83,270.53L781.17,271.978L780.75,274.109L780.92,275.06L780.421,275.142L779.531,278.4L779.581,279.112L778.162,281.22L775.183,280.706L773.763,278.791L771.714,278.243L771.304,280.998L771.644,281.915L771.015,283.795L770.065,285.08L770.555,285.85L769.695,286.627L768.426,289.324L768.835,289.815L767.956,292.576L766.906,293.908L764.927,297.271L764.457,298.579L764.647,299.145L764.028,300.114L764.687,301.048L765.557,301.323L763.938,303.045L764.008,303.676L764.847,303.594L764.647,304.207L761.908,306.607L761.079,305.404L760.399,305.702L758.03,307.891L756.99,308.569L755.231,307.541L754.981,308.627L755.701,309.357L754.931,310.209L751.373,311.605L749.564,312.883L746.825,310.968L746.105,312.551L745.555,312.691L743.826,314.413L741.797,314.845L739.578,313.286L738.448,313.38L736.689,311.523L736.529,310.279L735.33,309.538L736.429,308.522L735.619,308.107L732.981,308.002L732.601,307.284L731.151,306.776L730.512,306.04L729.532,305.976L728.362,303.512L726.773,302.345L726.693,301.568L725.674,301.299L725.094,300.634L725.564,299.39L724.614,299.157L723.804,297.685L722.475,296.739L721.895,295.799L722.455,295.583L722.225,294.147L722.785,293.435L722.675,292.267L722.135,291.683Z",
    "Wisconsin": "M632.073,143.883L632.273,142.312L634.012,142.482L633.023,144.455ZM625.836,147.888L626.455,147.555L626.675,148.752ZM575.027,111.396L575.367,109.802L575.996,109.68L575.807,111.116ZM574.267,114.257L575.417,113.551L575.187,114.275ZM572.268,113.276L574.097,112.208L573.857,113.405L572.518,113.674ZM570.699,115.285L571.908,113.913L571.968,114.281ZM570.869,112.488L571.718,113.481L570.979,113.586ZM570.239,111.186L572.128,110.404L572.828,111.42L573.518,110.719L573.687,111.554L572.838,111.776L571.938,112.769ZM570.309,116.511L571.189,116.12L572.878,114.374L573.637,114.935L572.038,115.659L572.358,116.307L571.458,116.435L570.389,117.212ZM567.15,112.208L567.95,111.834L567.94,112.681ZM551.607,119.162L552.746,119.705L554.625,119.395L558.334,117.726L559.303,117.685L563.832,115.051L564.471,115.484L566.381,114.398L567.33,113.189L568.14,113.37L569.389,112.722L570.799,114.187L570.149,115.67L568.909,117.223L569.469,118.455L568.56,119.419L568.08,120.814L568.8,121.077L571.029,119.559L571.248,118.52L573.687,120.441L576.316,121.042L576.746,121.766L577.666,121.246L577.916,121.941L579.265,122.122L580.355,123.617L581.214,125.859L597.407,129.199L601.306,131.102L602.495,131.557L603.035,131.26L605.014,131.995L605.154,131.347L606.654,131.178L608.163,132.019L608.673,131.616L610.052,132.41L610.792,132.083L613.091,132.813L613.631,134.045L612.771,135.142L613.481,135.831L614.99,135.487L615.56,136.269L616.479,136.17L617.999,137.11L618.549,137.916L617.939,138.552L618.739,139.335L618.519,140.409L618.009,140.304L618.699,141.67L618.469,142.604L617.759,143.328L617.649,144.624L618.339,145.15L619.608,145.08L620.468,144.093L621.287,145.156L620.748,146.131L620.248,149.009L621.537,150.317L622.677,150.504L622.217,151.672L622.277,153.196L619.348,154.03L619.338,155.373L618.299,156.897L617.799,158.538L617.209,159.396L616.949,161.282L617.179,161.889L616.559,162.894L617.199,163.46L618.419,163.425L618.729,162.38L620.128,161.025L620.938,160.669L621.347,158.941L622.867,156.255L625.486,154.801L626.045,155.484L625.946,154.492L626.495,152.577L627.805,150.352L628.045,148.408L628.724,148.437L629.854,147.701L629.884,146.218L630.614,145.348L631.773,145.185L631.893,146.954L631.153,146.884L631.183,149.867L630.104,150.656L629.914,151.701L629.224,152.752L629.574,153.552L628.934,154.369L629.174,154.848L628.245,155.578L627.745,156.57L627.185,158.929L625.676,162.432L624.916,167.681L625.686,169.672L625.606,170.799L623.736,172.656L622.747,177.788L623.037,179.335L623.537,180.258L623.616,182.231L622.607,184.59L622.407,187.247L621.617,188.835L621.138,192.099L621.787,193.844L621.537,194.615L622.207,195.97L621.807,196.729L622.007,197.651L622.847,198.854L622.867,200.086L623.367,201.26L624.386,202.305L624.276,204.045L623.846,206.164L624.406,208.908L619.258,209.247L608.313,210.216L600.726,210.636L587.272,211.302L577.976,211.851L577.596,210.531L576.546,208.955L572.958,208.19L570.999,207.063L570.069,203.852L569.319,203.379L569.229,202.094L568.68,200.425L568.54,198.34L570.329,195.473L569.459,194.212L567.66,193.126L567.83,191.999L567.26,191.083L567.46,190.113L566.99,189.051L567.13,188.268L566.51,187.585L566.411,185.472L566.73,184L566.011,182.412L563.472,179.178L561.033,178.605L558.894,176.614L557.144,175.715L556.175,174.892L555.255,172.002L553.156,170.571L550.557,169.847L549.448,169.013L548.898,167.681L548.348,167.273L545.129,167.132L544.79,166.368L542.041,163.921L540.891,163.197L541.501,161.171L541.311,160.021L541.661,159.011L541.371,156.979L540.911,155.852L541.621,155.192L541.201,153.377L541.261,151.123L542.171,150.072L542.88,148.659L542.8,147.415L540.821,144.94L539.092,144.84L538.982,143.422L539.212,141.664L540.501,140.578L540.741,139.165L541.601,137.624L542.62,136.73L543.99,136.263L544.41,135.534L545.189,135.755L545.719,134.658L547.059,134.704L547.359,133.595L547.878,133.391L547.388,120.295L548.778,120.423L548.928,119.022L550.427,118.257Z",
    "Wyoming": "M363.386,153.166L361.816,172.259L360.697,185.262L359.667,197.733L355.859,242.504L345.493,241.599L342.495,241.389L328.021,239.999L319.834,239.118L315.916,238.592L296.454,236.321L281.5,234.47L272.834,233.273L264.797,232.205L248.814,229.904L239.798,228.421L243.366,206.135L245.145,194.965L245.975,190.149L252.083,151.362L252.512,148.017L253.842,139.702L258.06,140.333L259.27,140.765L267.166,141.886L268.586,141.927L274.193,142.803L284.309,144.146L284.609,144.327L293.715,145.559L315.106,148.215L315.866,148.384L328.74,149.903L333.998,150.463L334.248,150.323L352.28,152.139Z"
};

function initUSMap() {
    const mapSvg = document.getElementById('us-map');
    const tooltip = document.getElementById('map-tooltip');
    const previewList = document.getElementById('preview-list');
    const previewSubtitle = document.getElementById('preview-subtitle');
    const mapWrapper = document.getElementById('us-map-wrapper');

    if (!mapSvg || !ACQUIRED_PROPERTIES) return;

    // Get states that have properties
    const statesWithProperties = Object.keys(ACQUIRED_PROPERTIES);

    // Render state paths
    Object.entries(US_STATES_PATHS).forEach(([stateName, pathData]) => {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', pathData);
        path.setAttribute('class', 'state-path');
        path.setAttribute('data-state', stateName);

        if (statesWithProperties.includes(stateName)) {
            path.classList.add('has-properties');
            const propertyCount = ACQUIRED_PROPERTIES[stateName].length;
            path.setAttribute('data-count', propertyCount);
            path.setAttribute('aria-label', `${stateName}: ${propertyCount} properties`);
            path.setAttribute('tabindex', '0');
            path.setAttribute('role', 'button');
        }

        mapSvg.appendChild(path);
    });

    // Tooltip handling
    const showTooltip = (e, statePath) => {
        const stateName = statePath.dataset.state;
        const count = statePath.dataset.count;

        if (!count) return;

        const tooltipState = tooltip.querySelector('.map-tooltip-state');
        const tooltipCount = tooltip.querySelector('.map-tooltip-count');

        tooltipState.textContent = stateName;
        tooltipCount.textContent = `${count} ${count === '1' ? 'property' : 'properties'}`;

        // Position tooltip
        const rect = mapWrapper.getBoundingClientRect();
        const pathRect = statePath.getBoundingClientRect();

        const x = pathRect.left + pathRect.width / 2 - rect.left;
        const y = pathRect.top - rect.top;

        tooltip.style.left = `${x}px`;
        tooltip.style.top = `${y}px`;
        tooltip.classList.add('visible');
    };

    const hideTooltip = () => {
        tooltip.classList.remove('visible');
    };

    // Add event listeners to state paths
    mapSvg.querySelectorAll('.state-path.has-properties').forEach(path => {
        path.addEventListener('mouseenter', (e) => showTooltip(e, path));
        path.addEventListener('mouseleave', hideTooltip);
        path.addEventListener('focus', (e) => showTooltip(e, path));
        path.addEventListener('blur', hideTooltip);

        // Click to navigate to properties page with state filter
        path.addEventListener('click', () => {
            const stateName = path.dataset.state;
            const stateId = stateName.replace(/\s+/g, '-').toLowerCase();
            window.location.href = `properties.html#state-${stateId}`;
        });

        // Keyboard support
        path.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const stateName = path.dataset.state;
                const stateId = stateName.replace(/\s+/g, '-').toLowerCase();
                window.location.href = `properties.html#state-${stateId}`;
            }
        });

        // Hover to show properties in preview
        path.addEventListener('mouseenter', () => {
            const stateName = path.dataset.state;
            renderPreviewProperties(stateName);
        });
    });

    // Reset preview on mouse leave from map
    mapSvg.addEventListener('mouseleave', () => {
        renderPreviewProperties(null);
    });

    // Render preview properties
    function renderPreviewProperties(stateName) {
        if (!previewList) return;

        let properties = [];
        let subtitle = 'Recent acquisitions across the nation';

        if (stateName && ACQUIRED_PROPERTIES[stateName]) {
            properties = ACQUIRED_PROPERTIES[stateName].slice(0, 6);
            subtitle = `Properties in ${stateName}`;
        } else {
            // Show random sampling from different states
            const allStates = Object.keys(ACQUIRED_PROPERTIES);
            const shuffled = allStates.sort(() => 0.5 - Math.random());

            for (let i = 0; i < Math.min(6, shuffled.length); i++) {
                const state = shuffled[i];
                const stateProps = ACQUIRED_PROPERTIES[state];
                if (stateProps && stateProps.length > 0) {
                    const randomProp = stateProps[Math.floor(Math.random() * stateProps.length)];
                    properties.push({ ...randomProp, stateName: state });
                }
            }
        }

        if (previewSubtitle) {
            previewSubtitle.textContent = subtitle;
        }

        // Clear and re-render with animation
        previewList.innerHTML = '';

        properties.forEach((prop, index) => {
            const li = document.createElement('li');
            li.className = 'preview-item';
            li.style.animationDelay = `${index * 0.05}s`;

            const displayState = prop.stateName || stateName;

            li.innerHTML = `
                <span class="preview-item-tenant">${escapeHtml(prop.tenant)}</span>
                ${prop.address ? `<span class="preview-item-address">${escapeHtml(prop.address)}</span>` : ''}
                ${displayState ? `<span class="preview-item-state">${escapeHtml(displayState)}</span>` : ''}
            `;

            previewList.appendChild(li);
        });
    }

    // Initial render
    renderPreviewProperties(null);

    // Update stats based on ACQUIRED_PROPERTIES
    const totalProperties = Object.values(ACQUIRED_PROPERTIES).reduce((sum, arr) => sum + arr.length, 0);
    const totalStates = Object.keys(ACQUIRED_PROPERTIES).length;

    // Update stat counters if they exist on page
    const propertiesCounter = document.querySelector('[data-stat="properties"] .stat-number');
    const statesCounter = document.querySelector('[data-stat="states"] .stat-number');

    if (propertiesCounter) {
        propertiesCounter.dataset.count = totalProperties;
    }
    if (statesCounter) {
        statesCounter.dataset.count = totalStates;
    }
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
        { tenant: "Office Depot", address: "3044 South Mckenzie Street, Foley, AL" },
        { tenant: "Dollar General", address: "1520 Highway 31 South, Bay Minette, AL" },
        { tenant: "Advance Auto Parts", address: "2100 Government Boulevard, Mobile, AL" }
    ],
    "Arizona": [
        { tenant: "7 Eleven", address: "SWC 67th Ave. & Camelback, Glendale, AZ" },
        { tenant: "Circle K", address: "3130 Stockton Hill Road, Kingman, AZ" },
        { tenant: "Walgreens", address: "1850 East University Drive, Mesa, AZ" },
        { tenant: "CVS Pharmacy", address: "4502 East Ray Road, Phoenix, AZ" },
        { tenant: "Starbucks", address: "9420 West Camelback Road, Glendale, AZ" },
        { tenant: "Dutch Bros", address: "1234 North Scottsdale Road, Scottsdale, AZ" }
    ],
    "California": [
        { tenant: "Rite Aid", address: "1500 West El Camino Real, Mountain View, CA" },
        { tenant: "Chipotle", address: "3200 Las Vegas Boulevard, San Diego, CA" },
        { tenant: "In-N-Out Burger", address: "4444 East Valley Boulevard, Los Angeles, CA" },
        { tenant: "Chick-fil-A", address: "8800 Grossmont Boulevard, La Mesa, CA" },
        { tenant: "Panda Express", address: "2100 Harbor Boulevard, Costa Mesa, CA" }
    ],
    "Colorado": [
        { tenant: "King Soopers", address: "2750 South Wadsworth Boulevard, Denver, CO" },
        { tenant: "Walgreens", address: "1600 28th Street, Boulder, CO" },
        { tenant: "AutoZone", address: "3300 South Federal Boulevard, Denver, CO" },
        { tenant: "O'Reilly Auto Parts", address: "1010 North Academy Boulevard, Colorado Springs, CO" }
    ],
    "Florida": [
        { tenant: "Publix", address: "1200 South Dale Mabry Highway, Tampa, FL" },
        { tenant: "Wawa", address: "4500 East Colonial Drive, Orlando, FL" },
        { tenant: "CVS Pharmacy", address: "2800 North Federal Highway, Fort Lauderdale, FL" },
        { tenant: "Walgreens", address: "500 Brickell Avenue, Miami, FL" },
        { tenant: "Dollar General", address: "8800 US Highway 19 North, Pinellas Park, FL" },
        { tenant: "7 Eleven", address: "1100 West Commercial Boulevard, Fort Lauderdale, FL" },
        { tenant: "Starbucks", address: "6000 West Sample Road, Coral Springs, FL" },
        { tenant: "McDonald's", address: "3400 North State Road 7, Lauderdale Lakes, FL" }
    ],
    "Georgia": [
        { tenant: "Kroger", address: "4920 Roswell Road, Atlanta, GA" },
        { tenant: "Chick-fil-A", address: "2200 Pleasant Hill Road, Duluth, GA" },
        { tenant: "AutoZone", address: "1600 Lawrenceville Highway, Decatur, GA" },
        { tenant: "Advance Auto Parts", address: "5000 Jimmy Carter Boulevard, Norcross, GA" },
        { tenant: "Dollar Tree", address: "3300 Holcomb Bridge Road, Norcross, GA" }
    ],
    "Illinois": [
        { tenant: "Walgreens", address: "1 North State Street, Chicago, IL" },
        { tenant: "CVS Pharmacy", address: "500 West Madison Street, Chicago, IL" },
        { tenant: "Jewel-Osco", address: "3000 North Ashland Avenue, Chicago, IL" },
        { tenant: "Taco Bell", address: "6400 South Cicero Avenue, Chicago, IL" },
        { tenant: "McDonald's", address: "2100 West 95th Street, Chicago, IL" }
    ],
    "Indiana": [
        { tenant: "Kroger", address: "5600 East 82nd Street, Indianapolis, IN" },
        { tenant: "Walgreens", address: "3000 West Washington Street, Indianapolis, IN" },
        { tenant: "Dollar General", address: "1500 North Meridian Street, Indianapolis, IN" }
    ],
    "Kentucky": [
        { tenant: "Kroger", address: "4200 Summit Plaza Drive, Louisville, KY" },
        { tenant: "Walgreens", address: "2900 Bardstown Road, Louisville, KY" },
        { tenant: "Tractor Supply", address: "5000 Preston Highway, Louisville, KY" }
    ],
    "Louisiana": [
        { tenant: "Rouses Market", address: "3440 Veterans Memorial Boulevard, Metairie, LA" },
        { tenant: "Dollar General", address: "1200 Airline Drive, Bossier City, LA" },
        { tenant: "AutoZone", address: "4500 Jefferson Highway, Jefferson, LA" }
    ],
    "Maryland": [
        { tenant: "Giant Food", address: "6000 Greenbelt Road, Greenbelt, MD" },
        { tenant: "CVS Pharmacy", address: "1500 Reisterstown Road, Baltimore, MD" },
        { tenant: "Walgreens", address: "8800 Georgia Avenue, Silver Spring, MD" }
    ],
    "Michigan": [
        { tenant: "Meijer", address: "3825 Carpenter Road, Ypsilanti, MI" },
        { tenant: "Kroger", address: "2641 Plymouth Road, Ann Arbor, MI" },
        { tenant: "Walgreens", address: "16000 West Warren Avenue, Detroit, MI" },
        { tenant: "CVS Pharmacy", address: "3450 Washtenaw Avenue, Ann Arbor, MI" },
        { tenant: "AutoZone", address: "20000 Greenfield Road, Detroit, MI" },
        { tenant: "Tractor Supply", address: "45600 Michigan Avenue, Canton, MI" }
    ],
    "Minnesota": [
        { tenant: "Target", address: "900 Nicollet Mall, Minneapolis, MN" },
        { tenant: "Walgreens", address: "3000 Hennepin Avenue, Minneapolis, MN" },
        { tenant: "CVS Pharmacy", address: "1500 University Avenue, St. Paul, MN" }
    ],
    "Missouri": [
        { tenant: "Schnucks", address: "4000 Lindell Boulevard, St. Louis, MO" },
        { tenant: "Walgreens", address: "6200 Delmar Boulevard, St. Louis, MO" },
        { tenant: "Dollar General", address: "3500 North Lindbergh Boulevard, St. Ann, MO" }
    ],
    "Nevada": [
        { tenant: "Smith's Food & Drug", address: "5500 West Charleston Boulevard, Las Vegas, NV" },
        { tenant: "Walgreens", address: "3700 Las Vegas Boulevard South, Las Vegas, NV" },
        { tenant: "CVS Pharmacy", address: "4400 South Eastern Avenue, Las Vegas, NV" },
        { tenant: "7 Eleven", address: "2100 East Tropicana Avenue, Las Vegas, NV" }
    ],
    "New Jersey": [
        { tenant: "ShopRite", address: "250 Broad Street, Newark, NJ" },
        { tenant: "CVS Pharmacy", address: "1800 Route 35 North, Middletown, NJ" },
        { tenant: "Walgreens", address: "500 Market Street, Camden, NJ" },
        { tenant: "7 Eleven", address: "3200 Route 9 South, Freehold, NJ" }
    ],
    "New York": [
        { tenant: "Duane Reade", address: "1 Penn Plaza, New York, NY" },
        { tenant: "CVS Pharmacy", address: "500 Fifth Avenue, New York, NY" },
        { tenant: "Walgreens", address: "350 Fifth Avenue, New York, NY" },
        { tenant: "7 Eleven", address: "200 Broadway, New York, NY" },
        { tenant: "Starbucks", address: "1585 Broadway, New York, NY" }
    ],
    "North Carolina": [
        { tenant: "Harris Teeter", address: "4500 South Boulevard, Charlotte, NC" },
        { tenant: "Walgreens", address: "2800 Hillsborough Street, Raleigh, NC" },
        { tenant: "CVS Pharmacy", address: "1500 Westgate Center Drive, Winston-Salem, NC" },
        { tenant: "Dollar General", address: "6200 Glenwood Avenue, Raleigh, NC" },
        { tenant: "Advance Auto Parts", address: "3800 South College Road, Wilmington, NC" }
    ],
    "Ohio": [
        { tenant: "Kroger", address: "3600 Soldano Boulevard, Columbus, OH" },
        { tenant: "Giant Eagle", address: "4800 Richmond Road, Cleveland, OH" },
        { tenant: "Walgreens", address: "1200 Vine Street, Cincinnati, OH" },
        { tenant: "CVS Pharmacy", address: "2500 East Main Street, Columbus, OH" },
        { tenant: "AutoZone", address: "5600 Warrensville Center Road, Maple Heights, OH" }
    ],
    "Pennsylvania": [
        { tenant: "Giant Food Stores", address: "3000 Market Street, Philadelphia, PA" },
        { tenant: "CVS Pharmacy", address: "1800 JFK Boulevard, Philadelphia, PA" },
        { tenant: "Walgreens", address: "5000 Forbes Avenue, Pittsburgh, PA" },
        { tenant: "Rite Aid", address: "2400 Grant Avenue, Philadelphia, PA" },
        { tenant: "Wawa", address: "1500 South Broad Street, Philadelphia, PA" }
    ],
    "South Carolina": [
        { tenant: "Publix", address: "1800 East Main Street, Spartanburg, SC" },
        { tenant: "Bi-Lo", address: "3400 Augusta Road, Greenville, SC" },
        { tenant: "Walgreens", address: "2000 Savannah Highway, Charleston, SC" }
    ],
    "Tennessee": [
        { tenant: "Kroger", address: "3410 West End Avenue, Nashville, TN" },
        { tenant: "Walgreens", address: "1500 Union Avenue, Memphis, TN" },
        { tenant: "Dollar General", address: "4800 Summer Avenue, Memphis, TN" },
        { tenant: "Tractor Supply", address: "2200 Gallatin Pike North, Madison, TN" }
    ],
    "Texas": [
        { tenant: "H-E-B", address: "1601 South Congress Avenue, Austin, TX" },
        { tenant: "Kroger", address: "4500 Westheimer Road, Houston, TX" },
        { tenant: "CVS Pharmacy", address: "3200 Knox Street, Dallas, TX" },
        { tenant: "Walgreens", address: "5800 San Felipe Street, Houston, TX" },
        { tenant: "7 Eleven", address: "2400 North Central Expressway, Dallas, TX" },
        { tenant: "Starbucks", address: "6000 Camp Bowie Boulevard, Fort Worth, TX" },
        { tenant: "Whataburger", address: "1800 South Lamar Boulevard, Austin, TX" },
        { tenant: "Taco Cabana", address: "4200 North Loop 1604 West, San Antonio, TX" },
        { tenant: "AutoZone", address: "3600 South Buckner Boulevard, Dallas, TX" },
        { tenant: "Dollar Tree", address: "8800 Gateway Boulevard East, El Paso, TX" }
    ],
    "Virginia": [
        { tenant: "Publix", address: "4800 Virginia Beach Boulevard, Virginia Beach, VA" },
        { tenant: "Harris Teeter", address: "3000 Wilson Boulevard, Arlington, VA" },
        { tenant: "CVS Pharmacy", address: "1500 King Street, Alexandria, VA" },
        { tenant: "Walgreens", address: "6200 Little River Turnpike, Alexandria, VA" }
    ],
    "Washington": [
        { tenant: "Fred Meyer", address: "12000 Aurora Avenue North, Seattle, WA" },
        { tenant: "Safeway", address: "4500 42nd Avenue Southwest, Seattle, WA" },
        { tenant: "Walgreens", address: "1800 Broadway, Seattle, WA" },
        { tenant: "Starbucks", address: "2401 Utah Avenue South, Seattle, WA" }
    ],
    "Wisconsin": [
        { tenant: "Pick 'n Save", address: "3800 South 27th Street, Milwaukee, WI" },
        { tenant: "Walgreens", address: "1500 North Water Street, Milwaukee, WI" },
        { tenant: "CVS Pharmacy", address: "4200 East Towne Boulevard, Madison, WI" }
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
