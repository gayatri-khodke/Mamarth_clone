// home.js

import products from './productdata.js';

// Function to display products dynamically in the DOM
function displayProducts(products) {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = ''; // Clear the container before adding new products

    products.forEach(product => {
        productsContainer.innerHTML += `
            <div class="product-wraper">
                <img src="${product['Product Link']}" alt="${product['Product Name']}" /> 
                <h4>${product['Product Name']}</h4>
                <h5>${product.Category}</h5>
                <p>
                    <i class="fa-solid fa-star"></i>${product.Rating} 
                    <i class="fa-solid fa-circle-check"></i> ${product['Pack Size']} reviews
                </p>
                <h2>Rs. ${product.MRP}</h2>
                <button>ADD TO CART</button>
            </div>
        `;
    });
}

// Call the displayProducts function with the imported products
// displayProducts(products);

// Function to scroll the products container
function scrollProducts(direction) {
    const productsContainer = document.getElementById('products-container');
    const scrollAmount = 300; // Adjust the scroll amount as needed
    if (direction === 'left') {
        productsContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else if (direction === 'right') {
        productsContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}

// // Display products when DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    displayProducts(products); // Call displayProducts with the imported products array
});

