# **LIBRARY MANAGEMENT SYSTEM**  
A RESTful API to manage books and borrowing functionality using Express.js, MongoDB, and Mongoose for a library management system.  

## Features  
* Create, Read, Update, and Delete books.   
* Filter, sortBy, sort, and limit books.  
* Borrow books with quantity and due date.  
* Automatically update book availability. 
* Aggregated borrow summary grouped by book.  
* Error handling for invalid input, missing routes, and validation issues.  

## Technology
* Node.js
* Express.js
* MongoDB 
* Mongoose
* Typescript

## Setup instruction
1. Create and Open Project
    * Create a folder named LIBRARYMANAGEMENT
    * Open folder in VS Code
    * Open the terminal
2. Initialize and Install Dependencies
    * npm init -y                      
    * npm install express mongoose mongodb dotenv nodemon  
    * npm install -D typescript ts-node-dev
    * npm install -g typescript ts-node-dev
3. Run the App
    * "scripts": {"dev": "ts-node-dev --respawn --transpile-only src/server.ts"}
    * npm run dev
4. Connect MongoDB, Mongoose with Express.js
5. Create Folder Structure (MVC)  
    Inside src folder , create:  
    app/  
    ├── controllers/  
    ├── models/    
    ├── services/  
    ├── interfaces/  
    ├── middlewares/  

## API endpoints
1. Create a book : POST /api/books/create-book
2. Get all books : GET /api/books or example:/api/books?filter=FANTASY&sortBy=createdAt&sort=desc&limit=5
3. Get book by ID : GET /api/books/:bookId
4. Update book : PUT /api/books/edit-book/:bookId
5. Delete book : DELETE /api/books/:bookId
6. Borrow a Book : POST /api/borrow
7. Borrowed Books Summary (Using Aggregation) : GET /api/borrow
