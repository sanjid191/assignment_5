
function getInput(id) {
  const inputField = document.getElementById(id);
  const inputFieldText = inputField.value;
  const inputAmonut = parseFloat(inputFieldText);

  if (isNaN(inputAmonut) || inputAmonut < 0) {
    return 'Input a valid Number'
  } else {
    return inputAmonut;
  }

}

function calculateCost(number1, number2, number3) {
  return number1 + number2 + number3;
}


function finalBalance(income, cost) {
  return income - cost;
}

document.getElementById('calculate-Button').addEventListener('click', function () {

  const incomeValue = getInput('input-income');
  const foodValue = getInput('cost-food');
  const rentValue = getInput('cost-rent');
  const clotheValue = getInput('cost-clothe');


  if (typeof (foodValue) == 'string' || typeof (rentValue) == 'string' || typeof (clotheValue) == 'string') {
    document.getElementById('expenses-text').style.display = 'none';
    document.getElementById('failed-balance').style.display = 'none';
    document.getElementById('total-expenses').innerText = `❌ Please input valid number`;
  } else {
    const totalCost = calculateCost(foodValue, rentValue, clotheValue)
    document.getElementById('total-expenses').innerText = totalCost;
    document.getElementById('expenses-text').style.display = 'block';
    document.getElementById('failed-balance').style.display = 'block';
  }

  if (typeof (incomeValue) == 'string') {
    document.getElementById('expenses-text').style.display = 'none';
    document.getElementById('failed-balance').style.display = 'none';
    document.getElementById('total-expenses').innerText = `❌ Please input valid number`;
  } else if (incomeValue < calculateCost(foodValue, rentValue, clotheValue)) {
    document.getElementById('expenses-text').style.display = 'none';
    document.getElementById('failed-balance').style.display = 'none';
    document.getElementById('total-expenses').innerText = `❌ cost cannot be more than income`;
  } else {
    const totalBalance = finalBalance(incomeValue, calculateCost(foodValue, rentValue, clotheValue))
    document.getElementById('total-balance').innerText = totalBalance;
  }


});

function savingAmount(income, saving) {
  return income * (saving / 100);
}

function savingCalculation() {
  const incomeValue = getInput('input-income');
  const savingValue = getInput('saving-input');
  const totalBalanceText = document.getElementById('total-balance').innerText;
  const totalBalance = parseFloat(totalBalanceText);


  if (typeof (savingValue) == 'string') {
    document.getElementById('saving-text').style.display = 'none';
    document.getElementById('remain-balance').style.display = 'none';
    document.getElementById('saving-total').innerText = `❌ Please input valid number`;
  } else if (totalBalance < savingAmount(incomeValue, savingValue)) {
    document.getElementById('saving-text').style.display = 'none';
    document.getElementById('remain-balance').style.display = 'none';
    document.getElementById('saving-total').innerText = `❌ Impossible to save money more than Balance`;
  } else {
    document.getElementById('saving-text').style.display = 'block';
    document.getElementById('remain-balance').style.display = 'block';
    document.getElementById('saving-total').innerText = savingAmount(incomeValue, savingValue);
    document.getElementById('remaining-amount').innerText = totalBalance - savingAmount(incomeValue, savingValue);
  }

}