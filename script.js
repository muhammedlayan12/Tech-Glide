// $(document).ready(function() {
//     // Load Headphones Products
//     $.getJSON('headphones.json', function(data) {
//         let products = data.products;
//         let productList = $('#product-list');

//         // Display products
//         products.forEach(product => {
//             let reviews = Math.max(Math.floor(Math.random() * 5000), 0);
//             let like = Math.max(Math.floor(Math.random() * 1300), 0);
//             let card = `
//                 <div class="pr1">
//                     <div class="image-container">
//                         <img src="${product.image}" alt="${product.title}">
//                         <div class="overlay">
//                             <i class="fa-solid fa-heart i"></i><span>(${like})</span>
//                         </div>
//                     </div>
//                     <h3>${product.title}</h3>
//                     <p>${product.description}</p>
//                     <p class="price">${product.price}</p>
//                     <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>(${reviews}) <br>
//                     <button class="cart-btn-pr" data-product='${JSON.stringify(product)}'>Add To CART</button>
//                 </div>
//             `;
//             productList.append(card);
//         });
//     }).fail(function() {
//         console.error('Failed to load headphones.json');
//     });

//     // Load Airpods Products
//     $.getJSON('airpods.json', function(data) {
//         let products = data.products;
//         let productList = $('#product2-list');

//         // Display products
//         products.forEach(product => {
//             let reviews = Math.max(Math.floor(Math.random() * 5000), 0);
//             let like = Math.max(Math.floor(Math.random() * 1300), 0);
//             let card = `
//                 <div class="pr2">
//                     <div class="image-container">
//                         <img src="${product.image}" alt="${product.title}">
//                         <div class="overlay">
//                             <i class="fa-solid fa-heart i"></i><span>(${like})</span>
//                         </div>
//                     </div>
//                     <h3>${product.title}</h3>
//                     <p>${product.description}</p>
//                     <p class="price">${product.price}</p>
//                     <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>(${reviews}) <br>
//                     <button class="cart-btn-pr" data-product='${JSON.stringify(product)}'>Add To CART</button>
//                 </div>
//             `;
//             productList.append(card);
//         });
//     }).fail(function() {
//         console.error('Failed to load airpods.json');
//     });

//     // Like button click event for Airpods products
//     $("#product2-list").on("click", ".overlay", function(){
//         $(this).find(".fa-heart").css("color", "red");
//     });

//     // Like button click event for Headphones products
//     $("#product-list").on("click", ".overlay", function(){
//         $(this).find(".fa-heart").css("color", "red");
//     });

//     // Add to cart functionality
//     $("#product-list, #product2-list").on("click", ".cart-btn-pr", function() {
//         let product = $(this).data('product');
//         const cart = JSON.parse(localStorage.getItem('cart')) || [];
//         cart.push(product);
//         localStorage.setItem('cart', JSON.stringify(cart));
//         updateCart();
//     });

//     // Smooth scroll buttons
//     $(".m1-btn, .m2-btn, .m3-btn").on("click", function(){
//         window.scrollTo({
//             top: 1000,
//             behavior: "smooth"
//         });
//     });

//     // Subscribe Form Validation
//     $(".subscribe-form").on("submit", function(event) {
//         event.preventDefault(); // Prevent form submission

//         let input = $("#f-input").val().trim();
//         let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
//         let isEmailValid = input && emailPattern.test(input);
//         let error = $("#emailisreq");

//         if (isEmailValid) {
//             error.text("").hide();
//             alert("Form submitted successfully!");
//         } else if (input) {
//             error.text("Invalid email address").show();
//         } else {
//             error.text("Email is required").show();
//         }

//         // Clear input field after form submission
//         $("#f-input").val("");
//     });

//     // Cart functionality
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const cartContainer = document.querySelector('.cart-container');

//     function updateCart() {
//         cartContainer.innerHTML = '';
//         cart.forEach((item, index) => {
//             const cartItem = document.createElement('div');
//             cartItem.className = 'cart-item';
//             cartItem.innerHTML = `
//                 <div class="cart-item-image">
//                     <img src="${item.image}" alt="${item.title}">
//                 </div>
//                 <div class="cart-item-details">
//                     <h3>${item.title}</h3>
//                     <p class="price">${item.price}</p>
//                     <button class="remove-btn" data-index="${index}">Remove</button>
//                 </div>
//             `;
//             cartContainer.appendChild(cartItem);
//         });

