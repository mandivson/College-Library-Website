// console.log("This is js file");

//Book class
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

// Display class

class Display {
    constructor() {
    }
    //Add method
    add(book) {
//         console.log("Adding to UI");
        let tableBody = document.getElementById("tableBody");
        let num = tableBody.rows.length;
//         console.log(num);
        let uiString = `
                    <tr>
                    <th scope="row">${num + 1}</th>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                    </tr>`;
        tableBody.innerHTML += uiString;
    }
    // Clear the input
    clear() {
        let libraryForm = document.getElementById("libraryForm");
        libraryForm.reset();
    }
    //Validate the book
    validate(book) {
        if (book.name.length < 3 || book.author.length < 3)
        {
            return false;
        }
        else {
            return true;
        }
    }
    //Show the message
    show(type, input) {
        let msg = document.getElementById("mssg");
        let result;
        if(type === "success")
        {
            result = "Success :";
        }
        else {
            result = "Error !"
        }
        msg.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>${result}</strong> ${input}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>`;
        setTimeout(() => {
            msg.innerHTML = "";
        }, 3000);
    }
}




//Add submit event listener to libraryForm

let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
//     console.log("you have submitted library form");
    e.preventDefault();

    let name = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;

    let fiction = document.getElementById("fiction");
    let programming = document.getElementById("programming");
    let sports = document.getElementById("sports");
    let romance = document.getElementById("romance");
    let type;

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (sports.checked) {
        type = sports.value;
    }
    else if (romance.checked) {
        type = romance.value;
    }
    type = type.toUpperCase();
    let book = new Book(name, author, type);
//     console.log(book);

    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show("success", "Your book has been successfully added");
    }
    else {
        display.show("danger", "Name and Author should be of more than 2 characters");
    }


    e.preventDefault();
}

