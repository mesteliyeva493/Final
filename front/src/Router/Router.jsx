import AboutUs from "../Pages/Client/About us/AboutUs";
import Basket from "../Pages/Client/Basket/Basket";
import ContactUs from "../Pages/Client/Contact us/ContactUs";
import Home from "../Pages/Client/Home/Home";
import MainRoot from "../Pages/Client/MainRoot";
import MyAccount from "../Pages/Client/MyAccount/MyAccount";
import NotFound from "../Pages/Client/NotFound/NotFound";
import Orders from "../Pages/Client/Orders/Orders";
import Shop from "../Pages/Client/Shop/Shop";
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
                path:"basket",
                element:<Basket/>
            },
            {
                path: '*',
                element: <NotFound/>
            },
        ]
    }
]

export default ROUTES