//         document.querySelectorAll('.remove-btn').forEach(btn => {
//             btn.addEventListener('click', (e) => {
//                 const index = e.target.getAttribute('data-index');
//                 cart.splice(index, 1);
//                 localStorage.setItem('cart', JSON.stringify(cart));
//                 updateCart();
//             });
//         });
//     }

//     updateCart();
// });

























































// $(document).ready(function() {
//     // Load Headphones Products
//     $.getJSON('headphones.json', function(data) {
//         let products = data.products;
//         let productList = $('#product-list');

//         // Display products
//         products.forEach(product => {
//             let reviews = Math.max(Math.floor(Math.random() * 5000), 0);
//             let like = Math.max(Math.floor(Math.random() * 1300), 0);
//             let card = `
//                 <div class="pr1">
//                     <div class="image-container">
//                         <img src="${product.image}" alt="${product.title}">
//                         <div class="overlay">
//                             <i class="fa-solid fa-heart i"></i><span>(${like})</span>
//                         </div>
//                     </div>
//                     <h3>${product.title}</h3>
//                     <p>${product.description}</p>
//                     <p class="price">${product.price}</p>
//                     <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>(${reviews}) <br>
//                     <button class="cart-btn-pr" data-product='${JSON.stringify(product)}'>Add To CART</button>
//                 </div>
//             `;
//             productList.append(card);
//         });
//     }).fail(function() {
//         console.error('Failed to load headphones.json');
//     });

//     // Load Airpods Products
//     $.getJSON('airpods.json', function(data) {
//         let products = data.products;
//         let productList = $('#product2-list');

//         // Display products
//         products.forEach(product => {
//             let reviews = Math.max(Math.floor(Math.random() * 5000), 0);
//             let like = Math.max(Math.floor(Math.random() * 1300), 0);
//             let card = `
//                 <div class="pr2">
//                     <div class="image-container">
//                         <img src="${product.image}" alt="${product.title}">
//                         <div class="overlay">
//                             <i class="fa-solid fa-heart i"></i><span>(${like})</span>
//                         </div>
//                     </div>
//                     <h3>${product.title}</h3>
//                     <p>${product.description}</p>
//                     <p class="price">${product.price}</p>
//                     <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>(${reviews}) <br>
//                     <button class="cart-btn-pr" data-product='${JSON.stringify(product)}'>Add To CART</button>
//                 </div>
//             `;
//             productList.append(card);
//         });
//     }).fail(function() {
//         console.error('Failed to load airpods.json');
//     });

//     // Like button click event for Airpods products
//     $("#product2-list").on("click", ".overlay", function(){
//         $(this).find(".fa-heart").css("color", "red");
//     });

//     // Like button click event for Headphones products
//     $("#product-list").on("click", ".overlay", function(){
//         $(this).find(".fa-heart").css("color", "red");
//     });

//     // Add to cart functionality
//     $("#product-list, #product2-list").on("click", ".cart-btn-pr", function() {
//         let product = $(this).data('product');
//         const cart = JSON.parse(localStorage.getItem('cart')) || [];
//         cart.push(product);
//         localStorage.setItem('cart', JSON.stringify(cart));
//         updateCart();
//     });

//     // Smooth scroll buttons
//     $(".m1-btn, .m2-btn, .m3-btn").on("click", function(){
//         window.scrollTo({
//             top: 1000,
//             behavior: "smooth"
//         });
//     });

//     // Subscribe Form Validation
//     $(".subscribe-form").on("submit", function(event) {
//         event.preventDefault(); // Prevent form submission

//         let input = $("#f-input").val().trim();
//         let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
//         let isEmailValid = input && emailPattern.test(input);
//         let error = $("#emailisreq");

//         if (isEmailValid) {
//             error.text("").hide();
//             alert("Form submitted successfully!");
//         } else if (input) {
//             error.text("Invalid email address").show();
//         } else {
//             error.text("Email is required").show();
//         }

