document.addEventListener("DOMContentLoaded", function () {

    /* =====================================
       CART
    ===================================== */

    let cartCount = 0;

    const cartButtons = document.querySelectorAll(".add-cart");
    const cartCounter = document.getElementById("cartCount");

    cartButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            cartCount++;

            if (cartCounter) {
                cartCounter.textContent = cartCount;
            }

            const originalText = button.textContent;

            button.textContent = "ADDED ✓";

            button.style.backgroundColor = "#198754";

            setTimeout(function () {
                button.textContent = originalText;
                button.style.backgroundColor = "";
            }, 1200);

        });

    });


    /* =====================================
       HEART / WISHLIST
    ===================================== */

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


    /* =====================================
       CATEGORY FILTER
    ===================================== */

    const categoryButtons =
        document.querySelectorAll(".category-btn");

    const products =
        document.querySelectorAll(".product-card");

    categoryButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            categoryButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            const category =
                button.getAttribute("data-category");

            products.forEach(function (product) {

                const productCategory =
                    product.getAttribute("data-category");

                if (
                    category === "all" ||
                    productCategory === category
                ) {
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }

            });

        });

    });


    /* =====================================
       SORT PRODUCTS
    ===================================== */

    const sortSelect =
        document.getElementById("sortSelect");

    const productGrid =
        document.getElementById("productGrid");

    if (sortSelect && productGrid) {

        sortSelect.addEventListener("change", function () {

            const cards =
                Array.from(
                    productGrid.querySelectorAll(".product-card")
                );

            const sortValue = sortSelect.value;

            if (sortValue === "low") {

                cards.sort(function (a, b) {

                    return (
                        Number(a.dataset.price) -
                        Number(b.dataset.price)
                    );

                });

            }

            if (sortValue === "high") {

                cards.sort(function (a, b) {

                    return (
                        Number(b.dataset.price) -
                        Number(a.dataset.price)
                    );

                });

            }

            if (sortValue === "newest") {

                cards.reverse();

            }

            cards.forEach(function (card) {
                productGrid.appendChild(card);
            });

        });

    }


    /* =====================================
       LOAD MORE
    ===================================== */

    const loadMore =
        document.getElementById("loadMore");

    const extraProducts =
        document.querySelectorAll(".extra-product");

    if (loadMore) {

        loadMore.addEventListener("click", function () {

            extraProducts.forEach(function (product) {
                product.style.display = "block";
            });

            loadMore.innerHTML =
                'ALL PRODUCTS LOADED ✓';

            loadMore.disabled = true;

            loadMore.style.opacity = "0.6";

        });

    }


    /* =====================================
       SEARCH
    ===================================== */

    const searchForm =
        document.getElementById("searchForm");

    const searchInput =
        document.getElementById("searchInput");

    if (searchForm && searchInput) {

        searchForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const searchValue =
                searchInput.value.toLowerCase().trim();

            if (searchValue === "") {
                return;
            }

            let found = false;

            products.forEach(function (product) {

                const name =
                    product.dataset.name.toLowerCase();

                if (name.includes(searchValue)) {

                    product.style.display = "block";

                    product.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                    found = true;

                } else {

                    product.style.display = "none";

                }

            });

            if (!found) {

                alert(
                    "Sorry! No shoe found for: " +
                    searchValue
                );

                products.forEach(function (product) {
                    product.style.display = "";
                });

            }

        });

    }


    /* =====================================
       NEWSLETTER
    ===================================== */

    const newsletterForm =
        document.getElementById("newsletterForm");

    const emailInput =
        document.getElementById("emailInput");

    if (newsletterForm) {

        newsletterForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                if (
                    emailInput &&
                    emailInput.value.trim() !== ""
                ) {

                    alert(
                        "Thank you for subscribing to ShoeHub! 💚"
                    );

                    emailInput.value = "";

                }

            }
        );

    }


    /* =====================================
       CART ICON
    ===================================== */

    const cartButton =
        document.getElementById("cartButton");

    if (cartButton) {

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

    }


    /* =====================================
       HERO BUTTONS
    ===================================== */

    const shopButtons =
        document.querySelectorAll(".shop-btn, .new-btn");

    shopButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const target =
                document.getElementById("collection");

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

});

