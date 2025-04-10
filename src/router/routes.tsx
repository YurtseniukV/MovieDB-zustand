import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import CartPage from "../pages/CartPage.tsx";


export const routes = createBrowserRouter([
    {path:'/', element:<MainLayout/>,
    children:[
        {index:true,element:<HomePage/>},
        {path:'/cart',element:<CartPage/>}
    ]}
])