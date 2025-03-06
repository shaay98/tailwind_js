"use strict"

const books = [{
title:" Name of book",
author: "Authors Name",
Published: "Year book published",
},
];

function newBookList(){
    const booklist = document.getElementById("");
    booklist.textContent = ""
    books.forEach(book => {
        const li = document.createElement("li")
        li.innerHTML = `${book.title} by ${book.author}`
        li.classList.add("border","rounded", "p-2", "mb-2")
        booklist.appendChild(li)
    })
}
updateBookList()

