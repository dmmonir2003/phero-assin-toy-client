import { createBrowserRouter, useParams } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Blog from "../pages/Blog/Blog";
import AddToy from "../pages/AddToy/AddToy";
import AllToy from "../pages/AllToy/AllToy";
import MyToys from "../pages/MyToys/MyToys";
import UpdateToy from "../pages/UpdateToy/UpdateToy";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import NotFound from "../pages/NotFound/NotFound";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/img')
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'blog',
                element: <Blog></Blog>

            },
            {
                path: '/addtoys',
                element: <PrivateRoute> <AddToy></AddToy></PrivateRoute>

            },
            {
                path: '/alltoys',
                element: <AllToy></AllToy>,
                loader: () => fetch('http://localhost:5000/alltoys')
            },
            {
                path: '/myToys',
                element: <PrivateRoute> <MyToys></MyToys></PrivateRoute>

            },
            {
                path: '/alltoys/:id',
                element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/alltoys/${params.id}`)
            }
        ]

    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);


export default router;