var parola = prompt("inserisci una parola");

if (isPalindroma(parola)) {
    console.log("La parola è palindroma")
} else {
    console.log("La parola NON è palindroma")
}

function isPalindroma(str) {
    var reverse = str.split("").reverse().join("").toUpperCase();

    if (str.toUpperCase() === reverse) {
        return true;
    } else {
        return false;
    }
}