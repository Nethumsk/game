
function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}
for (var i = 0; i <= 3; i++) {

  function checkNumber() {
    var userInput = parseInt(document.getElementById("userInput").value);
    var resultElement = document.getElementById("result");

    if (userInput === generateRandomNumber) {
        resultElement.textContent = "Congratulations! The number is equal to 10.";
    } else {
        resultElement.textContent = "Sorry, the number is not equal you hava chance.";
    }
}
}