// Cart Counter
let cartCount = 0;

const cartButtons = document.querySelectorAll(".add-to-cart");

// Create cart counter if it exists
const cartCounter = document.getElementById("cart-count");

cartButtons.forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;

        if (cartCounter) {
            cartCounter.textContent = cartCount;
        }

        button.textContent = "✓ Added";

        setTimeout(() => {
            button.textContent = "Add to Cart";
        }, 1000);
    });
});

// Search Functionality
const searchInput = document.querySelector(".search-bar input");

if (searchInput) {
    searchInput.addEventListener("keyup", () => {
        const searchValue = searchInput.value.toLowerCase();

        const products = document.querySelectorAll(".product-card");

        products.forEach(product => {
            const productName = product
                .querySelector(".product-name")
                .textContent
                .toLowerCase();

            if (productName.includes(searchValue)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
}

// Navbar Links Active Effect
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        navLinks.forEach(item => {
            item.style.color = "white";
        });

        link.style.color = "#ff9900";
    });
});

// Logo Click
const logo = document.querySelector(".logo");

if (logo) {
    logo.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}