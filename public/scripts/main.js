var products = [
    {
        name:"Nike shoes",
        picture: "images/nike-shoes.jpg",
    },
];

function loadProducts(listId){

    var nums = [3,2,5];

    const listContainer = document.getElementById(listId);

    var innerHTML = "";

    for (var index= 0; index<products.length; index++){
        const product = products[index];

        const listItem = "<li><img src=" + product.picture + "/><div>" + product.name + "</div></li>";

        innerHTML += listItem;
    }

    listContainer.innerHTML = innerHTML;
}