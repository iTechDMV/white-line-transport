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

        const menuButton =
            document.getElementById(
                "mobileMenuButton"
            );

        const nav =
            document.getElementById(
                "mainNav"
            );


        if (menuButton && nav) {

            menuButton.addEventListener(
                "click",
                function () {

                    nav.classList.toggle(
                        "active"
                    );

                }
            );


            const navLinks =
                nav.querySelectorAll("a");


            navLinks.forEach(
                function (link) {

                    link.addEventListener(
                        "click",
                        function () {

                            nav.classList.remove(
                                "active"
                            );

                        }
                    );

                }
            );

        }


        /* =====================================
           COPYRIGHT YEAR
        ===================================== */

        const year =
            document.getElementById("year");


        if (year) {

            year.textContent =
                new Date().getFullYear();

        }


        /* =====================================
           QUOTE FORM
        ===================================== */

        const quoteForm =
            document.getElementById(
                "quoteForm"
            );

        const formMessage =
            document.getElementById(
                "formMessage"
            );


        if (quoteForm) {

            quoteForm.addEventListener(
                "submit",
                function (event) {

                    event.preventDefault();


                    const name =
                        document.getElementById(
                            "name"
                        ).value.trim();


                    const company =
                        document.getElementById(
                            "company"
                        ).value.trim();


                    const email =
                        document.getElementById(
                            "email"
                        ).value.trim();


                    const phone =
                        document.getElementById(
                            "phone"
                        ).value.trim();


                    const freight =
                        document.getElementById(
                            "freight"
                        ).value.trim();


                    if (!name || !email) {

                        formMessage.textContent =
                            "Please enter your name and email.";

                        return;

                    }


                    /*
                       This creates an email draft.

                       For a production website, replace
                       this with Formspree, Netlify Forms,
                       your own backend, or another form
                       processing service.
                    */


                    const subject =
                        encodeURIComponent(
                            "Freight Quote Request - " +
                            name
                        );


                    const body =
                        encodeURIComponent(

                            "New Freight Quote Request\n\n" +

                            "Name: " +
                            name +
                            "\n" +

                            "Company: " +
                            company +
                            "\n" +

                            "Email: " +
                            email +
                            "\n" +

                            "Phone: " +
                            phone +
                            "\n\n" +

                            "Freight Details:\n" +
                            freight

                        );


                    const mailto =
                        "mailto:justin@whitelinetransport.it.com" +
                        "?subject=" +
                        subject +
                        "&body=" +
                        body;


                    window.location.href =
                        mailto;


                    formMessage.textContent =
                        "Your email application should open with the quote request.";

                }
            );

        }


        /* =====================================
           HEADER SCROLL EFFECT
        ===================================== */

        const header =
            document.querySelector(
                ".site-header"
            );


        window.addEventListener(
            "scroll",
            function () {

                if (
                    window.scrollY > 50
                ) {

                    header.style.background =
                        "rgba(5,5,5,.99)";

                } else {

                    header.style.background =
                        "rgba(8,8,8,.96)";

                }

            }
        );


    }
);
