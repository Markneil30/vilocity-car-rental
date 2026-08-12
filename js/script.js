document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       NAVBAR SCROLL EFFECT
    ========================= */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {
            navbar.classList.add("navbar-scrolled");
        } else {
            navbar.classList.remove("navbar-scrolled");
        }

    });


    /* =========================
       MOUSE GLOW EFFECT
    ========================= */

    const hero = document.querySelector(".hero");
    const glow = document.querySelector(".hero-glow");

    if (hero && glow) {

        hero.addEventListener("mousemove", function (e) {

            const x = e.clientX;
            const y = e.clientY;

            glow.style.left = `${x - 250}px`;
            glow.style.top = `${y - 250}px`;

        });

    }


    /* =========================
       DRIVER OPTION
    ========================= */

    const selfDrive = document.getElementById("selfDrive");
    const withDriver = document.getElementById("withDriver");

    if (selfDrive && withDriver) {

        selfDrive.addEventListener("change", function () {

            if (this.checked) {
                console.log("Self Drive selected");
            }

        });


        withDriver.addEventListener("change", function () {

            if (this.checked) {
                console.log("With Driver selected");
            }

        });

    }


    /* =========================
       BOOKING BUTTON
    ========================= */

    const searchButton = document.querySelector(".search-btn");

    if (searchButton) {

        searchButton.addEventListener("click", function () {

            const location =
                document.querySelector(".form-select").value;

            const pickup =
                document.querySelectorAll(".form-control")[0].value;

            const returnDate =
                document.querySelectorAll(".form-control")[1].value;

            let driveOption = "Self Drive";

            if (withDriver.checked) {
                driveOption = "With Driver";
            }


            /* Validation */

            if (
                location === "Choose location" ||
                pickup === "" ||
                returnDate === ""
            ) {

                alert("Please complete your booking details.");

                return;
            }


            /* Success message */

            alert(
                "Booking Search\n\n" +
                "Location: " + location + "\n" +
                "Pick-up: " + pickup + "\n" +
                "Return: " + returnDate + "\n" +
                "Driving Option: " + driveOption
            );

        });

    }


    /* =========================
       HERO CAR PARALLAX
    ========================= */

    const heroCar = document.querySelector(".hero-car img");

    if (heroCar) {

        hero.addEventListener("mousemove", function (e) {

            const rect = hero.getBoundingClientRect();

            const x =
                (e.clientX - rect.left) / rect.width - 0.5;

            const y =
                (e.clientY - rect.top) / rect.height - 0.5;

            heroCar.style.transform =
                `rotate(${x * 3}deg) translate(${x * 10}px, ${y * 10}px)`;

        });


        hero.addEventListener("mouseleave", function () {

            heroCar.style.transform =
                "rotate(-2deg) translate(0, 0)";

        });

    }


    /* =========================
       ANIMATED COUNTERS
    ========================= */

    const counters = document.querySelectorAll(".hero-stats h3");

    const counterObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (!entry.isIntersecting) {
                    return;
                }

                const counter = entry.target;

                const text = counter.innerText;

                let number =
                    parseInt(text.replace(/\D/g, ""));

                let suffix =
                    text.replace(/[0-9]/g, "");

                let current = 0;

                const duration = 1200;

                const increment =
                    number / (duration / 16);

                function updateCounter() {

                    current += increment;

                    if (current < number) {

                        counter.innerText =
                            Math.floor(current) + suffix;

                        requestAnimationFrame(updateCounter);

                    } else {

                        counter.innerText =
                            number + suffix;

                    }

                }

                updateCounter();

                observer.unobserve(counter);

            });

        },
        {
            threshold: 0.8
        }
    );


    counters.forEach(function (counter) {
        counterObserver.observe(counter);
    });


    /* =========================
       SMOOTH SCROLL
    ========================= */

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (e) {

            const targetId =
                this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    /* =========================
       ACTIVE NAVIGATION
    ========================= */

    const navLinks =
        document.querySelectorAll(".nav-link");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");

        });

    });

});
