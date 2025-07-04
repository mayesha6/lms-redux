# **Frontend - Library Management System**  
This is the frontend for the Library Management System.

## Technology
* React
* Vite
* TypeScript
* Redux Toolkit (RTK Query)
* Tailwind CSS

## Frontend Setup Instructions
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
