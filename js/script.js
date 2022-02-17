// calculate btn part 
document.getElementById("calculate-btn").addEventListener('click', function () {
    let income = parseFloat(document.getElementById('income').value);
    let food = parseFloat(document.getElementById('food').value);
    let rent = parseFloat(document.getElementById('rent').value);
    let cloth = parseFloat(document.getElementById('cloth').value);
    let totalExpenses = food + rent + cloth;

    console.log(totalExpenses);


})