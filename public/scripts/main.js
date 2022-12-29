//fixed navigation bar
window.addEventListener("scroll",()=>{
    const header=document.querySelector("header");
    header.classList.toggle("header",window.scrollY>0)
  });

  //Active menu switch bar
const navList=document.querySelector(".nav-list");

navList.addEventListener("click",(e)=>{
  const navLink=e.target.parentElement;
  if(navLink.classList.contains("link")){
    navList.querySelector(".active").classList.remove("active");
    navLink.classList.add("active");
  }
  return false;
});

//scroll to top

const scrollBtn=document.querySelector(".top");
const rootEl=document.documentElement;

document.addEventListener("scroll",showButton);
scrollBtn.addEventListener("click",scrollToTop);

function showButton(){
  const scrollTotal=rootEl.scrollHeight - rootEl.clientHeight;

  if(rootEl.scrollTop/scrollTotal > 0.3){
    scrollBtn.classList.add("show-btn");
  }
  else{
    scrollBtn.classList.remove("show-btn");

  }
}

function scrollToTop(){
  rootEl.scrollTo({
    top: 0,
    behavior:"smooth"
  })
}

const CHECKOUT_ITEMS_LIST_KEY = "CHECKOUT_ITEMS_LIST";
const CHECKOUT_ITEMS_DATA_KEY = "CHECKOUT_ITEMS_DATA";


async function loadfeaturedProducts(featuredProductsCallback) {
    var data = await fetch("/public/data/featuredProducts.json",{headers: { 'content-type': 'application/json'}})
    var json = await data.json();

  featuredProductsCallback(json.featuredProducts);

}

//     .then(function(data){
//         return data.json();
//     })
//     .then(function(data){
//         featuredProductsCallback(data.featuredProducts);

//     });
// }
async function loadlatestProducts(latestProductsCallback) {
    var data = await fetch("/public/data/latestProducts.json",{headers: { 'content-type': 'application/json'}})
    var json = await data.json();

  latestProductsCallback(json.latestProducts);

}
//  function loadlatestProducts(latestProductsCallback) {

//     fetch("/public/data/latestProducts.json",{headers: { 'content-type': 'application/json'}})
//     .then(function(data){
//         return data.json();
//     })
//     .then(function(data){
//         latestProductsCallback(data.latestProducts);

//     });
// }

async function loadAllProducts(AllProductsCallback){
    var data = await fetch("/public/data/AllProducts.json",{headers: { 'content-type': 'application/json'}})
    var json = await data.json();

    AllProductsCallback(json.AllProducts);
}
// function loadAllProducts(AllProductsCallback) {
//     fetch("/public/data/AllProducts.json",{headers: { 'content-type': 'application/json'}})
//     .then(function(data){
//         return data.json();
//     })
//     .then(function(data){
//         AllProductsCallback(data.AllProducts);

//     });
// }
function renderfeaturedProducts(listId, featuredProducts){

    const listContainer=document.getElementById(listId);
    var innerHTML= "";

    for (var index=0; index < featuredProducts.length; index++){
        const product = featuredProducts[index];

        const listItem = 
        `<li>
        <img src="${product.picture}">
        <div>${product.name}</div>
        <h4> Ksh ${product.price}</h4>
        <button data-product-price= ${product.price} data-product-name= ${product.name} data-product-id= ${product.id} class="addItem">+</button>
        <span data-product-price= ${product.price} data-product-name= ${product.name} data-product-id= ${product.id} class="count">0</span>
        <button data-product-price= ${product.price} data-product-name= ${product.name} data-product-id= ${product.id} class="removeItem">-</button>
        </li>
        `
        innerHTML+=listItem;
    }
    listContainer.innerHTML = innerHTML;

    
}

function renderlatestProducts(listId, latestProducts){

    const listContainer=document.getElementById(listId);


    var innerHTML= "";

    for (var index=0; index < latestProducts.length; index++){
        const product = latestProducts[index];

        const listItem = 
        `<li>
        <img src="${product.picture}">
        <div>${product.name}</div>
        <h4> Ksh ${product.price}</h4>
        <button data-product-price= ${product.price} data-product-name= ${product.name} data-product-id= ${product.id} class="addItem">+</button>
        <span data-product-price= ${product.price} data-product-name= ${product.name} data-product-id= ${product.id} class="count">0</span>
        <button data-product-price= ${product.price} data-product-name= ${product.name} data-product-id= ${product.id} class="removeItem">-</button>
        </li>
        `
        innerHTML+=listItem;
    }


    listContainer.innerHTML = innerHTML;

}

