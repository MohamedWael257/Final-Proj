let account_div = document.querySelector(".type-account")
// let container = document.querySelector(".container")
let close_btn = document.querySelectorAll(".close")
let member_btn = document.querySelectorAll(".make-member")
let account_user = localStorage.getItem("account")
let account = JSON.parse(account_user)
// // if (account && account.length > 0) {
if (account) {
    window.location.replace("home.html")
}
member_btn.forEach((btn) => {
    btn.addEventListener("click", () => {
        account_div.classList.add("active")
        // container.classList.add("act")
    })
})
close_btn.forEach((btn) => {

    btn.addEventListener("click", () => {
        account_div.classList.remove("active")
    })
})