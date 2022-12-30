
  const CHECKOUT_ITEMS_LIST_KEY = "CHECKOUT_ITEMS_LIST";
  const CHECKOUT_ITEMS_DATA_KEY = "CHECKOUT_ITEMS_DATA";

// Retrieve items from local storage
const itemsStoredList = localStorage.getItem(CHECKOUT_ITEMS_LIST_KEY);
const checkoutItemsData = localStorage.getItem(CHECKOUT_ITEMS_DATA_KEY);


// Parse the stored data from local storage
const items = itemsStoredList ? JSON.parse(itemsStoredList) : [];
const itemsData = checkoutItemsData ? JSON.parse(checkoutItemsData) : {};

console.log(checkoutItemsData);

// Select the element in the checkout page where the items should be rendered
const cartElement = document.querySelector(".cart");
const tableHeader = document.querySelector(".carts");

// Find a <table> element with id="myTable":
var table = document.getElementById("myTable");

// Create a <thead> element and add it to the table:
var header = table.createTHead();

// Create an empty <tr> element and add it to the <thead>:
var headerRow = header.insertRow(0);

// Insert new cells (<th> elements) at the 1st, 2nd, and 3rd positions of the <tr> element:
var headerCell1 = headerRow.insertCell(0);
var headerCell2 = headerRow.insertCell(1);
var headerCell3 = headerRow.insertCell(2);
var headerCell4 = headerRow.insertCell(3);
var headerCell5 = headerRow.insertCell(4);



// Add some text to the new cells to create the table headers:
headerCell1.innerHTML = `<Span Class="tableHeader"></span>`;
headerCell2.innerHTML = `<Span Class="tableHeader"><b>PRODUCT DESCRIPTION</b></span>`;
headerCell3.innerHTML = `<Span Class="tableHeader"><b>PRODUCT QUANTITY</b></span>`;
headerCell4.innerHTML = `<Span Class="tableHeader"><b>AMOUNT (Ksh)</span></b>`;
headerCell5.innerHTML = `<Span Class="tableHeader"></span>`;



// Find the number of rows in the table:

var totalAmount = 0;
var numRows = table.rows.length;


// Loop through the items and render them in the cart element
items.forEach(function(id) {
  const itemData = itemsData[id];
  const totalPrice = itemData.count * itemData.price;

  // Create an empty <tr> element and add it to the table:
  var row = table.insertRow(numRows);

  // Insert new cells (<td> elements) at the 1st, 2nd, and 3rd positions of the "new" <tr> element:
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);



  // Add some text to the new cells:
  cell1.innerHTML = `<img src="${itemData.picture}" class="checkoutPic">`;
  cell2.innerHTML = `<span class="checkoutName"> ${itemData.name}</span>`;
  cell3.innerHTML = `<span class="checkoutCount"><b> ${itemData.count}</b></span>`;
  cell4.innerHTML = `<span class="checkoutAmount"><b> ${totalPrice}</b></span>`;
  cell5.innerHTML = `<button class="removeProduct"><b>Remove Item</b></span>`;

  totalAmount += totalPrice;

  numRows++;
});
// Insert a new row at the bottom of the table to display the total amount:
var totalRow = table.insertRow(numRows);

// Insert a new cell at the 1st position of the row:

var one = totalRow.insertCell(0);
var two = totalRow.insertCell(1);
var totalWord = totalRow.insertCell(2);
var totalCell = totalRow.insertCell(3);


// Add some text to the cell to display the total amount:
one.innerHTML="";
two.innerHTML="";
totalWord.innerHTML=`<b>Total Amount</b>`

totalCell.innerHTML = `<b><Span class="checkoutTotal"> Ksh.${totalAmount}</span></b>`;

document.getElementById("removeAllButton").addEventListener("click", function() {
    localStorage.clear();
    table.innerHTML="";
    document.getElementById("removeAllButton").style.display="none";
  });
  
  
 
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
