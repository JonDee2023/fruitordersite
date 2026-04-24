document.addEventListener("DOMContentLoaded", () => {

    let cartContainer = document.getElementById("cart-item");
    let totalDisplay = document.getElementById("cart-total");

    if (!cartContainer || !totalDisplay) return;

    // ✅ Safe loading
    let cart;
    try {
        cart = JSON.parse(localStorage.getItem("c-cart")) || [];
    } catch {
        cart = [];
    }

    function saveCart() {
        localStorage.setItem("c-cart", JSON.stringify(cart));
    }

    function updateCart() {
        cartContainer.innerHTML = "";
        let total = 0;

        if (cart.length === 0) {
            cartContainer.innerHTML = "<p>Your cart is empty</p>";
            totalDisplay.textContent = "";
            return;
        }

        cart.forEach((item, index) => {
            let price = Number(item.price); // ✅ ensure number
            total += price * item.quantity;

            cartContainer.innerHTML += `
                <div class="carts">
                    <img src="${item.image}" width="80">

                    <div>
                        <h4>${item.name}</h4>
                        <p>₦${price}</p>

                        <div>
                            <button onclick="changeQty(${index}, -1)">-</button>
                            <span>${item.quantity}</span>
                            <button onclick="changeQty(${index}, 1)">+</button>
                        </div>

                        <p>Subtotal: ₦${price * item.quantity}</p>
                    </div>

                    <button onclick="removeItem(${index})">X</button>
                </div>
            `;
        });

        totalDisplay.textContent = `Total: ₦${total}`;
    }

    // ✅ MUST be global for onclick
    window.changeQty = function(index, amount) {
        cart[index].quantity += amount;

        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }

        saveCart();
        updateCart();
    };

    window.removeItem = function(index) {
        cart.splice(index, 1);
        saveCart();
        updateCart();
    };

    // ✅ Now actually usable
    window.clearCart = function() {
        cart = [];
        localStorage.removeItem("c-cart");
        updateCart();
    };

    updateCart();
});