const input = document.getElementById('input');
const subBtn = document.getElementById('submit-btn');
const listBlock = document.getElementById('list-block');
const listArea = document.getElementById('list-area');

subBtn.addEventListener('click', function (event) {
  if (event.target === subBtn) {
    let list = document.createElement('li');
    let listItem = document.createTextNode(input.value);
    list.appendChild(listItem);
    listArea.appendChild(list);
    input.value = '';
  }
});
