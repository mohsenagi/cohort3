class Account {
    constructor (accountType, balance) {
        this.accountType = accountType;
        this.balance = balance;
    }
    deposite(num) {
        this.balance = this.balance + num;
    }
    withdraw(num) {
        this.balance = this.balance - num
    }
    checkBalance() {
        return `Current balance of your ${this.accountType} is ${this.balance}$`
    }
}

class Client {
    constructor (clientName, clientLastName, clientDOB,) {
        this.clientName = clientName;
        this.clientLastName = clientLastName;
        this.clientDOB = clientDOB;
        this.Accounts = [];
    }
    addNewAccount (accountType, balance) {
        let message;
        if (this.Accounts.filter((itm) => itm.accountType === accountType).length === 0) {
            let newAccount = new Account (accountType, balance);
            this.Accounts.push(newAccount);
            message = `The new account (type: ${accountType}) with initial balance of ${balance}$ has been added`
        } else {
            message = `You already have a ${accountType}, please select a different Account Type`
        }
        return message;
    }
    removeAccount (accountType) {
        this.Accounts = this.Accounts.filter((itm) => itm.accountType != accountType);
    }
    totalBalance () {
        return this.Accounts.reduce((acc, itm) => itm.balance+acc, 0);
    }
    lowestBalance() {
        this.Accounts.sort((a, b) => a.balance-b.balance);
        return this.Accounts[0];
    }
    highestBalance() {
        this.Accounts.sort((a, b) => b.balance-a.balance);
        return this.Accounts[0];
    }
}

export { Account, Client }