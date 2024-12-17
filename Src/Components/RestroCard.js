import { CARD_IMG } from "../Utils/constants";
const RestroCard =(props)=>{


    const {resData}=props;
    console.log(resData)
    const{cloudinaryImageId, name, cuisines, avgRating }=resData.card?.card?.info;//Here am not Using optional chaining but learn optional chaining


    return(

        <div className="shadow-lg  m-1 p-2 flex flex-col w-[200px] h-[350px] gap-1 border-2 rounded-xl hover:border-stone-900 ">

            <img className=" w-[190px] h-[150px] rounded-lg" src = {CARD_IMG +""+ cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} star</h4>

        </div>
    )
}

export const withPromotedLabel= (RestroCard)=>{

    return(props)=>{

        return(
            <div>
                <label className="absolute p-1 bg-black text-white rounded-md">Promoted</label>
                <RestroCard {...props}/>
            </div>
        )
    }
}
export default RestroCard;