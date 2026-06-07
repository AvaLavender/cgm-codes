
let balance = 0;
let totalIncome = 0;
let totalExpense = 0;

function setBalance() {
    let initialBal = parseFloat(document.getElementById('initial-balance').value);
    if (!isNaN(initialBal)) {
        balance = initialBal;
    
        document.getElementById('balance').innerText = balance;
    }
}

function addIncome() {

    let desc = document.getElementById('desc').value;
    let amt = parseFloat(document.getElementById('amount').value);

    if (amt > 0) {

        balance += amt;
        totalIncome += amt;

        updateDisplays();
 
        addToList('income-list', desc, amt);

        clearInputs();
    }
}


function addExpense() {

    let desc = document.getElementById('desc').value;
    let amt = parseFloat(document.getElementById('amount').value);

    if (amt > 0) {

        balance -= amt;
        totalExpense += amt;

        updateDisplays();

        addToList('expense-list', desc, amt);

        clearInputs();
    }
}


function updateDisplays() {
    document.getElementById('balance').innerText = balance;
    document.getElementById('total-incomes').innerText = totalIncome;
    document.getElementById('total-expenses').innerText = totalExpense;
}

function addToList(listId, desc, amt) {

    let list = document.getElementById(listId);

    let li = document.createElement('li');
    li.className = 'list-group-item';

    li.innerText = desc + ': ₹' + amt;

    list.appendChild(li);
}

function clearInputs() {
    document.getElementById('desc').value = '';
    document.getElementById('amount').value = '';
}