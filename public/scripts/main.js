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
        <span data-product-price= ${product.price} data-product-name= ${product.name} data-product-id= ${product.id} class="count">1</span>
        <button data-product-price= ${product.price} data-product-name= ${product.name} data-product-id= ${product.id} class="removeItem">-</button>
        </li>
        `
        innerHTML+=listItem;
    }
    listContainer.innerHTML = innerHTML;
    addRemove();

    
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
        <span data-product-price= ${product.price} data-product-name= ${product.name} data-product-id= ${product.id} class="count">1</span>
        <button data-product-price= ${product.price} data-product-name= ${product.name} data-product-id= ${product.id} class="removeItem">-</button>
        </li>
        `
        innerHTML+=listItem;
    }


    listContainer.innerHTML = innerHTML;
    addRemove();

}

function renderAllProducts(listId, AllProducts){

    const listContainer=document.getElementById(listId);


    var innerHTML= "";

    for (var index=0; index < AllProducts.length; index++){
        const product = AllProducts[index];

        const listItem = 
        `<li>
        <img src="${product.picture}">
        <div>${product.name}</div>
        <h4> Ksh ${product.price}</h4>
        <button data-product-price= ${product.price} data-product-name= ${product.name} data-product-id= ${product.id} class="addItem">+</button>
        <span data-product-price= ${product.price} data-product-name= ${product.name} data-product-id= ${product.id} class="count">1</span>
        <button data-product-price= ${product.price} data-product-name= ${product.name} data-product-id= ${product.id} class="removeItem">-</button>
        </li>
        `
        innerHTML+=listItem;

    }


    listContainer.innerHTML = innerHTML;
    addRemove();

}
function addRemove(){
    const addItemCallBack = function (event) {
        const button=event.target;
        console.log("addItem",event);

        const id=button.dataset.productId;
        const price=parseFloat(button.dataset.productPrice);

        var stored=localStorage.getItem(id);

        if(stored){
            stored = JSON.parse(stored);
            localStorage.setItem(id,JSON.stringify({count: stored.count + 1, price}));
        }
        else{
            localStorage.setItem(id,JSON.stringify({count: 1, price}));
        }
    }
    const removeItemCallBack = function (event) {
        const button=event.target;
        console.log("removeItem",event);
        const id=button.dataset.productId;
        const price=parseFloat(button.dataset.productPrice);

        var stored=localStorage.getItem(id);

        if(stored){
            stored = JSON.parse(stored);
            localStorage.setItem(id,JSON.stringify({count: stored.count -1, price}));
        }
        else{
            localStorage.setItem(id,JSON.stringify({count: 1, price}));
        }
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
// var count=localStorage.getItem("count");
// document.getElementsByClassName("count").innerHTML=count;
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
