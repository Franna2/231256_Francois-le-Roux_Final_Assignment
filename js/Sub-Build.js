
function updateSubCost(subId) {
    const breadCost = document.getElementById(`sub${subId}-bread`).value;
    const toppingCosts = Array.from(document.getElementById(`sub${subId}-toppings`).selectedOptions).map(option => option.value);
    const sauceCost = document.getElementById(`sub${subId}-sauce`).value;
  
    const totalCost = parseFloat(breadCost) + toppingCosts.reduce((acc, cost) => acc + parseFloat(cost), 0) + parseFloat(sauceCost);
  
    document.getElementById(`sub${subId}-cost`).value = totalCost.toFixed(2);
  }
  

  function addSub() {
    const subCount = document.getElementsByClassName('sub').length + 1;
  
    const subContainer = document.createElement('div');
    subContainer.className = 'sub';
  
    const subTitle = document.createElement('h2');
    subTitle.textContent = `Sub ${subCount}`;
  
    const subNameLabel = document.createElement('label');
    subNameLabel.setAttribute('for', `sub${subCount}-name`);
    subNameLabel.textContent = 'Sub Name:';
  
    const subNameInput = document.createElement('input');
    subNameInput.setAttribute('type', 'text');
    subNameInput.setAttribute('id', `sub${subCount}-name`);
    subNameInput.setAttribute('name', `sub${subCount}-name`);
    subNameInput.setAttribute('required', '');
  
    const breadLabel = document.createElement('label');
    breadLabel.setAttribute('for', `sub${subCount}-bread`);
    breadLabel.textContent = 'Bread:';
  
    const breadSelect = document.createElement('select');
    breadSelect.setAttribute('id', `sub${subCount}-bread`);
    breadSelect.setAttribute('name', `sub${subCount}-bread`);
    const breadOptions = ['white', 'wheat', 'rye', 'cia']; 
    breadOptions.forEach(option => {
      const breadOption = document.createElement('option');
      breadOption.setAttribute('value', option);
      breadOption.textContent = option.charAt(0).toUpperCase() + option.slice(1);
      breadSelect.appendChild(breadOption);
    });
  
    const toppingsLabel = document.createElement('label');
    toppingsLabel.setAttribute('for', `sub${subCount}-toppings`);
    toppingsLabel.textContent = 'Toppings:';
  
    const toppingsSelect = document.createElement('select');
    toppingsSelect.setAttribute('id', `sub${subCount}-toppings`);
    toppingsSelect.setAttribute('name', `sub${subCount}-toppings`);
    toppingsSelect.setAttribute('multiple', '');
    const toppingOptions = ['lettuce', 'tomato', 'onion']; 
    toppingOptions.forEach(option => {
      const toppingOption = document.createElement('option');
      toppingOption.setAttribute('value', option);
      toppingOption.textContent = option.charAt(0).toUpperCase() + option.slice(1);
      toppingsSelect.appendChild(toppingOption);
    });
  
    const sauceLabel = document.createElement('label');
    sauceLabel.setAttribute('for', `sub${subCount}-sauce`);
    sauceLabel.textContent = 'Sauce:';
  
    const sauceSelect = document.createElement('select');
    sauceSelect.setAttribute('id', `sub${subCount}-sauce`);
    sauceSelect.setAttribute('name', `sub${subCount}-sauce`);
    const sauceOptions = ['mayo', 'mustard', 'ketchup']; 
    sauceOptions.forEach(option => {
      const sauceOption = document.createElement('option');
      sauceOption.setAttribute('value', option);
      sauceOption.textContent = option.charAt(0).toUpperCase() + option.slice(1);
      sauceSelect.appendChild(sauceOption);
    });
  
    const subCostLabel = document.createElement('label');
    subCostLabel.setAttribute('for', `sub${subCount}-cost`);
    subCostLabel.textContent = 'Sub Cost:';
  
    const subCostInput = document.createElement('input');
    subCostInput.setAttribute('type', 'number');
    subCostInput.setAttribute('id', `sub${subCount}-cost`);
    subCostInput.setAttribute('name', `sub${subCount}-cost`);
    subCostInput.setAttribute('step', '0.01');
    subCostInput.setAttribute('value', '0');
    subCostInput.setAttribute('readonly', '');
  
    const removeButton = document.createElement('button');
    removeButton.setAttribute('type', 'button');
    removeButton.className = 'remove-sub';
    removeButton.textContent = 'Remove Sub';
    removeButton.addEventListener('click', removeSub);
  
    subContainer.appendChild(subTitle);
    subContainer.appendChild(subNameLabel);
    subContainer.appendChild(subNameInput);
    subContainer.appendChild(breadLabel);
    subContainer.appendChild(breadSelect);
    subContainer.appendChild(toppingsLabel);
    subContainer.appendChild(toppingsSelect);
    subContainer.appendChild(sauceLabel);
    subContainer.appendChild(sauceSelect);
    subContainer.appendChild(subCostLabel);
    subContainer.appendChild(subCostInput);
    subContainer.appendChild(removeButton);
  
    const form = document.getElementById('sub-form');
    form.insertBefore(subContainer, form.lastElementChild);
  
    toppingsSelect.addEventListener('change', () => updateSubCost(subCount));
    breadSelect.addEventListener('change', () => updateSubCost(subCount));
  
    updateSubCost(subCount);
  }
  
  function removeSub(event) {
    const subContainer = event.target.parentNode;
    subContainer.parentNode.removeChild(subContainer);
  }
  
  document.getElementById('add-sub').addEventListener('click', addSub);
  
  