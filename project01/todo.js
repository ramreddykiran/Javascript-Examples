var ul = document.getElementById("list")

var addButton = document.getElementById("add")
addButton.addEventListener('click', addItem)

var removeButton = document.getElementById("remove")
removeButton.addEventListener('click', removeItem)

function addItem() {
    console.log('add button clicked')
    var input = document.getElementById('input')
    var item = input.value;
    var textnode = document.createTextNode(item)
    console.log(input.value);
    if(input.value === ''){
        console.log('blank input passed');
        var blankInput = document.createElement('p');
        var blankInputValue = document.createTextNode('Enter your todo')
        blankInput.appendChild(blankInputValue);
        document.querySelector('p').appendChild(blankInput)
        return false;
    } else {
        //create li
        li = document.createElement('li');

        //create checkbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check');

        //create label
        var label = document.createElement('label');
        label.setAttribute('for', 'item'); // this line is optional

        //add these elements on the webpage
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);
        setTimeout(() => {
            li.className = 'visual'
        }, 5)
        input.value = '';
    }

}
function removeItem() {
    var li = ul.children
    console.log('remove button clicked ');
   
    for (let index = 0; index < li.length; index++) {
        //console.log(li[index].children[0].checked);
        while(li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        } 
    }
}

/*
var h = document.createElement('h1')
var myValue = document.createTextNode('hello')
h.appendChild(myValue)
document.querySelector('h1').appendChild(h)
*/