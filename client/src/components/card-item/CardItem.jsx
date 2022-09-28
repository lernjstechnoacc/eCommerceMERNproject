import { useEffect, useState } from "react"
import {v4} from 'uuid'
import config from "../../config/config"


import './cardItem.scss';



const CardItem = ({card, setBasketItems, setShowModal}) =>{
    
    const {id, title, price, amount, typeAmount, stepAmount, images} = card;
    
    const [itemInBasket, setItemInBasket] = useState(0)
    const [currectAmount, setCurrectAmount] = useState(stepAmount);
    const [currectPrice, setCurrectPrice] = useState(price);
    const cardImage = `${config.BASE_API_SERVER}${images[0]}`; 

    useEffect(() =>{
        setItemInBasket(getCardByID(id));
        // eslint-disable-next-line
    }, [localStorage.length])

    useEffect(()=>{
        setCurrectPrice( ((currectAmount / stepAmount) * price).toFixed(0) )
        // eslint-disable-next-line
    },[currectAmount]);

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

    const addToBasket = () =>{
        let localStorageID = v4();

        localStorage.setItem(localStorageID, JSON.stringify({
            idLocalStorage: localStorageID,
            id: id,
            title: title,
            currectPrice: currectPrice,
            currectAmount: currectAmount,
            typeAmount: typeAmount,
            img: cardImage,
        }))
        if(localStorage.length === 1){
            setShowModal(true)
        }
        
        setBasketItems(basketItemsCounter => basketItemsCounter + 1);
        setItemInBasket(itemInBasket => itemInBasket + 1);
    }

    return(
        <div className="item">
            <img className="item-img" src={cardImage} alt="tea"/>
            <h4 className="item-title">{title}</h4>
            <div className="item-selector">
                {typeAmount === 'грамм' ? 
                <ViewSelectorGram 
                    amount= {amount}
                    currectAmount={currectAmount} 
                    setCurrectAmount ={setCurrectAmount}
                    arrSteps={['30', '55', '150', '300']}/> : 
                <ViewSelectorStandart 
                    stepAmount={stepAmount} 
                    currectAmount={currectAmount} 
                    setCurrectAmount ={setCurrectAmount}/>}
                <div className="selector-basket">
                    <div className="basket-price">{currectPrice} грн</div>
                    <div onClick={addToBasket} className="button-add">
                        <span>В кошик</span>
                        <i>{itemInBasket}</i>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ViewSelectorGram({amount, currectAmount, setCurrectAmount, arrSteps}) {
   const [newAmount, setNewAmount] = useState(currectAmount);

    const selectStep = (target) =>{
        setNewAmount(parseInt(target.innerText));
        setCurrectAmount(parseInt(target.innerText))

    }

    const renderSelector = (arr = arrSteps) =>{
        return arr.map((step, i) => {
            if(amount < step){
                return false;
            }
            let classNames;
            +newAmount === +step ? classNames = 'active' : classNames = '';
            return <li key={i} onClick={(e) => {selectStep(e.target)}} className={classNames}>{step} г.</li>
        
        })
    }

    return(
        <ul className="selector-amount">
            {renderSelector()}
        </ul>
    )
}
function ViewSelectorStandart({currectAmount, setCurrectAmount}){
    const changeAmount = (typeChange) => {
        if(typeChange === 'minus' && currectAmount - 1 === 0 ){
            return false;
        }

        typeChange === 'minus' ? setCurrectAmount(currectAmount - 1) : setCurrectAmount(+currectAmount + 1)

    }
    return(
        <ul className="selector-amount">
            <li onClick={() =>{changeAmount('minus')}}>-</li>
            <li className="amount">{currectAmount}</li>
            <li onClick={() =>{changeAmount('plus')}}>+</li>
        </ul>
    )
}
export default CardItem;