import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import HomePage from "../pages/HomePage.tsx";
import MovieDetailPage from "../pages/MovieDetailPage.tsx";


export const routes = createBrowserRouter([
    {path:'/', element:<MainLayout/>,
    children:[
        {index:true,element:<HomePage/>},
        {path:'movie/:id',element:<MovieDetailPage/>}
    ]}
])