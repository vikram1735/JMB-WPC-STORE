/* ==========================================
   STORE SETTINGS
========================================== */

const WHATSAPP_NUMBER = "917704096301";


/* ==========================================
   PRODUCT DATABASE
========================================== */

const products = [

/* =======================
   WPC DOORS
======================= */

{
id:1,
name:"Classic Panel Door",
category:"door",
subCategory:"Classic Door",
price:10999,
image:"images/products/door1.jpg",
description:"Classic panel style WPC door."
},

{
id:2,
name:"Classic Flush Door",
category:"door",
subCategory:"Classic Door",
price:7499,
image:"images/products/door2.jpg",
description:"Simple and elegant classic flush WPC door."
},

{
id:3,
name:"Classic Textured Door",
category:"door",
subCategory:"Classic Door",
price:12999,
image:"images/products/door3.jpg",
description:"Classic textured WPC door."
},

{
id:4,
name:"Classic Plain Solid Door",
category:"door",
subCategory:"Classic Door",
price:6999,
image:"images/products/door4.jpg",
description:"Classic plain solid WPC door."
},

{
id:5,
name:"Classic Carving Door",
category:"door",
subCategory:"Classic Door",
price:22999,
image:"images/products/door5.jpg",
description:"Decorative classic carving WPC door."
},

{
id:6,
name:"Classic Grain Finish Door",
category:"door",
subCategory:"Classic Door",
price:8799,
image:"images/products/door6.jpg",
description:"Classic wood grain finish WPC door."
},

{
id:7,
name:"Double Panel Door",
category:"door",
subCategory:"Double Door",
price:18999,
image:"images/products/door7.jpg",
description:"Premium double panel WPC door."
},

{
id:8,
name:"Double Carving Door",
category:"door",
subCategory:"Double Door",
price:29999,
image:"images/products/door8.jpg",
description:"Designer double carving WPC door."
},

{
id:9,
name:"Double Textured Door",
category:"door",
subCategory:"Double Door",
price:21999,
image:"images/products/door9.jpg",
description:"Double textured WPC door."
},

{
id:10,
name:"Double Solid Door",
category:"door",
subCategory:"Double Door",
price:15999,
image:"images/products/door10.jpg",
description:"Strong double solid WPC door."
},

{
id:11,
name:"Double Designer Door",
category:"door",
subCategory:"Double Door",
price:24999,
image:"images/products/door11.jpg",
description:"Premium designer double WPC door."
},

{
id:12,
name:"Double Flush Door",
category:"door",
subCategory:"Double Door",
price:16499,
image:"images/products/door12.jpg",
description:"Double flush WPC door."
},

{
id:13,
name:"Modern CNC Door",
category:"door",
subCategory:"Modern Door",
price:14999,
image:"images/products/door13.jpg",
description:"Modern CNC pattern WPC door."
},

{
id:14,
name:"Modern Grooved Door",
category:"door",
subCategory:"Modern Door",
price:12499,
image:"images/products/door14.jpg",
description:"Modern grooved WPC door."
},

{
id:15,
name:"Modern Wave Pattern Door",
category:"door",
subCategory:"Modern Door",
price:16999,
image:"images/products/door15.jpg",
description:"Modern wave pattern WPC door."
},

{
id:16,
name:"Modern Solid Door",
category:"door",
subCategory:"Modern Door",
price:18499,
image:"images/products/door16.jpg",
description:"Modern solid WPC door."
},

{
id:17,
name:"Modern Matte Finish Door",
category:"door",
subCategory:"Modern Door",
price:13999,
image:"images/products/door17.jpg",
description:"Modern matte finish WPC door."
},

{
id:18,
name:"Modern Laminate Door",
category:"door",
subCategory:"Modern Door",
price:11499,
image:"images/products/door18.jpg",
description:"Modern laminate finish WPC door."
},


/* =======================
   DOOR FRAMES
======================= */

{
id:19,
name:"3 inch Classic Frame",
category:"doorframe",
subCategory:"Classic Frame",
price:2999,
image:"images/products/frame1.jpg",
description:"3 inch classic WPC door frame."
},

{
id:20,
name:"4 inch Classic Frame",
category:"doorframe",
subCategory:"Classic Frame",
price:3999,
image:"images/products/frame2.jpg",
description:"4 inch classic WPC door frame."
},

{
id:21,
name:"5 inch Classic Frame",
category:"doorframe",
subCategory:"Classic Frame",
price:4999,
image:"images/products/frame3.jpg",
description:"5 inch classic WPC door frame."
},

{
id:22,
name:"Heavy Classic Frame",
category:"doorframe",
subCategory:"Classic Frame",
price:6499,
image:"images/products/frame4.jpg",
description:"Heavy duty classic WPC frame."
},

{
id:23,
name:"Textured Classic Frame",
category:"doorframe",
subCategory:"Classic Frame",
price:5499,
image:"images/products/frame5.jpg",
description:"Textured classic WPC frame."
},

{
id:24,
name:"Steel Classic Frame",
category:"doorframe",
subCategory:"Classic Frame",
price:3499,
image:"images/products/frame6.jpg",
description:"Steel classic frame."
},

{
id:25,
name:"4 inch Double Frame",
category:"doorframe",
subCategory:"Double Frame",
price:5999,
image:"images/products/frame7.jpg",
description:"4 inch double WPC frame."
},

{
id:26,
name:"5 inch Double Frame",
category:"doorframe",
subCategory:"Double Frame",
price:7499,
image:"images/products/frame8.jpg",
description:"5 inch double WPC frame."
},

{
id:27,
name:"Heavy Double Frame",
category:"doorframe",
subCategory:"Double Frame",
price:8999,
image:"images/products/frame9.jpg",
description:"Heavy double WPC frame."
},

{
id:28,
name:"Designer Double Frame",
category:"doorframe",
subCategory:"Double Frame",
price:10999,
image:"images/products/frame10.jpg",
description:"Designer double WPC frame."
},

{
id:29,
name:"Textured Double Frame",
category:"doorframe",
subCategory:"Double Frame",
price:9499,
image:"images/products/frame11.jpg",
description:"Textured double WPC frame."
},

{
id:30,
name:"Steel Double Frame",
category:"doorframe",
subCategory:"Double Frame",
price:11999,
image:"images/products/frame12.jpg",
description:"Steel double frame."
},

{
id:31,
name:"Modern Slim Frame",
category:"doorframe",
subCategory:"Modern Frame",
price:4999,
image:"images/products/frame13.jpg",
description:"Modern slim WPC frame."
},

{
id:32,
name:"Modern Groove Frame",
category:"doorframe",
subCategory:"Modern Frame",
price:6499,
image:"images/products/frame14.jpg",
description:"Modern groove WPC frame."
},

{
id:33,
name:"Modern CNC Frame",
category:"doorframe",
subCategory:"Modern Frame",
price:8999,
image:"images/products/frame15.jpg",
description:"Modern CNC WPC frame."
},

{
id:34,
name:"Modern Laminate Frame",
category:"doorframe",
subCategory:"Modern Frame",
price:7499,
image:"images/products/frame16.jpg",
description:"Modern laminate WPC frame."
},

{
id:35,
name:"Modern Heavy Frame",
category:"doorframe",
subCategory:"Modern Frame",
price:9999,
image:"images/products/frame17.jpg",
description:"Modern heavy WPC frame."
},

{
id:36,
name:"Modern Steel Frame",
category:"doorframe",
subCategory:"Modern Frame",
price:11499,
image:"images/products/frame18.jpg",
description:"Modern steel frame."
},


/* =======================
   WINDOWS
======================= */

{
id:37,
name:"Classic Single Window",
category:"window",
subCategory:"Classic Window",
price:4999,
image:"images/products/window1.jpg",
description:"Classic single WPC window."
},

{
id:38,
name:"Classic Wooden Look Window",
category:"window",
subCategory:"Classic Window",
price:5999,
image:"images/products/window2.jpg",
description:"Classic wooden look WPC window."
},

{
id:39,
name:"Classic Openable Window",
category:"window",
subCategory:"Classic Window",
price:6499,
image:"images/products/window3.jpg",
description:"Classic openable WPC window."
},

{
id:40,
name:"Classic Grill Window",
category:"window",
subCategory:"Classic Window",
price:7499,
image:"images/products/window4.jpg",
description:"Classic WPC grill window."
},

{
id:41,
name:"Classic Textured Window",
category:"window",
subCategory:"Classic Window",
price:6999,
image:"images/products/window5.jpg",
description:"Classic textured WPC window."
},

{
id:42,
name:"Classic Steel Window",
category:"window",
subCategory:"Classic Window",
price:4499,
image:"images/products/window6.jpg",
description:"Classic steel window."
},

{
id:43,
name:"Double Sliding Window",
category:"window",
subCategory:"Double Window",
price:8999,
image:"images/products/window7.jpg",
description:"Double sliding WPC window."
},

{
id:44,
name:"Double Openable Window",
category:"window",
subCategory:"Double Window",
price:9499,
image:"images/products/window8.jpg",
description:"Double openable WPC window."
},

{
id:45,
name:"Double Steel Window",
category:"window",
subCategory:"Double Window",
price:10999,
image:"images/products/window9.jpg",
description:"Double steel window."
},

{
id:46,
name:"Double Grill Window",
category:"window",
subCategory:"Double Window",
price:11499,
image:"images/products/window10.jpg",
description:"Double grill WPC window."
},

{
id:47,
name:"Double Textured Window",
category:"window",
subCategory:"Double Window",
price:9999,
image:"images/products/window11.jpg",
description:"Double textured WPC window."
},

{
id:48,
name:"Double Window",
category:"window",
subCategory:"Double Window",
price:12999,
image:"images/products/window12.jpg",
description:"Premium double WPC window."
},

{
id:49,
name:"Modern Sliding Window",
category:"window",
subCategory:"Modern Window",
price:9999,
image:"images/products/window13.jpg",
description:"Modern sliding WPC window."
},

{
id:50,
name:"Modern CNC Window",
category:"window",
subCategory:"Modern Window",
price:12499,
image:"images/products/window14.jpg",
description:"Modern CNC WPC window."
},

{
id:51,
name:"Modern Designer Window",
category:"window",
subCategory:"Modern Window",
price:14999,
image:"images/products/window15.jpg",
description:"Modern designer WPC window."
},

{
id:52,
name:"Modern Laminate Window",
category:"window",
subCategory:"Modern Window",
price:11999,
image:"images/products/window16.jpg",
description:"Modern laminate WPC window."
},

{
id:53,
name:"Modern Glass + WPC Window",
category:"window",
subCategory:"Modern Window",
price:15999,
image:"images/products/window17.jpg",
description:"Modern glass and WPC combination window."
},

{
id:54,
name:"Modern Steel Window",
category:"window",
subCategory:"Modern Window",
price:18499,
image:"images/products/window18.jpg",
description:"Modern steel window."
},


/* =======================
   BEDS
======================= */

{
id:55,
name:"Standard Single Bed",
category:"bed",
subCategory:"Single Bed",
price:7999,
image:"images/products/bed1.jpg",
description:"Standard WPC single bed."
},

{
id:56,
name:"Premium Single Bed",
category:"bed",
subCategory:"Single Bed",
price:9499,
image:"images/products/bed2.jpg",
description:"Premium WPC single bed."
},

{
id:57,
name:"Storage Single Bed",
category:"bed",
subCategory:"Single Bed",
price:11999,
image:"images/products/bed3.jpg",
description:"Single bed with storage."
},

{
id:58,
name:"Minimalist Single Bed",
category:"bed",
subCategory:"Single Bed",
price:8999,
image:"images/products/bed4.jpg",
description:"Minimalist WPC single bed."
},

{
id:59,
name:"Standard Double Bed",
category:"bed",
subCategory:"Double Bed",
price:11999,
image:"images/products/bed5.jpg",
description:"Standard WPC double bed."
},

{
id:60,
name:"Premium Double Bed",
category:"bed",
subCategory:"Double Bed",
price:14499,
image:"images/products/bed6.jpg",
description:"Premium WPC double bed."
},

{
id:61,
name:"Storage Double Bed",
category:"bed",
subCategory:"Double Bed",
price:17999,
image:"images/products/bed7.jpg",
description:"Double bed with storage."
},

{
id:62,
name:"Designer Double Bed",
category:"bed",
subCategory:"Double Bed",
price:19499,
image:"images/products/bed8.jpg",
description:"Designer WPC double bed."
},

{
id:63,
name:"Modern Double Bed",
category:"bed",
subCategory:"Double Bed",
price:16999,
image:"images/products/bed9.jpg",
description:"Modern WPC double bed."
},

{
id:64,
name:"Standard King Bed",
category:"bed",
subCategory:"King Size Bed",
price:15999,
image:"images/products/bed10.jpg",
description:"Standard king size WPC bed."
},

{
id:65,
name:"Designer King Bed",
category:"bed",
subCategory:"King Size Bed",
price:25999,
image:"images/products/bed11.jpg",
description:"Premium designer king size bed."
},

{
id:66,
name:"Modern King Bed",
category:"bed",
subCategory:"King Size Bed",
price:20999,
image:"images/products/bed12.jpg",
description:"Modern king size WPC bed."
}

];


