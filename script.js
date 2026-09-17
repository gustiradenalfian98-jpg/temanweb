/* =========================================================
   TEMANWEB — JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {

            navMenu.classList.toggle("active");

            if (navMenu.classList.contains("active")) {
                menuToggle.innerHTML = "✕";
                menuToggle.setAttribute(
                    "aria-label",
                    "Tutup menu"
                );
            } else {
                menuToggle.innerHTML = "☰";
                menuToggle.setAttribute(
                    "aria-label",
                    "Buka menu"
                );
            }

        });


        /* Close menu when clicking navigation */

        const navLinks = navMenu.querySelectorAll("a");

        navLinks.forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("active");

                menuToggle.innerHTML = "☰";

                menuToggle.setAttribute(
                    "aria-label",
                    "Buka menu"
                );

            });

        });

    }


    /* =====================================================
       NAVBAR SCROLL EFFECT
    ===================================================== */

    const navbar = document.querySelector(".navbar");

    function updateNavbar() {

        if (!navbar) return;

        if (window.scrollY > 30) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }

    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );

    updateNavbar();


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    const internalLinks =
        document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements = document.querySelectorAll(
        ".price-card, " +
        ".service-card, " +
        ".process-card, " +
        ".about-content, " +
        ".about-visual, " +
        ".custom-content, " +
        ".idea-visual, " +
        ".section-header, " +
        ".cta-box"
    );


    revealElements.forEach(element => {
        element.classList.add("reveal");
    });


    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "active"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });


    /* =====================================================
       STAGGER ANIMATION
    ===================================================== */

    const grids = document.querySelectorAll(
        ".pricing-container, " +
        ".services-grid, " +
        ".process-grid"
    );


    grids.forEach(grid => {

        const cards =
            grid.children;

        Array.from(cards).forEach(
            (card, index) => {

                card.style.transitionDelay =
                    `${index * 0.08}s`;

            }
        );

    });


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );

    const navigationLinks =
        document.querySelectorAll(
            ".nav-menu a[href^='#']"
        );


    function updateActiveNavigation() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            if (
                window.scrollY >=
                sectionTop
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navigationLinks.forEach(link => {

            link.classList.remove("active");

            const href =
                link.getAttribute("href");

            if (
                href ===
                `#${currentSection}`
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        { passive: true }
    );


    updateActiveNavigation();


    /* =====================================================
       PRICE CARD INTERACTION
    ===================================================== */

    const priceButtons =
        document.querySelectorAll(
            ".price-button"
        );


    priceButtons.forEach(button => {

        button.addEventListener(
            "mouseenter",
            () => {

                button.style.transform =
                    "translateY(-2px)";

            }
        );


        button.addEventListener(
            "mouseleave",
            () => {

                button.style.transform =
                    "translateY(0)";

            }
        );

    });


    /* =====================================================
       PREVENT EMPTY HASH
    ===================================================== */

    document.querySelectorAll(
        'a[href="#"]'
    ).forEach(link => {

        link.addEventListener(
            "click",
            event => event.preventDefault()
        );

    });


    /* =====================================================
       YEAR AUTO UPDATE
    ===================================================== */

    const footerYear =
        document.querySelector(
            ".footer-bottom p"
        );


    if (footerYear) {

        footerYear.innerHTML =
            footerYear.innerHTML.replace(
                /\b20\d{2}\b/,
                new Date().getFullYear()
            );

    }


    /* =====================================================
       CONSOLE BRANDING
    ===================================================== */

    console.log(
        "%cTemanWeb",
        "font-size:24px;font-weight:800;"
    );

    console.log(
        "%cWebsite Keren, Ide Jadi Nyata.",
        "font-size:13px;"
    );

});