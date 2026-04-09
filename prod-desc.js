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


let index = 0;

function updateProduct(){
    
    document.getElementById("prod-img").src = prodDesc[index].img;
    document.getElementById("prod-desc").textContent = prodDesc[index].desc;
    document.getElementById("prod-price").textContent = prodDesc[index].price;


}

// next button
document.getElementById("nextBtn").addEventListener("click", ()=>{
    index = (index+1) % prodDesc.length;
    updateProduct();
});

// Previous button
document.getElementById("prevBtn").addEventListener("click", () => {
    index = (index - 1 + prodDesc.length) % prodDesc.length;
    updateProduct();
});
