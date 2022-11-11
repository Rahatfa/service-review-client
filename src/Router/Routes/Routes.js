import { Card } from "react-bootstrap";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Cards from "../../Pages/Home/classes/Cards";
import Classes from "../../Pages/Home/classes/Classes";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";



const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/home',
                element: <Home></Home>
            },
            {
                path:'/classes',
                element: <Classes></Classes>
            },
            {
                path:'/cards',
                element: <Cards></Cards>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/signUp',
                element: <SignUp></SignUp>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            }
        ]
    }
])




export default router;