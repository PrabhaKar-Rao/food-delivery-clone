import { useDispatch } from "react-redux"
import {RESTAURANT_ITEMS} from "../Utils/constants"
import { addItem } from "../Utils/cartSlice";
const ListItems = ({data})=>{

    const dispatch = useDispatch();


    const handleAddItem =(item)=>{

        dispatch(addItem(item));
    }


    return(

        <div className="">

            {data.map((item)=>(

                <div className ="flex justify-between border-2 border-gray-200 mt-[10px] p-[20px] rounded-lg shadow-md" key={item.card.info.id} >

                    <div className="flex-col text-start">
                        <span>{item.card.info.name}</span><br />
                        <span>₹{ item.card.info.price ? (item.card.info.price/100) : (item.card.info.defaultprice/100) }</span><br />
                        <span>{ item.card.info.description ? (item.card.info.description) : ("Discription Not mentioned") }</span>
                    </div>
                    <div className="flex-col">
                        <img className ="w-[100px] h-[70px] mb-[10px]" src={item.card.info.imageId ? (RESTAURANT_ITEMS+item.card.info.imageId) : ("img Broken")}/>
                        <button className="text-green-500 border-2 w-[70px] h-[30px] rounded-lg shadow-lg" 

                        onClick={()=>handleAddItem(item)}
                        
                        >ADD</button>
                    </div>

                </div>
            ))}

        </div>
    )



}
export default ListItems;