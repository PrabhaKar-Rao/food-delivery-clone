import {RESTAURANT_ITEMS_URL} from "./constants"
import {useState, useEffect} from "react";

const useRestaurantMenu=(resId)=>{

    const [resInfo, setResInfo] = useState([]);

    useEffect(()=>{

        fetchData();
    },[])

    const fetchData =async()=>{

        const data = await fetch(RESTAURANT_ITEMS_URL+resId);
        const json = await data.json();
        //console.log(json);

        setResInfo(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
    }

    //console.log(resInfo);

    return resInfo;
}

export default useRestaurantMenu;