/* ==========================================
   CART
========================================== */

let cart = [];
let currentCategory = "all";


/* ==========================================
   CATEGORY NAME
========================================== */

function getCategoryName(category){

    const names = {
        door:"WPC Door",
        doorframe:"WPC Door Frame",
        window:"WPC Window",
        bed:"WPC Bed"
    };

    return names[category] || category;
}


/* ==========================================
   DISPLAY PRODUCTS
========================================== */

function displayProducts(list){

    const grid = document.getElementById("productGrid");

    grid.innerHTML = "";

    if(list.length === 0){

        grid.innerHTML = `
            <div style="
                grid-column:1/-1;
                text-align:center;
                padding:60px;
            ">

                <h3>No Product Found</h3>

                <p style="color:#777;margin-top:8px;">
                    Try another product name or category.
                </p>

            </div>
        `;

        return;
    }


    list.forEach(product => {

        grid.innerHTML += `

            <div class="product">

                <div class="product-image">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        onerror="this.src='images/no-image.jpg'"
                    >

                    <span class="badge">
                        ${product.subCategory}
                    </span>

                </div>


                <div class="product-info">

                    <div class="category-name">
                        ${getCategoryName(product.category)}
                    </div>

                    <h3>
                        ${product.name}
                    </h3>

                    <p class="description">
                        ${product.description}
                    </p>


                    <div class="product-bottom">

                        <div class="price">
                            ₹${product.price.toLocaleString("en-IN")}
                        </div>

                        <button
                            class="add"
                            onclick="addToCart(${product.id})"
                        >
                            +
                        </button>

                    </div>

                </div>

            </div>

        `;

    });

}


