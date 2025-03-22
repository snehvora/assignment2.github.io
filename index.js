function reverseString() {
    let input = document.getElementById("inputString").value;
    let result = "";
    for (let i = input.length - 1; i >= 0; i--) {
        result += input[i];
    }

    if(result !== ""){
        document.getElementById("reversestring").textContent = result;
    }
}


function checkPalindrome() {
    let input = document.getElementById("inputNumbers").value;
    let result = "";
    for (let i = input.length - 1; i >= 0; i--) {
        result += input[i];
    }
    if (input === result) {
        if(result !== ""){
            document.getElementById("inputnumbers").textContent = "Yes, It is Palindrome";
        }
    } else {
        document.getElementById("inputnumbers").textContent = "No, It is not Palindrome";
    }
}

function tipCalculator(){
    let inputSubTotal = document.getElementById("inputSubtotal").value;
    let inputTipPercentage = document.getElementById("inputPercentagetip").value;

    let tipAmount = (inputSubTotal * inputTipPercentage) / 100;
    let result = parseFloat(inputSubTotal) + parseFloat(tipAmount);
    if(inputSubTotal === ""){
        document.getElementById("totalAmount").textContent = 'Please enter the valid Subtotal amount!';
    }else{
        document.getElementById("totalAmount").textContent = 'Your Total amount is : ' + result;
    }
}