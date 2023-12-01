
let myData = [
    {id: 1, name: "John Doe", address : "Silchar", phn: "9876543210", dob: "08-08-2000", email: "johndoe@gmail.com"}
]

function readData() {
    localStorage.setItem("object", JSON.stringify(myData));
    let tableData = document.querySelector(".data-table");
    let object = localStorage.getItem("object");
    let objectData = JSON.parse(object);
    let elements = "";

    objectData.map(record => (
        elements += `<tr>
            <td>${record.name}</td>
            <td>${record.address}</td>
            <td>${record.phn}</td>
            <td>${record.dob}</td>
            <td>${record.email}</td>
            <td><button>Edit</button>
            <button>Delete</button></td>
        </tr>`
    ))
    tableData.innerHTML = elements;
}