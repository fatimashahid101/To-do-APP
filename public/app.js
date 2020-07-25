var list = document.getElementById("list");

function addTodo(){
var todo_item = document.getElementById("todo-item");

// create li tag with text node
var li = document.createElement("li")
var liText = document.createTextNode(todo_item.value)
li.appendChild(liText)

// create delete button
var delbtn = document.createElement("button")
var delText = document.createTextNode("DELETE")
delbtn.setAttribute("class","delbtn")
delbtn.setAttribute("onclick","deleteItem(this)")
delbtn.appendChild(delText)

// create edit button
var editbtn = document.createElement("button");
var editText = document.createTextNode("EDIT")
editbtn.setAttribute("class","editbtn")
editbtn.appendChild(editText)
editbtn.setAttribute("onclick","editItem(this)")

li.appendChild(delbtn)
li.appendChild(editbtn)

list.appendChild(li)

todo_item.value = ""
}

function deleteItem(e) {

    e.parentNode.remove()
}

function editItem(e){
    var val = prompt("Enter updated value",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val;
    
}

function delAll(){
    list.innerHTML = ""
}