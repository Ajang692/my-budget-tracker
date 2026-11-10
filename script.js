const form = document.querySelector("form");
const tableBody = document.querySelector("tbody");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.querySelector("#expense-name").value;
    const amount = document.querySelector("#amount").value;
    const category = document.querySelector("#category").value;

    if (name === "" || amount === "") {
        alert("Please enter the expense name and amount.");
        return;
    }

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${amount}</td>
        <td>${category}</td>
    `;

    tableBody.appendChild(row);

    form.reset();
});