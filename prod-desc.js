let cart = [];

// Add product to cart
function addToCart(name, price, image) {
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            image: image,
            quantity: 1
        });
    }

    updateCart();
}

const prodDesc = [
    {img: "shoe.jpg",
     desc: "Gucci shoe",
     price: "#30,000"
    },

    {img: "gown.jpg",
    desc: "Roselane Gown",
    price: "#30,500"
    },

    {img: "bracelet.jpg",
     desc: "X Leather bracelet",
     price: "#5,000"
    }

    ]


let idx = 0;

function updateProduct(){
        
    document.getElementById("prod-img").src = prodDesc[idx].img;
    document.getElementById("prod-desc").textContent = prodDesc[idx].desc;
    document.getElementById("prod-price").textContent = prodDesc[idx].price;


}

    // next button
document.getElementById("nextBtn").addEventListener("click", ()=>{
    idx = (idx+1) % prodDesc.length;
    updateProduct();
});

    // Previous button
document.getElementById("prevBtn").addEventListener("click", () => {
    idx = (idx - 1 + prodDesc.length) % prodDesc.length;
    updateProduct();
});

//console.log(document.getElementById("nextBtn"));
//console.log(document.getElementById("prevBtn"));


let cartContainer = document.getElementById("cart-item");
let totalDisplay = document.getElementById("cart-total");

function updateCart() {
    cartContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;

        cartContainer.innerHTML += `
            <div class="cart-item">
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
    updateCart();
}