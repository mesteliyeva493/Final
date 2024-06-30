import Add from "../Pages/Admin/Add/Add";
import AdminRoot from "../Pages/Admin/AdminRoot";
import Dashboard from "../Pages/Admin/Dashboard/Dashboard";
import Product from "../Pages/Admin/Product/Product";
import AboutUs from "../Pages/Client/About us/AboutUs";
import Basket from "../Pages/Client/Basket/Basket";
import CheckOut from "../Pages/Client/CheckOut/CheckOut";
import ContactUs from "../Pages/Client/Contact us/ContactUs";
import Home from "../Pages/Client/Home/Home";
import Login from "../Pages/Client/Login/Login";
import MainRoot from "../Pages/Client/MainRoot";
import MyAccount from "../Pages/Client/MyAccount/MyAccount";
import NotFound from "../Pages/Client/NotFound/NotFound";
import Orders from "../Pages/Client/Orders/Orders";
import Register from "../Pages/Client/Register/Register";
import Shop from "../Pages/Client/Shop/Shop";
import ShopDetail from "../Pages/Client/ShopDetail/ShopDetail";
import AccountDetail from './../Pages/Client/AccountDetail/AccountDetail';

const ROUTES=[
    {
        path:"/",
        element:<MainRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"aboutus",
                element:<AboutUs/>
            },
            {
                path:"shop",
                element:<Shop/>
            },
            {
                path:"myaccount",
                element:<MyAccount/>
            },
            {
                path:"contactUs",
                element:<ContactUs/>
            },
            {
                path:"accountdetail",
                element:<AccountDetail/>
            },
         
            {
                path:"orders",
                element:<Orders/>
            },
            {
                path:"login",
                element:<Login/>
            },
            {
                path:"register",
                element:<Register/>
            },
            {
                path:"checkout",
                element:<CheckOut/>
            },
    
            {
                path:"basket",
                element:<Basket/>
            },
            {
                path: "shopdetail/:id",
                element: <ShopDetail />
            },
            {
                path: '*',
                element: <NotFound/>
            },
        ]
    },
    {
        path:"/admin",
        element:<AdminRoot/>,
        children:[
            {
                path:"",
                element:<Dashboard/>
               
            },
            {
                path:"add",
                element:<Add/>
  
            },
           {
            path: "product",
            element: <Product/>
           }
        
        ]
    }
]

export default ROUTES
