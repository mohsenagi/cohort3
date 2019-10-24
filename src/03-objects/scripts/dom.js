const operations = {
    delete: (currentAccount, leftSide) => {
        leftSide.removeChild(currentAccount);
    },
    addNew: (leftSide, newAccountType) => {
        let newCard = document.createElement("div");
        newCard.className ="accountCard";
        let newCardHeader = document.createElement("h2");
        newCardHeader.className="cardHeader";
        newCardHeader.textContent = `${newAccountType}`;
        let inputField = document.createElement("input");
        inputField.className = "inputField"
        inputField.type = "Number"
        inputField.placeholder = "amount to withdrw/deposite"
        let deposite = document.createElement("button");
        deposite.className="deposite";
        deposite.textContent = `Deposite`;
        let withdraw = document.createElement("button");
        withdraw.className="withdraw";
        withdraw.textContent = `Withdraw`;
        let newDelete = document.createElement("button");
        newDelete.className="delete";
        newDelete.textContent = `Delete`;
        let balance = document.createElement("button");
        balance.className="balance";
        balance.textContent = `Account Balance`;
        newCard.appendChild(newCardHeader);
        newCard.appendChild(inputField);
        newCard.appendChild(deposite);
        newCard.appendChild(withdraw);
        newCard.appendChild(balance);
        newCard.appendChild(newDelete);
        leftSide.appendChild(newCard);
    },
    addExtra: (leftSide) => {
        let highestBalance = document.createElement("button");
        highestBalance.className="highestBalance";
        highestBalance.textContent = `Highest Balance`;
        let lowestBalance = document.createElement("button");
        lowestBalance.className="lowestBalance";
        lowestBalance.textContent = `Lowest Balance`;
        let totalBalance = document.createElement("button");
        totalBalance.className="totalBalance";
        totalBalance.textContent = `Total Balance`;
        let extraDiv = document.createElement("div");
        extraDiv.className ="extraDiv";
        extraDiv.appendChild(highestBalance);
        extraDiv.appendChild(lowestBalance);
        extraDiv.appendChild(totalBalance);
        leftSide.insertBefore(extraDiv, leftSide.children[3])
    },
    deleteExtra: (leftSide) => {
        leftSide.removeChild(leftSide.children[3]);
    }
};

export default operations;