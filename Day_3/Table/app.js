let data = [
    { 'id': '1', 'name': 'Bob', 'surname': 'Richard', 'country': 'France', 'phone': '123456' },
    { 'id': '2', 'name': 'Alice', 'surname': 'Laurent', 'country': 'France', 'phone': '123456' },
    { 'id': '3', 'name': 'João', 'surname': 'Oliveira', 'country': 'Portugal', 'phone': '123456' },
    { 'id': '4', 'name': 'Ana', 'surname': 'Vieira', 'country': 'Portugal', 'phone': '123456' },
    { 'id': '5', 'name': 'Pedro', 'surname': 'Carvalho', 'country': 'Portugal', 'phone': '123456' },
    { 'id': '6', 'name': 'Jim', 'surname': 'Petersen', 'country': 'Denmark', 'phone': '123456' },
]

// Function to create the table
function buildTable(data) {
    const table = document.getElementById('table-body');
    for (let i = 0; i < data.length; i++) {
        let row = `<tr>
                        <td>${data[i].id}</td>
                        <td>${data[i].name}</td>
                        <td>${data[i].surname}</td>
                        <td>${data[i].country}</td>
                        <td>${data[i].phone}</td>
                    </tr>          
        `
        table.innerHTML += row
    }
};

buildTable(data);

