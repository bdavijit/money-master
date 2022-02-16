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

function FindError(htmlID){
    let fieldValue = stringTOFloat(htmlID);
    if(isNaN(fieldValue)){
        alert(`${htmlID} is not a number.` );
        return true;
    }else if(fieldValue < 0 ){
        alert(`${htmlID}: negative value not allowed` );
        return true;
    }
    return false;
}

let Balance = 0;
function ClickCalculate() {

   if(FindError("Income")){

   }else if(FindError("Food")){
       
   }
   else if(FindError("Rent")){

   }
   else if(FindError("Clothes")){

   }else{
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


}

function ClickSave() {
    if(FindError("Save")){

    }else{
        let SavingAmount = stringTOFloat("Income") * (stringTOFloat("Save") / 100);
        let RemainingBalance = Balance - SavingAmount;
        importByID("Saving_Amount").innerText = SavingAmount.toFixed(2);
        //Error
        if(RemainingBalance < 0){
           alert("Insufficient Balance")
        }else{
          importByID("Remaining_Balance").innerText = RemainingBalance.toFixed(2);
        
          ClearField("Save");
        }
    }


}
