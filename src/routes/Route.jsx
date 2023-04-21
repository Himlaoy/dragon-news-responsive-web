import Main from "../layout/Main";
import Home from "../page/Home/Home";
import {Navigate, createBrowserRouter} from 'react-router-dom'
import Category from "../page/Home/category/Category";
import NewsLayout from "../layout/NewsLayout";
import News from "../page/News/News";
import LoginLayOut from "../layout/LoginLayOut";
import LogIn from "../page/Login/LogIn";
import LogOut from "../page/LogOut/LogOut";

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
                element: <LogOut></LogOut>,
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
                element:<News></News>,
                loader:({params})=> fetch(`http://localhost:5000/news/${params.id}`),
            },
        ]
    }
])

export default router;