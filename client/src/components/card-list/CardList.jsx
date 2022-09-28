import useMongoService from "../../service/MongoService"
import CardItem from "../card-item/CardItem"
import { SpinnerDark } from "../spinner/SpinnerDark";

import "./cardList.scss"



function CardList ({setBasketItems, setShowModal, cardList, offset}) {
  const {loading} = useMongoService();

  const renderCardList = (cardList) =>{
    let items = cardList.map((item, i) =>{
      
      if(i > offset){
        
        return false
      }

      return <CardItem key={item.id} card={item} setShowModal={setShowModal} setBasketItems={setBasketItems}/>
  });

    return (
        <div className="container-items">
            <div className="grid">
              {items}
            </div>
        </div>
    )
  }
  
  const cards = cardList ? renderCardList(cardList) : null;
  const spinner = loading ? <SpinnerDark width="200px" height="200px"/> : null ;
    return(
        <div className="CardList">
            {cards}
            {spinner}
        </div>
    )
}
export default CardList;