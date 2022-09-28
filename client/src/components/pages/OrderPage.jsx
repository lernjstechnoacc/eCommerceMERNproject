import { useEffect } from "react";
import BasketList from "../basket-list/BasketList"
import OrderForm from "../order-form/OrderForm";

import "./orderPage.scss"

const OrderPage = ({setOrderId, setTypeComponent, setShowModal}) =>{
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
    return(
        
        <div className="content">
            <h2 className="order-title">Ваш кошик:</h2>
            <div className="order-basket">
            <BasketList/>
            </div>
            <div className="form-cont">
            <OrderForm setOrderId={setOrderId} setShowModal={setShowModal} setTypeComponent={setTypeComponent}/>
            </div>
        </div>
        
    )
}


export default OrderPage;