/* eslint-disable */
// let homeButton      = document.getElementsByClassName("home-button")[0];
let buyShoeButton     = document.getElementsByClassName("buy-shoe-button")[0],
    cancelShopping    = document.getElementsByClassName("cancel-shopping-button")[0],
    cancelBuying      = document.getElementsByClassName("cancel-buying")[0],
    confirmBuying     = document.getElementsByClassName("confirm-buying")[0],
    boyShoeButton     = document.getElementsByClassName("boy-shoe-button")[0],
    girlShoeButton    = document.getElementsByClassName("girl-shoe-button")[0],
    childShoeButton   = document.getElementsByClassName("child-shoe-button")[0],
    okButton          = document.getElementsByClassName("thanks-ok")[0],
    giftConfirmButton = document.getElementsByClassName("gift-confirm-button")[0];


if(okButton) {    
    okButton.addEventListener("click", function() {
        location.href = "home.html";
    }, false);
}

if(giftConfirmButton) {
    giftConfirmButton.addEventListener("click", function() {
        location.href = "gift-thanks-customer.html";
    }, false);
}

if(boyShoeButton) {
    boyShoeButton.addEventListener("click", function() {
        location.href = "men-shoes.html";
    }, false);
}

if(girlShoeButton) {
    girlShoeButton.addEventListener("click", function() {
        location.href = "women-shoes.html";
    }, false);
}

if(childShoeButton) {
    childShoeButton.addEventListener("click", function() {
        location.href = "child-shoes.html";
    }, false);
}

if(buyShoeButton) {
    buyShoeButton.addEventListener("click", function() {
        location.href = "buy-shoes.html";
    }, false);
}

if(cancelShopping) {
    cancelShopping.addEventListener("click", function() {
        location.href = "about-shoes.html";
    }, false);
}

if(cancelBuying) {    
    cancelBuying.addEventListener("click", function() {
        location.href = "about-shoes.html";
    }, false);
}

if(confirmBuying) {
    confirmBuying.addEventListener("click", function() {
        location.href = "buy-thanks-customer.html";
    }, false);
}
 
