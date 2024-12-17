import resList from "../Utils/MockData";
import RestroCard, {withPromotedLabel} from "./RestroCard";
import resList from "../Utils/MockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
const Body = ()=>{

    const [restaurantList, setRestaurantList ]=useState([]);

    const [filterRestaurantList, setFilterRestaurantList] = useState([]);

    const [searchText, setSearchText] = useState("");

   useEffect(()=>{

        fetchData();
    },[]);

    const fetchData = async()=>{

       const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.494817207936276&lng=78.39630950242281&collection=80451&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null");

      const json = await data.json();

      //while using swiggy's some of their api does not have 

      const validCards = json?.data?.cards?.filter(card => card?.card?.card?.info) || [];
                         

      
        setRestaurantList(validCards);
        setFilterRestaurantList(validCards);
    }
    
    if(restaurantList.length === 0){

        return <Shimmer />;
    }

    const IsPromoted = withPromotedLabel(RestroCard);

    //Conditional redering
   

    return(

        <div className="">

            <div className="search flex ml-[100px] m-4 gap-4" >

                < input className="border-2 border-blue-500 rounded-lg" type ="text" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>

                <button className="h-[35px] w-[80px] bg-blue-400 rounded-lg hover:bg-blue-600 text-white"
                onClick={ () => {

                    // filter by the searchText ana update UI
                    const fliterListBySearch = restaurantList.filter((res)=>

                   res.card.card.info?.name.toLowerCase().includes(searchText.toLowerCase()))

                    

                  //  console.log(fliterListBySearch);
                   // console.log("searchText"+searchText);
                  //  console.log(res.name);

                  setFilterRestaurantList(fliterListBySearch);


                    //setRestaurantList(fliterListBySearch);
                    
                    }}>search</button>

                <button className="h-[35px] w-[200px] bg-blue-400 rounded-lg hover:bg-blue-600 text-white" onClick={() =>{

                    const fliterList= restaurantList.filter((res) => res?.card?.card?.info?.avgRating > 4);
                    setFilterRestaurantList(fliterList);

                }}>Top-rated-restuarants</button>
            </div>

            <div className="Res-container p-4 flex flex-wrap ">

                

                {filterRestaurantList.map((restaurant) => (

                <Link key = {restaurant.card?.card?.info?.id} to={"/restuarantMenu/"+restaurant.card?.card?.info?.id}> 
                { restaurant.card?.card?.info?.promoted  ? (<IsPromoted resData = {restaurant}/>) : (<RestroCard  resData = {restaurant} />)}
                </Link>
            ))}

            </div>

        </div>
    )
}

export default Body;