/* ==========================================
   FILTER
========================================== */

function filterProducts(category, button = null){

    currentCategory = category;

    if(button){

        document
            .querySelectorAll(".filter")
            .forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");
    }


    let filtered;

    if(category === "all"){

        filtered = products;

    }else{

        filtered = products.filter(
            product => product.category === category
        );

    }


    displayProducts(filtered);


    document
        .getElementById("products")
        .scrollIntoView({
            behavior:"smooth"
        });

}


/* ==========================================
   SEARCH
========================================== */

function searchProducts(){

    const search =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();


    let filtered = products;


    if(currentCategory !== "all"){

        filtered = filtered.filter(
            p => p.category === currentCategory
        );

    }


    if(search){

        filtered = filtered.filter(p =>

            p.name.toLowerCase().includes(search) ||

            p.subCategory.toLowerCase().includes(search) ||

            p.description.toLowerCase().includes(search)

        );

    }


    displayProducts(filtered);

}


/* ==========================================
   ADD TO CART
========================================== */

function addToCart(id){

    const product =
        products.find(p => p.id === id);

    const existing =
        cart.find(p => p.id === id);


    if(existing){

        existing.quantity++;

    }else{

        cart.push({

            ...product,

            quantity:1

        });

    }


    updateCart();

    openCart();

}


