import { useState } from "react"
import {v4} from 'uuid'


const useLocalStorage = () =>{
    const [basketItemsCounter, setBasketItemsCounter] = useState(0)

    const getCardByID = (id) =>{
        let itemInLocalStorage = 0;

        for(let i=0; i<localStorage.length; i++) {
            let key = localStorage.key(i);
            if(JSON.parse(localStorage.getItem(key)).id === id){
                itemInLocalStorage++;
            }
          }
          return itemInLocalStorage;
    }
    const addItemToBasket = (id, title, currectPrice, currectAmount, typeAmount, img) =>{
        let localStorageID = v4();

        localStorage.setItem(localStorageID, JSON.stringify({
            idLocalStorage: localStorageID,
            id: id,
            title: title,
            currectPrice: currectPrice,
            currectAmount: currectAmount,
            typeAmount: typeAmount,
            img: img,
        }))
        
        setBasketItemsCounter(basketItemsCounter => basketItemsCounter + 1);
    }

    return {basketItemsCounter,setBasketItemsCounter, getCardByID, addItemToBasket}
}

export default useLocalStorage;