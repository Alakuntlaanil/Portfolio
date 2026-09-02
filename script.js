// ========================================
// MOBILE MENU
// ========================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            menuBtn.innerHTML = "✕";
            menuBtn.setAttribute("aria-label", "Close menu");
        } else {
            menuBtn.innerHTML = "☰";
            menuBtn.setAttribute("aria-label", "Open menu");
        }

    });

}


// ========================================
// CLOSE MOBILE MENU
// ========================================

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((link) => {

    link.addEventListener("click", () => {

        if (navLinks) {
            navLinks.classList.remove("active");
        }

        if (menuBtn) {
            menuBtn.innerHTML = "☰";
            menuBtn.setAttribute("aria-label", "Open menu");
        }

    });

});


// ========================================
// HEADER SCROLL EFFECT
// ========================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(8, 11, 18, 0.97)";

        header.style.boxShadow =
            "0 10px 30px rgba(0, 0, 0, 0.15)";

    } else {

        header.style.background =
            "rgba(8, 11, 18, 0.88)";

        header.style.boxShadow = "none";

    }

});


// ========================================
// ACTIVE NAVIGATION
// ========================================

const sections = document.querySelectorAll("section");
const navigationLinks =
    document.querySelectorAll(".nav-links a");

function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionBottom =
            sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveNavigation
);

updateActiveNavigation();


// ========================================
// SCROLL REVEAL ANIMATION
// ========================================

const revealElements = document.querySelectorAll(
    ".section-container, .skill-card, .experience-card, .education-card, .contact-card"
);


if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


    revealElements.forEach((element) => {

        element.classList.add("reveal");

        observer.observe(element);

    });

} else {

    revealElements.forEach((element) => {

        element.classList.add("show");

    });

}


// ========================================
// RESUME FILE CHECK
// ========================================

const resumeLinks =
    document.querySelectorAll(
        'a[href="resume.pdf"]'
    );

resumeLinks.forEach((link) => {

    link.addEventListener("click", () => {

        console.log(
            "Opening resume.pdf"
        );

    });

});


// ========================================
// CURRENT YEAR
// ========================================

const footerText =
    document.querySelector(".footer p");

if (footerText) {

    const year =
        new Date().getFullYear();

    footerText.textContent =
        `© ${year} Anil Alakuntla. All Rights Reserved.`;

}


// ========================================
// PAGE LOADED
// ========================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});