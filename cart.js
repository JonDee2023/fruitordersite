let cartContainer = document.getElementById("cart-item");
let totalDisplay = document.getElementById("cart-total");

let cart = JSON.parse(localStorage.getItem("c-cart")) || [];

function updateCart() {
    cartContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;

        cartContainer.innerHTML += `
            <div class="carts">
                <img src="${item.image}" width="80">

                <div>
                    <h4>${item.name}</h4>
                    <p>$${item.price}</p>

                    <div>
                        <button onclick="changeQty(${index}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="changeQty(${index}, 1)">+</button>
                    </div>

                    <p>Subtotal: $${item.price * item.quantity}</p>
                </div>

                <button onclick="removeItem(${index})">X</button>
            </div>
        `;
    });

    totalDisplay.textContent = `Total: $${total}`;
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("c-cart", JSON.stringify(cart));
    updateCart();
};

function changeQty(index, amount) {
    cart[index].quantity += amount;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    localStorage.setItem("c-cart", JSON.stringify(cart));
    updateCart();
}

updateCart();
