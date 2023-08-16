import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import Cities from "./pages/Cities";
import MainLayout from './layouts/MainLayout'

const router = createBrowserRouter([
    { 
        path:'/', 
        element: <MainLayout/>,
        children: [
            {path:'/', element:<Home/>},
            {path:'/cities', element: <Cities/>}
            
        ] 
    }
])

export default router