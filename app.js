// Book Class: represents a book
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;

    }
}

// UI Class: Handles UI tasks

class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                title: "Book One",
                author: "John Doe",
                isbn: "3434434"

            }, {
                title: "Book Two",
                author: "Jane Doe",
                isbn: "455454"

            }
        ];
        const books = StoredBooks
        books.forEach((book) => UI.addBookToList(book))
    }
    static addBookToList(book) {
        const list = document.getElementById("book-list")

        const row = document.createElement("tr")
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a> </td>`;

        list.appendChild(row)
    }
    // delete method
    static deleteBook(element) {
        if (element.classList.contains('delete')) {
            element.parentElement.parentElement.remove()
        }
    }

    // clearfield method
    static clearFields() {
        document.getElementById("title").value = ''
        document.getElementById("author").value = ''
        document.getElementById("isbn").value = ''
    }
}


// Store Class: handles storage

// Event: Display Book
document.addEventListener("DOMContentLoaded", UI.displayBooks)

// Event: add a Book
document.getElementById("book-form").addEventListener('submit', function (e) {

    // prevent actual  submit
    e.preventDefault()

    // Get form values
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const isbn = document.getElementById('isbn').value

    // Instiate Book 

    const book = new Book(title, author, isbn)

    // Add Book to UI

    UI.addBookToList(book)

    // clear field 

    UI.clearFields()


})

// Event: remove a Book
document.getElementById("book-list").addEventListener("click", function (e) {
    // console.log(e.target)
    UI.deleteBook(e.target)
})