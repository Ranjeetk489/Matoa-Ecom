//cart-modal section

var modal = document.querySelector(".cart-modal");
var cartBtn = document.querySelector(".cart-link-icon");
var closeBtn = document.querySelector(".modal-cl-ic");

cartBtn.addEventListener("click", () => {
  console.log("hi");
  modal.style.display = "block";
});
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// deals section

let optionCnt = document.querySelector(".shop-container");
let wishIcon = document.querySelectorAll(".wish-icon");
let addToCart = document.querySelectorAll(".add-cart-btn");
let container = document.querySelector(".deal-container");
let itemCount = document.querySelector(".nav-cart-item");

let flag = true;
let count = 0;

wishIcon.forEach(function (item) {
  item.addEventListener("click", function () {
    console.log("hi");
    if (flag) {
      item.className = "ri-heart-fill";
      flag = !flag;
    } else {
      item.className = "ri-heart-add-line";
      flag = !flag;
    }
  });
});

addToCart.forEach((item) => {
  item.addEventListener("click", () => {
    itemCount.innerText = ++count;
    window.reload;
  });
});
