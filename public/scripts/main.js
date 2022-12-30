// /// Active menu switch bar
// const navList = document.querySelector(".nav-list");

// navList.addEventListener("click", (e) => {
//   const navLink = e.target.parentElement;
//   if (navLink.classList.contains("link")) {
//     navList.querySelector(".active").classList.remove("active");
//     navLink.classList.add("active");
//   }
// });

// // Get all menu items
// const menuItems = navList.querySelectorAll(".link");


// // Get the current page's URL path
// const currentPath = window.location.pathname;

// menuItems.forEach((menuItem) => {
//   if (menuItem.getAttribute("data-page") === currentPath || menuItem.getAttribute("data-page") === 'index.html' || menuItem.getAttribute("data-page") === 'products.html' || menuItem.getAttribute("data-page") === 'checkout.html') {
//     menuItem.classList.add("active");
//   }
// }); 

 //fixed navigation bar
window.addEventListener("scroll",()=>{
  const header=document.querySelector("header");
  header.classList.toggle("header",window.scrollY>0)
});
