import { useState } from "react";
import ListItems from "./ListItems";

const RestaurantCategory=({data, showItem, setShowIndex})=>{


    const clickHandler=()=>{

       setShowIndex();

    }



    //console.log(data);

    return(
        <div className=" bg-gray-100">
            {/** This is for header */}

            <div className="flex-col text-center w-6/12 mx-auto my-4  bg-white p-3 rounded-lg cursor-pointer">

                <div className="flex justify-between" onClick={clickHandler}>

                   <span className="font-bold ">{data.title} ({data.itemCards.length})</span>
                   <span className="cursor-pointer">▼</span>
                
                </div>

                <div>

                  {showItem ? (<ListItems key={data.title} data={data.itemCards}/>) : ("")}

                </div>

            </div>

        </div>
    )


}
export default RestaurantCategory;