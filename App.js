// SELECTOR
 const todo = document.querySelector('#todo-text');
 const todoAddBtn = document.querySelector('#todo-btn');
 const todoList = document.querySelector('.todo-List');
 const strokeBtn = document.querySelector('.addBtn');

// EVENT LISTENERs
console.log("heeeeeeeeeeeeee");
todoAddBtn.addEventListener('click',show);
strokeBtn.addEventListener('click',completed);
console.log(strokeBtn);

// FUNCTION

function show(hold){
    hold.preventDefault();
    if (todo.value === ''){
        // alert user if to fill in input box
        // alert("Filled required");
        // reload if the input box is empty but it's not the best way
        // required working now
        window.reload()
        // console response
        console.log("Empty");
    }else{
        console.log(todo.value);

    }

    //create div
    const todoShowDiv = document.createElement('div');
    // to div class name
    todoShowDiv.classList.add('todoItems');
    // List inside div todo-items
    const todoLi = document.createElement('li');
    // todoList Class name
    todoLi.classList.add("todoLi");
    // add text for sample
    todoLi.innerText = todo.value;
    todoShowDiv.appendChild(todoLi);
    // complete button
    compBtn = document.createElement('button');
    compBtn.innerText = "Completed";
    compBtn.classList.add('addBtn');
    todoShowDiv.appendChild(compBtn);
    // delete Btn
    delBtn = document.createElement('button');
    delBtn.innerText = "Delete";
    delBtn.classList.add('trashBtn');
    todoShowDiv.appendChild(delBtn);
    // binding all to ul
    todoList.appendChild(todoShowDiv);
    // clear the input box after submit
    todo.value = "";

}

function completed(d){
    // d.preventDefault();
    console.log("coming");
    // document.querySelector('todoLi').style.color=("red");
    alert("hey")
}


// TEST
// btn = document.querySelector('#todo-btn');
// btn.addEventListener('click', add);
// function add(h){
//     h.preventDefault();
//     const todoList = document.querySelector('.todo-List');
//     const link = document.createElement('li');
//     link.innerText ="i am working working";
//     todoList.appendChild(link);
// }
