let carts = document.querySelectorAll(".add-cart");

let deleteButton = document.body.querySelectorAll("delete")

let news = document.getElementById('news');






//Function to change main element image to thumbnail image
const divs = document.querySelectorAll('.thumb');
divs.forEach(el => el.addEventListener('click', event => {
   const data = event.target.parentNode.parentNode;
   let src = data.childNodes[1];

   let newsrc = event.target.src
   src.src = newsrc;
   newsrc.src = src;



}));




$('.hiddenInfo').hide();
$('#buttonShow').hide();

// $(".showInfo").click(function () {
//    $("html").animate({ scrollTop: 0 }, "slow");
// });








function openCity(evt, cityName) {
   // Declare all variables
   var i, tabcontent, tablinks;
   $('#productsContainer').hide()



   // Get all elements with class="tabcontent" and hide them
   tabcontent = document.getElementsByClassName("tabcontent");
   for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
   }


   // Get all elements with class="tablinks" and remove the class "active"
   tablinks = document.getElementsByClassName("tablinks");
   for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");

   }


   // Show the current tab, and add an "active" class to the button that opened the tab
   document.getElementById(cityName).style.display = "block";
   evt.currentTarget.className += " active";
}








//Hidden optons for site
$('#emailError').hide();
let hidden = document.getElementsByClassName('.hiddenBasketWarning')
let hiddenDiv = document.getElementsByClassName('.hideOptions')
$(".hiddenBasketWarning").hide();
$("#hideOptions").hide();


//Products array contains products for sale in indivdual objects
let products = [
   {
      name: "Leather Sofa",
      tag: "sofa.jpg",
      price: 599,
      inCart: 0,

   },
   {
      name: "Bed",
      tag: "bed.jpg",
      price: 399,
      inCart: 0
   },
   {
      name: "Stools",
      tag: "stool.jpg",
      price: 79,
      inCart: 0
   },
   {
      name: "Hanging Light",
      tag: "light4.jpg",
      price: 59,
      inCart: 0
   },
   {
      name: "Standing Light",
      tag: "standingLight.jpg",
      price: 89,
      inCart: 0
   },
   {
      name: "Vase",
      tag: "vase.jpg",
      price: 19,
      inCart: 0
   },
   {
      name: "Picture frames",
      tag: "pictures.jpg",
      price: 19,
      inCart: 0
   },
   {
      name: "Male Grooming",
      tag: "skin.jpg",
      price: 49,
      inCart: 0
   },
   {
      name: "Egg Chair",
      tag: "eggchair.jpg",
      price: 199,
      inCart: 0
   },
   {
      name: "Gameboy",
      tag: "gameboy.jpg",
      price: 199,
      inCart: 0
   },
   {
      name: "Kettle",
      tag: "kettle2.jpg",
      price: 49,
      inCart: 0
   },
   {
      name: "PS5",
      tag: "ps5.jpg",
      price: 599,
      inCart: 0
   }
   ,





];



//loops through cart buttons to add items to cart
for (let i = 0; i < carts.length; i++) {
   carts[i].addEventListener('click', () => {
      cartNumber(products[i]);
      totalCost(products[i]);
   })
}

//gets items number of items in cart from localstorage
function onLoadCart() {
   let productNumber = localStorage.getItem('cartNumber');
   if (productNumber) {
      document.querySelector('.cart span').textContent = productNumber;

   }
}

//sets products in localStorage, with each item going into its own object
function setItems(products) {
   let cartItems = localStorage.getItem("inCartProducts")
   cartItems = JSON.parse(cartItems);
   console.log("my cart is", cartItems)

   if (cartItems != null) {
      if (cartItems[products.tag] == undefined) {
         cartItems = {
            ...cartItems,
            [products.tag]: products
         }
      }
      cartItems[products.tag].inCart += 1;
   } else {
      products.inCart = 1
      cartItems = {
         [products.tag]: products
      }
   }
   localStorage.setItem("inCartProducts", JSON.stringify(cartItems))
   let span = document.getElementById("totalCost");
   let lsTotal = localStorage.getItem("totalCost");
   console.log(lsTotal);
}


//check if products exists, if not ,set local storage
function cartNumber(products) {
   let productNumber = localStorage.getItem('cartNumber');
   productNumber = parseInt(productNumber);

   if (productNumber) {
      localStorage.setItem('cartNumber', productNumber + 1)
      document.querySelector('.cart span').textContent = productNumber + 1;
   } else {
      localStorage.setItem('cartNumber', 1)
      document.querySelector('.cart span').textContent = 1;
   }
   setItems(products)

}
//calcualtes total cost from localStorage, if it exists.
function totalCost(product) {
   let cartCost = localStorage.getItem('totalCost');

   console.log("the price is", product.price)
   console.log(typeof cartCost)


   if (cartCost != null) {
      cartCost = parseInt(cartCost);
      localStorage.setItem("totalCost", cartCost + product.price)
   } else {
      localStorage.setItem("totalCost", product.price)
   }
}


