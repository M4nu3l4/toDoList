const frmList = document.getElementById('myList');
const insertItem = document.getElementById('addItems');
const btninsert = document.getElementById('btnInsert');
const list = document.getElementById('list');
const rotture = [];
let form;


btninsert.addEventListener('click', function (e) {
    e.preventDefault();
    let myconfirm = confirm('Confermi inserimento?');
    if (!myconfirm) return;
    if (!checkInput()) return;
    popolateArray();
    printList();
    frmList.reset();
});

function popolateArray() {
    rotture = rotture.push(insertItem.value);
    return rotture.value;
}
function printList() {
    addItems.innerHTML = '';
    for (let i = 0; i < rotture.length; i++) { //array
        let newLi = document.createElement('li');
        newLi.innerText = rotture[i];
        let btnDelete = document.createElement('button');
        btnDelete.setAttribute('type', 'button');
        btnDelete.setAttribute('onclick', `deleteItem(${i})`);
        btnDelete.innerText = '❌';
        newLi.appendChild(btnDelete);
        rotture.appendChild(newLi);
    }
    newBtn = document.createElement('button');
    newBtn.setAttribute('type', 'button');
    newBtn.innerText = 'NUOVO BUTTON';
    newBtn.setAttribute('onclick', 'printAlert()');
    const myBody = document.querySelectorAll('body')[0];
    myBody.appendChild(newBtn);
}
btninsert.addEventListener('click', function () {
    let newAction = '';
    newLi = document.createElement('li');
    newLi.innerText = newAction;
    rotture.appendChild(newLi);
});

function addList() {
    let newAction = '';
    newLi = document.createElement('li');
    newLi.innerText = newAction;
    addItems.appendChild(newLi);
}
btnInsert.addEventListener('click', function (e) {
	e.preventDefault();
	compileObject();
});

function compileObject(rotture) {
    addItems = rotture.value;
    return rotture;
}

    


