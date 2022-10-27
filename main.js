const shoppingList = [
    'Pane',
    'Latte',
    'Vino',
    'Birra',
    'Vodka'
]
    


const listContainer = document.getElementById("list");

while (shoppingList.length) {
    ( i = 0 )
    const listItem = document.createElement("li")
    listItem.innerHTML = shoppingList[i]

    listContainer.append(listItem)
}
document.querySelector('li:last-child').classList.add("red")