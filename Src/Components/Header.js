import {LOGO_URL} from "../Utils/constants"
import { useState} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { useSelector } from "react-redux";
const Header =()=>{

    const [btnName, setBtnName]=useState("Login");

    const onlineStatus=useOnlineStatus();

    const cartItems = useSelector((store) => store.cart.items);
    //console.log(cartItems);


    return(

        <div className="mt-4 mx-4 flex border-2 flex-row flex-wrap  items-center shadow-lg" >

            <div className="ml-4">
                <img src={LOGO_URL} className="w-[100px] border" />
            </div>
            
            <div className="nav-items ml-[400px]">

                <ul className="flex flex-wrap items-center ">
                    <li className="p-4 m-4" >Online Status :{onlineStatus ? "✅" :"🔴"}</li>
                    <li className="p-4 m-4 hover:text-blue-700 font-bold"><Link to="/">Home</Link></li>
                    <li className="p-4 m-4 hover:text-blue-700 font-bold"><Link to ="/about">About</Link></li>
                    <li className="p-4 m-4 hover:text-blue-700 font-bold"><Link to="/contact">Contact</Link></li>
                    <li className="p-4 m-4 hover:text-blue-700 font-bold"><Link to ="/groceries">Groceries</Link></li>
                    <li className="p-4 m-4 hover:text-blue-700 font-bold"><Link to="/cart">Cart ({cartItems.length})</Link></li>
                </ul>

            </div>

            <div className ="ml-[50px] bg-blue-400  border-3 border-yellow-500 rounded-lg hover:bg-blue-700 text-white">
                    <button className ="w-[100px] h-[50px]" onClick={()=>{
                        console.log("hai");

                        setBtnName(btnName == "Login"? "Logout":"Login");

                    }} >{btnName}</button>
            </div>

        </div>
    )
}

export default Header;