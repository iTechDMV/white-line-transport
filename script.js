/* =========================================
   WHITE LINE TRANSPORT
   JAVASCRIPT
========================================= */


document.addEventListener(
    "DOMContentLoaded",
    function () {

        /* =====================================
           MOBILE NAVIGATION
        ===================================== */

        const menuButton = document.getElementById("mobileMenuButton");
        const nav = document.getElementById("mainNav");

        if (menuButton && nav) {
            menuButton.addEventListener("click", function () {
                nav.classList.toggle("active");
            });

            const navLinks = nav.querySelectorAll("a");
            navLinks.forEach(function (link) {
                link.addEventListener("click", function () {
                    nav.classList.remove("active");
                });
            });
        }

        /* =====================================
           COPYRIGHT YEAR
        ===================================== */

        const year = document.getElementById("year");
        if (year) {
            year.textContent = new Date().getFullYear();
        }

        /* =====================================
           QUOTE FORM
        ===================================== */

        const quoteForm = document.getElementById("quoteForm");
        const formMessage = document.getElementById("formMessage");

        if (quoteForm) {
            quoteForm.addEventListener("submit", function (event) {
                event.preventDefault();

                const name = document.getElementById("name").value.trim();
                const company = document.getElementById("company").value.trim();
                const email = document.getElementById("email").value.trim();
                const phone = document.getElementById("phone").value.trim();
                const freight = document.getElementById("freight").value.trim();

                if (!name || !email) {
                    formMessage.textContent = "Please enter your name and email.";
                    return;
                }

                const subject = encodeURIComponent("Freight Quote Request - " + name);
                const body = encodeURIComponent(
                    "New Freight Quote Request\n\n" +
                    "Name: " + name + "\n" +
                    "Company: " + company + "\n" +
                    "Email: " + email + "\n" +
                    "Phone: " + phone + "\n\n" +
                    "Freight Details:\n" + freight
                );

                const mailto =
                    "mailto:justin@whitelinetransport.it.com" +
                    "?subject=" + subject +
                    "&body=" + body;

                window.location.href = mailto;
                formMessage.textContent =
                    "Your email application should open with the quote request.";
            });
        }

        /* =====================================
           HEADER SCROLL EFFECT
        ===================================== */

        const header = document.querySelector(".site-header");

        window.addEventListener("scroll", function () {
            if (window.scrollY > 50) {
                header.style.background = "rgba(5,5,5,.99)";
            } else {
                header.style.background = "rgba(8,8,8,.96)";
            }
        });

        /* =====================================
           GOVERNMENT / VENDOR IDENTIFIERS
        ===================================== */

        const credentials = document.querySelector(
            ".contracting-section .credentials"
        );

        if (credentials) {
            const vendorCredentials = [
                {
                    label: "VLIN",
                    value: "VA10130937",
                    description: "Virginia vendor identification"
                },
                {
                    label: "VENDOR CUSTOMER CODE",
                    value: "SUP353430",
                    description: "Vendor customer code"
                },
                {
                    label: "EIN",
                    value: "414389923",
                    description: "Employer Identification Number"
                }
            ];

            vendorCredentials.forEach(function (item) {
                const card = document.createElement("div");
                card.className = "credential vendor-credential";
                card.innerHTML =
                    "<span>" + item.label + "</span>" +
                    "<strong>" + item.value + "</strong>" +
                    "<p>" + item.description + "</p>";
                credentials.appendChild(card);
            });
        }

        /* =====================================
           FOOTER VENDOR IDENTIFIERS
        ===================================== */

        const identifierColumn = document.querySelector(
            "footer .footer-links:last-child"
        );

        if (identifierColumn) {
            const vendorHeading = document.createElement("h4");
            vendorHeading.textContent = "VENDOR REGISTRATION";
            identifierColumn.appendChild(vendorHeading);

            const vendorIdentifiers = [
                "VLIN: VA10130937",
                "Vendor Customer Code: SUP353430",
                "EIN: 414389923"
            ];

            vendorIdentifiers.forEach(function (identifier) {
                const item = document.createElement("span");
                item.textContent = identifier;
                identifierColumn.appendChild(item);
            });
        }

    }
);
