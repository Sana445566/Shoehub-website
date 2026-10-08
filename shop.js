document.addEventListener("DOMContentLoaded", function () {


    /* =========================
       CART
    ========================= */

    let cartCount = 0;

    const cartNumber =
        document.getElementById("cartCount");

    const addCartButtons =
        document.querySelectorAll(".add-cart");


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
       HEART
    ========================= */

    const heartButtons =
        document.querySelectorAll(".heart-btn");


    heartButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const icon =
                button.querySelector("i");

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
       CATEGORY FILTER
    ========================= */

    const categoryButtons =
        document.querySelectorAll(".category-btn");

    const productGrid =
        document.querySelector(".shop-products-grid");

    const productCards =
        Array.from(
            document.querySelectorAll(".shop-product-card")
        );

    const productStatus =
        document.getElementById("productStatus");

    const noProducts =
        document.getElementById("noProducts");


    let currentCategory = "all";


    function filterProducts() {

        let visibleProducts = 0;


        productCards.forEach(function (card) {

            const category =
                card.dataset.category;


            if (
                currentCategory === "all" ||
                category === currentCategory
            ) {

                card.style.display = "";

                visibleProducts++;

            } else {

                card.style.display = "none";

            }

        });


        if (visibleProducts === 0) {

            noProducts.style.display = "block";

        } else {

            noProducts.style.display = "none";

        }


        if (currentCategory === "all") {

            productStatus.textContent =
                "Showing all products";

        } else {

            productStatus.textContent =
                "Showing " +
                currentCategory +
                " shoes";

        }

    }


    categoryButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            categoryButtons.forEach(function (btn) {

                btn.classList.remove("active");

            });


            button.classList.add("active");

            currentCategory =
                button.dataset.category;

            filterProducts();

        });

    });


    /* =========================
       SORT PRODUCTS
    ========================= */

    const sortProducts =
        document.getElementById("sortProducts");


    sortProducts.addEventListener("change", function () {

        const value = sortProducts.value;


        let sortedCards =
            [...productCards];


        if (value === "low") {

            sortedCards.sort(function (a, b) {

                return (
                    Number(a.dataset.price) -
                    Number(b.dataset.price)
                );

            });

        }


        if (value === "high") {

            sortedCards.sort(function (a, b) {

                return (
                    Number(b.dataset.price) -
                    Number(a.dataset.price)
                );

            });

        }


        if (value === "newest") {

            sortedCards.sort(function (a, b) {

                return (
                    Number(b.dataset.order) -
                    Number(a.dataset.order)
                );

            });

        }


        if (value === "featured") {

            sortedCards.sort(function (a, b) {

                return (
                    Number(a.dataset.order) -
                    Number(b.dataset.order)
                );

            });

        }


        sortedCards.forEach(function (card) {

            productGrid.appendChild(card);

        });

    });


    /* =========================
       SEARCH
    ========================= */

    const searchForm =
        document.getElementById("searchForm");

    const searchInput =
        document.getElementById("searchInput");


    searchForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const searchValue =
            searchInput.value
                .trim()
                .toLowerCase();


        if (searchValue === "") {

            currentCategory = "all";

            categoryButtons.forEach(function (button) {

                button.classList.remove("active");

            });

            categoryButtons[0].classList.add("active");

            filterProducts();

            return;

        }


        let found = 0;


        productCards.forEach(function (card) {

            const name =
                card.dataset.name.toLowerCase();


            if (name.includes(searchValue)) {

                card.style.display = "";
                found++;

            } else {

                card.style.display = "none";

            }

        });


        if (found === 0) {

            noProducts.style.display = "block";

            productStatus.textContent =
                'No results for "' +
                searchValue +
                '"';

        } else {

            noProducts.style.display = "none";

            productStatus.textContent =
                found +
                " product(s) found";

        }


        document
            .getElementById("collection")
            .scrollIntoView({
                behavior: "smooth"
            });

    });


    /* =========================
       LOAD MORE
    ========================= */

    const loadMore =
        document.getElementById("loadMore");


    loadMore.addEventListener("click", function () {

        loadMore.innerHTML =
            '<i class="fa-solid fa-check"></i> All Products Loaded';

        loadMore.disabled = true;

        loadMore.style.opacity = "0.7";

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


        const email =
            emailInput.value.trim();


        if (
            email === "" ||
            !email.includes("@") ||
            !email.includes(".")
        ) {

            newsletterMessage.textContent =
                "Please enter a valid email address.";

            newsletterMessage.style.color =
                "#ff6b6b";

            return;

        }


        newsletterMessage.textContent =
            "✓ Thanks! You are subscribed to StepStyle.";

        newsletterMessage.style.color =
            "#5bd38c";

        emailInput.value = "";

    });

});

