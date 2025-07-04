# **LIBRARY MANAGEMENT SYSTEM**  
This is a library management system which have frontend and backend.  

## Features  
* Create, Read, Update, and Delete books.   
* Filter, sortBy, sort, and limit books.  
* Borrow books with quantity and due date.  
* Automatically update book availability. 
* Aggregated borrow summary grouped by book.  
* Error handling for invalid input, missing routes, and validation issues.  

## Technology
  ### Backend
    * Node.js
    * Express.js
    * MongoDB 
    * Mongoose
    * Typescript
  ### Frontend
    * React
    * Vite
    * TypeScript
    * Redux Toolkit (RTK Query)
    * Tailwind CSS

## Setup instruction
### Backend
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
### Frontend Setup Instructions
1. Create and Open Project
    * Create a folder named LIBRARYMANAGEMENT
    * Open folder in VS Code
    * Open the terminal
2. Initialize and Install Dependencies
    * Initialize the project
    * Install required packages: 
        * react-router
        * @reduxjs/toolkit
        * react-redux
        * lucide-react
        * tailwindcss/vite
    * Install development tools:
        * vite
        * typescript
    * Configure Tailwind CSS
3. Create Environment File (.env)
    * VITE_API_BASE_URL=http://localhost:5000/api
4. Connect Base API in Code
    * baseUrl: import.meta.env.VITE_API_BASE_URL
5. Run the App
6. Create Folder Structure  
      Inside the src folder, create:  
      src/  
      ├── assets/  
      ├── components/  
      │   ├── ui/  
      │   ├── theme/  
      │   └── module/  
      ├── layout/  
      ├── provider/  
      ├── routes/  
      ├── redux/  
      │   ├── api/  
      │   ├── hook.ts    
      │   └── store.ts  
      ├── pages/  
      ├── .env  
      ├── types.ts  
      ├── App.tsx  
      └── main.tsx  
## API endpoints
1. Create a book : POST /api/books/create-book
2. Get all books : GET /api/books or example:/api/books?filter=FANTASY&sortBy=createdAt&sort=desc&limit=5
3. Get book by ID : GET /api/books/:bookId
4. Update book : PUT /api/books/edit-book/:bookId
5. Delete book : DELETE /api/books/:bookId
6. Borrow a Book : POST /api/borrow
7. Borrowed Books Summary (Using Aggregation) : GET /api/borrow
