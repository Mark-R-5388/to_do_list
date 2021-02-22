//Selectors
const input = document.getElementById('input');
const submitButton = document.getElementById('submit-btn');
const list = document.getElementById('list');

// Add to List
submitButton.addEventListener('click', function (e) {
  if (e.target === submitButton) {
    let item = document.createElement('li');
    let deleteButton = document.createElement('button');
    item.appendChild(document.createTextNode(input.value));
    list.appendChild(item);
    list.appendChild(deleteButton);
    deleteButton.innerHTML = 'Delete';
    return (input.value = '');
  }
});
