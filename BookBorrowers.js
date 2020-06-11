// List of all people who can borrow books
let borrowers = [
    {
        id: 1,
        name: "Luke Parker"
    }, {
        id: 2,
        name: "Jacinta Bealle"
    }, {
        id: 3,
        name: "Dan Wills"
    }
];

// List of books that are avaliable to be borrowed
let books = [
    {
        id: 1,
        title: "Harry Potter and the Philosopher's Stone",
        genre: "Fantasy"
    }, {
        id: 2,
        title: "Harry Potter and the Chamber of Secrets",
        genre: "Fantasy"
    }, {
        id: 3,
        title: "The Hitchhiker's Guide to the Galaxy",
        genre: "Comedy"
    }
];

// List of all books currently being borrowed
let bookBorrowers = [
    {
        borrowerId: 1,
        bookId: 1
    }, {
        borrowerId: 1,
        bookId: 2
    }, {
        borrowerId: 2,
        bookId: 1
    }, {
        borrowerId: 3,
        bookId: 2
    }
];

function getBookById(bookId) {
    return books.find(book => book.id == bookId);
}
// console.log(getBookById(3));

function getBooksByPerson(borrowerId) {
    let booksBorrowedByPerson = bookBorrowers.filter(bb => bb.borrowerId == borrowerId);
    // return booksBorrowedByPerson;
    let bookIds = booksBorrowedByPerson.map(bb => bb.bookId);
    // return bookIds;
    return bookIds.map(id => getBookById(id));
}

console.log(getBooksByPerson(1));