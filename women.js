/* ================= CART ================= */

let cartCount = 0;

const cartButtons = document.querySelectorAll(".add-cart");
const cartCounter = document.getElementById("cartCount");

cartButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        cartCount++;

        cartCounter.textContent = cartCount;

        button.textContent = "ADDED ✓";

        button.style.backgroundColor = "#146c43";

        setTimeout(function() {

            button.textContent = "ADD TO CART";

            button.style.backgroundColor = "#198754";

        }, 1200);

    });

});


/* ================= WISHLIST ================= */

const wishlistButtons =
    document.querySelectorAll(".wishlist-btn");

wishlistButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const icon = button.querySelector("i");

        icon.classList.toggle("fa-regular");
        icon.classList.toggle("fa-solid");

        button.classList.toggle("liked");

    });

});


/* ================= CATEGORY FILTER ================= */

const categoryButtons =
    document.querySelectorAll(".category-btn");

const productCards =
    document.querySelectorAll(".product-card");


categoryButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        /* Remove active class */

        categoryButtons.forEach(function(btn) {

            btn.classList.remove("active");

        });

        /* Add active class */

        button.classList.add("active");

        const category =
            button.getAttribute("data-category");


        productCards.forEach(function(card) {

            const cardCategory =
                card.getAttribute("data-category");

            if (
                category === "all" ||
                cardCategory === category
            ) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

    });

});


/* ================= SORT PRODUCTS ================= */

const sortSelect =
    document.getElementById("sortSelect");

const productsGrid =
    document.getElementById("productsGrid");


sortSelect.addEventListener("change", function() {

    const cards =
        Array.from(
            productsGrid.querySelectorAll(".product-card")
        );

    const sortValue = sortSelect.value;


    if (sortValue === "low") {

        cards.sort(function(a, b) {

            return (
                Number(a.dataset.price) -
                Number(b.dataset.price)
            );

        });

    }


    if (sortValue === "high") {

        cards.sort(function(a, b) {

            return (
                Number(b.dataset.price) -
                Number(a.dataset.price)
            );

        });

    }


    if (sortValue === "newest") {

        cards.reverse();

    }


    cards.forEach(function(card) {

        productsGrid.appendChild(card);

    });

});


/* ================= SEARCH ================= */

const searchForm =
    document.getElementById("searchForm");

const searchInput =
    document.getElementById("searchInput");


searchForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const searchValue =
        searchInput.value.toLowerCase().trim();


    productCards.forEach(function(card) {

        const productName =
            card.dataset.name.toLowerCase();

        const productCategory =
            card.dataset.category.toLowerCase();


        if (
            productName.includes(searchValue) ||
            productCategory.includes(searchValue) ||
            searchValue === ""
        ) {

            card.classList.remove("hidden");

        } else {

            card.classList.add("hidden");

        }

    });

});


/* ================= LOAD MORE ================= */

const loadMoreBtn =
    document.getElementById("loadMoreBtn");


loadMoreBtn.addEventListener("click", function() {

    loadMoreBtn.textContent = "ALL PRODUCTS LOADED";

    loadMoreBtn.disabled = true;

    loadMoreBtn.style.opacity = "0.6";

});


/* ================= BANNER BUTTON ================= */

function scrollToCollection() {

    const collection =
        document.getElementById("collection");

    collection.scrollIntoView({
        behavior: "smooth"
    });

}


/* ================= NEW ARRIVALS ================= */

function showNewArrivals() {

    const products =
        Array.from(
            document.querySelectorAll(".product-card")
        );

    products.forEach(function(product) {

        product.classList.remove("hidden");

    });

    window.scrollTo({

        top: document.querySelector(".products-section").offsetTop - 80,

        behavior: "smooth"

    });

}


/* ================= NEWSLETTER ================= */

const newsletterForm =
    document.getElementById("newsletterForm");


newsletterForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const email =
        newsletterForm.querySelector("input").value;

    if (email.trim() !== "") {

        alert(
            "Thank you for subscribing to ShoeHub!"
        );

        newsletterForm.reset();

    }

});
