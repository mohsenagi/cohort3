import operations from './functions2.js';

test('Add New, Add After, Add Before, Delete', () => {
    let leftSide = document.createElement("div");
    leftSide.id = "leftside";
    let leftHeader = document.createElement("h1");
    leftHeader.textcontent = "Playing With Cards";
    leftSide.appendChild(leftHeader);
    let addNewButton = document.createElement("button")
    addNewButton.id = "addNew";
    addNewButton.textContent = "Add New Card";
    leftSide.appendChild(addNewButton)
    expect(leftSide.children.length).toBe(2);
    operations.addNew(leftSide);
    expect(leftSide.children.length).toBe(3);
    operations.addNew(leftSide);
    expect(leftSide.children.length).toBe(4);
    expect(leftSide.children[3].children[0].textContent).toBe("Card 2");
    expect(leftSide.children[2].children[0].textContent).toBe("Card 1");
    operations.addAfter(leftSide.children[2], leftSide)
    expect(leftSide.children.length).toBe(5);
    expect(leftSide.children[3].children[0].textContent).toBe("Card 3");
    expect(leftSide.children[4].children[0].textContent).toBe("Card 2");
    operations.addBefore(leftSide.children[4], leftSide)
    expect(leftSide.children.length).toBe(6);
    expect(leftSide.children[4].children[0].textContent).toBe("Card 4");
    expect(leftSide.children[5].children[0].textContent).toBe("Card 2");
    expect(leftSide.children[3].children[0].textContent).toBe("Card 3");
    operations.delete(leftSide.children[3], leftSide);
    expect(leftSide.children.length).toBe(5);
    expect(leftSide.children[3].children[0].textContent).toBe("Card 4");
});