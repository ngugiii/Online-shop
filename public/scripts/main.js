var featuredProducts = [
    {
        name: "Adidas Shoes",
        picture: "images/nike.jpg",
    },
    {
        name: "Red Printed T-shirt",
        picture: "images/RedT-shirt.jpg",
    },
    {
        name: "Black Printed T-shirt",
        picture: "images/BlackT-shirt.jpg",
    },
    {
        name: "Grey Track Pants",
        picture: "images/Track-Pants.jpg",
    },
];
function loadFeaturedProducts(listId){

    const listContainer=document.getElementById(listId);
    var innerHTML= "";

    for (var index=0; index < featuredProducts.length; index++){
        const product = featuredProducts[index];

        const listItem = "<li><img src=" + product.picture + "><div>" + product.name + "<div></li>";
        innerHTML+=listItem;
    }

    console.log(innerHTML);

    listContainer.innerHTML = innerHTML;
}
var latestProducts = [
    {
        name: "Black HRX Shoes",
        picture: "images/hrx-shoes.jpg",
    },
    {
        name: "Puma shoes",
        picture: "images/puma-shoes.jpg",
    },
    {
        name: "Black Sports Watch",
        picture: "images/Sports-watch.jpg",
    },
    {
        name: "Black Fossil Watch",
        picture: "images/Fossil-watch.jpg",
    },
];
function loadLatestProducts(listId){

    const listContainer=document.getElementById(listId);

    console.log(listContainer);

    var innerHTML= "";

    for (var index=0; index < latestProducts.length; index++){
        const product = latestProducts[index];

        const listItem = "<li><img src=" + product.picture + "><div>" + product.name + "<div></li>";
        innerHTML+=listItem;
    }

    console.log(innerHTML);

    listContainer.innerHTML = innerHTML;
}
var AllProducts = [
    {
        name: "Adidas Hoodie",
        picture: "images/adidas-hoodie.jpg",
    },
    {
        name: "Orange yeezy shoes",
        picture: "images/Orange-shoes.jpg",
    },
    {
        name: "Smart Watch",
        picture: "images/exclusive.png",
    },
    {
        name: "Puma shoes",
        picture: "images/puma-shoes.jpg",
    },
    {
        name: "HRX Socks",
        picture: "images/HRX-Socks.jpg",
    },
    {
        name: "HRX Black sports shoes",
        picture: "images/sports-wear.jpg",
    },
    {
        name: "Black Track Pants",
        picture: "images/Black-trackpants.jpg",
    },
    {
        name: "Adidas Shoes",
        picture: "images/nike.jpg",
    },
    {
        name: "Red Printed T-shirt",
        picture: "images/RedT-shirt.jpg",
    },
    {
        name: "Black HRX Shoes",
        picture: "images/hrx-shoes.jpg",
    },
    {
        name: "Black Sports Watch",
        picture: "images/Sports-watch.jpg",
    },
    {
        name: "Black Printed T-shirt",
        picture: "images/BlackT-shirt.jpg",
    },
    {
        name: "Black Fossil Watch",
        picture: "images/Fossil-watch.jpg",
    },
];
function loadAllProducts(listId){

    const listContainer=document.getElementById(listId);

    console.log(listContainer);

    var innerHTML= "";

    for (var index=0; index < AllProducts.length; index++){
        const product = AllProducts[index];

        const listItem = "<li><img src=" + product.picture + "><div>" + product.name + "<div></li>";
        innerHTML+=listItem;
    }

    console.log(innerHTML);

    listContainer.innerHTML = innerHTML;
}