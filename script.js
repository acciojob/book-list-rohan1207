document.addEventListener('DOMContentLoaded', () => {
    let submitButton = document.querySelector("#submit");

    submitButton.addEventListener("click", () => {
     
        let title = document.querySelector("#title").value;
        let author = document.querySelector("#author").value;
        let isbn = document.querySelector("#isbn").value;

        if (!title || !author || !isbn) {
            alert("Please fill in all fields.");
            return;
        }

      
        let newRow = document.createElement("tr");

        newRow.innerHTML = `
            <td>${title}</td>
            <td>${author}</td>
            <td>${isbn}</td>
            <td><button class="delete">Clear</button></td>
        `;

        
        let tableBody = document.querySelector("#book-list");
        tableBody.appendChild(newRow);

        
        document.querySelector("#title").value = "";
        document.querySelector("#author").value = "";
        document.querySelector("#isbn").value = "";

       
        let deleteButton = newRow.querySelector(".delete");
        deleteButton.addEventListener("click", () => {
            newRow.remove();
        });
    });
});
