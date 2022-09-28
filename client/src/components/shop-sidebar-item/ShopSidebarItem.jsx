import { useEffect, useState } from "react"
import "./shopSidebarItem.scss"

const ShopSideBarItem = ({active, listSet, title, itemType, setType}) =>{
    const [activeSidebarItem, setActiveSidebarItem] = useState(!!active);
    const [activeFilter, setActiveFilter] = useState(itemType)
    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [itemType])

    const setShowActiveSideBarItem = () =>{
        setActiveSidebarItem(activeSidebarItem => !activeSidebarItem);
    }
    const changeActiveFilter = (item) =>{
        setActiveFilter(item);
        setType(itemType => item);
    }

    const renderSideBarItem = () =>{
        let items = [];
        listSet.forEach( item => {
            let classNames = (activeFilter === item ) ? 'active' : '';
            if(item === ''){
                items.push(<li key={item} onClick={(e) => changeActiveFilter(item)} className={classNames}>Без фільтрів</li>)
            }else{
                items.push(<li key={item} onClick={(e) => changeActiveFilter(item)} className={classNames}>{item.toUpperCase()}</li>) 
            } 
        });

        return(
            <ul>
            {items}
            </ul>
        )
        
    }
    const content = renderSideBarItem();

    return(
        <div className="sidebar-item">
            <h2 onClick={setShowActiveSideBarItem} className="h3 item-title">{title}</h2>
            <div className={activeSidebarItem ? 'sidebar-list-show' : "sidebar-list"}>
                {content}
            </div>
        </div>
    )
}
export default ShopSideBarItem