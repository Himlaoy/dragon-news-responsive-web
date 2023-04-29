import Main from "../layout/Main";

import {Navigate, createBrowserRouter} from 'react-router-dom'
import Category from "../page/Home/category/Category";
import NewsLayout from "../layout/NewsLayout";
import News from "../page/News/News";
import LoginLayOut from "../layout/LoginLayOut";
import LogIn from "../page/Login/LogIn";

import Register from "../page/Login/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<LoginLayOut></LoginLayOut>,
        children:[
            {
                path:'/',
                element: <Navigate to="/category/0"></Navigate>
            },
            {
                path: 'login',
                element:<LogIn></LogIn>,
            },
            {
                path:'register',
                element: <Register></Register>
            },
        ]
    },
    {
        path:'/category',
        element: <Main></Main>,
        children: [
            {
                path:':id',
                element:<Category></Category>,
                loader:({params})=> fetch(`http://localhost:5000/category/${params.id}`)
            },
        ]
    },
    {
        path:'news',
        element:<NewsLayout></NewsLayout>,
        children:[
            {
                path:':id',
                element:<PrivateRoute><News></News></PrivateRoute>,
                loader:({params})=> fetch(`http://localhost:5000/news/${params.id}`),
            },
        ]
    }
])

export default router;