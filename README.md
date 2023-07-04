# MyReads Project

This repository holds code for the Udacity React Nanodegree course MyReads app. It is an application that reads books from a 3rd party API and allows you to pass them around between virtual shelves. Additionally, it has a search functionality that returns searchable books from the 3rd party API and allows to add them to any of your selves as well as remove the current books from your shelves. It uses debouncing to make search more performant. As a bonus, this application allows you to see the details of each book on a separate details page.

The project follows a specific [rubric](https://learn.udacity.com/rubric/3624) (can only be seen if logged in to Udacity).

## How to launch the project?

- install all project dependencies with `npm install`
- start the development server with `npm start`

## Project Rundown

- App.js - contains app logic and holds routes to dashboard, search page and book detail page.
- Book.js - contains code to display one book.
- BookDetails.js - lists information about a specific book.
- BookList.js - holds a list of books.
- BookShelf.js - displays a list of books on a shelf.
- Dashboard.js - displays all shelves and links to search.
- MoveBook.js - contains select toggle used to pick a new book shelf.
- SearchBooks.js - has code to search and display searched books.
