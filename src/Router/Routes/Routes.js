import { Card } from "react-bootstrap";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/Blog/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Cards from "../../Pages/Home/classes/Cards";
import ClassDetails from "../../Pages/Home/classes/ClassDetails";
import Classes from "../../Pages/Home/classes/Classes";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";



export const router = createBrowserRouter([
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
            // {
            //     path:'/classes',
            //     element: <Classes></Classes>
            // },
            {
                path:'/cards',
                element: <PrivateRoute><Cards></Cards></PrivateRoute>
            },
            {
                path:'/cardDetails/:id',
                element: <PrivateRoute><ClassDetails></ClassDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://fit-with-rahat-server.vercel.app/classes/${params.id}`)

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
            },
            {
                path:'/addService',
            element:<AddService></AddService>}
        ]
    }
])




export default router;