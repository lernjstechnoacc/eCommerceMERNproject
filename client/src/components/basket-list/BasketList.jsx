import { useEffect, useState } from "react";
import BasketItem from "../basket-item/BasketItem";
import "./basketList.scss"


const BasketList = ({setShowModal}) => {
    const [basketItems, setBasketItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() =>{
        getLocalStorageItem();
    }, [localStorage.length])
    const getLocalStorageItem = (setItems = setBasketItems, setPrice = setTotalPrice) => {
        let items = [];
        let totalPrice = 0;


        for(let i=0; i<localStorage.length; i++) {
            let key = localStorage.key(i);
            items.push(JSON.parse(localStorage.getItem(key)));
            totalPrice += +JSON.parse(localStorage.getItem(key)).currectPrice;
          }
        
        setPrice(totalPrice);
        setItems(items);
        
    }

    const items = basketItems.map(item =>{
        return <BasketItem key={item.idLocalStorage} 
                basketItem={item} 
                setShowModal={setShowModal}
                getLocalStorageItem={getLocalStorageItem}/>
    })
    const content = (items.length > 0) ? items : <ViewEmptyBasket/>;

    return (
        <>
            <ul className="basket-list">
                {content}
            </ul>
           
            <div className='basket-total'>
            <span className="smal text-muted me-2">Всього:</span> <span
                  className="lead fw-normal">{totalPrice + 'грн'}</span>
            </div>
        </>
    )
}

const ViewEmptyBasket = () =>{
    return(
        <div className="d-flex justify-content-center align-items-center">
            <span className="h5">Ваша корзина пуста...</span>
        </div>
    )
}




export default BasketList;

