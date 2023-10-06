function checkVotingEligibility(age) {
    if (age >= 18) {
        return "You are eligible to vote";
    } else {
        return "Sorry, you are not eligible to vote yet";
    }
}
function checkEligibility() {
    const ageInput = document.getElementById("ageInput");
    const resultElement = document.getElementById("result");
    const age = parseInt(ageInput.value); 
    const result = checkVotingEligibility(age);
    resultElement.textContent = result;
}