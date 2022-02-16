function stringTOFloat(htmlID) {
  const html_ID = document.getElementById(htmlID);
  return parseFloat(html_ID.value);
}

function importByID(htmlID) {
  const html_ID = document.getElementById(htmlID);
  return html_ID;
}

function ClearField(htmlID) {
  const html_ID = document.getElementById(htmlID);
  html_ID.value = "";
}

let Balance = 0;
function ClickCalculate() {
  let Expenses = stringTOFloat("Food") + stringTOFloat("Rent") + stringTOFloat("Clothes");
  importByID("Total_Expenses").innerText = Expenses.toFixed(2);
  Balance = stringTOFloat("Income") - Expenses;
  importByID("Balance").innerText = Balance.toFixed(2);
  //
  //   ClearField("Income");
  ClearField("Food");
  ClearField("Rent");
  ClearField("Clothes");
}

function ClickSave() {
  let SavingAmount = stringTOFloat("Income") * (stringTOFloat("Save") / 100);
  let RemainingBalance = Balance - SavingAmount;
//   console.log(stringTOFloat("Balance"));
//   console.log(SavingAmount);
  importByID("Saving_Amount").innerText = SavingAmount;
  importByID("Remaining_Balance").innerText = RemainingBalance;

  ClearField("Save");
}
