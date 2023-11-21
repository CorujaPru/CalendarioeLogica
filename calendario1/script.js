
function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const birthDate = document.getElementById('birth-date').value;

  if (!validateForm(name, birthDate)) {
    alert('Por favor, preencha o formulário corretamente.');
    return;
  }

  const person = {
    name,
    birthDate,
  };

  addPerson(person);
  updateTable();
}

function validateForm(name, birthDate) {
  const nameRegex = /^[A-Za-z]+$/;

  if (name.length < 3 || name.length > 120 || !name.match(nameRegex)) {
    return false;
  }

  return true;
}

let peopleList = [];

function addPerson(person) {
  peopleList.push(person);
}

function updateTable() {
  const tableBody = document.getElementById('dataBody');

  tableBody.innerHTML = '';

  peopleList.forEach((person, index) => {
    const row = tableBody.insertRow();

    const nameCell = row.insertCell(0);
    nameCell.textContent = person.name;

    const birthDateCell = row.insertCell(1);
    birthDateCell.textContent = person.birthDate;

    const actionsCell = row.insertCell(2);
    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.className = 'edit';
    editButton.onclick = () => editPerson(index);
    actionsCell.appendChild(editButton);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.className = 'remove';
    removeButton.onclick = () => removePerson(index);
    actionsCell.appendChild(removeButton);
  });
}
function editPerson(index) {

  const person = peopleList[index];
  document.getElementById('name').value = person.name;
  document.getElementById('birth-date').value = person.birthDate;
  peopleList.splice(index, 1);

  updateTable();
}

function removePerson(index) {
  peopleList.splice(index, 1);
  updateTable();
}

  