/* ==========================================
   UPDATE CART
========================================== */

function updateCart(){

    const container =
        document.getElementById("cartItems");


    const count =
        cart.reduce(
            (sum,item) => sum + item.quantity,
            0
        );


    const total =
        cart.reduce(
            (sum,item) =>
                sum + (item.price * item.quantity),
            0
        );


    document
        .getElementById("cartCount")
        .textContent = count;


    document
        .getElementById("cartTotal")
        .textContent =
            "₹" + total.toLocaleString("en-IN");


    document
        .getElementById("checkoutTotal")
        .textContent =
            "₹" + total.toLocaleString("en-IN");


    if(cart.length === 0){

        container.innerHTML = `

            <p style="
                text-align:center;
                color:#777;
                margin-top:30px;
            ">
                Your cart is empty.
            </p>

        `;

        return;
    }


    container.innerHTML = "";


    cart.forEach(item => {

        container.innerHTML += `

            <div class="cart-item">

                <img
                    src="${item.image}"
                    onerror="this.src='images/no-image.jpg'"
                >

                <div class="cart-info">

                    <h4>
                        ${item.name}
                    </h4>

                    <div class="cart-price">
                        ₹${item.price.toLocaleString("en-IN")}
                    </div>


                    <div class="quantity">

                        <button
                            onclick="changeQuantity(${item.id},-1)"
                        >
                            -
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
                            onclick="changeQuantity(${item.id},1)"
                        >
                            +
                        </button>

                    </div>


                    <button
                        class="remove"
                        onclick="removeFromCart(${item.id})"
                    >
                        Remove
                    </button>

                </div>

            </div>

        `;

    });

}


