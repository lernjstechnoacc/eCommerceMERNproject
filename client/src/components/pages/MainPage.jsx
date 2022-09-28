import MainSlider from '../main-slider/MainSlider';
import CardList from '../card-list/CardList';
import { useEffect } from 'react';

const MainPage = ({setBasketItems, setShowModal}) =>{
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
    return(
      <div className="content">
        <MainSlider/>
        <CardList setBasketItems={setBasketItems} setShowModal={setShowModal}/>
      </div>
    )
}
export default MainPage;