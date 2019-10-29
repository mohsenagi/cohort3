import {Account, AccountController} from './account.js'

test('account', () => {
    const checkingAccount = new Account ("Checking Account", 25)
    expect(checkingAccount.balance).toBe(25);
    checkingAccount.deposite(10);
    expect(checkingAccount.balance).toBe(35);
    checkingAccount.withdraw(30);
    expect(checkingAccount.balance).toBe(5);
    expect(checkingAccount.checkBalance()).toBe("Current balance of your Checking Account is 5$");
});

test('AccountController', () => {
    const newClient = new AccountController ("Bill", "Gates", "1960.01.01");
    newClient.addNewAccount("Checking Account", 25);
    expect(newClient.Accounts.length).toBe(1);
    newClient.addNewAccount("Saving Account", 50);
    expect(newClient.Accounts.length).toBe(2);
    expect(newClient.Accounts[0].accountType).toBe("Checking Account");
    expect(newClient.Accounts[1].accountType).toBe("Saving Account");
    newClient.addNewAccount("Saving Account", 100);
    expect(newClient.Accounts.length).toBe(2);
    expect(newClient.totalBalance()).toEqual(75);
    newClient.addNewAccount("Car Loan", -10000);
    expect(newClient.Accounts.length).toBe(3);
    expect(newClient.lowestBalance()).toEqual({accountType:'Car Loan', balance:-10000});
    expect(newClient.highestBalance()).toEqual({accountType:'Saving Account', balance:50});
    expect(newClient.totalBalance()).toEqual(-9925);
    newClient.removeAccount("Car Loan");
    expect(newClient.Accounts.length).toBe(2);
    expect(newClient.totalBalance()).toEqual(75);
});