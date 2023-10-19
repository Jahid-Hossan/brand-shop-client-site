import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from './../Pages/Home/Home';
import Shop from "../Pages/Shop/Shop";
import AddProduct from './../Pages/AddProduct/AddProduct';
import MyCart from './../Pages/MyCart/MyCart';
import Login from './../Pages/Login/Login';
import ContactUs from './../Pages/ContactUs/ContactUs';
import BrandProducts from "../Pages/BrandProducts/BrandProducts";
import Details from "../Pages/Details/Details";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://tech-and-electronics-server-8bwqbmttk-jahid-hossans-projects.vercel.app/products')
            }, {
                path: '/brand/:name',
                element: <BrandProducts></BrandProducts>,
                loader: () => fetch('https://tech-and-electronics-server-8bwqbmttk-jahid-hossans-projects.vercel.app/products')
            }, {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`https://tech-and-electronics-server-2q0uuz4tq-jahid-hossans-projects.vercel.app/products/${params.id}`)
            }, {
                path: '/shop',
                element: <Shop></Shop>
            }, {
                path: '/addProduct',
                element: <AddProduct></AddProduct>,

            }, {
                path: '/cart',
                element: <MyCart></MyCart>
            }, {
                path: '/contact',
                element: <ContactUs></ContactUs>
            }, {
                path: '/login',
                element: <Login></Login>
            }, {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
])

export default router;