/* =========================================
   PROFESSIONAL NAVBAR JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    /* =====================================
       MOBILE MENU
    ===================================== */

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", function () {

            navMenu.classList.toggle("show");

            const icon = menuToggle.querySelector("i");

            if (navMenu.classList.contains("show")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

    }


    /* =====================================
       CLOSE MOBILE MENU AFTER CLICK
    ===================================== */

    const navLinks = document.querySelectorAll(".nav-menu .nav-link");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (window.innerWidth <= 768) {

                navMenu.classList.remove("show");

                const icon = menuToggle.querySelector("i");

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

    });


    /* =====================================
       ACTIVE PAGE
    ===================================== */

    const currentPage =
        window.location.pathname.split("/").pop().toLowerCase();

    navLinks.forEach(function (link) {

        const linkPage =
            link.getAttribute("href").split("/").pop().toLowerCase();

        if (
            currentPage === linkPage ||
            (currentPage === "" && linkPage === "index.html")
        ) {

            link.classList.add("active");

        }

    });


    /* =====================================
       SEARCH
    ===================================== */

    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");

    if (searchForm && searchInput) {

        searchForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const searchValue =
                searchInput.value.trim().toLowerCase();

            if (searchValue === "") {

                alert("Please enter a shoe name to search.");

                return;
            }

            /* Simple search feedback */

            alert(
                'Searching for "' +
                searchValue +
                '"...'
            );

        });

    }


    /* =====================================
       CART
    ===================================== */

    const cartBtn = document.getElementById("cartBtn");
    const cartCount = document.getElementById("cartCount");

    let cartItems =
        Number(localStorage.getItem("shoeHubCart")) || 0;

    if (cartCount) {
        cartCount.textContent = cartItems;
    }

    if (cartBtn) {

        cartBtn.addEventListener("click", function () {

            if (cartItems === 0) {

                alert("Your cart is empty.");

            } else {

                alert(
                    "You have " +
                    cartItems +
                    " item(s) in your cart."
                );

            }

        });

    }

});