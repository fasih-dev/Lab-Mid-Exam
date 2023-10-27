const input = document.getElementById("input");
const TodoBtn = document.getElementById("submit-button");
const todoList = document.getElementById("todos");

TodoBtn.addEventListener("click", function() {
  const todoText = input.value;
  const listItem = document.createElement("li");

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';

  
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';

  editButton.style.fontSize = '16px'; 
  editButton.style.background = 'black'; 
  editButton.style.color = 'white'; 
  editButton.style.padding = '10px';


  deleteButton.style.fontSize = '16px';
  deleteButton.style.background= 'black';
  deleteButton.style.color = 'white';
  deleteButton.style.padding = '10px';
  deleteButton.style.marginRight = ' 15px';
  

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";



 
  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      label.style.textDecoration = 'line-through';
    } else {
      label.style.textDecoration = 'none';
    }
  });

  deleteButton.addEventListener('click',function() {
    listItem.remove();
  });



  const label = document.createElement("label");
  label.textContent = todoText;


  label.style.fontSize = '24px';
  label.style.color = ' black';
  label.style.paddingRight = '20px';

  todoList.appendChild(listItem);

  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  listItem.appendChild(deleteButton);
  listItem.appendChild(editButton);

  input.value = '';

});



