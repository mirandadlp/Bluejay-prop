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
    "Alabama": "M646.926,376.327L678.607,373.516L683.917,392.413L691.643,420.181L694.495,426.172L696.945,429.48L696.384,431.774L698.687,432.868L695.843,436.047L696.27,438.844L695.064,442.819L697.691,449.32L697.024,455.331L699.803,461.189L690.466,462.373L650.514,466.359L650.148,469.348L654.812,473.242L654.411,476.972L656.044,478.671L653.508,482.223L650.945,483.188L645.796,479.944L644.804,474.49L643.288,474.003L641.856,478.307L641.561,482.391L636.533,481.695L632.353,447.67L633.198,404.748L633.766,379.952L631.689,377.772Z",
    "Alaska": "M193.435,567.171L193.148,565.91L194.303,566.32L194.608,567.621L193.463,567.843ZM191.678,565.243L192.769,565.861L192.783,567.309L192.282,566.984ZM184.399,559.328L185.332,558.839L185.853,558.983L186.084,560.126L185.286,560.662L184.269,560.227ZM182.064,560.801L183.926,560.474L184.843,561.755L187.16,562.751L188.102,563.521L188.42,564.318L188.91,564.334L189.335,565.366L190.429,566.171L190.84,567.072L191.227,566.623L191.686,567.28L192.769,570.123L192.688,570.875L191.452,571.161L190.631,569.812L190.252,570.075L189.023,569.267L188.888,569.718L188.044,569.59L188.522,570.65L189.106,570.141L189.685,570.4L189.975,571.973L189.098,572.083L187.23,570.577L186.563,569.712L186.303,568.671L185.353,569.067L185.105,568.291L185.821,567.971L186.337,567.039L185.617,565.921L184.664,565.958L183.898,564.043L183.266,563.165L182.893,564.048L182.316,563.016L182.762,562.29L181.861,561.181ZM183.345,566.917L184.308,567.151L184.666,566.362L185.311,566.47L185.088,567.757L184.081,567.718ZM179.421,556.865L178.614,556.307L179.126,555.609L181.54,555.609L182.501,555.253L183.642,556.415L185.287,557.136L185.438,558.036L184.915,558.706L183.929,558.804L183.451,559.546L182.447,559.509L181.561,560.151L180.803,558.456L180.531,557.282L179.782,557.472ZM179.613,560.49L178.873,560.089L177.89,559.043L177.536,558.119L177.89,557.518L178.542,557.812L178.413,556.998L180.44,557.85L181.009,559.11L180.499,559.451L180.599,561.037L181.134,561.32L181.172,563.195L180.42,563.024L180.657,564.117L180.082,563.711L179.192,561.696ZM177.911,562.622L178.033,563.526L177.316,563.203L174.794,560.323L173.54,559.614L173.651,558.733L172.725,556.945L171.223,555.722L171.882,553.927L172.545,554.406L173.638,554.624L174.523,554.453L174.899,555.64L176.912,559.294ZM173.241,548.157L174.751,548.33L175.501,548.011L175.635,548.599L177.396,550.301L176.513,550.216L176.532,550.974L177.713,551.777L178.565,553.58L177.859,554.339L177.775,555.084L176.79,556.865L176.355,556.952L175.745,555.566L175.773,554.617L175.258,553.382L174.307,551.963L174.149,551.114L173.243,549.188L172.468,548.477L171.88,547.038ZM170.617,556.205L171.194,556.042L172.181,557.235L172.183,558.261L171.323,558.726L171.04,557.201ZM167.094,550.05L168.298,549.762L168.892,548.882L170.274,549.473L169.949,550.637L170.272,550.947L170.518,549.671L171.991,549.647L172.992,550.248L172.993,551.86L173.379,551.88L174.425,553.72L173.453,554.32L171.03,553.277L171.567,554.91L171.134,555.747L170.322,555.663L169.591,554.752L168.558,554.28L167.524,553.005L166.534,552.56L166.254,551.346L166.687,550.784L166.579,549.7ZM121.922,542.663L120.491,544.796L120.439,545.578L119.164,546.218L119.33,544.993L120.632,543.615L121.38,542.157ZM119.779,539.898L119.727,541.544L119.339,543.265L118.527,542.779L118.979,540.795ZM111.882,464.941L112.193,465.249L113.624,465.445L114.337,465.159L115.351,465.047L116.487,465.211L117.113,464.966L117.823,465.513L119.066,466.073L120.64,466.026L121.007,465.548L122,465.146L122.358,464.538L123.457,464.282L123.502,464.658L124.128,464.344L125.587,464.697L126.678,465.491L127.629,465.792L127.896,466.171L128.709,466.107L129.597,466.668L129.833,467.095L130.221,466.633L130.841,466.812L145.025,538.347L146.916,538.623L147.005,537.902L149.052,538.482L149.885,537.026L152.143,536.389L152.197,538.537L152.941,539.117L154.407,539.483L154.955,540.503L159.845,543.557L161.105,545.943L161.628,545.055L163.01,543.406L163.95,543.111L164.147,542.079L163.735,540.721L164.404,540.539L164.242,539.291L165.347,538.674L166.814,537.142L169.045,538.42L169.194,539.541L169.926,540.49L170.982,540.446L172.703,541.677L172.756,542.155L173.589,542.845L175.478,543.339L179.445,546.81L180.203,547.828L181.396,548.702L183.449,550.826L185.398,552.571L185.24,553.621L186.626,553.512L186.763,554.917L187.983,555.087L188.636,556.541L189.651,556.096L192.198,556.922L193.546,556.753L194.457,557.242L195.155,557.213L195.602,557.871L196.994,557.579L197.73,558.31L197.743,560.184L198.346,561.514L199.783,563.536L199.538,564.27L199.293,566.694L198.36,568.727L197.663,568.116L197.194,568.559L196.247,567.171L196.129,566.485L195.393,565.886L196.066,564.731L195.689,564.549L195.088,565.904L194.329,565.447L193.86,566.023L191.548,565.016L191.523,563.029L190.639,564.016L190.9,564.923L189.793,564.532L189.32,563.742L189.594,562.607L189.093,561.736L188.538,562.785L187.16,561.395L186.771,561.886L185.994,560.608L186.484,559.45L187.247,559.193L186.653,558.172L186.573,556.613L185.964,556.864L184.267,556.073L182.876,554.905L180.414,554.527L179.506,551.527L178.713,551.373L178.477,550.097L177.679,549.988L176.151,548.664L175.605,547.889L173.774,548.132L171.203,546.476L168.883,541.511L168.85,542.818L169.329,543.843L170.693,545.684L170.597,546.07L171.605,547.611L171.824,548.756L170.996,548.728L170.036,547.664L169.181,547.684L168.155,548.33L167.68,546.545L166.582,545.244L166.089,545.87L163.214,544.952L163.122,545.465L164.597,545.607L165.981,546.568L166.399,546.498L166.801,547.457L167.659,548.468L166.48,549.505L165.567,549.306L165.824,550.349L164.572,549.838L164.073,549.347L163.423,549.517L161.246,548.478L159.599,547.472L159.275,546.711L158.261,545.721L156.056,545.366L154.745,544.745L152.584,544.178L151.1,543.493L150.976,542.42L151.408,542.677L151.681,541.913L150.928,540.494L151.264,539.539L150.931,539.217L150.341,541.019L148.59,542.49L146.152,542.593L143.983,542.01L143.754,541.266L142.862,541.609L141.774,541.243L139.482,541.128L138.196,541.306L135.386,542.2L134.4,542.658L132.929,541.749L131.238,541.473L130.639,540.863L130.291,539.739L129.197,539.976L128.957,541.049L126.816,539.938L126.429,539.379L124.538,540.732L123.702,542.168L123.144,540.975L123.487,540.245L124.091,540.35L125.904,539.227L125.571,538.575L124.719,539.023L124.262,538.167L123.419,538.133L122.343,535.96L122.095,536.549L120.973,536.97L120.571,536.709L120.253,537.476L118.782,537.359L118.796,538.178L117.842,538.482L117.359,538.223L117.56,536.738L117.152,536.817L116.624,538.416L117.582,538.851L117.764,539.956L118.437,541.104L118.218,542.419L117.443,542.056L117.288,542.717L118.028,542.911L118.585,544.587L117.573,545.022L116.97,544.729L116.094,545.276L115.594,544.928L114.385,545.064L114.379,544.417L113.837,544.888L113.576,545.726L113.013,545.033L112.444,546.105L112.753,546.559L111.893,547.218L111.082,547.355L110.809,548.19L109.967,548.971L109.348,548.747L108.723,549.641L108.179,549.625L107.132,551.439L105.916,551.62L105.501,551.077L104.795,552.05L103.242,551.371L103.549,550.028L104.53,549.522L105.183,549.584L105.357,549.061L106.48,547.983L106.486,547.122L105.006,548.343L103.711,547.701L103.546,547.233L104.121,545.235L105.152,543.778L105.276,542.612L105.583,542.384L105.658,541.133L105.06,539.781L106.35,539.211L108.739,537.113L109.381,537.853L110.159,538.023L111.245,537.137L109.923,536.142L109.383,535.355L108.405,535.495L107.688,535.145L107.501,535.499L106.357,536.112L105.869,537.209L104.702,537.514L103.524,538.804L103.426,539.624L102.501,540.083L102.318,540.991L101.662,541.568L101.385,543.166L100.095,544.225L100.749,545.029L100.24,546.243L99.003,546.48L98.918,548.028L97.761,548.601L97.389,547.96L96.815,549.168L96.124,549.214L96.257,550.073L94.715,550.591L94.404,552.954L96.181,553.082L97.592,553.718L97.996,554.487L97.433,555.739L96.483,556.519L95.594,556.564L95.506,557.252L94.926,557.51L95.194,558.369L94.587,559.658L93.274,560.854L92.529,560.848L91.801,561.27L91.101,561.174L90.55,561.638L90.698,562.285L89.67,562.61L89.446,563.55L88.753,562.934L87.931,564.761L86.629,564.595L86.69,565.585L85.918,565.302L85.352,565.712L85.305,567.042L84.348,569.069L82.918,569.268L81.709,570.158L81.498,570.664L80.786,569.898L79.417,571.802L79.096,571.225L78.383,571.356L78.152,572.46L77.396,572.843L76.535,572.617L75.776,573.684L76.961,574.105L75.49,576.501L71.653,577.032L70.416,579.123L70.191,578.631L70.452,577.276L69.729,576.999L68.749,577.428L68.555,577.969L67.005,578.728L66.278,579.69L66.157,578.946L65.686,579.76L64.875,579.117L63.116,580.266L61.912,580.089L62.197,579.086L61.779,578.046L61.205,578.8L61.154,579.656L59.221,582.058L58.741,581.352L58.449,582.308L57.351,581.997L57.377,580.445L56.745,580.017L56.43,580.538L56.947,581.297L56.517,582.32L55.542,582.753L55.021,581.472L54.207,581.274L53.996,581.72L54.73,582.513L53.063,583.405L54.049,583.846L54.003,584.358L53.198,583.856L51.9,584.708L49.674,584.332L48.464,584.838L48.286,585.33L46.912,585.717L46.01,585.354L45.929,583.865L46.935,583.553L47.922,581.935L48.853,582.039L51.021,581.202L52.63,581.396L53.08,582.585L53.656,581.845L53.691,580.899L54.671,580.603L55.664,580.738L57.262,578.875L58.959,577.234L61.066,575.849L63.386,575.38L64.277,575.822L65.231,575.448L65.399,576.155L64.818,576.871L65.306,577.525L65.57,576.604L66.701,576.631L66.953,577.259L67.628,577.539L67.72,576.815L66.636,576.064L66.583,575.628L67.539,573.697L68.663,572.64L70.127,571.652L72.367,570.851L74.041,569.56L74.75,570.129L75.372,569.958L75.179,569.041L75.425,568.198L76.727,566.479L78.411,565.424L79.783,563.955L79.762,563.094L81.104,557.057L82.739,555.503L82.623,554.207L78.809,555.852L77.648,555.563L77.411,554.773L76.773,554.385L76.612,553.512L75.991,553.856L75.519,555.157L76.042,556.875L75.209,557.547L74.537,557.238L73.416,554.478L72.624,553.075L72.164,553.036L71.77,553.993L71.358,554.13L70.838,553.263L70.125,553.067L69.923,551.71L67.629,552.993L65.581,553.854L65.36,554.435L63.734,555.157L63.079,554.257L63.873,553.399L63.894,551.152L63.675,548.745L64.783,547.881L64.201,545.821L63.632,544.626L63.282,542.937L62.546,542.151L62.154,543.531L61.121,543.699L59.409,544.378L57.444,544.488L56.416,544.248L55.597,543.645L55.682,542.397L54.984,541.896L54.062,540.007L53.117,539.503L52.271,537.442L53.198,536.727L53.626,535.186L52.975,535.425L53.059,534.436L53.481,533.68L52.852,532.831L52.639,533.58L51.777,533.124L51.887,531.79L51.211,531.495L50.989,530.538L51.208,529.442L50.415,529.821L50.49,528.742L51.394,528.645L50.915,527.335L52.159,527.473L52.417,526.035L52.885,525.115L55.665,522.412L56.285,521.558L56.586,521.782L56.61,520.436L57.82,518.328L58.686,517.553L60.095,517.381L61.084,517.92L62.359,519.492L63.342,519.455L64.838,518.313L66.444,516.485L67.151,516.356L67.26,516.888L68.891,517.081L70.38,516.814L71.883,514.858L71.935,514.346L71.504,512.317L71.551,511.158L70.707,509.817L70.458,508.711L71.414,509.117L72.441,508.32L72.583,507.473L71.553,505.771L70.531,506.908L69.721,506.6L68.861,507.189L67.951,507.251L67.674,507.692L66.567,508.243L66.107,509.35L65.532,509.75L65.475,508.358L64.895,507.977L64.31,508.978L64.125,508.433L63.086,507.505L60.735,507.193L58.927,507.771L58.268,507.793L56.991,507.053L54.526,506.001L53.945,505.413L53.783,504.597L54.216,503.589L53.476,502.532L53.84,501.599L54.502,501.203L54.558,499.95L53.663,499.777L52.993,499.296L51.61,498.754L50.99,497.97L49.978,497.099L50.045,496.283L52.041,495.612L54.625,494.3L56.379,493.549L57.157,494.302L58.041,494.592L58.397,493.788L57.874,493.564L57.952,492.84L60.31,492.04L62.871,491.552L64.183,491.668L64.849,492.07L64.287,493.281L64.291,494.188L63.922,494.781L64.235,495.864L65.121,495.821L66.183,496.144L67.471,496.103L67.783,496.532L68.602,496.723L69.376,496.433L70.276,496.972L71.388,495.381L72.05,495.369L72.46,495.758L72.789,494.806L71.592,494.201L70.35,494.442L70.621,493.185L69.854,491.716L68.896,491.165L68.752,489.9L69.577,489.705L70.431,491.056L70.127,492.008L70.526,492.83L71.494,493.846L71.856,492.942L70.779,491.571L71.56,489.43L71.187,489L69.947,489.321L68.746,489.039L68.613,488.635L67.946,488.933L65.537,487.646L65.631,486.669L65.2,484.409L64.721,483.518L63.873,482.695L62.251,480.532L61.498,479.669L60.654,479.347L59.587,477.857L58.466,476.91L58.452,476.648L59.461,476.452L60.101,475.364L60.566,473.037L63.026,473.65L66.132,473.602L66.98,473.304L68.395,472.316L69.821,470.682L70.309,468.916L71.012,467.437L72.19,466.274L72.74,465.368L74.16,463.974L74.301,464.414L75.311,464.657L76.889,464.023L77.905,463.281L80.352,460.893L81.194,460.837L81.25,461.22L82.12,460.993L82.947,461.137L84.605,460.91L86.27,459.871L87.953,457.605L88.605,457.13L88.702,457.552L91.085,458.587L91.268,459.261L90.405,460.118L90.018,460.149L89.998,461.322L91.243,460.977L91.329,460.35L91.898,459.776L92.077,460.114L92.512,458.782L93.706,460.01L93.497,460.93L94.256,461.187L94.7,461.733L95.362,460.854L96.523,460.807L97.179,460.507L98.874,460.773L99.743,461.088L99.369,462.9L100.98,463.317L101.112,463.774L102.706,464.512L102.704,464.134L103.805,463.579L104.884,463.565L104.922,463.984L105.552,463.99L106.173,463.364L107.243,463.21L108.017,463.408L109.099,463.957L109.571,463.793L110.331,464.615L110.697,464.246L111.363,464.44ZM99.557,561.084L99.54,561.428L98.109,560.931L99.096,558.9L100.013,558.713L100.603,556.854L101.33,558.472L101.898,557.899L103.041,558.771L103.077,560.017L101.438,560.231L100.728,560.805ZM95.355,564.941L96.542,563.907L95.468,563.696L95.444,562.794L96.329,562.19L96.967,562.616L97.064,563.518L97.424,562.914L97.436,561.582L98.213,562.176L98.339,561.315L99.025,561.822L99.841,561.809L100.467,561.326L101.526,562.119L101.579,564.395L102.901,564.19L102.069,565.715L100.448,565.149L101.066,566.124L100.621,566.949L99.783,566.578L99.786,568.123L98.516,568.571L98.104,569.219L97.308,568.625L96.48,570.261L95.826,570.435L95.124,571.165L94.868,569.406L93.886,570.347L93.842,569.789L92.96,569.225L92.903,567.637L92.054,566.984L92.556,565.143L94.235,563.995L95.263,564.082ZM92.889,572.272L91.977,573.85L91.696,573.59ZM88.029,577.511L88.722,577.613L88.445,579.236L87.294,578.993L87.117,578.431ZM68.995,581.451L68.579,583.091L67.083,584.329L67.938,582.302L68.381,582.557ZM66.263,580.593L67.086,580.673L66.98,581.523L66.062,582.381L65.396,581.669L64.873,582.218L64.755,580.742L65.045,580.298ZM58.231,582.669L58.244,583.361L57.677,583.722L57.377,582.95ZM66.098,515.273L65.491,515.974L65.41,515.271ZM55.284,586.173L56.208,586.597L56.026,587.221L55.264,587.077ZM42.701,585.745L42.867,586.686L42.108,586.944L42.025,585.973ZM41.643,586.687L40.105,587.278L39.916,586.635L40.648,585.986ZM47.827,538.39L48.753,538.256L48.839,538.84L49.63,538.854L50.288,539.496L50.044,541.723L49.516,542.371L48.449,542.615L48.098,543.337L46.801,542.221L46.119,542.134L44.885,540.755L44.383,540.655L43.675,539.854L43.59,538.783L44.057,538.615L45.419,539.151L46.241,538.48L46.962,538.532L47.378,538.042ZM38.572,587.254L39.206,587.982L37.419,589.124L37.396,589.381L39.512,588.691L39.428,589.284L38.522,589.855L37.185,590.08L36.923,590.77L35.422,591.262L34.235,591.07L33.313,591.625L31.726,591.953L31.088,591.121L32.782,590.644L33.232,590.867L34.52,590.43L34.396,589.62L35.203,588.953L36.101,589.522L36.299,589.038L35.286,588.665L34.823,588.006L35.503,587.182L37.367,586.981L37.538,588.102ZM26.219,591.499L28.3,590.432L28.537,589.829L29.367,589.266L30.486,589.158L30.954,589.651L30.942,590.697L28.752,591.363L27.347,592.715L26.368,593.065ZM21.35,592.464L21.371,593.26L20.174,593.013L20.17,592.485ZM27.657,559.181L26.919,559.749L26.984,559.013ZM16.743,592.9L16.866,593.681L15.878,593.956L15.944,593.179ZM34.596,508.333L36.955,510.163L38.745,509.605L39.422,509.864L39.914,510.561L39.854,511.518L41.086,512.348L41.405,512.91L43.128,513.533L44.119,514.11L43.281,515.109L42.474,514.66L41.505,514.654L40.916,515.044L40.213,516.068L39.806,514.865L39.21,513.968L38.52,513.708L38.383,512.833L36.929,511.398L36.145,511.149L34.691,511.694L33.89,510.988L33.753,509.971ZM7.993,593.007L7.823,593.89L6.891,593.801L7.28,593.114ZM1.959,593.185L2.467,593.696L4.2,594.17L4.204,594.438L2.04,594.19ZM-0.935,591.216L-0.729,590.477L0.012,590.397L0.711,591.419L0.144,592.002L-0.397,591.788L-0.463,592.616L-1.37,592.42L-3.495,592.636L-4.473,592.05L-3.987,591.581L-2.882,592.028ZM-11.822,591.087L-10.952,591.256L-11.274,592.181L-12.288,591.69L-13.981,592.31L-13.966,590.686L-13.401,590.843L-12.939,589.787L-12.25,589.987L-12.535,590.79ZM-14.704,589.287L-14.335,589.828L-15.135,590.943L-15.969,591.048L-15.716,590.278ZM-19.18,587.85L-18.426,588.181L-18.059,589.32L-19.197,590.076ZM-54.718,562.334L-55.735,562.362L-56.171,563.048L-63.014,559.728L-61.295,559.242L-60.997,558.723Z",
    "Arizona": "M260.618,322.589L243.063,448.95L204.956,443.271L184.395,431.384L140.092,405.108L142.79,400.502L146.571,400.374L147.954,398.64L147.763,394.335L145.287,393.719L145.727,385.267L150.029,382.855L151.169,379.689L151.502,374.352L154.437,370.909L157.581,370.016L160.312,367.53L157.383,363.695L156.07,357.404L153.856,353.193L154.409,350.409L156.08,347.595L156.507,343.402L155.894,338.875L157.417,325.707L164.021,326.131L165.617,329.211L167.373,329.425L169.925,326.019L173.352,308.187L235.163,318.75Z",
    "Arkansas": "M517.507,349.4L594.32,346.543L596.146,350.761L593.581,353.641L590.997,358.003L602.548,357.28L602.236,361.508L599.666,362.912L599.297,366.4L596.18,370.306L596.812,375.709L595.271,379.76L593.523,380.484L594.734,382.389L591.955,384.285L590.885,388.179L589.047,389.273L589.6,393.69L586.369,395.107L586.551,396.579L582.942,400.479L584.179,402.883L581.047,406.628L578.473,413.67L581.862,416.458L580.336,418.387L581.591,423.009L580.325,426.156L534.871,427.515L526.819,427.7L526.573,415.754L523.922,414.821L520.298,415.996L518.341,413.933L518.698,374.328L514.974,349.439Z",
    "California": "M47.593,161.655L61.153,165.456L82.369,171.722L98.869,176.076L89.219,213.842L82.001,241.442L98.672,266.513L114.808,290.778L127.812,310.289L137.328,324.597L154.409,350.409L153.856,353.193L156.07,357.404L157.383,363.695L160.312,367.53L157.581,370.016L154.437,370.909L151.502,374.352L151.169,379.689L150.029,382.855L145.727,385.267L145.287,393.719L147.763,394.335L147.954,398.64L146.571,400.374L142.79,400.502L118.1,397.532L97.953,395.114L96.407,391.736L97.344,387.152L97.183,381.432L95.486,377L91.076,370.415L85.049,363.805L83.359,364.796L80.808,363.298L81.719,361.235L79.654,356.046L75.215,355.981L68.592,350.916L68.177,348.017L64.032,343.541L58.373,342.226L54.091,339.592L48.029,338.644L45.691,334.964L47.978,329.061L47.173,327.827L48.985,323.711L45.245,319.265L46.236,314.803L44.583,314.103L42.756,309.517L40.987,308.14L40.782,305.525L36.619,294.773L34.24,291.29L35.546,284.088L36.691,285.049L39.068,281.223L37.703,276.738L34.587,276.377L31.653,271.823L31.039,268.693L32.063,266.158L31.105,262.158L32.738,256.457L35.869,257.35L36.85,249.022L35.238,249.461L33.84,253.302L30.294,253.183L27.209,249.072L28.055,243.785L26.681,239.006L24.049,235.526L23.077,232.145L19.854,225.122L21.163,223.709L21.084,215.817L23.281,212.093L23.668,205.631L21.28,198.456L18.217,193.903L18.621,189.765L25.563,181.567L27.324,178.621L27.292,175.903L30.752,169.866L31.246,163.572L29.945,161.628L32.08,157.125Z",
    "Colorado": "M291.58,235.61L327.96,239.895L355.872,242.39L389.205,244.868L387.767,267.41L383.643,335.107L366.754,333.822L343.206,332.042L298.721,327.532L289.027,326.265L260.618,322.589L264.218,296.519L264.273,294.032L266.989,275.076L272.861,233.261Z",
    "Connecticut": "M864.745,179.372L884.869,174.657L884.962,175.015L888.316,187.899L887.873,190.18L886.369,190.188L879.73,193.671L871.204,195.301L868.308,199.191L864.634,201.103L860.614,204.737L858.855,202.494L862.277,199.136L860.69,197.615L857.762,180.821Z",
    "Delaware": "M837.688,237.361L836.723,240.355L835.307,242.181L836.435,245.601L839.619,248.318L841.456,253.605L846.3,258.48L848.013,258.351L850.452,265.781L839.465,267.951L831.892,240.521L834.191,237.495Z",
    "District of Columbia": "M814.339,260.973L816.906,262.722L815.153,265.472L813.222,262.585Z",
    "Florida": "M690.466,462.373L699.803,461.189L703.159,467.344L729.382,465.55L753.969,463.862L755.598,468.456L757.874,467.997L758.042,463.386L756.704,459.368L758.215,457.408L762.842,458.574L768.157,458.63L770.782,468.025L774.864,478.423L782.674,491.682L793.701,505.365L792.601,506.659L794.171,513.572L799.1,520.789L807.442,535.56L809.465,540.273L810.209,545.322L811.076,563.752L809.27,564.423L808.227,570.368L809.186,572.048L805.995,576.746L804.291,576.045L800.805,578.328L794.539,580.311L792.3,578.338L792.657,574.852L786.623,565.868L782.831,564.614L779.955,566.402L776.725,561.373L775.401,557.033L770.515,552.729L769.055,549.63L769.016,544.845L766.61,544.339L767.559,547.025L765.597,548.049L757.586,537.04L754.671,534.379L759.345,524.731L755.543,525.768L753.351,528.908L750.16,524.925L751.896,512.365L751.117,502.239L748.441,500.148L747.241,496.983L743.433,496.771L738.369,492.031L734.591,490.316L733.944,487.069L731.361,486.177L728.884,482.797L720.909,478.884L714.645,480.777L715.379,484.142L713.201,483.793L705.694,488.886L697.26,490.844L697.196,488.387L694.866,485.692L684.162,480.206L676.737,478.147L670.268,478.059L664.968,479.068L653.508,482.223L656.044,478.671L654.411,476.972L654.812,473.242L650.148,469.348L650.514,466.359Z",
    "Georgia": "M723.541,367.611L720.341,372.9L720.356,375.263L727.043,379.21L728.876,378.584L732.336,383.082L733.293,385.562L736.838,389.792L741.433,391.996L744.436,395.794L749.903,398.847L750.084,401.436L753.922,405.095L759.375,407.752L761.149,411.215L762.084,415.928L764.862,417.115L768.74,422.609L769.436,426.359L774.024,427.621L770.624,435.878L770.416,439.891L768.996,443.595L769.339,447.145L767.522,449.043L768.157,458.63L762.842,458.574L758.215,457.408L756.704,459.368L758.042,463.386L757.874,467.997L755.598,468.456L753.969,463.862L729.382,465.55L703.159,467.344L699.803,461.189L697.024,455.331L697.691,449.32L695.064,442.819L696.27,438.844L695.843,436.047L698.687,432.868L696.384,431.774L696.945,429.48L694.495,426.172L691.643,420.181L683.917,392.413L678.607,373.516L701.793,370.687L714.429,369.203Z",
    "Hawaii": "M309.734,592.861L304.509,590.932L303.69,588.982L304.363,583.973L300.629,575.447L303.505,572.631L305.566,568.721L304.055,566.168L304.505,563.486L310.401,566.624L316.992,568.9L321.056,572.285L321.078,575.211L327.127,579.921L323.457,583.856L316.873,585.735L312.26,588.695ZM289.49,546.613L291.91,549.649L295.011,548.304L301.807,551.809L300.784,554.977L293.882,556.581L292.499,555.975L292.145,552.082L288.578,551.236L287.195,549.049ZM281.216,542.608L279.148,544.918L274.323,544.914L275.819,542.363ZM260.93,531.762L263.205,536.991L262.047,540.024L257.569,540.492L254.614,534.284L257.252,534.175ZM229.299,519.785L231.698,520.05L232.821,522.364L232.105,525.631L229.681,527.671L223.067,525.056L223.907,521.427Z",
    "Idaho": "M195.048,38.155L190.306,60.299L193.796,67.37L192.626,73.335L194.933,76.552L197.76,78.132L197.768,79.749L202.157,86.733L202.334,89.255L205.841,92.318L205.721,93.786L210.128,94.529L206.376,102.248L204.945,107.318L205.873,110.987L202.638,112.842L203.278,115.337L202.048,117.587L204.881,120.513L209.251,118.245L211.225,116.134L213.586,118.825L212.823,120.548L213.545,125.044L215.247,129.973L216.822,131.887L215.953,136.087L217.408,138.226L220.604,139.062L221.363,146.553L222.947,148.085L224.944,146.324L229.81,147.309L233.747,146.001L235.703,147.457L239.555,147.116L240.124,148.455L243.441,148.138L247.797,144.133L249.653,148.41L252.119,151.166L243.355,206.056L225.165,203.167L194.696,197.624L146.552,187.461L155.571,147.364L159.237,140.634L158.359,138.551L155.457,137.519L155.03,134.276L159.926,127.21L161.695,126.854L164.022,123.983L164.222,121.893L166.575,119.656L168.347,116.035L172.95,110.281L172.352,107.02L169.109,104.676L167.854,100.515L168.624,96.682L167.495,92.424L168.144,90.694L174.586,61.694L180.758,35.017Z",
    "Illinois": "M578.023,211.721L608.277,210.087L624.36,208.781L624.194,213.122L627.143,217.935L630.484,225.929L635.128,278.919L633.619,283.145L636.201,287.753L636.836,291.665L634.955,295.057L634.649,298.061L631.945,303.133L629.987,303.673L630.702,306.464L629.466,307.685L628.864,313.067L629.56,314.497L627.535,317.889L629.49,321.694L622.469,324.374L621.981,326.767L623.851,329.593L621.782,331.616L615.065,328.661L613.063,329.057L610.651,333.196L611.609,334.366L608.791,334.32L604.395,328.185L605.735,326.607L603.999,322.392L603.763,318.94L597.807,314.508L595.93,315.124L593.836,312.285L588.419,308.035L588.301,304.453L590.885,298.479L590.285,296.411L591.815,293.594L589.269,292.141L585.446,291.378L583.59,293.589L582.195,292.307L580.655,284.969L574.688,280.466L569.172,274.932L566.703,268.127L566.301,263.573L567.626,260.297L567.706,256.215L572.273,253.515L572.554,250.041L574.637,247.708L574.702,243.751L571.797,240.691L572.685,236.693L579.077,235.235L584.086,232.105L584.423,228.626L586.504,227.018L586.871,222.674L586.246,219.873L582.427,217.882L581.841,215.572Z",
    "Indiana": "M655.632,222.361L675.078,220.183L675.252,221.652L678.504,248.347L681.925,279.651L680.733,280.787L682.86,286.756L679.872,287.231L676.92,289.686L672.393,289.203L673.075,293.602L670.357,295.768L669.534,298.717L666.629,300.15L665.622,305.974L663.784,307.659L659.673,305.975L658.745,303.462L655.236,306.673L655.768,309.104L651.953,310.351L650.596,308.248L646.432,310.882L645.223,313.353L640.535,310.436L638.317,311.38L636.651,309.916L635.365,311.642L631.004,312.267L629.56,314.497L628.864,313.067L629.466,307.685L630.702,306.464L629.987,303.673L631.945,303.133L634.649,298.061L634.955,295.057L636.836,291.665L636.201,287.753L633.619,283.145L635.128,278.919L630.484,225.929L632.242,227.256L637.303,226.79L641.931,223.749Z",
    "Iowa": "M565.035,190.104L567.506,189.981L567.85,193.288L570.352,195.376L568.541,198.178L569.331,203.189L570.762,206.689L576.703,208.958L578.023,211.721L581.841,215.572L582.427,217.882L586.246,219.873L586.871,222.674L586.504,227.018L584.423,228.626L584.086,232.105L579.077,235.235L572.685,236.693L571.797,240.691L574.702,243.751L574.637,247.708L572.554,250.041L572.273,253.515L567.706,256.215L567.626,260.297L565.745,259.645L562.127,255.24L560.385,255.44L536.476,256.927L513.362,257.674L494.289,257.464L492.351,254.506L493.26,248.705L491.607,243.649L491.693,237.976L488.783,236.003L488.333,232.92L489.332,230.209L488.251,226.264L485.997,224.781L483.067,214.669L480.052,209.727L481.501,206.412L482.059,201.986L483.312,200.393L481.282,198.168L481.836,194.236L480.962,192.387L483.085,191.906Z",
    "Kansas": "M390.27,267.567L502.123,270.635L503.812,272.721L509.319,274.395L505.564,280.98L507.737,283.182L510.517,288.462L514.196,289.524L514.811,338.199L418.151,336.824L383.643,335.107L387.767,267.41Z",
    "Kentucky": "M698.469,285.208L702.71,287.774L705.222,285.825L711.922,286.671L713.496,284.212L715.829,283.141L717.106,286.831L719.161,287.167L721.941,289.894L722.425,296.689L725.113,300.674L728.334,303.581L729.56,306.025L733.259,308.107L735.594,308.136L729.806,315.103L723.875,319.319L724.116,321.032L721.733,322.862L721.814,324.846L718.57,326.166L717.751,328.772L708.733,333.214L708.491,333.619L693.398,335.267L680.171,336.071L676.718,336.706L657.091,337.901L634.866,340.456L630.908,339.8L631.538,343.838L609.469,345.294L607.348,345.69L608.122,342.788L610.812,343.588L611.609,334.366L610.651,333.196L613.063,329.057L615.065,328.661L621.782,331.616L623.851,329.593L621.981,326.767L622.469,324.374L629.49,321.694L627.535,317.889L629.56,314.497L631.004,312.267L635.365,311.642L636.651,309.916L638.317,311.38L640.535,310.436L645.223,313.353L646.432,310.882L650.596,308.248L651.953,310.351L655.768,309.104L655.236,306.673L658.745,303.462L659.673,305.975L663.784,307.659L665.622,305.974L666.629,300.15L669.534,298.717L670.357,295.768L673.075,293.602L672.393,289.203L676.92,289.686L679.872,287.231L682.86,286.756L680.733,280.787L681.925,279.651L688.461,278.865L692.494,283.098L693.02,285.024Z",
    "Louisiana": "M534.871,427.515L580.325,426.156L582.19,428.649L580.914,429.701L580.942,434.26L583.853,436.943L584.613,443.555L582.617,448.831L578.338,452.246L577.445,457.334L575.556,456.933L575.633,465.168L573.355,465.52L574.914,469.872L573.631,471.529L609.648,469.515L608.246,476.984L611.715,481.672L612.696,485.292L615.169,487.459L609.678,490.895L609.399,493.122L614.148,494.281L615.914,490.601L620.175,493.864L620.057,496.696L617.811,498.08L613.392,497.277L614.061,499.317L612.787,502.591L616.698,505.148L622.716,505.585L625.084,508.724L626.825,509.087L624.006,513.092L620.535,512.604L617.383,508.901L610.105,507.303L609.86,503.519L606.429,504.964L606.841,508.125L605.425,511.154L602.893,511.799L600.774,508.619L596.29,508.759L594.884,512.268L591.947,513.411L588.63,511.508L586.056,511.398L583.324,506.027L578.842,503.797L577.158,504.245L575.243,499.678L570.177,500.517L569.949,497.708L565.078,500.608L565.8,502.662L562.051,504.771L556.059,504.014L549.05,501.189L544.127,499.992L533.649,501.37L532.288,502.259L530.541,500.094L534.909,492.03L533.33,487.777L534.643,485.416L533.939,482.367L535.772,479.991L537.616,474.176L537.178,469.399L531.753,460.44L531.536,455.529L527.294,450.703L526.819,427.7Z",
    "Maine": "M896.191,147.557L893.884,146.527L893.562,144.321L890.406,142.499L881.727,114.315L877.225,100.554L882.977,95.826L881.483,94.585L883.058,90.603L885.192,88.367L884.34,87.207L886.17,84.544L884.387,80.981L884.29,74.925L886.048,72.407L885.263,66.167L891.946,46.538L894.788,46.472L896.106,50.396L898.44,51.235L902.479,47.506L905.439,46.624L907.062,44.487L912.158,46.632L915.411,48.695L922.888,72.559L924.314,78.387L929.934,78.321L929.957,81.003L931.993,82.935L931.577,85.371L934.732,87.982L937.311,86.407L942.419,93.15L940.339,97.53L938.114,96.812L937.349,99.618L935.009,99.7L935.374,101.769L932.475,102.404L929.368,108.352L927.324,105.509L925.669,105.752L927.446,108.932L924.428,111.632L922.784,109.177L921.531,111.086L917.597,112.249L916.579,109.095L914.445,110.487L915.517,112.603L914.71,117.952L915.508,119.127L913.397,122.553L910.257,122.434L909.346,125.633L907.08,126.662L905.769,129.46L903.262,129.655L901.921,127.479L899.503,132.236L901.096,134.344L898.774,135.881L899.16,137.942L896.945,141.231Z",
    "Maryland": "M836.765,280.287L836.391,280.367L835.924,280.466ZM770.221,252.59L831.892,240.521L839.465,267.951L850.452,265.781L849.179,275.813L846.649,276.752L842.275,279.1L838.841,280.853L838.155,277.209L836.446,276.059L838.065,274.069L834.684,271.003L834.182,272.752L830.571,273.138L828.524,269.403L829.638,269.168L828.635,263.95L829.31,261.661L826.356,254.962L827.325,250.464L830.013,249.135L829.567,244.81L827.568,245.741L827.938,247.935L824.124,251.644L823.369,254.452L824.43,260.919L823.396,264.289L825.192,269.215L828.153,272.258L828.431,274.977L830.386,277.344L830.02,279.314L825.371,276.623L819.431,276.077L817.067,273.026L814.292,275.602L812.549,273.178L814.378,269.284L815.153,265.472L816.906,262.722L814.339,260.973L813.222,262.585L810.593,260.971L806.868,260.577L806.222,257.305L804.022,255.85L801.374,255.99L798.245,250.181L795.402,250.729L792.166,249.208L790.929,251.202L788.153,251.598L787.963,254.146L782.708,253.485L779.994,257.37L777.652,257.039L775.006,261.402L772.044,264.057Z",
    "Massachusetts": "M893.839,152.148L895.484,152.085L897.12,155.722L897.268,158.999L895.529,162.531L896.34,165.884L899.941,165.42L902.967,168.298L903.365,171.127L905.303,171.363L906.163,173.811L911.207,174.721L915.79,171.264L915.49,174.549L908.605,179.277L905.834,180.165L903.618,178.596L901.151,179.903L901.481,181.474L898.752,183.23L896.473,179.628L895.844,179.03L893.768,177.924L891.535,173.034L889.179,173.656L884.962,175.015L884.869,174.657L864.745,179.372L857.762,180.821L857.209,180.067L857.563,164.774L870.483,161.946L889.006,157.904L890.193,155.422Z",
    "Michigan": "M697.362,218.007L675.252,221.652L675.078,220.183L655.632,222.361L641.931,223.749L644.976,220.478L646.72,215.227L648.471,211.954L649.551,207.51L649.811,201.295L648.773,194.721L642.696,182.236L643.695,177.196L642.056,171.436L645.102,165.081L645.366,159.997L644.571,157.367L647.047,156.001L647.008,152.308L650.947,150.903L653.601,146.548L654.225,154.616L655.903,154.801L657.521,150.551L656.842,143.724L657.933,141.877L662.078,140.293L660.167,135.71L662.507,131.376L665.956,130.722L670.168,132.801L674.035,132.694L676.3,135.615L679.224,135.491L684.455,137.775L686.144,137.429L689.42,141.809L687.622,144.645L690.116,147.649L691.396,151.311L691.558,159.705L688.63,162.199L688.41,166.562L684.775,168.521L683.339,173.906L684.374,175.756L688.458,177.087L691.061,173.894L693.781,167.706L698.954,164.768L701.883,166.095L703.98,169.024L706.952,178.036L707.875,182.624L710.437,187.974L709.911,196.256L707.425,197.852L706.924,194.939L705.273,196.041L704.164,203.033L701.221,206.048L700.935,211.309L697.388,216.138ZM653.747,132.989L654.298,135.635L652.309,136.346L652.745,132.484ZM622.686,150.354L620.078,148.247L621.257,144.949L617.533,144.781L618.724,141.607L618.557,137.693L615.092,135.289L613.072,132.638L606.274,130.982L604.295,131.871L597.434,129.079L581.221,125.644L579.301,121.972L576.356,120.804L582.191,118.127L584.708,115.279L591.345,113.735L595.466,110.145L597.464,109.877L598.963,107.445L603.464,103.804L605.656,100.824L609.078,98.716L612.613,100.007L607.181,107.294L605.946,109.715L606.359,113.837L609.035,110.443L614.345,110.488L618.636,112.317L622.872,118.058L624.991,118.967L628.768,117.633L629.821,118.881L633.762,119.235L641.477,113.306L645.698,112.371L651.419,111.993L655.078,109.866L657.99,109.409L659.292,115.519L662.413,116.014L665.319,114.685L666.753,115.987L668.546,113.925L672.913,112.769L673.97,120.508L676.407,123.524L679.555,123.984L679.61,121.759L682.56,121.374L684.466,123.464L683.339,125.339L674.703,124.971L670.766,126.446L666.048,124.311L665.07,126.889L665.908,128.881L663.903,128.627L660.67,125.93L655.477,124.679L652.929,124.841L650.797,128.026L646.811,129.193L642.342,129.047L640.687,130.446L640.51,132.921L635.872,135.475L635.839,132.53L633.657,132.129L633.102,135.254L629.54,135.717L628.047,137.208L626.141,142.667L622.288,149.774ZM598.745,87.958L595.16,91.024L593.205,91.531L593.205,89.219L602.273,83.305L600.747,87.074Z",
    "Minnesota": "M551.619,118.998L550.401,118.073L547.361,120.025L547.874,133.195L546.991,134.574L542.634,136.569L539.215,141.456L539.063,144.643L540.869,144.827L542.938,147.571L541.253,151.059L541.727,154.841L540.882,163.085L545.189,166.983L548.506,167.227L550.254,169.614L555.234,171.864L556.147,174.773L560.865,178.371L563.445,179.11L566.757,183.867L566.495,187.448L567.506,189.981L565.035,190.104L483.085,191.906L483.276,151.665L479.682,149.073L476.973,144.769L481.283,140.032L481.64,137.468L481.099,128.548L479.254,126.217L478.027,121.328L478.329,115.358L477.75,114.379L477.375,100.14L474.469,92.581L473.362,88.321L472.978,79.349L473.995,76.335L472.125,69.298L502.93,69.36L502.855,60.908L505.766,61.121L507.726,62.787L509.825,74.239L511.395,75.547L516.299,75.829L516.891,76.907L522.622,77.272L523.332,79.678L528.228,78.95L528.202,77.982L532.009,76.665L535.374,77.046L539.278,78.734L540.422,80.996L542.626,80.675L544.864,85.563L545.77,83.466L549.506,82.345L550.248,84.376L554.749,85.636L554.837,87.575L557.133,89.048L561.623,87.981L564.228,85.663L567.855,84.134L569.35,87.332L571.86,86.462L574.946,87.011L578.455,86.313L582.664,88.843L586.504,88.103L586.256,89.336L581.404,92.451L574.51,95.062L570.085,97.627L563.825,103.681L561.166,107.347L557.01,111.566L550.366,117.22Z",
    "Mississippi": "M626.835,378.164L631.689,377.772L633.766,379.952L633.198,404.748L632.353,447.67L636.533,481.695L634.51,482.839L629.847,482.71L627.845,481.387L623.295,482.708L617.061,485.732L615.169,487.459L612.696,485.292L611.715,481.672L608.246,476.984L609.648,469.515L573.631,471.529L574.914,469.872L573.355,465.52L575.633,465.168L575.556,456.933L577.445,457.334L578.338,452.246L582.617,448.831L584.613,443.555L583.853,436.943L580.942,434.26L580.914,429.701L582.19,428.649L580.325,426.156L581.591,423.009L580.336,418.387L581.862,416.458L578.473,413.67L581.047,406.628L584.179,402.883L582.942,400.479L586.551,396.579L586.369,395.107L589.6,393.69L589.047,389.273L590.885,388.179L591.955,384.285L594.734,382.389L593.523,380.484Z",
    "Missouri": "M560.385,255.44L562.127,255.24L565.745,259.645L567.626,260.297L566.301,263.573L566.703,268.127L569.172,274.932L574.688,280.466L580.655,284.969L582.195,292.307L583.59,293.589L585.446,291.378L589.269,292.141L591.815,293.594L590.285,296.411L590.885,298.479L588.301,304.453L588.419,308.035L593.836,312.285L595.93,315.124L597.807,314.508L603.763,318.94L603.999,322.392L605.735,326.607L604.395,328.185L608.791,334.32L611.609,334.366L610.812,343.588L608.122,342.788L607.348,345.69L606.182,345.77L605.21,345.837L605.685,351.375L602.548,357.28L590.997,358.003L593.581,353.641L596.146,350.761L594.32,346.543L517.507,349.4L514.974,349.439L514.811,338.199L514.196,289.524L510.517,288.462L507.737,283.182L505.564,280.98L509.319,274.395L503.812,272.721L502.123,270.635L497.916,264.734L494.289,257.464L513.362,257.674L536.476,256.927Z",
    "Montana": "M371.074,64.362L369.025,89.474L365.337,131.953L363.633,153.053L363.375,153.031L334.226,150.144L284.653,144.117L253.889,139.531L252.119,151.166L249.653,148.41L247.797,144.133L243.441,148.138L240.124,148.455L239.555,147.116L235.703,147.457L233.747,146.001L229.81,147.309L224.944,146.324L222.947,148.085L221.363,146.553L220.604,139.062L217.408,138.226L215.953,136.087L216.822,131.887L215.247,129.973L213.545,125.044L212.823,120.548L213.586,118.825L211.225,116.134L209.251,118.245L204.881,120.513L202.048,117.587L203.278,115.337L202.638,112.842L205.873,110.987L204.945,107.318L206.376,102.248L210.128,94.529L205.721,93.786L205.841,92.318L202.334,89.255L202.157,86.733L197.768,79.749L197.76,78.132L194.933,76.552L192.626,73.335L193.796,67.37L190.306,60.299L195.048,38.155L261.308,50.816L291.374,55.309Z",
    "Nebraska": "M371.474,198.532L398.988,200.533L449.753,202.704L450.259,203.825L458.544,208.08L460.551,205.904L462.86,206.439L470.529,206.557L479.061,210.828L480.113,214.036L483.067,214.669L485.997,224.781L488.251,226.264L489.332,230.209L488.333,232.92L488.783,236.003L491.693,237.976L491.607,243.649L493.26,248.705L492.351,254.506L494.289,257.464L497.916,264.734L502.123,270.635L390.27,267.567L387.767,267.41L389.205,244.868L355.872,242.39L359.678,197.576Z",
    "Nevada": "M146.552,187.461L194.696,197.624L173.352,308.187L169.925,326.019L167.373,329.425L165.617,329.211L164.021,326.131L157.417,325.707L155.894,338.875L156.507,343.402L156.08,347.595L154.409,350.409L137.328,324.597L127.812,310.289L114.808,290.778L98.672,266.513L82.001,241.442L89.219,213.842L98.869,176.076L119.683,181.422Z",
    "New Hampshire": "M877.225,100.554L881.727,114.315L890.406,142.499L893.562,144.321L893.884,146.527L896.191,147.557L895.484,152.085L893.839,152.148L890.193,155.422L889.006,157.904L870.483,161.946L868.676,160.625L868.037,157.359L869.117,155.817L868.16,152.76L867.036,143.278L868.677,138.295L868.788,133.067L869.688,130.934L868.225,125.607L872.85,122.251L874.412,117.911L872.049,114.728L873.208,110.621L872.479,108.532L873.175,102.394L876.826,102.055Z",
    "New Jersey": "M850.381,203.606L856.548,205.452L856.086,212.281L853.737,214.353L853.085,218.053L857.973,218.684L858.927,221.122L859.71,233.369L856.567,243.358L853.767,246.663L852.004,252.893L849.626,249.632L844.363,248.913L837.35,245.401L836.272,242.223L836.075,241.76L836.723,240.355L837.688,237.361L841.741,234.566L841.637,232.818L845.895,228.064L846.271,225.953L840.576,222.555L839.776,219.825L837.546,219.564L836.803,217.074L838.454,212.66L836.6,210.672L839.679,205.176L840.025,202.569L841.803,200.52Z",
    "New Mexico": "M289.027,326.265L298.721,327.532L343.206,332.042L366.754,333.822L365.927,345.033L365.247,344.983L361,400.854L358.905,423.555L357.232,446.009L290.609,439.793L289.848,441.935L291.721,444.741L260.161,440.948L258.854,451.061L243.063,448.95L260.618,322.589Z",
    "New York": "M844.341,115.659L845.609,120.143L845.75,124.399L848.143,127.983L848.735,132.259L848.02,137.106L850.832,142.744L850.411,144.742L853.768,147.72L856.923,162.903L857.563,164.774L857.209,180.067L857.762,180.821L860.69,197.615L862.277,199.136L858.855,202.494L860.614,204.737L867.998,204.855L869.1,203.188L875.059,201.715L877.901,200.24L881.989,195.515L882.983,197.935L885.831,198.352L880.701,203.097L869.312,211.013L864.264,213.252L860.713,213.848L858.369,215.546L856.086,212.281L856.548,205.452L850.381,203.606L841.803,200.52L840.737,199.119L838.224,199.562L834.459,196.491L834.086,193.163L831.578,191.071L830.368,191.466L827.938,188.849L756.718,202.842L755.755,197.257L755.692,196.892L764.483,188.844L765.524,185.53L768.315,182.897L766.404,179.367L764.958,178.879L762.905,172.999L771.762,168.751L780.046,167.309L783.466,167.274L787.504,168.991L789.575,167.579L796.464,166.322L800.31,163.903L803.901,159.015L806.728,158.296L805.545,152.265L806.269,148.471L802.245,146.81L802.436,143.885L807.882,138.839L809.484,135.105L815.348,126.165L821.523,120.89L832.101,119.082Z",
    "North Carolina": "M756.244,327.205L768.314,325.612L782.06,323.386L845.562,310.747L849.467,319.129L844.406,319.332L843.968,320.561L838.307,323.144L837.696,324.533L833.834,325.712L834.351,327.245L838.929,325.159L839.803,325.985L844.854,323.782L847.02,325.466L850.006,323.94L852.308,329.001L851.797,331.764L849.727,332.462L846.442,338.843L840.585,340.326L840.394,344.274L843.702,347.492L845.898,347.788L843.384,354.743L840.009,354.686L834.462,356.45L830.815,358.569L825.475,364.03L821.638,370.558L820.422,378.075L816.358,377.219L810.09,379.901L785.872,362.449L765.668,365.456L765.55,362.85L762.197,359.515L760.548,361.152L760.082,358.852L737.859,361.107L733.076,362.668L729.537,365.287L723.541,367.611L714.429,369.203L701.793,370.687L701.634,365.359L705.112,364.428L706.022,360.58L710.006,356.71L714.881,355.947L718.818,351.934L723.235,350.085L726.43,344.53L728.65,342.721L729.448,344.853L735.816,339.57L739.138,339.955L740.745,335.471L743.863,333.878L743.838,328.51Z",
    "North Dakota": "M472.125,69.298L473.995,76.335L472.978,79.349L473.362,88.321L474.469,92.581L477.375,100.14L477.75,114.379L478.329,115.358L478.027,121.328L479.254,126.217L481.099,128.548L481.64,137.468L365.337,131.953L369.025,89.474L371.074,64.362Z",
    "Ohio": "M744.512,205.397L749.412,235.213L747.158,236.833L748.738,239.076L749.205,242.502L747.791,248.236L747.549,256.655L742.139,264.893L740.162,266.202L738.083,265.024L736.625,268.497L734.659,268.672L733.168,273.27L734.02,275.765L732.56,278.108L729.534,275.061L727.152,280.905L728.495,284.205L726.612,285.728L726.381,288.758L721.941,289.894L719.161,287.167L717.106,286.831L715.829,283.141L713.496,284.212L711.922,286.671L705.222,285.825L702.71,287.774L698.469,285.208L693.02,285.024L692.494,283.098L688.461,278.865L681.925,279.651L678.504,248.347L675.252,221.652L697.362,218.007L704.158,220.2L706.57,221.735L707.953,219.8L712.052,222.835L714.462,223.613L721.689,219.569L726.277,219.505L730.493,214.621L736.934,209.494L744.512,205.397Z",
    "Oklahoma": "M418.151,336.824L514.811,338.199L514.974,349.439L518.698,374.328L518.341,413.933L511.232,411.567L509.386,408.999L504.628,406.826L503.434,408.807L498.694,408.713L497.681,407.485L493.352,409.716L491.535,408.486L487.601,409.594L483.957,413.035L482.55,411.057L478.724,409.434L474.689,409.402L473.403,406.802L468.708,411.804L467.23,408.95L465.1,409.783L463.514,407.91L459.211,406.113L455.931,409.011L454.582,405.901L451.973,405.476L450.519,402.977L447.026,401.907L444.661,403.943L443.203,402.054L439.58,402.199L435.624,400.105L431.903,400.231L430.747,395.873L424.951,395.418L422.721,396.073L418.795,391.595L417.387,391.783L419.225,348.121L387.021,346.457L365.927,345.033L366.754,333.822L383.643,335.107Z",
    "Oregon": "M74.319,72.151L75.772,72.323L78.301,75.48L78.941,78.464L77.809,85.136L84.873,89.704L92.425,88.141L96.642,88.928L101.103,91.416L101.214,92.967L110.299,92.112L112.001,93.7L116.622,94.279L120.894,93.112L127.989,92.904L134.142,93.942L136.561,93.03L167.854,100.515L169.109,104.676L172.352,107.02L172.95,110.281L168.347,116.035L166.575,119.656L164.222,121.893L164.022,123.983L161.695,126.854L159.926,127.21L155.03,134.276L155.457,137.519L158.359,138.551L159.237,140.634L155.571,147.364L146.552,187.461L119.683,181.422L98.869,176.076L82.369,171.722L61.153,165.456L47.593,161.655L32.08,157.125L30.597,153.964L31.532,146.647L33.277,141.902L32.306,137.48L34.929,134.427L37.808,129.007L41.967,123.596L44.631,118.5L51.849,100.811L52.349,98.272L56.26,90.752L60.171,79.916L61.198,73.584L63.029,70.182L69.912,68.807L71.784,72.039Z",
    "Pennsylvania": "M755.755,197.257L756.718,202.842L827.938,188.849L830.368,191.466L831.578,191.071L834.086,193.163L834.459,196.491L838.224,199.562L840.737,199.119L841.803,200.52L840.025,202.569L839.679,205.176L836.6,210.672L838.454,212.66L836.803,217.074L837.546,219.564L839.776,219.825L840.576,222.555L846.271,225.953L845.895,228.064L841.637,232.818L841.741,234.566L837.688,237.361L834.191,237.495L831.892,240.521L770.221,252.59L752.756,255.558L749.412,235.213L744.512,205.397L744.512,205.397L747.339,203.681L755.692,196.892Z",
    "Rhode Island": "M896.473,179.628L898.752,183.23L895.716,184.55ZM889.179,173.656L891.535,173.034L893.768,177.924L895.844,179.03L893.821,179.185L893.007,182.845L893.676,187.514L887.873,190.18L888.316,187.899L884.962,175.015Z",
    "South Carolina": "M729.537,365.287L733.076,362.668L737.859,361.107L760.082,358.852L760.548,361.152L762.197,359.515L765.55,362.85L765.668,365.456L785.872,362.449L810.09,379.901L807.117,381.578L803.805,385.942L800.945,392.342L801.069,397.075L798.607,401.265L794.49,401.988L794.05,404.814L790.222,408.473L788.338,412.041L784.723,414.024L781.137,418.114L780.992,419.759L777.432,422.212L774.024,427.621L769.436,426.359L768.74,422.609L764.862,417.115L762.084,415.928L761.149,411.215L759.375,407.752L753.922,405.095L750.084,401.436L749.903,398.847L744.436,395.794L741.433,391.996L736.838,389.792L733.293,385.562L732.336,383.082L728.876,378.584L727.043,379.21L720.356,375.263L720.341,372.9L723.541,367.611Z",
    "South Dakota": "M365.337,131.953L481.64,137.468L481.283,140.032L476.973,144.769L479.682,149.073L483.276,151.665L483.085,191.906L480.962,192.387L481.836,194.236L481.282,198.168L483.312,200.393L482.059,201.986L481.501,206.412L480.052,209.727L483.067,214.669L480.113,214.036L479.061,210.828L470.529,206.557L462.86,206.439L460.551,205.904L458.544,208.08L450.259,203.825L449.753,202.704L398.988,200.533L371.474,198.532L359.678,197.576L363.375,153.031L363.633,153.053Z",
    "Tennessee": "M631.538,343.838L630.908,339.8L634.866,340.456L657.091,337.901L676.718,336.706L680.171,336.071L693.398,335.267L708.491,333.619L708.733,333.214L743.838,328.51L743.863,333.878L740.745,335.471L739.138,339.955L735.816,339.57L729.448,344.853L728.65,342.721L726.43,344.53L723.235,350.085L718.818,351.934L714.881,355.947L710.006,356.71L706.022,360.58L705.112,364.428L701.634,365.359L701.793,370.687L678.607,373.516L646.926,376.327L631.689,377.772L626.835,378.164L593.523,380.484L595.271,379.76L596.812,375.709L596.18,370.306L599.297,366.4L599.666,362.912L602.236,361.508L602.548,357.28L605.685,351.375L605.21,345.837L606.182,345.77L607.348,345.69L609.469,345.294Z",
    "Texas": "M387.021,346.457L419.225,348.121L417.387,391.783L418.795,391.595L422.721,396.073L424.951,395.418L430.747,395.873L431.903,400.231L435.624,400.105L439.58,402.199L443.203,402.054L444.661,403.943L447.026,401.907L450.519,402.977L451.973,405.476L454.582,405.901L455.931,409.011L459.211,406.113L463.514,407.91L465.1,409.783L467.23,408.95L468.708,411.804L473.403,406.802L474.689,409.402L478.724,409.434L482.55,411.057L483.957,413.035L487.601,409.594L491.535,408.486L493.352,409.716L497.681,407.485L498.694,408.713L503.434,408.807L504.628,406.826L509.386,408.999L511.232,411.567L518.341,413.933L520.298,415.996L523.922,414.821L526.573,415.754L526.819,427.7L527.294,450.703L531.536,455.529L531.753,460.44L537.178,469.399L537.616,474.176L535.772,479.991L533.939,482.367L534.643,485.416L533.33,487.777L534.909,492.03L530.541,500.094L532.288,502.259L529.104,502.451L519.059,505.695L515.417,504.034L514.731,500.371L512.214,502.973L510.401,502.382L509.478,505.574L511.515,506.898L511.883,511.053L508.297,515.493L502.448,521.041L490.645,526.942L489.462,525.965L485.908,527.426L485.804,526.082L480.957,527.041L478.714,524.219L477.312,524.821L482.449,530.588L478.663,532.399L475.109,531.275L474.535,535.297L470.058,539.401L465.405,547.024L462.349,555.018L460.173,554.376L459.579,557.288L461.888,556.594L460.703,562.415L459.164,562.633L459,565.913L460.84,567.766L461.289,574.454L463.464,576.792L463.958,581.047L465.682,584.829L459.43,587.043L456.926,584.091L452.177,582.911L445.852,583.018L440.514,579.247L436.429,578.772L433.418,575.771L429.252,574.671L426.475,571.787L424.831,565.045L421.352,560.908L421.913,557.52L420.406,553.813L421.068,550.67L418.695,547.047L416.642,546.602L413.399,543.303L412.48,539.239L409.711,535.461L405.632,532.229L403.892,525.429L402.042,523.509L399.725,518.016L399.085,513.58L396.787,510.282L392.775,507.258L391.92,505.253L388.185,503.334L385.488,498.279L377.077,496.677L371.979,496.601L367.752,494.605L366.643,496.863L361.932,497.276L358.104,501.667L355.437,508.955L354.256,508.991L351.261,513.181L348.047,513.06L343.51,509.273L331.935,502.795L329.853,499.667L325.438,496.451L322.736,489.813L323.051,484.061L320.224,479.122L319.868,475.025L318.019,472.263L310.976,467.758L307.536,462.233L304.504,460.072L301.541,455.319L297.03,452.492L294.366,446.27L291.721,444.741L289.848,441.935L290.609,439.793L357.232,446.009L358.905,423.555L361,400.854L365.247,344.983L365.927,345.033Z",
    "Utah": "M225.165,203.167L243.355,206.056L239.798,228.338L272.861,233.261L266.989,275.076L264.273,294.032L264.218,296.519L260.618,322.589L235.163,318.75L173.352,308.187L194.696,197.624Z",
    "Vermont": "M872.479,108.532L873.208,110.621L872.049,114.728L874.412,117.911L872.85,122.251L868.225,125.607L869.688,130.934L868.788,133.067L868.677,138.295L867.036,143.278L868.16,152.76L869.117,155.817L868.037,157.359L868.676,160.625L870.483,161.946L857.563,164.774L856.923,162.903L853.768,147.72L850.411,144.742L850.832,142.744L848.02,137.106L848.735,132.259L848.143,127.983L845.75,124.399L845.609,120.143L844.341,115.659L860.246,111.955Z",
    "Virginia": "M846.649,276.752L849.179,275.813L847.767,280.048L845.722,281.889L845.425,287.266L843.63,296.252L841.066,298.572L839.477,295.753L839.537,288.665L842.275,279.1ZM-102.4,-4.64L1062.4,-4.64L1062.4,604.64L-102.4,604.64ZM836.391,280.367L836.765,280.287L835.924,280.466ZM-64,453.6L206.08,453.6L206.08,599.52L-64,599.52ZM206.08,512.48L332.8,512.48L332.8,599.52L206.08,599.52ZM790.191,254.86L800.355,260.592L801.374,255.99L804.022,255.85L806.222,257.305L806.868,260.577L810.593,260.971L813.222,262.585L815.153,265.472L814.378,269.284L812.53,270.662L811.857,274.072L813.06,276.226L817.479,274.582L819.029,277.923L825.299,278.152L827.556,280.586L832.959,282.611L832.099,289.231L835.091,293.652L833.217,296.444L833.516,299.285L836.046,300.521L834.237,303.678L829.909,300.919L829.307,302.304L832.96,304.197L841.618,303.002L845.562,310.747L782.06,323.386L768.314,325.612L756.244,327.205L743.838,328.51L708.733,333.214L717.751,328.772L718.57,326.166L721.814,324.846L721.733,322.862L724.116,321.032L723.875,319.319L729.806,315.103L735.594,308.136L735.582,310.011L738.528,313.444L741.762,314.83L743.937,314.374L746.821,310.929L749.564,312.877L753.848,310.948L761.045,305.402L761.93,306.634L764.643,304.18L764.067,300.143L765.365,296.293L768.013,292.462L768.645,288.218L771.308,283.498L771.73,278.158L775.157,280.695L778.132,281.173L779.583,279.033L781.794,270.476L784.284,272.033L790.499,261.589Z",
    "Washington": "M180.758,35.017L174.586,61.694L168.144,90.694L167.495,92.424L168.624,96.682L167.854,100.515L136.561,93.03L134.142,93.942L127.989,92.904L120.894,93.112L116.622,94.279L112.001,93.7L110.299,92.112L101.214,92.967L101.103,91.416L96.642,88.928L92.425,88.141L84.873,89.704L77.809,85.136L78.941,78.464L78.301,75.48L75.772,72.323L74.319,72.151L71.784,72.039L69.912,68.807L67.477,67.187L64.898,67.813L62.626,65.083L64.08,62.336L66.48,61.407L64.841,56.067L66.358,43.924L65.625,42.045L66.538,33.424L64.661,29.411L65.425,22.787L68.29,19.108L70.585,21.974L75.671,26.444L79.726,27.541L83.44,29.788L87.541,29.861L88.814,32.256L92.252,33.131L93.285,38.482L95.135,38.634L93.648,45.031L93.051,51.057L94.662,50.883L94.62,45.561L96.385,40.885L100.164,36.659L98.823,34.135L99.661,30.591L99.338,26.341L100.845,23.749L100.833,20.222L98.693,19.104L97.283,16.054L98.502,13.89ZM94.819,28.698L96.981,28.312L95.426,32.532L93.603,30.239ZM92.099,21.601L94.482,19.271L95.623,23.257L94.152,25.982L91.082,24.206Z",
    "West Virginia": "M749.412,235.213L752.756,255.558L770.221,252.59L772.044,264.057L775.006,261.402L777.652,257.039L779.994,257.37L782.708,253.485L787.963,254.146L788.153,251.598L790.929,251.202L792.166,249.208L795.402,250.729L798.245,250.181L801.374,255.99L800.355,260.592L790.191,254.86L790.499,261.589L784.284,272.033L781.794,270.476L779.583,279.033L778.132,281.173L775.157,280.695L771.73,278.158L771.308,283.498L768.645,288.218L768.013,292.462L765.365,296.293L764.067,300.143L764.643,304.18L761.93,306.634L761.045,305.402L753.848,310.948L749.564,312.877L746.821,310.929L743.937,314.374L741.762,314.83L738.528,313.444L735.582,310.011L735.594,308.136L733.259,308.107L729.56,306.025L728.334,303.581L725.113,300.674L722.425,296.689L721.941,289.894L726.381,288.758L726.612,285.728L728.495,284.205L727.152,280.905L729.534,275.061L732.56,278.108L734.02,275.765L733.168,273.27L734.659,268.672L736.625,268.497L738.083,265.024L740.162,266.202L742.139,264.893L747.549,256.655L747.791,248.236L749.205,242.502L748.738,239.076L747.158,236.833Z",
    "Wisconsin": "M576.356,120.804L579.301,121.972L581.221,125.644L597.434,129.079L604.295,131.871L606.274,130.982L613.072,132.638L615.092,135.289L618.557,137.693L618.724,141.607L617.533,144.781L621.257,144.949L620.078,148.247L622.686,150.354L622.322,153.092L619.35,153.843L617.199,159.194L616.545,162.817L618.417,163.275L620.643,160.745L622.85,156.121L625.973,154.118L628.039,148.27L631.185,146.746L631.204,149.697L629.22,152.59L625.665,162.271L624.909,167.512L625.324,171.172L623.776,172.541L622.73,177.687L623.63,181.925L622.469,184.864L621.13,192.012L622.044,197.49L624.421,202.226L624.36,208.781L608.277,210.087L578.023,211.721L576.703,208.958L570.762,206.689L569.331,203.189L568.541,198.178L570.352,195.376L567.85,193.288L567.506,189.981L566.495,187.448L566.757,183.867L563.445,179.11L560.865,178.371L556.147,174.773L555.234,171.864L550.254,169.614L548.506,167.227L545.189,166.983L540.882,163.085L541.727,154.841L541.253,151.059L542.938,147.571L540.869,144.827L539.063,144.643L539.215,141.456L542.634,136.569L546.991,134.574L547.874,133.195L547.361,120.025L550.401,118.073L551.619,118.998L555.079,119.093L565.568,114.807L569.399,112.53L570.826,114.038L568.887,117.073L574.145,120.566Z",
    "Wyoming": "M284.653,144.117L334.226,150.144L363.375,153.031L359.678,197.576L355.872,242.39L327.96,239.895L291.58,235.61L272.861,233.261L239.798,228.338L243.355,206.056L252.119,151.166L253.889,139.531Z"
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