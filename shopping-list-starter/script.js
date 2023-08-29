let shoppingListItems = ["milk", "eggs", "bread"];

// Here we grab the ul from the HTML
// let listElement = document.getElementById("shopping-list-items");


// for (const shoppingItem of shoppingListItems) {
//     console.log(shoppingItem);
//     // We create a list element
//     let itemElement = document.createElement("li");

//     //Add the inner text to the list element
//     itemElement.innerText = shoppingItem;
    
//     // Add the list element to the ul
//     listElement.appendChild(itemElement);
// }
updateItems();

function addItem() {
    let item = document.getElementById("new-item-text").value;
    shoppingListItems.push(item);
    console.log(shoppingListItems);
    updateItems();
    document.getElementById("new-item-text").value= "";
    document.getElementById("new-item-text").placeholder = "";
}

function updateItems() {
    // Frist we get the list element
    let listElement = document.getElementById("shopping-list-items");
    // Then we clear it of any existing items
    listElement.innerHTML = "";

    // Then we loop through the shooping list items and add them to the list
    for (const shoppingItem of shoppingListItems){
        let itemElement = document.createElement("li");
        itemElement.innerText = shoppingItem;
        listElement.appendChild(itemElement);
    }
}

function clearItems() {

    shoppingListItems = [];

    let listElement = document.getElementById("shopping-list-items");
    
    while(listElement.firstChild) listElement.removeChild(listElement.firstChild);
}