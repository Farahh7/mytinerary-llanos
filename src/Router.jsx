import { createBrowserRouter } from "react-router-dom";
import Home from './pages/home'
import Cities from "./pages/Cities";
import MainLayout from './layouts/MainLayout'
import Error from "./pages/Error";
import CityDetail from './pages/CityDetail';
import SignIn from "./pages/SignIn";
import SignUp from './pages/SingUp';


const router = createBrowserRouter([
    { 
        path: '/',
        element: <MainLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/Cities', element: <Cities /> },
            { path: '/error404', element: <e404 /> },
            { path: '/Error', element: <Error /> },
            { path: '/signin', element: <SignIn /> },
            { path: '/signup', element: <SignUp /> },
            { path: '/city/:id', element: <CityDetail /> },
             
            
        ] 
    }
])

export default router