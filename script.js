// --------------------------------------------------
let savedName = "";
let savedUser = "";
let savedPass = "";

// --------------------------------------------------
// SIGNUP PAGE
// --------------------------------------------------
let signupForm = document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("f_name").value;
        let email = document.getElementById("email").value;
        let address = document.getElementById("address").value;
        let user = document.getElementById("su_username").value;
        let pass = document.getElementById("su_passwd").value;

        if (name === "" || email === "" || address === "" || user === "" || pass === "") {
            document.getElementById("msg").innerText = "Please fill all fields";
            document.getElementById("msg").style.color = "red";
            return;
        }

        savedName = name;
        savedUser = user;
        savedPass = pass;

        document.getElementById("msg").innerText = "Account Created!";
        document.getElementById("msg").style.color = "green";

        setTimeout(function () {
            window.location.href = "index.html";
        }, 1000);
    });
}


// --------------------------------------------------
// LOGIN PAGE
// --------------------------------------------------

let defaultUser = "admin";
let defaultPass = "1234";

let loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let user = document.getElementById("li_username").value;
        let pass = document.getElementById("li_passwd").value;

        let msg = document.getElementById("msg");

        if (
            (user === defaultUser && pass === defaultPass) ||
            (user === savedUser && pass === savedPass)
        ) {
            msg.innerText = "Login Successful!";
            msg.style.color = "green";

            setTimeout(function () {
                window.location.href = "index.html";
            }, 1000);
        } else {
            msg.innerText = "Invalid username and password";
            msg.style.color = "red";
        }
    });
}


// --------------------------------------------------
// ORDER PAGE FEEDBACK
// --------------------------------------------------
let orderForm = document.getElementById("orderForm");

if (orderForm) {
    orderForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let msg = document.getElementById("msg");
        msg.innerText = "Order Placed Successfully!";
        msg.style.color = "green";

        setTimeout(function () {
            msg.innerText = "";
            orderForm.reset();
        }, 1500);
    });
}


// --------------------------------------------------
// CONTACT PAGE FEEDBACK
// --------------------------------------------------
let contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let status = document.getElementById("contact_status");
        status.innerText = "Message Sent!";
        status.style.color = "green";

        setTimeout(function () {
            status.innerText = "";
            contactForm.reset();
        }, 1500);
    });
}

// --------------------------------------------------
// DROPDOWN LIST
// --------------------------------------------------
let pastryItems = ["Chocolate Truffle", "Black Forest", "Tiramisu"];
let cakeItems = ["Fruit Cake", "Red Velvet", "Cheesecake"];
let breadItems = ["Country Loaf", "Croissant", "Bunmaska"];
let cookieItems = ["Choco Chip", "Oatmeal Raisin", "Coconut Cookie", "Almond Cookie"];

function loadItems() {
    let cat = document.getElementById("order_category").value;
    let itemList = document.getElementById("order_items");

    itemList.innerHTML = "";

    if (cat === "") {
        let op = document.createElement("option");
        op.text = "Select category first";
        itemList.add(op);
        return;
    }

    let selectedArray = [];

    if (cat === "Pastry") {
        selectedArray = pastryItems;
    } else if (cat === "Cakes") {
        selectedArray = cakeItems;
    } else if (cat === "Breads") {
        selectedArray = breadItems;
    } else if (cat === "Cookies") {
        selectedArray = cookieItems;
    }

    for (let i = 0; i < selectedArray.length; i++) {
        let option = document.createElement("option");
        option.text = selectedArray[i];
        itemList.add(option);
    }
}