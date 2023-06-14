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
  var cost = parseInt(document.getElementById('cost').value);
  
  // Create a new order item element
  var listItem = document.createElement('li');
  listItem.textContent = subName + ' - Bread: ' + bread + ', Toppings: ' + toppings.join(', ') + ', Sauce: ' + sauce + ', Cost: ' + cost;
  
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
  document.getElementById('cost').value = '0';
});
