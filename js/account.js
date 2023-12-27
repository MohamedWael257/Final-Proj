/////////////move betweeen forms///////
const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const openform = document.querySelector('.btnLogin-popup');
const hideform = document.querySelector('.icon-close');
const close_btn = document.querySelector("#close-outline")

close_btn.addEventListener('click', () => {
    window.location.replace("index.html")
    // console.log("eee");
})
registerlink.addEventListener('click', () => {
    wrapper.classList.add('active');

});
loginlink.addEventListener('click', () => {
    // var exist= prompt("If you already have an email .Please Write your email")
    // var emaillogg=document.getElementsByName("ee")[0];
    // if(exist!="")
    // {
    //     wrapper.classList.remove('active');
    //     emaillogg.value=exist;
    // }
    // else
    // {
    //     alert("Try Again")
    // }
    wrapper.classList.remove('active');
    // var emailtext=document.getElementsByName("otpcode")[0].value;
    // var emaillogg=document.getElementsByName("ee")[0];
    // emaillogg.value=emailtext;
});

// openform.addEventListener('click', () => {
//     wrapper.classList.add('active-popup');
// });
hideform.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active-otopup');

});
///////////////localstorage data of register //////////////////
let input_box = document.querySelectorAll(".input-box input")
let input_error = document.querySelectorAll(".input-box error")

let submit_btn = document.querySelector("#register_btn")

let username = document.querySelector(".register #username")
let phone = document.querySelector(".register #phone")
let email = document.querySelector(".register #email")
let password = document.querySelector(".register #password")
let confpassword = document.querySelector(".register #confpassword")
let carimage = document.querySelector(".register #carimage")
let carmodel = document.querySelector(".register #carmodel")


let erroruser = document.querySelector(".erroruser")
let errorphone = document.querySelector(".errorphone")
let erroremail = document.querySelector(".erroremail")
let errorpassword = document.querySelector(".errorpassword")
let errorconfpassword = document.querySelector(".errorconfpassword")
let errorcarimage = document.querySelector(".errorcarimage")
let errorcarmodel = document.querySelector(".errorcarmodel")


let passwordstrength = document.querySelector(".strength")

// let users = []
let id = 0;
let users;
if (localStorage.user != null) {
    users = JSON.parse(localStorage.user)
    id = users.length
}
else {
    users = [];
    id = 0
}
submit_btn.addEventListener("click", function (e) {
    // validtion();
    let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    let emailw = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    let validateUser = username.value !== "" && username.value.length > 6 && username.value.length < 20
    let validateEmail = email.value !== "" && email.value.match(emailw)
    let validatePass = password.value !== "" && password.value.match(passw)
    let validateconfPass = confpassword.value !== "" && confpassword.value === password.value
    let validatePhone = phone.value !== "" && phone.value.length === 11
    let validateCarmodel = carmodel.value !== "" && carmodel.value.length > 2 && carmodel.value.length < 6
    const findemail = users.findIndex((obj) => obj.email === email.value)
    const findeusername = users.findIndex((obj) => obj.username === username.value)
    const findephone = users.findIndex((obj) => obj.phone === phone.value)
    if (validateUser && validatePass && validateEmail && validateconfPass && validatePhone && validateCarmodel && findemail < 0 && findeusername < 0 && findephone < 0) {
        let userUI = {
            id: id,
            username: username.value,
            phone: phone.value,
            email: email.value,
            password: password.value,
            carModel: carmodel.value
        }
        id += 1
        users.push(userUI)
        localStorage.setItem('user', JSON.stringify(users))
        console.log(users);
        let account = {
            username: username.value,
            email: email.value,
            password: password.value
        }
        localStorage.setItem("account", JSON.stringify(account));
        window.replace("home.html")
        // wrapper.classList.add("active-otopup")
    }
    // else {
    //     e.preventDefault()
    //     // email.value = ""
    // }


});
function validtion() {
    validateUsername(username, erroruser)
    validateEmail(email, erroremail)
    validatePhone(phone, errorphone)
    validatePass(password, errorpassword)
    validateconfPass(confpassword, password, errorconfpassword)
    validateCarmodel(carmodel, errorcarmodel)
}
function validateUsername(inputfield, errorfield) {
    const findeusername = users.findIndex((obj) => obj.username === inputfield.value)
    if (inputfield.value === '') {
        errorfield.innerText = "you must write your username *";
    }
    else if (inputfield.value.length < 7 || inputfield.value.length > 19) {
        errorfield.innerText = "username must be between 7 and 14 chars *";
        inputfield.value = ''
    }
    else if (findeusername > -1) {
        errorfield.innerText = "this username is already used *";
        inputfield.value = ''
    }
}

function validateEmail(inputfield, errorfield) {
    let emailw = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const findemail = users.findIndex((obj) => obj.email === inputfield.value)
    if (inputfield.value === '') {
        errorfield.innerText = "you must write your email *";
    }
    else if (!inputfield.value.match(emailw)) {
        errorfield.innerText = "not valid email *";
        inputfield.value = ''
    }
    else if (findemail > -1) {
        errorfield.innerText = "this email is already used *";
        inputfield.value = ''
    }
}

