import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Classes from "../../Pages/Home/classes/Classes";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";



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
                path:'/classe',
                element: <Classes></Classes>
            },
            {
                path:'/login',
                element: <Login></Login>
            }
        ]
    }
])




export default router;