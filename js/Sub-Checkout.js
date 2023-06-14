// Function to update order details in the HTML
function updateOrderDetails() {
  var orderDetails = JSON.parse(localStorage.getItem("orderDetails"));
  document.getElementById("productName").textContent = orderDetails.product;
  document.getElementById("productPrice").textContent = orderDetails.price;
  document.getElementById("productQuantity").textContent = orderDetails.quantity;
  document.getElementById("discountedAmount").textContent = orderDetails.discountedAmount || orderDetails.price;
}

// Function to handle coupon application and update the HTML
function applyCoupon() {
  var couponCode = document.getElementById("couponCode").value;
  var orderDetails = JSON.parse(localStorage.getItem("orderDetails"));
  var discountPercentage = 10; // Example discount percentage

  if (couponCode === "EXAMPLECODE") {
    var discountedAmount = orderDetails.price * (1 - discountPercentage / 100);
    orderDetails.discountedAmount = discountedAmount.toFixed(2);
    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
    document.getElementById("discountedAmount").textContent = orderDetails.discountedAmount;
    alert("Coupon code applied successfully!");
  } else {
    alert("Invalid coupon code.");
  }
}

// Function to initialize the checkout page
function initializeCheckoutPage() {
  // Check if order details are stored in local storage
  if (localStorage.getItem("orderDetails")) {
    updateOrderDetails();
  } else {
    alert("No order details found.");
  }
}

// Event listener for the apply coupon button
document.getElementById("applyCouponBtn").addEventListener("click", applyCoupon);

// Call the initialization function when the page loads
window.onload = initializeCheckoutPage;