//         // Clear input field after form submission
//         $("#f-input").val("");
//     });

//     // Cart functionality
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const cartContainer = document.querySelector('.cart-container');

//     function updateCart() {
//         cartContainer.innerHTML = '';
//         cart.forEach((item, index) => {
//             const cartItem = document.createElement('div');
//             cartItem.className = 'cart-item';
//             cartItem.innerHTML = `
//                 <div class="cart-item-image">
//                     <img src="${item.image}" alt="${item.title}">
//                 </div>
//                 <div class="cart-item-details">
//                     <h3>${item.title}</h3>
//                     <p class="price">${item.price}</p>
//                     <button class="remove-btn" data-index="${index}">Remove</button>
//                 </div>
//             `;
//             cartContainer.appendChild(cartItem);
//         });

//         document.querySelectorAll('.remove-btn').forEach(btn => {
//             btn.addEventListener('click', (e) => {
//                 const index = e.target.getAttribute('data-index');
//                 cart.splice(index, 1);
//                 localStorage.setItem('cart', JSON.stringify(cart));
//                 updateCart();
//             });
//         });
//     }

//     updateCart();
// });

// // Checkout System
// document.addEventListener('DOMContentLoaded', () => {
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const cartContainer = document.querySelector('.checkout-cart-container');
//     const checkoutForm = document.querySelector('.checkout-form');
//     const creditCardDetails = document.querySelector('.credit-card-details');
//     const paymentMethods = document.querySelectorAll('input[name="payment-method"]');

//     function updateCart() {
//         cartContainer.innerHTML = '';
//         cart.forEach((item) => {
//             const cartItem = document.createElement('div');
//             cartItem.className = 'checkout-cart-item';
//             cartItem.innerHTML = `
//                 <div class="checkout-cart-item-image">
//                     <img src="${item.image}" alt="${item.title}">
//                 </div>
//                 <div class="checkout-cart-item-details">
//                     <h3>${item.title}</h3>
//                     <p class="price">${item.price}</p>
//                 </div>
//             `;
//             cartContainer.appendChild(cartItem);
//         });
//     }

//     function handlePaymentMethodChange() {
//         const selectedMethod = document.querySelector('input[name="payment-method"]:checked').value;
//         if (selectedMethod === 'credit-card') {
//             creditCardDetails.style.display = 'block';
//         } else {
//             creditCardDetails.style.display = 'none';
//         }
//     }

//     function handleFormSubmission(event) {
//         event.preventDefault();
//         const selectedMethod = document.querySelector('input[name="payment-method"]:checked').value;

//         if (selectedMethod === 'credit-card') {
//             // Here you would typically handle the payment processing with an API
//             const cardNumber = document.getElementById('card-number').value;
//             const cardName = document.getElementById('card-name').value;
//             const cardExpiry = document.getElementById('card-expiry').value;
//             const cardCvv = document.getElementById('card-cvv').value;
//             // Process payment details
//         } else if (selectedMethod === 'paypal') {
//             // Handle PayPal payment
//         }

//         alert('Checkout complete!');
//         localStorage.removeItem('cart');
//         cartContainer.innerHTML = '';
//         checkoutForm.reset();
//     }

//     updateCart();
//     checkoutForm.addEventListener('submit', handleFormSubmission);
//     paymentMethods.forEach(method => method.addEventListener('change', handlePaymentMethodChange));
// });













// $(document).ready(function() {
//     // Load Headphones Products
//     $.getJSON('headphones.json', function(data) {
//         let products = data.products;
//         let productList = $('#product-list');

//         // Display products
//         products.forEach(product => {
//             let reviews = Math.max(Math.floor(Math.random() * 5000), 0);
//             let like = Math.max(Math.floor(Math.random() * 1300), 0);
//             let card = `
//                 <div class="pr1">
//                     <div class="image-container">
//                         <img src="${product.image}" alt="${product.title}">
//                         <div class="overlay">
//                             <i class="fa-solid fa-heart i"></i><span>(${like})</span>
//                         </div>
//                     </div>
//                     <h3>${product.title}</h3>
//                     <p>${product.description}</p>
//                     <p class="price">${product.price}</p>
//                     <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>(${reviews}) <br>
//                     <button class="cart-btn-pr" data-product='${JSON.stringify(product)}'>Add To CART</button>
//                 </div>
//             `;
//             productList.append(card);
//         });
//     }).fail(function() {
//         console.error('Failed to load headphones.json');
//     });

