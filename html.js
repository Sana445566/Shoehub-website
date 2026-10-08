document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       CART
    ========================= */

    let cartCount = 0;

    const cartNumber = document.getElementById("cartCount");
    const addCartButtons = document.querySelectorAll(".add-cart");

    addCartButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            cartCount++;

            cartNumber.textContent = cartCount;

            const oldText = button.innerHTML;

            button.innerHTML =
                '<i class="fa-solid fa-check"></i> Added';

            button.style.backgroundColor = "#198754";

            setTimeout(function () {

                button.innerHTML = oldText;
                button.style.backgroundColor = "";

            }, 1200);

        });

    });


    /* =========================
       HEART / WISHLIST
    ========================= */

    const heartButtons = document.querySelectorAll(".heart-btn");

    heartButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const icon = button.querySelector("i");

            button.classList.toggle("liked");

            if (button.classList.contains("liked")) {

                icon.classList.remove("fa-regular");
                icon.classList.add("fa-solid");

            } else {

                icon.classList.remove("fa-solid");
                icon.classList.add("fa-regular");

            }

        });

    });


    /* =========================
       SEARCH
    ========================= */

    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");
    const productCards = document.querySelectorAll(".product-card");

    searchForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const searchValue =
            searchInput.value.trim().toLowerCase();

        if (searchValue === "") {

            productCards.forEach(function (card) {
                card.style.display = "";
            });

            return;
        }

        let found = false;

        productCards.forEach(function (card) {

            const productName =
                card.dataset.name.toLowerCase();

            if (productName.includes(searchValue)) {

                card.style.display = "";
                found = true;

            } else {

                card.style.display = "none";

            }

        });

        if (!found) {

            alert("No shoes found for: " + searchValue);

        }

    });


    /* =========================
       CART BUTTON
    ========================= */

    const cartButton =
        document.getElementById("cartButton");

    cartButton.addEventListener("click", function () {

        if (cartCount === 0) {

            alert("Your cart is empty.");

        } else {

            alert(
                "You have " +
                cartCount +
                " item(s) in your cart."
            );

        }

    });


    /* =========================
       NEWSLETTER
    ========================= */

    const newsletterForm =
        document.getElementById("newsletterForm");

    const emailInput =
        document.getElementById("emailInput");

    const newsletterMessage =
        document.getElementById("newsletterMessage");


    newsletterForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email = emailInput.value.trim();

        if (email === "") {

            newsletterMessage.textContent =
                "Please enter your email.";

            newsletterMessage.style.color = "#ff6b6b";

            return;
        }


        if (!email.includes("@") || !email.includes(".")) {

            newsletterMessage.textContent =
                "Please enter a valid email address.";

            newsletterMessage.style.color = "#ff6b6b";

            return;
        }


        newsletterMessage.textContent =
            "✓ Thanks! You are subscribed to StepStyle.";

        newsletterMessage.style.color = "#5bd38c";

        emailInput.value = "";

    });

});

