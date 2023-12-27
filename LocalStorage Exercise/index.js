document.addEventListener('DOMContentLoaded', function () {
    const userForm = document.getElementById('userForm');
    const retrieveDataBtn = document.getElementById('retrieveData');
    const displayArea = document.getElementById('displayArea');

    userForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;

        if (name && age) {
            const userData = {
                name: name,
                age: age
            };

            localStorage.setItem('userData', JSON.stringify(userData));

            userForm.reset();
        } else {
            alert('Please enter both name and age.');
        }
    });

    retrieveDataBtn.addEventListener('click', function () {
        const storedData = localStorage.getItem('userData');

        if (storedData) {
            const userData = JSON.parse(storedData);

            const table = document.createElement('table');
            table.innerHTML = `<tr>
                                  <th>Name</th>
                                  <th>Age</th>
                                </tr>
                                <tr>
                                  <td>${userData.name}</td>
                                  <td>${userData.age}</td>
                                </tr>`;

            displayArea.appendChild(table);
        } else {
            displayArea.innerHTML = '<p>No data stored in Local Storage.</p>';
        }
    });
});

