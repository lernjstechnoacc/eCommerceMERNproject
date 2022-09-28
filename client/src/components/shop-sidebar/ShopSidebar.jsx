import { useState, useEffect } from "react";
import ShopSideBarItem from "../shop-sidebar-item/ShopSidebarItem";

import "./shopSidebar.scss"

const ShopSideBar = ({items, itemType, itemClass, itemCountry, setItemCountry, setItemType, setItemClass}) => {
  const [allItemType, setAllItemType] = useState([]);
  const [allItemClass, setAllItemClass] = useState([])
  const [allItemCountry, setAllItemCountry] = useState([])
  
  useEffect(()=>{
    setSection(items);
  // eslint-disable-next-line
  },[itemType]);

  useEffect(()=>{
      setItemClass(itemClass => '');
      setItemCountry(itemCountry => '');
      // eslint-disable-next-line
  },[itemType])

  useEffect(()=>{
    setItemCountry(itemCountry => '');
    // eslint-disable-next-line
},[itemClass])
  
  const setSection = (items) =>{
    let newallItemType = new Set();
    let newallItemClass = new Set();
    let newallItemCountry = new Set();

    newallItemType.add('чай')
    newallItemClass.add('')
    newallItemCountry.add('')

      items.forEach(item => {
      
        if(item.type !== ''){
          newallItemType.add(item.type)
        }
        if(item.type === itemType && item.class !== undefined) {
          newallItemClass.add(item.class)
        }

        if(item.type === itemType && item.class === itemClass && item.country !== undefined){
          newallItemCountry.add(item.country);
        }
      
      setAllItemType(newallItemType);
      setAllItemClass(newallItemClass);
      setAllItemCountry(allItemCountry => newallItemCountry);

      


      });
  }


  
 
  return (
    
      <div className="shop-sidebar">
       <ShopSideBarItem active={true} listSet={allItemType} itemType={itemType} title='Вид товара' setType={setItemType}/>
       <ShopSideBarItem  listSet={allItemClass} itemType={itemClass} title='Вид чаю' setType={setItemClass}/>
       <ShopSideBarItem  listSet={allItemCountry} itemType={itemCountry} title='Країна' setType={setItemCountry}/>
     </div>
  );
};

export default ShopSideBar;
