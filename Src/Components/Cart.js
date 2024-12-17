import { useDispatch, useSelector } from "react-redux";
import ListItems from "./ListItems";
import { clearCart, removeItem } from "../Utils/cartSlice";

 
 const Cart = ()=>{


   const items = useSelector((store) => store.cart.items);
   //console.log(items);

   const dispatch =useDispatch();

   const clearCartHandler =()=>{

      dispatch(clearCart());

   }
   const removeItemHandler=()=>{

    dispatch(removeItem());
   }



    return(
         
        <div>
                <div className=" flex-col m-auto w-5/12 justify-between">

                    <h1 className=" p-4 m-4 text-center font-bold text-lg">Cart</h1>
                    <button className="w-[100px] h-[50px] bg-black text-white" onClick={()=>clearCartHandler()}>ClearCart</button>
                    <button className="w-[100px] m-4 h-[50px] bg-black text-white" onClick={()=>removeItemHandler()}>Remove</button>
                    <h1>{items.length===0 ? (<h1>Your Card is Empty add Items to cart</h1>):("")}</h1>
                    <ListItems data={items}/>

                </div>
        

        </div>
    )
 }
 export default Cart;