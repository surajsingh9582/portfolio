// =========================
// LOADER
// =========================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";

            setTimeout(() => {
                loader.style.display = "none";
            }, 500);

        }, 1000);
    }
});


// =========================
// TYPING EFFECT
// =========================

const texts = [
    "Java Backend Developer",
    "Spring Boot Developer",
    "Microservices Engineer",
    "Software Engineer",
    "REST API Developer"
];

let textIndex = 0;
let charIndex = 0;

const typingElement =
document.getElementById("typing-text");

function type() {

    if (!typingElement) return;

    if (charIndex < texts[textIndex].length) {

        typingElement.textContent +=
            texts[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(type, 100);

    } else {

        setTimeout(erase, 1500);
    }
}

function erase() {

    if (!typingElement) return;

    if (typingElement.textContent.length > 0) {

        typingElement.textContent =
            typingElement.textContent.slice(0, -1);

        setTimeout(erase, 50);

    } else {

        textIndex++;

        if (textIndex >= texts.length) {
            textIndex = 0;
        }

        charIndex = 0;

        setTimeout(type, 300);
    }
}

document.addEventListener(
    "DOMContentLoaded",
    () => {
        type();
    }
);


// =========================
// DARK MODE
// =========================

const themeBtn =
document.getElementById("themeToggle");

if (themeBtn) {

    themeBtn.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "light"
            );

            const icon =
                themeBtn.querySelector("i");

            if (
                document.body.classList.contains(
                    "light"
                )
            ) {

                icon.classList.remove(
                    "fa-moon"
                );

                icon.classList.add(
                    "fa-sun"
                );

                localStorage.setItem(
                    "theme",
                    "light"
                );

            } else {

                icon.classList.remove(
                    "fa-sun"
                );

                icon.classList.add(
                    "fa-moon"
                );

                localStorage.setItem(
                    "theme",
                    "dark"
                );
            }
        }
    );
}

if (
    localStorage.getItem("theme")
    === "light"
) {

    document.body.classList.add("light");

    const icon =
        document.querySelector(
            "#themeToggle i"
        );

    if (icon) {

        icon.classList.remove(
            "fa-moon"
        );

        icon.classList.add(
            "fa-sun"
        );
    }
}


// =========================
// SCROLL REVEAL
// =========================

const revealElements =
document.querySelectorAll(
`
.section,
.project-card,
.achievement-card,
.education-card,
.contact-card,
.timeline-item,
.skill-card
`
);

const observer =
new IntersectionObserver(
(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add(
                "active"
            );
        }
    });

},
{
    threshold: 0.15
}
);

revealElements.forEach(
    element => observer.observe(element)
);


// =========================
// ACTIVE NAVIGATION
// =========================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(
    ".nav-links a"
);

window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 200;

            if (
                window.scrollY >=
                sectionTop
            ) {

                current =
                    section.getAttribute(
                        "id"
                    );
            }
        });

        navLinks.forEach(link => {

            link.classList.remove(
                "active"
            );

            if (
                link.getAttribute(
                    "href"
                )
                === `#${current}`
            ) {

                link.classList.add(
                    "active"
                );
            }
        });
    }
);


// =========================
// SMOOTH SCROLL
// =========================

document
.querySelectorAll(
    'a[href^="#"]'
)
.forEach(anchor => {

    anchor.addEventListener(
        "click",
        function (e) {

            e.preventDefault();

            const target =
                document.querySelector(
                    this.getAttribute(
                        "href"
                    )
                );

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    );
});


// =========================
// NAVBAR EFFECT
// =========================

window.addEventListener(
    "scroll",
    () => {

        const navbar =
            document.querySelector(
                ".navbar"
            );

        if (!navbar) return;

        if (
            window.scrollY > 50
        ) {

            navbar.style.background =
                "rgba(15,23,42,.95)";

            navbar.style.boxShadow =
                "0 10px 30px rgba(0,0,0,.25)";

        } else {

            navbar.style.background =
                "rgba(15,23,42,.7)";

            navbar.style.boxShadow =
                "none";
        }
    }
);


// =========================
// PROFILE IMAGE EFFECT
// =========================

const profileImage =
document.querySelector(
    ".image-wrapper"
);

if (profileImage) {

    profileImage.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                profileImage.getBoundingClientRect();

            const x =
                event.clientX -
                rect.left;

            const y =
                event.clientY -
                rect.top;

            const rotateX =
                ((y / rect.height) - 0.5) * -10;

            const rotateY =
                ((x / rect.width) - 0.5) * 10;

            profileImage.style.transform =
                `rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)`;
        }
    );

    profileImage.addEventListener(
        "mouseleave",
        () => {

            profileImage.style.transform =
                "rotateX(0deg) rotateY(0deg)";
        }
    );
}


// =========================
// FOOTER YEAR
// =========================

const year =
document.getElementById("year");

if (year) {

    year.textContent =
        new Date().getFullYear();
}