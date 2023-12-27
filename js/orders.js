let get = localStorage.getItem('orders')
let orders = JSON.parse(get)
let ordersd = document.querySelector(".orders")
let order = document.querySelector(".orders .table tbody")
function showdataorders() {
    let sum = 0
    orders.map((ele, index) => {
        sum += (ele.price * orders.length)
        order.innerHTML += `
        <tr >
            <td>${index}</td>
            <td>${ele.title}</td>
            <td>${ele.description}</td>
            <td>${+ele.price}</td>
            <td><img class="tdimg" src=${ele.ImageUrl} /></td>
            <td>1</td>
            <td>T.P</td>
            <td style=" cursor: pointer;" onclick="deletefromorders(${ele.id})">clear</td>
        </tr>`
    });
    // <td>${order.itemquantity}</td>
    // <td>${+order.price * order.itemquantity}</td>
}
if (orders && orders.length > 0) {
    showdataorders()
    // console.log(orders);
}
else {
    ordersd.innerHTML = `
    <div class="nocart">
    <h1><i class="fa-solid fa-heart-crack"></i></h1>
    <h5 >Shopping cart is empty !</h5>
    <p >push some products into your cart</p>
    <div>
        <a href="home.html" class="btn btn-warning text-end">Back to Home</a>
    </div>
</div>`
}
function deletefromorders(a) {
    const objWithIdIndex = orders.findIndex((obj) => obj.id === a)
    orders.splice(objWithIdIndex, 1)
    console.log(orders);
    localStorage.setItem('orders', JSON.stringify(orders))
    // order.innerHTML = ''
    showdataorders()
    if (!orders || orders.length === 0) {
        window.location.reload()
    }
}