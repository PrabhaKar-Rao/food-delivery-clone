import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Header from "./Src/Components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from "./Src/Components/About";
import Contact from "./Src/Components/Contact";
import Error from "./Src/Components/Error";
import Home from "./Src/Components/Home";
import Cart from "./Src/Components/Cart";
import RestaurantMenu from "./Src/Components/RestaurantMenu";
import { Provider } from 'react-redux';
import appStore from './Src/Utils/appStore';
//import Groceries from "./Src/Components/Groceries"


// Lazy Loading....
//lazy is function which has callback function inside in it 
//import is also a funtion here

const Groceries =lazy(() => import ("./Src/Components/Groceries"))

const AppLayout = ()=>{

    return(

        <Provider store = {appStore}> {/** Giving store to App */}
        <div className="bg-gray-50">

            <Header />
            <Outlet />
            
        </div>
        </Provider>
    )
}

const appRouter=createBrowserRouter([

    {
        path:"/",
        element:< AppLayout />,
        children:[

            {
                path:"/restuarantMenu/:resId",
                element: < RestaurantMenu />
            },

            {
                path:"/",
                element:<Home/>

            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/groceries",
                element:<Suspense fallback = {<h1>Loading.....</h1>}> <Groceries /></Suspense>
            }
        ],
        errorElement : <Error />
    }
   
])



const root = ReactDOM.createRoot(document.getElementById('root')); 
//root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter}/>)