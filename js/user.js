
let user = document.querySelector('.user')
let account_user = localStorage.getItem("account")
let account = JSON.parse(account_user)
// // if (account && account.length > 0) {
if (account) {
    user.innerHTML = account.username;

}
else {
    // user.innerHTML = account.username;
    window.location.replace("index.html")
}
let getcard = localStorage.getItem('cart')
let cartt = JSON.parse(getcard)
let cartlength = document.querySelector("header .nav-menu a.cart p")
if (cartt) {
    cartlength.innerHTML = `${cartt.length}`
    // cartlength.style.content = `${cart.length}`
}
else {
    cartlength.innerHTML = "0"
    // cartlength.style.content = "none"
}
let logout = document.querySelector('.logout')
logout.addEventListener('click', () => {
    localStorage.removeItem("account")
    window.location.replace("index.html")
})

let nav_menu = document.querySelector(".nav-menu")
let btn = document.querySelector(".btn-h")
btn.addEventListener('click', () => {
    nav_menu.classList.toggle('active')
})