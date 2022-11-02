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

        const listItem = "<li><img src=" + product.picture + "><div>" + product.name + "<div><div> Ksh "+product.price +"<div></li>";
        innerHTML+=listItem;
    }

    console.log(innerHTML);

    listContainer.innerHTML = innerHTML;
}

function renderlatestProducts(listId, latestProducts){

    const listContainer=document.getElementById(listId);

    console.log(listContainer);

    var innerHTML= "";

    for (var index=0; index < latestProducts.length; index++){
        const product = latestProducts[index];

        const listItem = "<li><img src=" + product.picture + "><div>" + product.name + "<div><div> Ksh "+product.price +"<div></li>";
        innerHTML+=listItem;
    }

    console.log(innerHTML);

    listContainer.innerHTML = innerHTML;
}

function renderAllProducts(listId, AllProducts){

    const listContainer=document.getElementById(listId);

    console.log(listContainer);

    var innerHTML= "";

    for (var index=0; index < AllProducts.length; index++){
        const product = AllProducts[index];

        const listItem = "<li><img src=" + product.picture + "><div>" + product.name + "<div><div> Ksh "+product.price +"<div></li>";
        innerHTML+=listItem;
    }

    console.log(innerHTML);

    listContainer.innerHTML = innerHTML;
}