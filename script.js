function Random() {
    const fourDigitPin = Math.round(1000 + Math.random() * 9000);
    document.getElementById('pin-generate').value = fourDigitPin;
}

function removeNumber() {
    const element = document.getElementById("numberInput").value;
    document.getElementById("numberInput").value = element.substring(0, element.length - 1);
}

// Validation Check
function validPin() {
    const generatePin = document.getElementById('pin-generate').value;
    const numberInput = document.getElementById('numberInput').value;
    if (generatePin == numberInput) {
        document.getElementById('pin-matched').style.visibility = 'visible';
        document.getElementById('pin-not-matched').style.visibility = 'hidden';
    } else if (generatePin != numberInput) {
        document.getElementById('pin-not-matched').style.visibility = 'visible';
        document.getElementById('pin-matched').style.visibility = 'hidden';
    }
}
// Try left section
let count = 3;

function clickFunc() {
    count--;
    document.getElementById('btn-decrease').innerHTML = count;
    let btn = document.querySelector('button.submit-btn');
    if (count == 0) {
        btn.disabled = true;
    }
}