/* ==========================================
   QUANTITY
========================================== */

function changeQuantity(id, amount){

    const item =
        cart.find(p => p.id === id);


    if(!item) return;


    item.quantity += amount;


    if(item.quantity <= 0){

        cart =
            cart.filter(
                p => p.id !== id
            );

    }


    updateCart();

}


/* ==========================================
   REMOVE
========================================== */

function removeFromCart(id){

    cart =
        cart.filter(
            p => p.id !== id
        );


    updateCart();

}


/* ==========================================
   OPEN CART
========================================== */

function openCart(){

    document
        .getElementById("cart")
        .classList.add("active");


    document
        .getElementById("overlay")
        .classList.add("active");

}


/* ==========================================
   CLOSE CART
========================================== */

function closeCart(){

    document
        .getElementById("cart")
        .classList.remove("active");


    document
        .getElementById("overlay")
        .classList.remove("active");

}


/* ==========================================
   CHECKOUT
========================================== */

function openCheckout(){

    if(cart.length === 0){

        alert("Your cart is empty!");

        return;
    }


    document
        .getElementById("checkoutModal")
        .classList.add("active");

}


function closeCheckout(){

    document
        .getElementById("checkoutModal")
        .classList.remove("active");

}


/* ==========================================
   WHATSAPP ORDER
========================================== */

function placeOrder(){

    const name =
        document
            .getElementById("customerName")
            .value
            .trim();


    const phone =
        document
            .getElementById("customerPhone")
            .value
            .trim();


    const email =
        document
            .getElementById("customerEmail")
            .value
            .trim();


    const address =
        document
            .getElementById("customerAddress")
            .value
            .trim();


    const note =
        document
            .getElementById("customerNote")
            .value
            .trim();


    if(!name || !phone || !address){

        alert(
            "Please enter your Name, Mobile Number and Address."
        );

        return;
    }


    let message =
        "🛒 *NEW ORDER - JMB WPC STORE*%0A%0A";


    message +=
        "*CUSTOMER DETAILS*%0A";


    message +=
        "Name: " +
        encodeURIComponent(name) +
        "%0A";


    message +=
        "Phone: " +
        encodeURIComponent(phone) +
        "%0A";


    message +=
        "Email: " +
        encodeURIComponent(
            email || "Not provided"
        ) +
        "%0A";


    message +=
        "Address: " +
        encodeURIComponent(address) +
        "%0A%0A";


    message +=
        "*ORDER DETAILS*%0A";


    cart.forEach((item,index) => {

        message +=

            (index + 1) +
            ". " +
            encodeURIComponent(item.name) +
            " × " +
            item.quantity +
            " = ₹" +
            (item.price * item.quantity)
                .toLocaleString("en-IN") +
            "%0A";

    });


    const total =
        cart.reduce(
            (sum,item) =>
                sum + (item.price * item.quantity),
            0
        );


    message +=

        "%0A*TOTAL: ₹" +
        total.toLocaleString("en-IN") +
        "*%0A";


    if(note){

        message +=

            "%0A*Additional Requirement:*%0A" +
            encodeURIComponent(note);

    }


    const url =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        message;


    window.open(
        url,
        "_blank"
    );

}


/* ==========================================
   CONTACT ENQUIRY
========================================== */

function sendEnquiry(){

    const name =
        document
            .getElementById("contactName")
            .value
            .trim();


    const phone =
        document
            .getElementById("contactPhone")
            .value
            .trim();


    const message =
        document
            .getElementById("contactMessage")
            .value
            .trim();


    if(!name || !phone || !message){

        alert(
            "Please enter your Name, Mobile Number and Requirement."
        );

        return;
    }


    const text =

        "Hello JMB WPC STORE,%0A%0A" +

        "I want to make an enquiry.%0A%0A" +

        "Name: " +
        encodeURIComponent(name) +
        "%0A" +

        "Phone: " +
        encodeURIComponent(phone) +
        "%0A" +

        "Requirement: " +
        encodeURIComponent(message);


    window.open(

        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        text,

        "_blank"

    );

}


/* ==========================================
   MOBILE MENU
========================================== */

function toggleMenu(){

    document
        .getElementById("navLinks")
        .classList.toggle("active");

}


/* ==========================================
   INITIALIZE
========================================== */

displayProducts(products);

updateCart();