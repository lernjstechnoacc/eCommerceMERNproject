import { useState, useEffect } from "react";
import useMongoService from "../../service/MongoService";
import CardList from "../card-list/CardList";
import ShopSideBar from "../shop-sidebar/ShopSidebar";

import "./shopPage.scss"

const ShopPage = ({setBasketItems, setShowModal, items}) =>{
    const [itemType, setItemType] = useState('чай')
    const [itemClass, setItemClass] = useState('');
    const [itemCountry, setItemCountry] = useState('')
    const [offset, setOffset] = useState(5);
    const [cardList, setCardList] = useState([]);
    const {loading, getAllItem, getItemsByParams} = useMongoService();

    const updateCardList = () =>{
        getItemsByParams({type:itemType}, {class:itemClass}, {country:itemCountry}, {amount: { $gte: 1 }})
            .then(onLoadedCardList);
    }

    const onLoadedCardList = (items) =>{
        setCardList(cardList => items );
    }
    const onLoadMore = () =>{
        setOffset(offset => offset + 6)
    }

    useEffect(()=>{
        updateCardList();
      },[itemType, itemClass, itemCountry])

    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])

    let loadMoreBtn = <button  onClick={onLoadMore} className="btn-loadmore">load more</button>;

    return(
        <div class="content">
            <div className="shop">
                <div class="shop-row">
                    <div class="shop-element shop-menu">
                        <ShopSideBar items={items} 
                                    itemType={itemType}
                                    itemClass={itemClass}
                                    itemCountry={itemCountry}
                                    setItemType={setItemType} 
                                    setItemClass={setItemClass}
                                    setItemCountry={setItemCountry} />
                    </div>
                    <div class="shop-element shop-list">
                        <CardList setBasketItems={setBasketItems} offset={offset} setShowModal={setShowModal} cardList={cardList}/>
                        <div className="load-btn">
                            {cardList.length > offset ? loadMoreBtn : null }
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default ShopPage;