function renderAllProducts(listId, AllProducts){

    const listContainer=document.getElementById(listId);


    var innerHTML= "";

    for (var index=0; index < AllProducts.length; index++){
        const product = AllProducts[index];

        const listItem = 
        `<li>
        <img src="${product.details.picture}">
        <div>${product.details.name}</div>
        <h4> Ksh ${product.details.price}</h4>
        <button data-product-price= ${product.details.price} data-product-name= ${product.details.name} data-product-id= ${product.id} class="addItem">+</button>
        <span data-product-price= ${product.details.price} data-product-name= ${product.details.name} data-product-id= ${product.id} class="count">0</span>
        <button data-product-price= ${product.details.price} data-product-name= ${product.details.name} data-product-id= ${product.id} class="removeItem">-</button>
        </li>
        `
        innerHTML+=listItem;

    }

    listContainer.innerHTML = innerHTML;
    
    
    const addItemCallBack = function (event) {
        // Get data for the product being added
        const button = event.target;
        const id = button.dataset.productId;
        const price = parseFloat(button.dataset.productPrice);
        const name = button.dataset.productName;
      
        // Retrieve items from local storage
        let itemsStoredList = localStorage.getItem(CHECKOUT_ITEMS_LIST_KEY);
        let checkoutItemsData = localStorage.getItem(CHECKOUT_ITEMS_DATA_KEY);
      
        // Parse the stored data from local storage
        itemsStoredList = itemsStoredList ? JSON.parse(itemsStoredList) : [];
        checkoutItemsData = checkoutItemsData ? JSON.parse(checkoutItemsData) : {};
      
        // Check if the product being added is already in the list
        if (itemsStoredList.includes(id)) {
          // Update count for existing product
          checkoutItemsData[id].count += 1;
        } else {
          // Add new product
          itemsStoredList.push(id);
          checkoutItemsData[id] = { count: 1, price, name };
        }
      
        // Store the updated data in local storage
        localStorage.setItem(CHECKOUT_ITEMS_LIST_KEY, JSON.stringify(itemsStoredList));
        localStorage.setItem(CHECKOUT_ITEMS_DATA_KEY, JSON.stringify(checkoutItemsData));

        
        const cartElement = document.querySelector(".cart");
        cartElement.innerHTML = "";
        for (const id of itemsStoredList) {
          cartElement.innerHTML += `
            <div>Product: ${checkoutItemsData[id].name}</div>
            <div>Count: ${checkoutItemsData[id].count}</div>
          `;
        }
        const countElement = document.querySelector(".count");
        countElement.innerHTML = itemsStoredList.length;
}

const removeItemCallBack = function (event) {
    // Get data for the product being removed
    const button = event.target;
    const id = button.dataset.productId;
  
    // Retrieve items from local storage
    let itemsStoredList = localStorage.getItem(CHECKOUT_ITEMS_LIST_KEY);
    let checkoutItemsData = localStorage.getItem(CHECKOUT_ITEMS_DATA_KEY);
  
    // Parse the stored data from local storage
    itemsStoredList = itemsStoredList ? JSON.parse(itemsStoredList) : [];
    checkoutItemsData = checkoutItemsData ? JSON.parse(checkoutItemsData) : {};
  
    // Check if the product being removed is in the list
    if (itemsStoredList.includes(id)) {
      // Decrement count for existing product
      checkoutItemsData[id].count -= 1;
  
      // If count is 0, remove the product from the list
      if (checkoutItemsData[id].count === 0) {
        const index = itemsStoredList.indexOf(id);
        itemsStoredList.splice(index, 1);
        delete checkoutItemsData[id];
      }
    }
  
    // Store the updated data in local storage
    localStorage.setItem(CHECKOUT_ITEMS_LIST_KEY, JSON.stringify(itemsStoredList));
    localStorage.setItem(CHECKOUT_ITEMS_DATA_KEY, JSON.stringify(checkoutItemsData));
  
    // Update the cart element and count element on the page to reflect the changes
    const cartElement = document.querySelector(".cart");
    cartElement.innerHTML = "";
    for (const id of itemsStoredList) {
      cartElement.innerHTML += `
        <div>Product: ${checkoutItemsData[id].name}</div>
        <div>Count: ${checkoutItemsData[id].count}</div>
      `;
    }
    const countElement = document.querySelector(".count");
    countElement.innerHTML = itemsStoredList.length;
  }
  
var addItemButtons = document.getElementsByClassName("addItem");
var removeItemButtons = document.getElementsByClassName("removeItem");

addItemButtons = Array.from(addItemButtons);
removeItemButtons = Array.from(removeItemButtons);

addItemButtons.forEach(function(button){
    button.addEventListener("click",addItemCallBack);
})
removeItemButtons.forEach(function(button){
    button.addEventListener("click",removeItemCallBack);
})
}
function payments(x){
    if (x==0){
        document.getElementById("credit-module").style.display="block";
    }
    else if(x != 0){
        document.getElementById("credit-module").style.display="none";
    }
    if (x==1){
        document.getElementById("debit-module").style.display="block";
    }
    else if(x != 1){
        document.getElementById("debit-module").style.display="none";
    }
    if (x==2){
        document.getElementById("mobile-module").style.display="block";
    }
    else if(x != 2){
        document.getElementById("mobile-module").style.display="none";
    }
    return;
}
