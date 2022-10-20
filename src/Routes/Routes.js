import Category from "../Components/Category";
import Home from "../Components/Home";
import News from "../Components/News";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Components/Main");


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/category/:id',
                element: <Category/>
            },
            {
                path: '/news/:id',
                element: <News/>
            },
        ]
    }
])

export default routes;