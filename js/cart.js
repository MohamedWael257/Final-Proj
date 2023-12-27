let shopping = document.querySelector(".shopping")
let shopping_cart = document.querySelector(".shopping-cart")
let get = localStorage.getItem('cart')
let cart = JSON.parse(get)
function showdatacart() {
    let sum = 0
    let cartedit = document.createElement('div');
    // cartedit.classList.add("cart");
    let carte;
    cart.map(ele => {
        sum += (ele.price * cart.length)
        carte = cartedit.innerHTML += `
     <div class="cart">
        <div class="img w-25 me-4">
            <img src="${ele.ImageUrl}" class="w-100 h-50" alt="">
        </div>
        <div class="card-details">
            <div class="title d-flex justify-content-between">
                <p class="w-75">${ele.description}</p>
                <strong class="">EGB ${ele.price}</strong>
            </div>
            <p>${ele.title}</p>
            <p>Eligible for FREE delivery</p>
            <strong>Size: 350 ml</strong>
            <button class="increment">+</button>
            <span class="count">1</span>
            <button class="decrement">-</button>       
            <button class="delete" onclick="deletefromcart(${ele.id})"> delete</button>
    
         </div>
        <hr>
        <br>
        <br>
        </div>
        `
    });
    // carte += cartedit.innerHTML;
    console.log(cartedit.innerHTML);
    shopping.innerHTML = `
    <div class="shopping-cart bg-white p-3">
    <div class="head">
        <span>shopping Cart</span>
        <span>price</span>
    </div>
    <hr>
    ${carte}
    <button class="clear-cart" onclick="clearcart()" >Clear Cart</button>
    <div class="price text-end">
        <span>Sub(${cart.length} items):</span>
        <span> EGB ${sum}</span>
    </div>
    <hr>
    <br>
    <br>
</div>
    <div class="buy p-3 bg-white">
    <div class="detail ">
        <i class="fa-solid fa-check"></i>
        <div>
            <p>Your first order qualifies for FREE Delivery.
                Select this option at checkout.<a href="">Details</a></p>
            <div>
                <div class="price text-center mb-3">
                    <span>Sub(${cart.length} items):</span>
                    <span> EGB ${sum}</span>
                </div>
                <a href="chechout.html" class="process-to-buy">Process to buy</a>
            </div>
    </div>
</div>
`
}

if (cart && cart.length > 0) {
    // let cartedit = document.createElement('div')
    // cartedit.classList('cart d-flex')
    showdatacart()
    console.log(cart);
}
else {
    shopping.innerHTML =
        `
        <div class="nocart">
        <h2><i class="fa-solid fa-heart-crack"></i></h2>
        <h5 >Shopping cart is empty !</h5>
        <p >push some products into your cart</p>
        <div>
            <a href="home.html" class="btn btn-warning text-end">Back to Home</a>
        </div>
    </div>
    `
}
function deletefromcart(a) {
    const objWithIdIndex = cart.findIndex((obj) => obj.id === a)
    cart.splice(objWithIdIndex, 1)
    console.log(cart);
    localStorage.setItem('cart', JSON.stringify(cart))
    showdatacart()
    if (!cart || cart.length === 0) {
        shopping.innerHTML =
            `
    <div class="nocart">
            <h1><i class="fa-solid fa-heart-crack"></i></h1>
            <h5 >Shopping cart is empty !</h5>
            <p >push some products into your cart</p>
            <div>
                <a href="home.html" class="btn btn-warning text-end">Back to Home</a>
            </div>
        </div>
    `    }
}
function clearcart() {
    cart = ""
    localStorage.removeItem("cart")
    if (!cart || cart.length === 0) {
        shopping.innerHTML =
            `
    <div class="nocart">
            <h2><i class="fa-solid fa-heart-crack"></i></h2>
            <h5 class="text-white">Shopping cart is empty !</h5>
            <p class="text-white">push some products into your cart</p>
            <div class="text-center">
                <a href="home.html" class="btn btn-warning text-end">Back to Home</a>
            </div>
        </div>
    `    }
}