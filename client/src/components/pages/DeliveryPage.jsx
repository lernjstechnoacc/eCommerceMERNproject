import npLogo from  "../../resources/npLogo.png"
import mapPoint from "../../resources/mapPoint.png"
import wallet from "../../resources/wallet.svg"
import visa from "../../resources/visa.svg"
import truck from "../../resources/truck.svg"


import "./deliveryPage.scss"
import { useEffect } from "react"


const DeliveryPage = () =>{
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    
    return(
    
      <div className="content">
       <div className="page-title"><h2 className="h2">ДОСТАВКА ТА ОПЛАТА</h2></div>
       <h3 className="h3 delivery-title">-Варіанти доставки</h3>
       <div className="delivery-options">
            <div className="option">
                <img className="option-img" src={npLogo}  alt="" />
                <h3 className="h3">Нова пошта</h3>
                <span className="h4 text-muted font-italic">Україна</span>
                <span className="option-decr">Доставка товара на найближче відділення або поштомат по Україні</span>
            </div>
            <div className="option">
                <img className="option-img" src={mapPoint}  alt="" />
                <h3 className="h3">Самовивіз</h3>
                <span className="h4 text-muted font-italic">Запоріжжя</span>
                <span className="option-decr">Ви маете можливість забрати товар на нашій точці за адресою м.Запоріжжя вул. Металургів 22</span>
            </div>
       </div>

       <h3 className="h3 delivery-title">-Варіанти оплати</h3>
       <div className="delivery-options">
            <div className="option">
                <img className="option-img" src={wallet}  alt="" />
                <h3 className="h3">Готівкою</h3>
                <span className="h4 text-muted font-italic">(тільки Запоріжжя)</span>
                <span className="option-decr">Оплата товару в точці відачи</span>
            </div>
            <div className="option">
                <img className="option-img" src={visa}  alt="" />
                <h3 className="h3">Карткою</h3>
                <span className="h4 text-muted font-italic">Україна</span>
                <span className="option-decr">Оплата на сайті та доставка НП</span>
            </div>
            <div className="option">
                <img className="option-img" src={truck}  alt="" />
                <h3 className="h3">Накладений платіж</h3>
                <span className="h4 text-muted font-italic">Україна</span>
                <span className="option-decr">Оплата при отримані у відділенні НП</span>
            </div>
       </div>
      </div>
    )
}
export default DeliveryPage;