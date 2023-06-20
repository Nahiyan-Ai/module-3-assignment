function append() {
    for(let i=1; i<=5; i++) {
        const listItem = document.createElement("li");

        const itemText = document.createTextNode(i);
    
        listItem.appendChild(itemText);
    
        document.getElementById('list').appendChild(listItem);
    }
}