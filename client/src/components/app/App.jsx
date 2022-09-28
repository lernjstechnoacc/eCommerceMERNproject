import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import BasketList from '../basket-list/BasketList';
import Modal from '../modal/Modal';
import { MainPage, DeliveryPage, AboutUsPage, ShopPage, OrderPage } from "../pages";
import OrderMessage from "../order-message/OrderMessage";
import useMongoService from "../../service/MongoService";
import LoadingSreen from "../loading-screen/LoadingScreen";


import './app.scss';

function App() {
  const {loading, getAllItem} = useMongoService();
  const [items, setItems] = useState([])
  const [basketItems, setBasketItems] = useState(localStorage.length);
  const [showModal, setShowModal] = useState(false);
  const [typeComponent, setTypeComponent] = useState("BasketList");
  const [orderId, setOrderId] = useState('');

  useState(async()=>{
    let allItems = await getAllItem();
    setItems(items => [...items, ...allItems]);
  },[])
  

  useEffect(()=>{
    setBasketItems(localStorage.length)
  },[localStorage.length])

  return (
    <Router>
      <div className='App'>
      {loading ? 
      <LoadingSreen/>: (<>
      <Modal 
        showModal={showModal} 
        setShowModal={setShowModal} 
        typeComponent={typeComponent}
        setTypeComponent={setTypeComponent}>
          <BasketList setShowModal={setShowModal}/>
          <OrderMessage orderId={orderId} setShowModal={setShowModal} setTypeComponent={setTypeComponent}/>
      </Modal>
      <Header  basketItems={basketItems} setShowModal={setShowModal}/>
        <Routes>
          <Route path="/" element={<MainPage setBasketItems={setBasketItems} setShowModal={setShowModal}/>}/>
          <Route path="/delivery" element={<DeliveryPage/>}/>
          <Route path="/about-us" element={<AboutUsPage/>}/>
          <Route path="/shop" element={<ShopPage setBasketItems={setBasketItems} setShowModal={setShowModal} items={items} />}/>
          <Route path="/order" element={<OrderPage setOrderId={setOrderId} setShowModal={setShowModal} setTypeComponent={setTypeComponent}/>}/> 
        </Routes>
      <Footer/> </>)}
      </div>
    </Router>
    
  );
}

export default App;