function validatePhone(inputfield, errorfield) {
    const findephone = users.findIndex((obj) => obj.phone === inputfield.value)
    if (inputfield.value === '') {
        errorfield.innerText = "you must write your phone *";
    }
    else if (inputfield.value.length < 11) {
        errorfield.innerText = "not valid phone *";
        inputfield.value = ''
    }
    else if (findephone > -1) {
        errorfield.innerText = "this phone is already used *";
        inputfield.value = ''
    }

}
function validatePass(inputfield, errorfield) {
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    if (inputfield.value === '') {
        errorfield.innerText = "you must write your password *";
    }
    else if (!inputfield.value.match(passw)) {
        errorfield.innerText = "not valid password *";
        inputfield.value = ''

    }

}
function validateconfPass(inputfield, inputfield2, errorfield) {
    if (inputfield.value === '') {
        errorfield.innerText = "you must write your password  *";
    }
    else if (inputfield.value !== inputfield2.value) {
        errorfield.innerText = "not matched password  *";
        inputfield.value = ''
    }
}
function validateCarmodel(inputfield, errorfield) {
    if (inputfield.value === '') {
        errorfield.innerText = "you must write your Car Model *";
    }
    else if (inputfield.value.length < 3 || inputfield.value.length > 6) {
        errorfield.innerText = "username must be between 3 and 6 chars *";
        inputfield.value = ''
    }

}
password.addEventListener('keyup', function () {

    if (password.value.length === 0) {
        passwordstrength.style.width = '0%'
        passwordstrength.style.backgroundColor = 'unset'
    }
    if (password.value.length > 2) {
        passwordstrength.style.width = '10%'
        passwordstrength.style.backgroundColor = 'red'
    }
    if (password.value.length > 4) {
        passwordstrength.style.width = '20%'
        passwordstrength.style.backgroundColor = 'red'
    }
    if (password.value.length > 6) {
        passwordstrength.style.width = '30%'
        passwordstrength.style.backgroundColor = 'yellow'
    }
    if (password.value.length > 8) {
        passwordstrength.style.width = '40%'
        passwordstrength.style.backgroundColor = 'yellow'
    }
    if (password.value.length > 10) {
        passwordstrength.style.width = '60%'
        passwordstrength.style.backgroundColor = 'green'
    }
    if (password.value.length > 12) {
        passwordstrength.style.width = '80%'
        passwordstrength.style.backgroundColor = 'green'
    }
    if (password.value.length > 14) {
        passwordstrength.style.width = '100%'
        passwordstrength.style.backgroundColor = 'green'

    }

})
input_box.forEach(function (input) {
    input.addEventListener('keyup', function () {
        erroruser.innerText = ""
        erroremail.innerText = ""
        errorphone.innerText = ""
        errorpassword.innerText = ""
        errorconfpassword.innerText = ""
    })

})

///////////////////localstorage data of login //////////////////////////
let loginusername = document.querySelector(".login #emaill")
let loginpassword = document.querySelector(".login #passwordd")
let login_btn = document.querySelector("#login_btn")
login_btn.addEventListener("click", function (e) {
    // console.log(loginusername.value);
    users.filter((ele) => {
        if ((ele.username === loginusername.value || ele.email === loginusername.value) && ele.password === loginpassword.value) {
            let account = {
                username: ele.username,
                email: ele.email,
                password: ele.password
            }
            localStorage.setItem("account", JSON.stringify(account));
            window.replace("home.html")
        }
        else if (loginusername.value === "admin" && loginpassword.value === "admin") {
            let admin = {
                username: "admin",
                password: "admin"
            }
            localStorage.removeItem("account")
            localStorage.setItem("admin", JSON.stringify(admin));
            window.replace("home.html")

        }
        // else {
        //     e.preventDefault()
        //     window.replace("home.html")
        // }
    })

});

////////////////opt vertification code//////////////////
// var codetext=Math.floor((Math.random()*716489)+149348);
// alert(codetext);
var codetext = "789548"
let otp_code = document.querySelector("#opt_code");
otp_code.addEventListener('click', function (e) {
    e.preventDefault();
    var codemo = document.getElementsByName("codetest")[0].value;
    if (codemo == "") {
        alert("Please Enter your code!!")
    }
    else if (codetext == codemo) {
        window.location.replace("home.html");
    }
    else {
        alert("Wrong Code. Try again!!")
    }
    //   alert(emailtext);
    // Email.send({
    //     SecureToken : "a720abe6-21e6-4588-987b-6d52b8ed8d37",
    //     // To : emailtext,
    //     To:'mohamedwael44466@gmail.com',
    //     From : "mohamedwael4553@gmail.com",
    //     Subject : "The Verification code",
    //     Body :"789548"
    // }).then(
    //     message => alert("Success send message")
    // );

});

// function validation(){
//   var inputfield=document.getElementsByName("otpuser")[0];
//   var inputfieldd=document.getElementsByName("otpcode")[0];
//   var inputfielddd=document.getElementsByName("otbpass")[0];

//   // var passw=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
//   var passw=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
//   var emailw= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//   if(inputfield.value!="" &&inputfield.value.length>6 && inputfield.value.length<20&&
//   inputfielddd.value!="" &&inputfielddd.value.match(passw)&&
//   inputfieldd.value!="" && inputfielddd.value.match(emailw)){
//     var emailotp=document.getElementById("otpmessage");
//     emailotp.innerText="We've sent vertification code to your email : "+inputfieldd.value;
//     wrapper.classList.add('active-otopup');
//       // alert('Please Fill The Form!!');
//   }
//   // else if((!inputfielddd.value.match(passw))&&(!inputfieldd.value.match(emailw)))
//   // {
//   //   alert("There are something Wrong. Check your form");
//   // }
//   else
//   {
//     alert('There are something Wrong. Check your form!!');
//     // var emailtext=document.getElementsByName("otpcode")[0].value;
//     // var emailotp=document.getElementById("otpmessage");
//     // emailotp.innerText="We've sent vertification code to your email : "+inputfieldd.value;
//     // wrapper.classList.add('active-otopup');
//   }
// }
let account = localStorage.getItem("account")
if (account && account.length > 0) {
    window.location.replace("home.html")
}
