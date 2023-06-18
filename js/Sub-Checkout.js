// Function to save order details in local storage
function saveOrder() {
  var itemName = document.getElementById("item-name").value;
  var itemPrice = document.getElementById("item-price").value;

  var order = {
    itemName: itemName,
    itemPrice: itemPrice
  };

  var orderJSON = JSON.stringify(order);
  localStorage.setItem("order", orderJSON);
}

// Function to apply the coupon code discount
function applyCoupon() {
  var couponCode = document.getElementById("coupon-code").value;

  if (couponCode === "SALE10") {
    var orderJSON = localStorage.getItem("order");
    var order = JSON.parse(orderJSON);

    var itemPrice = parseFloat(order.itemPrice);
    var discountPercentage = 10;
    var discountAmount = (itemPrice * discountPercentage) / 100;
    var discountedPrice = itemPrice - discountAmount;

    document.getElementById("item-price").value = discountedPrice.toFixed(2) + " ZAR";
  } else {
    alert("Invalid coupon code");
  }
}

// Event listener for save button
document.getElementById("save-button").addEventListener("click", saveOrder);

// Event listener for apply coupon button
document.getElementById("apply-coupon-button").addEventListener("click", applyCoupon);
