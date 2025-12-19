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