//     // Load Airpods Products
//     $.getJSON('airpods.json', function(data) {
//         let products = data.products;
//         let productList = $('#product2-list');

//         // Display products
//         products.forEach(product => {
//             let reviews = Math.max(Math.floor(Math.random() * 5000), 0);
//             let like = Math.max(Math.floor(Math.random() * 1300), 0);
//             let card = `
//                 <div class="pr2">
//                     <div class="image-container">
//                         <img src="${product.image}" alt="${product.title}">
//                         <div class="overlay">
//                             <i class="fa-solid fa-heart i"></i><span>(${like})</span>
//                         </div>
//                     </div>
//                     <h3>${product.title}</h3>
//                     <p>${product.description}</p>
//                     <p class="price">${product.price}</p>
//                     <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>(${reviews}) <br>
//                     <button class="cart-btn-pr" data-product='${JSON.stringify(product)}'>Add To CART</button>
//                 </div>
//             `;
//             productList.append(card);
//         });
//     }).fail(function() {
//         console.error('Failed to load airpods.json');
//     });

//     // Like button click event
//     $(document).on("click", ".overlay", function(){
//         $(this).find(".fa-heart").toggleClass("liked");
//     });

//     // Add to cart functionality
//     $(document).on("click", ".cart-btn-pr", function() {
//         let product = $(this).data('product');
//         const cart = JSON.parse(localStorage.getItem('cart')) || [];
//         cart.push(product);
//         localStorage.setItem('cart', JSON.stringify(cart));
//         updateCart();
//     });

//     // Smooth scroll buttons
//     $(".m1-btn, .m2-btn, .m3-btn").on("click", function(){
//         window.scrollTo({
//             top: 1000,
//             behavior: "smooth"
//         });
//     });

//     // Subscribe Form Validation
//     $(".subscribe-form").on("submit", function(event) {
//         event.preventDefault(); // Prevent form submission

//         let input = $("#f-input").val().trim();
//         let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
//         let isEmailValid = input && emailPattern.test(input);
//         let error = $("#emailisreq");

//         if (isEmailValid) {
//             error.text("").hide();
//             alert("Form submitted successfully!");
//         } else if (input) {
//             error.text("Invalid email address").show();
//         } else {
//             error.text("Email is required").show();
//         }

//         // Clear input field after form submission
//         $("#f-input").val("");
//     });

//     // Cart functionality
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const cartContainer = document.querySelector('.cart-container');

//     function updateCart() {
//         cartContainer.innerHTML = '';
//         cart.forEach((item, index) => {
//             const cartItem = document.createElement('div');
//             cartItem.className = 'cart-item';
//             cartItem.innerHTML = `
//                 <div class="cart-item-image">
//                     <img src="${item.image}" alt="${item.title}">
//                 </div>
//                 <div class="cart-item-details">
//                     <h3>${item.title}</h3>
//                     <p class="price">${item.price}</p>
//                     <button class="remove-btn" data-index="${index}">Remove</button>
//                 </div>
//             `;
//             cartContainer.appendChild(cartItem);
//         });

//         document.querySelectorAll('.remove-btn').forEach(btn => {
//             btn.addEventListener('click', (e) => {
//                 const index = e.target.getAttribute('data-index');
//                 cart.splice(index, 1);
//                 localStorage.setItem('cart', JSON.stringify(cart));
//                 updateCart();
//             });
//         });
//     }

//     updateCart();
// });

// // Checkout System
// document.addEventListener('DOMContentLoaded', () => {
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const cartContainer = document.querySelector('.checkout-cart-container');
//     const checkoutForm = document.querySelector('.checkout-form');
//     const creditCardDetails = document.querySelector('.credit-card-details');
//     const paymentMethods = document.querySelectorAll('input[name="payment-method"]');

