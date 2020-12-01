var list = document.getElementById("list");
firebase.database().ref('todos').on('child_added', function(data){
    // create li tag with text node
var li = document.createElement("li")
var liText = document.createTextNode(data.val().value)
li.appendChild(liText)

// create delete button
var delbtn = document.createElement("button")
var delText = document.createTextNode("DELETE")
delbtn.setAttribute("class","delbtn")
delbtn.setAttribute('id',data.val().key)
delbtn.setAttribute("onclick","deleteItem(this)")
delbtn.appendChild(delText)

// create edit button
var editbtn = document.createElement("button");
var editText = document.createTextNode("EDIT")
editbtn.setAttribute("class","editbtn")
editbtn.appendChild(editText)
editbtn.setAttribute("onclick","editItem(this)")
editbtn.setAttribute('id', data.val().key)

li.appendChild(delbtn)
li.appendChild(editbtn)

list.appendChild(li)

// todo_item.value = ""
})
function addTodo(){
var todo_item = document.getElementById("todo-item");
var key = firebase.database().ref('todos').push().key
var todo = {
    value : todo_item.value,
    key : key
}
firebase.database().ref('todos').child(key).set(todo)
// // create li tag with text node
// var li = document.createElement("li")
// var liText = document.createTextNode(todo_item.value)
// li.appendChild(liText)

// // create delete button
// var delbtn = document.createElement("button")
// var delText = document.createTextNode("DELETE")
// delbtn.setAttribute("class","delbtn")
// delbtn.setAttribute("onclick","deleteItem(this)")
// delbtn.appendChild(delText)

// // create edit button
// var editbtn = document.createElement("button");
// var editText = document.createTextNode("EDIT")
// editbtn.setAttribute("class","editbtn")
// editbtn.appendChild(editText)
// editbtn.setAttribute("onclick","editItem(this)")

// li.appendChild(delbtn)
// li.appendChild(editbtn)

// list.appendChild(li)

todo_item.value = ""
 }

function deleteItem(e) {
firebase.database().ref('todos').child(e.id).remove()
    e.parentNode.remove()
}

function editItem(e){
    var val = prompt("Enter updated value",e.parentNode.firstChild.nodeValue)
   var editTodo = {
       value: val,
       key: e.id
}
firebase.database().ref('todos').child(e.id).set(editTodo)
    e.parentNode.firstChild.nodeValue = val;
    
}

function delAll(){
    list.innerHTML = ""
}