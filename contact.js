/* ================= CONTACT FORM ================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();


        // Empty fields check

        if (
            name === "" ||
            email === "" ||
            subject === "" ||
            message === ""
        ) {

            alert("Please fill in all fields.");

            return;
        }


        // Email validation

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            alert("Please enter a valid email address.");

            return;
        }


        // Message length

        if (message.length < 10) {

            alert("Please write a little more detail in your message.");

            return;
        }


        // Success

        alert(
            "Thank you, " +
            name +
            "! Your message has been sent successfully. 😊"
        );


        // Clear form

        contactForm.reset();

    });

}


/* ================= SEARCH ================= */

const searchForm = document.getElementById("searchForm");

if (searchForm) {

    searchForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const searchInput =
            document.getElementById("searchInput");

        const searchValue =
            searchInput.value.trim().toLowerCase();


        if (searchValue === "") {

            alert("Please enter something to search.");

            return;
        }


        /*
            Basic website search navigation
        */

        if (
            searchValue.includes("men") ||
            searchValue.includes("male")
        ) {

            window.location.href = "men.html";

        }

        else if (
            searchValue.includes("women") ||
            searchValue.includes("woman") ||
            searchValue.includes("heel")
        ) {

            window.location.href = "women.html";

        }

        else if (
            searchValue.includes("shop") ||
            searchValue.includes("shoe") ||
            searchValue.includes("sneaker")
        ) {

            window.location.href = "shop.html";

        }

        else {

            alert(
                "Sorry, we couldn't find \"" +
                searchValue +
                "\"."
            );

        }

    });

}


/* ================= NEWSLETTER ================= */

const newsletterForm =
    document.getElementById("newsletterForm");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email =
            document.getElementById("newsletterEmail")
            .value
            .trim();


        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            alert("Please enter a valid email address.");

            return;
        }


        alert(
            "Thank you for subscribing! 🎉"
        );


        newsletterForm.reset();

    });

}