//     function updateCart() {
//         cartContainer.innerHTML = '';
//         cart.forEach((item) => {
//             const cartItem = document.createElement('div');
//             cartItem.className = 'checkout-cart-item';
//             cartItem.innerHTML = `
//                 <div class="checkout-cart-item-image">
//                     <img src="${item.image}" alt="${item.title}">
//                 </div>
//                 <div class="checkout-cart-item-details">
//                     <h3>${item.title}</h3>
//                     <p class="price">${item.price}</p>
//                 </div>
//             `;
//             cartContainer.appendChild(cartItem);
//         });
//     }

//     function handlePaymentMethodChange() {
//         const selectedMethod = document.querySelector('input[name="payment-method"]:checked').value;
//         if (selectedMethod === 'credit-card') {
//             creditCardDetails.style.display = 'block';
//         } else {
//             creditCardDetails.style.display = 'none';
//         }
//     }

//     function handleFormSubmission(event) {
//         event.preventDefault();
//         const selectedMethod = document.querySelector('input[name="payment-method"]:checked').value;

//         if (selectedMethod === 'credit-card') {
//             const cardNumber = document.getElementById('card-number').value;
//             const cardName = document.getElementById('card-name').value;
//             const cardExpiry = document.getElementById('card-expiry').value;
//             const cardCvv = document.getElementById('card-cvv').value;
//             // Validate and process payment details here
//         } else if (selectedMethod === 'paypal') {
//             // Handle PayPal payment here
//         }

//         alert('Checkout complete!');
//         localStorage.removeItem('cart');
//         cartContainer.innerHTML = '';
//         checkoutForm.reset();
//     }

//     updateCart();
//     checkoutForm.addEventListener('submit', handleFormSubmission);
//     paymentMethods.forEach(method => method.addEventListener('change', handlePaymentMethodChange));
// });
    


























