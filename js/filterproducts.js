let productsc = document.querySelector(".products");
let filterdata = document.querySelector('.filter>h6')
let get = localStorage.getItem('cart')
let cart = JSON.parse(get)
// let products;
// fetch("../json/products.json")
//     .then(res => res.json())
//     .then((productsdata) => showinfo(productsdata))
// function showinfo(data) {
//     // console.log(data.products);
//     products = data.products
//     console.log(products);
// }

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
}
shuffleproducts = shuffle(products)
// console.log(shuffleproducts);

function displayproduct() {
    products.map(ele => {
        if (ele.id < 40) {
            productsc.innerHTML += `
    <div class="product-card">
    <img src="${ele.ImageUrl}" class="card-img" alt="">
                <h2 class="card-title">${ele.title}</h2>
                <p class="card-desc">${ele.description}</p>
                <p class="card-price">${ele.price} EGB</p>
                <div class="add-to-cart">
                <i class="fa-solid fa-cart-shopping" onclick="addtocart(${ele.id})"></i>
                <i class="fa fa-heart i-heart"></i>
                <i class="fa fa-search" tabindex="0"></i>
            </div>
                        </div>
    `}
    })
}
displayproduct()
let search = document.querySelector('.click')
let select = document.querySelector('.form-select')
select.addEventListener("change", function filter(e) {
    let arr = [];
    if (e.target.value !== '') {
        // console.log(arr);
        products.filter((ele) => {
            if (e.target.value === ele.category) {
                arr.push(ele)
                productsc.innerHTML = ``
            }
        })
        filterdata.innerText = `All ${e.target.value}`
        arr.map((ele) => {
            productsc.innerHTML += `
                <div class="product-card">
                <img src="${ele.ImageUrl}" class="card-img" alt="">
                <h2 class="card-title">${ele.title}</h2>
                <p class="card-desc">${ele.description}</p>
                <p class="card-price">${ele.price} EGB</p>
                <div class="add-to-cart">
                <i class="fa-solid fa-cart-shopping" onclick="addtocart(${ele.id})"></i>
                <i class="fa fa-heart i-heart"></i>
                <i class="fa fa-search" tabindex="0"></i>
            </div>
                        </div>
                `})
    }
    else {
        filterdata.innerText = `All Products`
        productsc.innerHTML = ``
        displayproduct()
    }
})
