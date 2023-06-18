document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get values from the form
  var subName = document.getElementById('subName').value;
  var bread = document.getElementById('bread').value;

  var toppings = [];
  var checkboxes = document.querySelectorAll('input[name="toppings"]:checked');
  checkboxes.forEach(function(checkbox) {
    toppings.push(checkbox.value);
  });

  var sauce = document.getElementById('sauce').value;

  // Calculate the total price
  var breadPrice = parseFloat(document.getElementById("bread").options[document.getElementById("bread").selectedIndex].getAttribute("data-price"));
  var toppingPrices = Array.from(document.querySelectorAll('input[name="toppings"]:checked')).reduce((total, checkbox) => total + parseFloat(checkbox.getAttribute("data-price")), 0);
  var saucePrice = parseFloat(document.getElementById("sauce").options[document.getElementById("sauce").selectedIndex].getAttribute("data-price"));
  var meatPrices = 0; // Since the meat prices are not included in the form, initialize it with 0

  var cost = breadPrice + toppingPrices + saucePrice + meatPrices;

  // Create a new order item element
  var listItem = document.createElement('li');
  listItem.textContent = subName + ' - Bread: ' + bread + ', Toppings: ' + toppings.join(', ') + ', Sauce: ' + sauce + ', Cost: ' + cost.toFixed(2) + ' ZAR';

  // Append the new item to the order list
  var orderList = document.getElementById('orderList');
  orderList.appendChild(listItem);

  // Reset the form
  document.getElementById('subName').value = '';
  document.getElementById('bread').value = '';
  checkboxes.forEach(function(checkbox) {
    checkbox.checked = false;
  });
  document.getElementById('sauce').value = '';
});
