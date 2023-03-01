function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValue = parseInt(inputField.value);
  return inputFieldValue;
}

const calculateExpense = () => {
  const income = getInputFieldValueById("income");
  const food = getInputFieldValueById("food");
  const rent = getInputFieldValueById("rent");
  const clothes = getInputFieldValueById("clothes");

  // validation
  if (income < 0 || isNaN(income) == true || 
  food < 0 || isNaN(food) == true || 
  rent < 0 || isNaN(rent) == true || 
  clothes < 0 || isNaN(clothes) == true) {
    alert("Inputs must be positive numbers");
  } else {
    // calculate expense
    const expense = food + rent + clothes;
    // calculate balance
    const balance = income - expense;
    // validate income
    if (expense > income) {
      alert("Expenses cannot be more than income");
    } else {
      // view total expense and balance
      document.getElementById("total-expense").innerText = expense;
      document.getElementById("balance").innerText = balance;
    }
  }
};

const calculateSavings = () => {
  const income = getInputFieldValueById("income");
  const savePercentage = getInputFieldValueById("save");

  // Validate saving percentage value
  if (income < 0 || isNaN(income) == true || 
  savePercentage < 0 || isNaN(savePercentage) == true) {
    alert("Provide positive saving value");
  } else {
    // calculate saving amount
    const savingAmount = savePercentage / 100 * income;
    // calculate remaining balance
    const balance = document.getElementById("balance").innerText;
    const remainingBalance = parseInt(balance) - savingAmount;
    // validate saving amount
    if (savingAmount > balance) {
      alert("SavingAmount is greater than balance");
    } else {
      // view saving amount and remaining balance
      document.getElementById("saving-amount").innerText = savingAmount;
      document.getElementById("remaining-balance").innerText = remainingBalance;
    }
  }
};