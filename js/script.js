
function zeroInputAssign(inputId) {
    let inputValue = document.getElementById(inputId);
    if (inputValue.value.length == '') {
        document.getElementById(inputId).value = 0;
    }
}

function getInputValue(inputId) {
    const inputValueText = document.getElementById(inputId).value;
    return inputValueText;
}

function assignInInnerText(textFieldId, assignValue) {
    document.getElementById(textFieldId).innerText = assignValue;
}

function emptyAssignInInnerText(textFieldId) {
    document.getElementById(textFieldId).innerText = '';
}

function assignEmptyInInput(inputId) {
    document.getElementById(inputId).value = '';
}

function errorFoundUpdateValue() {
    assignInInnerText('total-expences', 0);
    assignInInnerText('saving-amount', 0);
    assignInInnerText('remaing-balance', 0);
}
// calculate btn part
document.getElementById("calculate-btn").addEventListener('click', function () {

    zeroInputAssign('income');
    zeroInputAssign('food');
    zeroInputAssign('rent');
    zeroInputAssign('cloth');

    let income = parseFloat(getInputValue('income'));
    let food = parseFloat(getInputValue('food'));
    let rent = parseFloat(getInputValue('rent'));
    let cloth = parseFloat(getInputValue('cloth'));

    //validation 1
    let check = 0;
    console.log(food, rent, cloth);
    if (food < 0 || rent < 0 || cloth < 0) {
        assignInInnerText('error-expenses-negative', "*negative number not allowed");
        errorFoundUpdateValue();
        assignInInnerText('balance', income);
        check = 1;
    }

    //validation 2 
    if (isNaN(food) || isNaN(rent) || isNaN(cloth)) {
        assignInInnerText('error-expenses-string', "*Only number are allowed");
        errorFoundUpdateValue();
        assignInInnerText('balance', income);
        check = 1;
    }

    if (check != 1) {
        //find total expences balance
        let totalExpenses = food + rent + cloth;
        let balance = income - totalExpenses;
        assignInInnerText('total-expences', totalExpenses.toFixed());
        emptyAssignInInnerText('error-expenses-negative');
        emptyAssignInInnerText('error-expenses-string');

        //Error message 1 validation
        if (totalExpenses > income) {
            assignInInnerText('error-more-expenses', "*You have insufficient balance");
            assignInInnerText('balance', income);
        }
        else {
            //balance 
            assignInInnerText('balance', balance.toFixed());
            emptyAssignInInnerText('error-more-expenses');
        }

    }

    //all clear after click  
    assignEmptyInInput('food', '');
    assignEmptyInInput('rent', '');
    assignEmptyInInput('cloth', '');

})

// save part 
document.getElementById("save").addEventListener('click', function () {

    zeroInputAssign('discount');
    zeroInputAssign('income');

    let discount = parseFloat(getInputValue('discount'));
    let income = parseFloat(getInputValue('income'));

    //validation 1 save
    if (discount < 0) {
        assignInInnerText('error-discount-negative', "*Save can not be negative number");
        assignInInnerText('saving-amount', 0);
        discount = 0;
    }
    else {
        //discout percentage
        discount = discount / 100;
        emptyAssignInInnerText('error-discount-negative');
    }
    // saving account 
    let savingAccount = income * discount;
    assignInInnerText("saving-amount", savingAccount.toFixed());

    let balance = parseFloat(document.getElementById('balance').innerText);
    // Error message 2 validation 
    if (balance < savingAccount) {
        assignInInnerText('error-saving-amount', "*You have insufficient balance");
        assignInInnerText('remaing-balance', balance);
    }

    else {
        // remaining balance 
        let remaingBalance = balance - savingAccount;
        assignInInnerText("remaing-balance", remaingBalance.toFixed());
        emptyAssignInInnerText('error-saving-amount');
        //assignEmptyInInput('income');
    }

})