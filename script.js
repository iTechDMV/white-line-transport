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

            const existingVendorCards = credentials.querySelectorAll(
                ".vendor-credential"
            );

            if (!existingVendorCards.length) {
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

            /* Add a clear procurement-oriented heading above all identifiers. */
            const contractingSection = document.querySelector(
                ".contracting-section .container"
            );

            if (
                contractingSection &&
                credentials &&
                !contractingSection.querySelector(".credential-heading")
            ) {
                const heading = document.createElement("div");
                heading.className = "credential-heading";
                heading.innerHTML =
                    "<span>PROCUREMENT INFORMATION</span>" +
                    "<h3>GOVERNMENT &amp; VENDOR IDENTIFIERS</h3>" +
                    "<p>Key business, transportation, and vendor registration information for procurement officers, prime contractors, brokers, and commercial partners.</p>";
                contractingSection.insertBefore(heading, credentials);
            }
        }

        /* =====================================
           FOOTER VENDOR IDENTIFIERS
        ===================================== */

        const identifierColumn = document.querySelector(
            "footer .footer-links:last-child"
        );

        if (identifierColumn && !identifierColumn.querySelector(".vendor-registration-added")) {
            const vendorHeading = document.createElement("h4");
            vendorHeading.className = "vendor-registration-added";
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

        /* =====================================
           PROCUREMENT SECTION DESIGN OVERRIDES
        ===================================== */

        const style = document.createElement("style");
        style.textContent = `
            .credential-heading {
                margin: 0 0 28px;
                padding: 24px 28px;
                border-left: 4px solid var(--accent);
                background: #111;
            }

            .credential-heading span {
                display: block;
                color: var(--accent);
                font-size: 10px;
                font-weight: 800;
                letter-spacing: 2px;
                text-transform: uppercase;
                margin-bottom: 7px;
            }

            .credential-heading h3 {
                color: #fff;
                font-family: var(--font-heading);
                font-size: clamp(24px, 3vw, 34px);
                line-height: 1.05;
                letter-spacing: .4px;
            }

            .credential-heading p {
                max-width: 760px;
                margin-top: 9px;
                color: #888;
                font-size: 13px;
                line-height: 1.7;
            }

            .contracting-section .credentials {
                grid-template-columns: repeat(4, 1fr);
                background: #303030;
                border: 1px solid #303030;
            }

            .contracting-section .credential {
                min-height: 175px;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
            }

            .contracting-section .vendor-credential {
                background: #101010;
            }

            .contracting-section .vendor-credential strong {
                font-size: 25px;
            }

            .contracting-section .vendor-credential:nth-child(6) strong {
                font-size: 22px;
                letter-spacing: .8px;
            }

            .contracting-section .vendor-credential:nth-child(7) strong {
                font-size: 24px;
                letter-spacing: 1px;
            }

            @media (max-width: 900px) {
                .contracting-section .credentials {
                    grid-template-columns: repeat(2, 1fr);
                }
            }

            @media (max-width: 560px) {
                .contracting-section .credentials {
                    grid-template-columns: 1fr;
                }

                .credential-heading {
                    padding: 20px;
                }
            }
        `;
        document.head.appendChild(style);

    }
);
