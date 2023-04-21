import Main from "../layout/Main";
import Home from "../page/Home/Home";
import {createBrowserRouter} from 'react-router-dom'
import Category from "../page/Home/category/Category";
import NewsLayout from "../layout/NewsLayout";
import News from "../page/News/News";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element:<Category></Category>,
                loader:()=>fetch('http://localhost:5000/news')
            },
            {
                path:'/category/:id',
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