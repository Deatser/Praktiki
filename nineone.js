function checkRegistration() {
    var registrationInput = document.getElementById("registration").value;
    var resultElement = document.getElementById("result");

    if (registrationInput.toLowerCase() === "да") {
        resultElement.innerText = "Круто!";
    } else {
        resultElement.innerText = "Попробуй ещё раз";
    }
}