$(document).ready(function() {
    // Load Headphones Products
    $.getJSON('headphones.json', function(data) {
        let products = data.products;
        let productList = $('#product-list');

        // Display products
        products.forEach(product => {
            let reviews = Math.max(Math.floor(Math.random() * 5000), 0);
            let like = Math.max(Math.floor(Math.random() * 1300), 0);
            let card = `
                <div class="pr1">
                    <div class="image-container">
                        <img src="${product.image}" alt="${product.title}">
                        <div class="overlay">
                            <i class="fa-solid fa-heart i"></i><span>(${like})</span>
                        </div>
                    </div>
                    <h3>${product.title}</h3>
                    <p>${product.description}</p>
                    <p class="price">${product.price}</p>
                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>(${reviews}) <br>
                    <button class="cart-btn-pr" data-product='${JSON.stringify(product)}'>Add To CART</button>
                </div>
            `;
            productList.append(card);
        });
    }).fail(function() {
        console.error('Failed to load headphones.json');
    });

    // Load Airpods Products
    $.getJSON('airpods.json', function(data) {
        let products = data.products;
        let productList = $('#product2-list');

        // Display products
        products.forEach(product => {
            let reviews = Math.max(Math.floor(Math.random() * 5000), 0);
            let like = Math.max(Math.floor(Math.random() * 1300), 0);
            let card = `
                <div class="pr2">
                    <div class="image-container">
                        <img src="${product.image}" alt="${product.title}">
                        <div class="overlay">
                            <i class="fa-solid fa-heart i"></i><span>(${like})</span>
                        </div>
                    </div>
                    <h3>${product.title}</h3>
                    <p>${product.description}</p>
                    <p class="price">${product.price}</p>
                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>(${reviews}) <br>
                    <button class="cart-btn-pr" data-product='${JSON.stringify(product)}'>Add To CART</button>
                </div>
            `;
            productList.append(card);
        });
    }).fail(function() {
        console.error('Failed to load airpods.json');
    });

    // Like button click event for Airpods products
    $("#product2-list").on("click", ".overlay", function(){
        $(this).find(".fa-heart").css("color", "red");
    });

    // Like button click event for Headphones products
    $("#product-list").on("click", ".overlay", function(){
        $(this).find(".fa-heart").css("color", "red");
    });

    // Add to cart functionality
    $("#product-list, #product2-list").on("click", ".cart-btn-pr", function() {
        let product = $(this).data('product');
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    });

    // Smooth scroll buttons
    $(".m1-btn, .m2-btn, .m3-btn").on("click", function(){
        window.scrollTo({
            top: 1000,
            behavior: "smooth"
        });
    });

    // Subscribe Form Validation
    $(".subscribe-form").on("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        let input = $("#f-input").val().trim();
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
        let isEmailValid = input && emailPattern.test(input);
        let error = $("#emailisreq");

        if (isEmailValid) {
            error.text("").hide();
            alert("Form submitted successfully!");
        } else if (input) {
            error.text("Invalid email address").show();
        } else {
            error.text("Email is required").show();
        }

        // Clear input field after form submission
        $("#f-input").val("");
    });

    // Cart functionality
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.querySelector('.cart-container');

    function updateCart() {
        cartContainer.innerHTML = '';
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="cart-item-details">
                    <h3>${item.title}</h3>
                    <p class="price">${item.price}</p>
                    <button class="remove-btn" data-index="${index}">Remove</button>
                </div>
            `;
            cartContainer.appendChild(cartItem);
        });

        document.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-index');
                cart.splice(index, 1);
                localStorage.setItem('cart', JSON.stringify(cart));
                updateCart();
            });
        });
    }

    updateCart();

    // Checkout Functionality
    const checkoutCartContainer = document.querySelector('.checkout-cart-container');
    const checkoutForm = document.querySelector('.checkout-form');
    const creditCardDetails = document.querySelector('.credit-card-details');
    const paypalDetails = document.querySelector('.paypal-details');
    const cryptoDetails = document.querySelector('.crypto-details');
    const paymentMethods = document.querySelectorAll('input[name="payment-method"]');

    function updateCheckoutCart() {
        checkoutCartContainer.innerHTML = '';
        cart.forEach((item) => {
            const cartItem = document.createElement('div');
            cartItem.className = 'checkout-cart-item';
            cartItem.innerHTML = `
                <div class="checkout-cart-item-image">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="checkout-cart-item-details">
                    <h3>${item.title}</h3>
                    <p class="price">${item.price}</p>
                </div>
            `;
            checkoutCartContainer.appendChild(cartItem);
        });
    }

    function handlePaymentMethodChange() {
        const selectedMethod = document.querySelector('input[name="payment-method"]:checked').value;
        if (selectedMethod === 'credit-card') {
            creditCardDetails.style.display = 'block';
            paypalDetails.style.display = 'none';
            cryptoDetails.style.display = 'none';
        } else if (selectedMethod === 'paypal') {
            creditCardDetails.style.display = 'none';
            paypalDetails.style.display = 'block';
            cryptoDetails.style.display = 'none';
        } else if (selectedMethod === 'crypto') {
            creditCardDetails.style.display = 'none';
            paypalDetails.style.display = 'none';
            cryptoDetails.style.display = 'block';
        }
    }

    function handleFormSubmission(event) {
        event.preventDefault();
        const selectedMethod = document.querySelector('input[name="payment-method"]:checked').value;

        if (selectedMethod === 'credit-card') {
            const cardNumber = document.getElementById('card-number').value;
            const cardName = document.getElementById('card-name').value;
            const cardExpiry = document.getElementById('card-expiry').value;
            const cardCvv = document.getElementById('card-cvv').value;
            // Process card payment details
            alert('Credit/Debit Card payment processing is not implemented yet.');
        } else if (selectedMethod === 'paypal') {
            // Redirect to PayPal
            alert('You will be redirected to PayPal.');
        } else if (selectedMethod === 'crypto') {
            // Provide crypto payment instructions
            alert('Cryptocurrency payment details will be provided.');
        }

        localStorage.removeItem('cart');
        checkoutCartContainer.innerHTML = '';
        checkoutForm.reset();
        alert('Checkout complete!');
    }

    updateCart();
    updateCheckoutCart();
    checkoutForm.addEventListener('submit', handleFormSubmission);
    paymentMethods.forEach(method => method.addEventListener('change', handlePaymentMethodChange));
});
