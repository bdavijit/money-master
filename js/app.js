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

function ClickCalculate() {
  let Expenses = stringTOFloat("Food") + stringTOFloat("Rent") + stringTOFloat("Clothes");
  importByID("Total_Expenses").innerText = Expenses.toFixed(2);
  importByID("Balance").innerText = (
    stringTOFloat("Income") - Expenses
  ).toFixed(2);
  //
  ClearField("Income");
  ClearField("Food");
  ClearField("Rent");
  ClearField("Clothes");
}

function ClickSave() {}
