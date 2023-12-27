
let cardinner = document.querySelector(".cardd-inner")

let cardinnerholdrr = document.querySelector(".front .name .name-card")
let cardinnernumber = document.querySelector(".front .card-no .num")
let cardinnerexpiresmonth = document.querySelector(".front .name .expires-card-month")
let cardinnerexpiresyear = document.querySelector(".front .name .expires-card-year")
let cardinnercode = document.querySelector(".back .card-cvv .code-card")

let cardholder = document.getElementById("card-holder")
let cardnumber = document.getElementById("card-no")
let cardcode = document.getElementById("card-code")
let monthexpire = document.getElementById("Month")
let yearexpire = document.getElementById("year")

cardholder.addEventListener("keyup", function () {
    cardinnerholdrr.innerText = cardholder.value;
})
cardnumber.addEventListener("keyup", function () {
    cardinnernumber.innerText = cardnumber.value;
})
cardcode.addEventListener("keyup", function () {
    cardinnercode.innerHTML = cardcode.value

})
monthexpire.addEventListener("change", function (e) {
    cardinnerexpiresmonth.innerText = e.target.value;
})
yearexpire.addEventListener("change", function (e) {
    cardinnerexpiresyear.innerText = e.target.value;
})
cardcode.addEventListener("mouseenter", function () {
    cardinner.classList.add("active")
})
cardcode.addEventListener("mouseleave", function () {
    cardinner.classList.remove("active")
})
let get = localStorage.getItem('cart')
let cart = JSON.parse(get)
let priceofpayment = document.querySelector(".priceofpayment table")

if (cart || cart.lentgh > 0) {
    cart.map((ele) => {
        priceofpayment.innerHTML += `
    <tr>
        <th>${ele.title}</th>
        <th>1</th>
        <th>${ele.price}</th>
    </tr>
    `
    })
}
let order;
if (localStorage.orders != null) {
    order = JSON.parse(localStorage.orders)
}
else {
    order = [];
}
document.querySelector("input[type=submit]").addEventListener('click', function () {
    if (!cart) {
        window.location.replace("home.html")
    }
    else {
        cart.map(ele => order.push(ele))
        localStorage.setItem('orders', JSON.stringify(order))
        localStorage.removeItem('cart')
        // window.open("home.html")
        window.location.replace("orders.html")
    }

})