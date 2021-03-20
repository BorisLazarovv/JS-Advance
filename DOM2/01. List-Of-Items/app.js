function addItem() {
    //select input field
    const text = document.getElementById('newItemText').value
    //creat new <li> element
    const liElement = document.createElement('li');
    // set text of ne element to input value
    liElement.textContent = text;
    //select list from page
    const ulElement =document.getElementById('items')
    //append new element to list
    ulElement.appendChild(liElement);
    document.getElementById('newItemText').value = '';
}