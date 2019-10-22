import {Account, Client} from './account.js'

test('account', () => {
    const checkingAccount = new Account ("Checking Account", 25)
    expect(checkingAccount.balance).toBe(25);
    checkingAccount.deposit(10);
    expect(checkingAccount.balance).toBe(35);
    checkingAccount.withdraw(30);
    expect(checkingAccount.balance).toBe(5);
    expect(checkingAccount.checkBalance()).toBe("The account balance is 5$");
});

test('client', () => {
    const newClient = new Client ("Bill", "Gates", "1960.01.01");
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
    expect(newClient.lowestBalance()).toEqual({accountType:'Car Loan', balance:-10000});
    expect(newClient.highestBalance()).toEqual({accountType:'Saving Account', balance:50});
});