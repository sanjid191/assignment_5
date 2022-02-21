
function getInput(id) {
  const inputField = document.getElementById(id);
  const textInputField = inputField.value;
  const inputAmonut = parseFloat(textInputField);

  if (isNaN(inputAmonut) || inputAmonut < 0) {
    return 'Input valid Numbers'
  } else {
    return inputAmonut;
  }
}

function costCulculation(number1, number2, number3) {
  return number1 + number2 + number3;
}

function finalBalance(income, cost) {
  return income - cost;
}

document.getElementById('calculate-Button').addEventListener('click', function () {

  const incomeValue = getInput('input-income');
  const totalValueOfFood = getInput('cost-food');
  const totalValueOfrent = getInput('cost-rent');
  const totalValueOfcloth = getInput('cost-clothe');

  if (typeof (totalValueOfFood) == 'string' || typeof (totalValueOfrent) == 'string' || typeof (totalValueOfcloth) == 'string') {
    document.getElementById('expenses-text').style.display = 'none';
    document.getElementById('failed-balance').style.display = 'none';
    document.getElementById('total-expenses').innerText = ` Please input valid number`;
  } else {
    const totalCost = costCulculation(totalValueOfFood, totalValueOfrent, totalValueOfcloth)
    document.getElementById('total-expenses').innerText = totalCost;
    document.getElementById('expenses-text').style.display = 'block';
    document.getElementById('failed-balance').style.display = 'block';
  }

  if (typeof (incomeValue) == 'string') {
    document.getElementById('expenses-text').style.display = 'none';
    document.getElementById('failed-balance').style.display = 'none';
    document.getElementById('total-expenses').innerText = ` Please input valid number`;
  } else if (incomeValue < costCulculation(totalValueOfFood, totalValueOfrent, totalValueOfcloth)) {
    document.getElementById('expenses-text').style.display = 'none';
    document.getElementById('failed-balance').style.display = 'none';
    document.getElementById('total-expenses').innerText = ` cost cannot be more than income`;
  } else {
    const totalBalance = finalBalance(incomeValue, costCulculation(totalValueOfFood, totalValueOfrent, totalValueOfcloth))
    document.getElementById('total-balance').innerText = totalBalance;
  }

});

function savingAmount(income, saving) {
  return income * (saving / 100);
}

function savingCalculation() {
  const incomeValue = getInput('input-income');
  const savingValue = getInput('input-saving');
  const totalBalanceText = document.getElementById('total-balance').innerText;
  const totalBalance = parseFloat(totalBalanceText);

  if (typeof (savingValue) == 'string') {
    document.getElementById('saving-text').style.display = 'none';
    document.getElementById('remain-balance').style.display = 'none';
    document.getElementById('saving-total').innerText = ` Please input valid number`;

  } else if (totalBalance < savingAmount(incomeValue, savingValue)) {
    document.getElementById('saving-text').style.display = 'none';
    document.getElementById('remain-balance').style.display = 'none';
    document.getElementById('saving-total').innerText = ` Impossible to save money more than Balance`;

  } else {
    document.getElementById('saving-text').style.display = 'block';
    document.getElementById('remain-balance').style.display = 'block';
    document.getElementById('saving-total').innerText = savingAmount(incomeValue, savingValue);
    document.getElementById('remaining-amount').innerText = totalBalance - savingAmount(incomeValue, savingValue);
  }

}