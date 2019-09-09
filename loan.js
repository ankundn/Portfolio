/* Function to get the inputs of loan amount, annual interest,
payment period and zipcode then calculate and output the approximate
monthy payment, total payment and total interest in decimal values.
*/
function calculateLoan() {
    let amount = document.getElementById("amount").value;
    let annual = document.getElementById("interest").value;
    let period = document.getElementById("repay").value;
    let monthlyp = document.getElementById("mp");
    let total = document.getElementById("tp");
    let totalint = document.getElementById("ti");
    

    //This gets the principal value input by a user and converts it to a decimal value
    var principal = parseFloat(amount);
    //This converts interest from a percentage value to a decimal and from an annual rate to a monthly rate
    var interest = parseFloat(annual) / 100 / 12;
    //This get payment period given in years and converts it to monthly payments
    var monthlypayments = parseFloat(period) * 12;
      
    // This computes the monthly payment figure, using esoteric math.
    var x = Math.pow(1 + interest, monthlypayments); 
    var monthly = (principal*x*interest)/(x-1);
    
    //Checking if the result is a finite number and if so, display the results.
    if (isFinite(monthly)){
      // These three lines populate the output fields with values rounded to 2 decimal places
      monthlyp.innerHTML = monthly.toFixed(2);
      total.innerHTML = (monthly * monthlypayments).toFixed(2);
      totalint.innerHTML = ((monthly*monthlypayments)-principal).toFixed(2);
    }
    // Otherwise, if the user inputs an invalid value then anything is displayed.
    else {
      monthlyp.innerHTML = "";
      total.innerHTML = "";
      totalint.innerHTML = "";
  }
};