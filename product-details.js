// product-details.js

window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const productName = urlParams.get('name');
    const productPrice = parseFloat(urlParams.get('price'));
    const productImage = urlParams.get('image');

    document.getElementById('product-id').value = productId;
    document.getElementById('product-name').innerText = productName;
    document.getElementById('product-name-hidden').value = productName;
    document.getElementById('product-price').innerText = `$${productPrice.toFixed(2)}`;
    document.getElementById('product-price-hidden').value = productPrice;
    document.getElementById('product-image').src = productImage;

    // Function to update total cost based on quantity
    window.updateTotal = function() {
        const quantity = parseInt(document.getElementById('quantity').value);
        const price = parseFloat(document.getElementById('product-price-hidden').value);
        const totalCost = (quantity * price).toFixed(2);
        document.getElementById('total-cost').innerText = totalCost;
    };
};
