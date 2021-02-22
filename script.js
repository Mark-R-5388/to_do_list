//Selectors
const input = document.getElementById('input');
const submitButton = document.getElementById('submit-btn');
const list = document.getElementById('list');

// Create Elements and Functionality
function create() {
  if (input.value.length > 0) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    //add input to list
    li.appendChild(document.createTextNode(input.value));
    list.appendChild(li);
    //add delete button to list
    deleteButton.innerHTML = 'Delete';
    li.appendChild(deleteButton);
    input.value = '';
    deleteButton.addEventListener('click', remove);
    li.onclick = strikeThrough;
  }
}

//Delete Button
function remove(e) {
  e.target.parentNode.remove();
}

//Submit Button
submitButton.addEventListener('click', create);

//Strike Through
function strikeThrough(e) {
  e.target.classList.toggle('complete');
}