//Display cart products on cart page, from localStorage.
function displaycart() {
   let cartItems = localStorage.getItem("inCartProducts");
   cartItems = JSON.parse(cartItems);
   let lsTotal = localStorage.getItem("totalCost");
   let productContainer = document.querySelector(".products");
   let paymentContainer = document.querySelector(".paymentContainer");
   if (cartItems && productContainer) {

      Object.values(cartItems).map(item => {
         productContainer.innerHTML += ` <div> <div class="product"> 
         <img height="100px" width="100px" src = "images/${item.tag}">
         <span class class= "name"> ${item.name.substring(0, 10)} </span> 
         <span class="price"> $${item.price} </span>
         
         <span class="quantity">  ${item.inCart}  
         
         </span>
         
         <span>$${item.inCart * item.price}</span>
         
        </div>

        

         `;
      });

      productContainer.innerHTML += `
      <div class="basketTotalContainer"> 
      <h3 class="basketTotalTitle"> Basket Total</h3>
      <h4 class="basketTotal"> $${lsTotal} </h4>
      </div>
   
      `
   }

   $('.hideThis').hide();
}

let getN = JSON.parse(localStorage.getItem("inCartProducts"));



// const info = document.getElementsByClassName('card-footer');

// for (var i = 0; i < info.length; i++) {

//    info[i].addEventListener('click', function (e) {
//       const data = e.target.parentElement.childNodes

//       //       // let name = data[3].innerHTML
//       //       // let img = data[1].src
//       //       // let price = data[5].innerHTML
//       //       // let info = data[7].innerHTML;
//       //       // let button = data[9];

//       console.log(data[1].id)
//       const newNum = data[1].id;
//       console.log(typeof (newNum))

//       const add = document.getElementById('but!')
//       add.className = ""
//       console.log(add)
//       add.className = `add-cart cart8 btn`
//       console.log(add)

//       console.log(add);



//       // newButton.id = `${newNum}`
//       // newButton.className = `add-cart cart${newNum}`
//       // let newB = document.getElementById('but!')
//       // newB.className = `add-cart cart ${newNum}`


//       // newButton.innerText = 'click'

//       // console.log(newButton)

//       // const container = document.getElementById('productsContainer')
//       // container.appendChild(newButton)




//    })
// }




//       document.getElementById('newItemName').innerHTML = name;
//       document.getElementById('newItemPrice').innerHTML = price;
//       document.getElementById('newItemImage').src = img;
//       document.getElementById('newItemInfo').innerHTML = info;
//       let left = document.getElementById('buttonAdd')
//       let but1 = document.createElement('button').innerHTML = button;
//       left.appendChild(but1)


//       $('#buttonShow').show();

//       $('#buttonShow').click(function () {

//          document.getElementById("image").scrollIntoView();

//       });


//       $('.add-cart').click(function () {
//          location.reload(0);
//       })

//    });


// }




//Initialies the empty cart Button, hiding elements from page and localStorage .
$(document).on('click', '.click', function (e) {
   console.log("clicked")
   $(this).parent().remove();
   localStorage.removeItem("cartNumber")
   localStorage.removeItem("totalCost")
   localStorage.removeItem("inCartProducts");
   window.location.reload();
})


if (localStorage.getItem("cartNumber") == null) {
   $(".products").hide();
   $(".click").hide();
   $(".paymentContainer").hide();
   $("#paypal").hide();
   $(".productsContainer").hide();
   $(".hiddenBasketWarning").show();
   $("#hideOptions").show();
}


//Ensures that a valid email address is entered in newletter sign up.
// news.addEventListener('click', function () {

//    let emailField = document.getElementById('emailField')
//    console.log('clicked');
//    let email = emailField.value;
//    if (email.indexOf('@' && '.') > -1) {

//       $('#emailField').hide();
//       $('#news').hide();
//       let newsh1 = document.getElementById('newsh1');
//       newsh1.innerHTML = "Youre now signed up!"
//       $('#emailError').hide();


//    } else {
//       $('#emailError').show();
//    }
// })

onLoadCart();
displaycart();


let totalPrice = JSON.parse(localStorage.getItem('totalCost'));
console.log(typeof (totalPrice))


//initialises the paypal buttons so a customer can pay
paypal.Buttons({

   createOrder: function (data, actions) {
      return actions.order.create({
         purchase_units: [{
            amount: {
               value: totalPrice,

            },
         }]
      })
   }
}).render('#paypal')


