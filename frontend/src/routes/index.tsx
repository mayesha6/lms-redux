import Applayout from "@/layout/Applayout/Applayout";
import AddBook from "@/pages/AddBook/AddBook";
import Books from "@/pages/Books/Books";
import { BorrowSummary } from "@/pages/BorrowSummary/BorrowSummary";
import Home from "@/pages/Home/Home";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Applayout/>,
        children:[
            {
                path: '/',
                element:<Home/>
            },
            {
                path: '/books',
                element:<Books/>
            },
            {
                path: '/create-book',
                element:<AddBook/>
            },
            {
                path: '/borrow',
                element:<BorrowSummary/>
            },
        ]
    }
])