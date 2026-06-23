let balance = localStorage.getItem("balance");

if (balance === null) {
    balance = 0;
}

document.getElementById("balance").innerText =
    "Balance: ₹" + balance;

function addMoney() {
    let amount = Number(document.getElementById("amount").value);

    balance = Number(balance) + amount;

    localStorage.setItem("balance", balance);

    document.getElementById("balance").innerText =
        "Balance: ₹" + balance;
}

function removeMoney() {
    let amount = Number(document.getElementById("amount").value);

    balance = Number(balance) - amount;

    localStorage.setItem("balance", balance);

    document.getElementById("balance").innerText =
        "Balance: ₹" + balance;
}
