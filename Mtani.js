// script.js

// JavaScript code to add interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Function to handle click events on the "Shop Now" button
    const shopNowButton = document.querySelector('.btn');
    if (shopNowButton) {
        shopNowButton.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'shop.html';
        });
    }

    // Function to handle click events on the "Home" button
    const homeButton = document.querySelector('.btn-home');
    if (homeButton) {
        homeButton.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'index.html';
        });
    }

    // Function to handle click events on the "Product" button
    const productButton = document.querySelector('.btn-product');
    if (productButton) {
        productButton.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'product.html';
        });
    }

    // Function to handle click events on the "About Us" button
    const aboutButton = document.querySelector('.btn-about');
    if (aboutButton) {
        aboutButton.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'about.html';
        });
    }

    // Function to handle click events on the "Contact" button
    const contactButton = document.querySelector('.btn-contact');
    if (contactButton) {
        contactButton.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'contact.html';
        });
    }

    // Function to handle click events on the "Terms" button
    const termsButton = document.querySelector('.btn-terms');
    if (termsButton) {
        termsButton.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'terms.html';
        });
    }

    // Function to handle click events on the "Privacy" button
    const privacyButton = document.querySelector('.btn-privacy');
    if (privacyButton) {
        privacyButton.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'privacy.html';
        });
    }

    // Function to handle click events on the "Add to Cart" button
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const productDiv = event.target.closest('.product-item');
            if (productDiv) {
                const productId = productDiv.getAttribute('data-id');
                const productName = productDiv.getAttribute('data-name');
                const productPrice = productDiv.getAttribute('data-price');

                // Send data to the server (add your fetch code here)
            }
        });
    });
});
