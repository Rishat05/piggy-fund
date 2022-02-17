// calculate btn part 
document.getElementById("calculate-btn").addEventListener('click', function () {
    let income = parseFloat(document.getElementById('income').value);
    let food = parseFloat(document.getElementById('food').value);
    let rent = parseFloat(document.getElementById('rent').value);
    let cloth = parseFloat(document.getElementById('cloth').value);
    let totalExpenses = food + rent + cloth;


    let balance = income - totalExpenses

    document.getElementById("total-expences").innerText = totalExpenses;
    document.getElementById("balance").innerText = balance;

})

// save part 
document.getElementById("save").addEventListener('click', function () {
    let discount = parseFloat(document.getElementById('discount').value);
    discount = discount / 100;
    // saving account 
    let income = parseFloat(document.getElementById('income').value);
    let savingAccount = income * discount;
    document.getElementById("saving-account").innerText = savingAccount;

    // remaining balance 
    let balance = parseFloat(document.getElementById("balance").innerText);
    let remaingBalance = balance - savingAccount;
    document.getElementById("remaing-balance").innerText = remaingBalance;
    console.log(remaingBalance)

})