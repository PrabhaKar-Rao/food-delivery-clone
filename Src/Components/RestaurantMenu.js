
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import {resId} from "../Utils/constants"
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";



const RestaurantMenu = () => {


    const {resId}=useParams();

    const resMenu =useRestaurantMenu(resId);

    const [showIndex, setShowIndex]=useState(null);
    
    //console.log(resMenu);

    const itemCatageroy=resMenu.filter(c =>  c?.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
   // console.log(itemCatageroy);

    if(resMenu === undefined){
        return (<div>

            <h1>Menu is Not Available in this Restuarant</h1>

        </div>)
    }

    if(resMenu.length== 0){
        return <Shimmer />
    }

    return(

        <div className="flex-col bg-gray-100 rounded-lg shadow-lg mx-[100px]">

            <h1></h1>
            
            {itemCatageroy.map((c, index) => < RestaurantCategory key={c?.card?.card?.title} data={c?.card?.card} showItem = {index === showIndex ? (true) : (false)} setShowIndex={()=>setShowIndex(index)} /> )}

        </div>

  

    )



}
export default RestaurantMenu;