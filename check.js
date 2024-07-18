// home.js

// import products from './productdata.js';
// console.log(products);

// // Function to display products dynamically in the DOM
// function displayProducts(products) {
// const productsContainer = document.getElementById('products-container');
// productsContainer.innerHTML = ''; // Clear the container before adding new products

// products.forEach(product => {
// productsContainer.innerHTML += `
//     <div class="product-wrapper">
//         <img src="${product['Product Link']}" alt="${product['Product Name']}" /> 
//         <h4>${product['Product Name']}</h4>
//         <h5>${product.Category}</h5>
//         <p>
//             <i class="fa-solid fa-star"></i>${product.Rating} 
//             <i class="fa-solid fa-circle-check"></i> ${product['Pack Size']} reviews
//         </p>
//         <h2>Rs. ${product.MRP}</h2>
//         <button>ADD TO CART</button>
//     </div>
// `;
// });
// }

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

document.addEventListener('DOMContentLoaded', function() {
    // Your event listener and other code that manipulates DOM elements
    document.querySelector('.arrow-left').addEventListener('click', () => scrollProducts('left'));
    document.querySelector('.arrow-right').addEventListener('click', () => scrollProducts('right'));
    // Other event listeners or manipulations
});

// Display products when DOM content is loaded
// document.addEventListener('DOMContentLoaded', function() {
//     displayProducts(filteredProducts); // Call displayProducts with the filtered products array
// });

