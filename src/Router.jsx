import { createBrowserRouter } from "react-router-dom";
import Home from './pages/home'
import Cities from "./pages/Cities";
import MainLayout from './layouts/MainLayout'
import Error from "./pages/Error";


const router = createBrowserRouter([
    { 
        path:'/', 
        element: <MainLayout/>,
            children: [
                {path:'/', element:<Home/>},
                {path:'/Cities', element: <Cities/>},
                {path: '/error404', element: <e404/>}, 
                { path: '/Error', element: <Error/>}               // Agrega la ruta para la página de error 404
            
        ] 
    }
])

export default router