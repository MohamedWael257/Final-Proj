let product_to_cart;
if (localStorage.cart != null) {
    product_to_cart = JSON.parse(localStorage.cart)
}
else {
    product_to_cart = [];
}
localStorage.setItem('cart', JSON.stringify(product_to_cart))
function addtocart(a) {
    const findid = product_to_cart.findIndex((obj) => obj.id === a)
    products.filter(ele => {
        if (ele.id === a) {
            if (findid <= -1) {
                product_to_cart.push(ele)
                localStorage.setItem('cart', JSON.stringify(product_to_cart))
                console.log(product_to_cart);
            }
        }
    })
    // console.log(cart.length);
    if (product_to_cart && product_to_cart.length > 0) {
        cartlength.innerHTML = `${product_to_cart.length}`
        // alert(`added to cart`)
    }
}