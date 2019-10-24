import operations from './scripts/dom.js';
import {Account, Client} from './scripts/account.js'


let Mason = new Client ("Mason", "Aghajani", "1984.07.08");

leftSide.addEventListener("click", (event) => {

    if (event.toElement.className === "addNew") {
        let newAccountType = input1.value;
        let newAccountBalance = Number(input2.value);
        if (newAccountType !="" && newAccountBalance != "") {
            let message = Mason.addNewAccount(newAccountType, newAccountBalance);
            operations.addNew(leftSide, newAccountType);
            input1.value = "";
            input2.value = "";
            display.textContent = message;
            input1.focus();
            if (Mason.Accounts.length === 2) {
                operations.addExtra(leftSide);
            };
        };
    };
    if (event.toElement.className === "deposite") {
        let currentAccount = event.toElement.parentElement;
        let amount = Number(currentAccount.children[1].value);
        if (amount > 0) {
            let currentAccountType = currentAccount.children[0].textContent;
            let CurrentAccountIndex = Mason.Accounts.findIndex((itm) => itm.accountType === currentAccountType);
            Mason.Accounts[CurrentAccountIndex].deposite(amount);
            currentAccount.children[1].value = "";
            display.textContent = `${amount}$ has been deposited to your ${Mason.Accounts[CurrentAccountIndex].accountType}`;
        };
    };
    if (event.toElement.className === "withdraw") {
        let currentAccount = event.toElement.parentElement;
        let amount = Number(currentAccount.children[1].value);
        if (amount > 0) {
            let currentAccountType = currentAccount.children[0].textContent;
            let CurrentAccountIndex = Mason.Accounts.findIndex((itm) => itm.accountType === currentAccountType);
            Mason.Accounts[CurrentAccountIndex].withdraw(amount);
            currentAccount.children[1].value = "";
            display.textContent = `${amount}$ has been withdrawn from your ${Mason.Accounts[CurrentAccountIndex].accountType}`;;
        };
    };
    if (event.toElement.className === "balance") {
        let currentAccount = event.toElement.parentElement;
        let currentAccountType = currentAccount.children[0].textContent;
        let CurrentAccountIndex = Mason.Accounts.findIndex((itm) => itm.accountType === currentAccountType);
        let message = Mason.Accounts[CurrentAccountIndex].checkBalance();
        currentAccount.children[1].value = "";
        display.textContent = message;
    };
    if (event.toElement.className === "delete") {
        let currentAccount = event.toElement.parentElement;
        let currentAccountType = currentAccount.children[0].textContent;
        Mason.removeAccount(currentAccountType);
        currentAccount.children[1].value = "";
        display.textContent = `Your ${currentAccountType} has been closed`;
        operations.delete(currentAccount, leftSide);
        if (Mason.Accounts.length === 1) {
            operations.deleteExtra(leftSide);
        };
    }
    if (event.toElement.className === "highestBalance") {
        let highestBalanceAccount = Mason.highestBalance();
        display.textContent = `Your ${highestBalanceAccount.accountType} has the highest balance, ${highestBalanceAccount.balance}$`
        };
    if (event.toElement.className === "lowestBalance") {
        let lowestBalanceAccount = Mason.lowestBalance();
        display.textContent = `Your ${lowestBalanceAccount.accountType} has the lowests balance, ${lowestBalanceAccount.balance}$`
        };
    if (event.toElement.className === "totalBalance") {
        let totalBalance = Mason.totalBalance();
        display.textContent = `The total balance of all of your accounts is ${totalBalance}$`
        };
});
input2.addEventListener("keypress", (event) => {
    if (event.which === 13) {
        let newAccountType = input1.value;
        let newAccountBalance = Number(input2.value);
        if (newAccountType !="" && newAccountBalance != "") {
            let message = Mason.addNewAccount(newAccountType, newAccountBalance);
            operations.addNew(leftSide, newAccountType);
            input1.value = "";
            input2.value = "";
            display.textContent = message;
            input1.focus();
            if (Mason.Accounts.length === 2) {
                operations.addExtra(leftSide);
            };
        };
    };
});