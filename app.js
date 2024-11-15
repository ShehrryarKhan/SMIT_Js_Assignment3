function hatTail() {
    const result = Math.random() < 0.5 ? "Hat" : "Tail";
    document.getElementById("hatTailResult").innerText = `The result is: ${result}`;
}


function diceRoll() {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    document.getElementById("diceResult").innerText = `You rolled a: ${diceValue}`;
}

function generatePassword() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    document.getElementById("passwordResult").innerText = `Your random password is: ${password}`;
}


function showWeight() {
    const weightInput = document.getElementById("weightInput").value;
    const weight = parseFloat(weightInput.replace(/[^\d.-]/g, ''));
    if (!isNaN(weight)) {
        document.getElementById("weightResult").innerText = `Your weight is: ${weight} kg`;
    } else {
        document.getElementById("weightResult").innerText = "Please enter a valid weight.";
    }
}