import "./basketItem.scss"

const BasketItem = ({basketItem, getLocalStorageItem, setShowModal}) =>{
    const {idLocalStorage, typeAmount, title, currectPrice, currectAmount, img} = basketItem;

    const removeInLocalStorage = (id = idLocalStorage) => {
        localStorage.removeItem(idLocalStorage);
        if(localStorage.length < 1){
            setShowModal(false)
        }
        getLocalStorageItem();
    }

    return (
        <li className="basket-item">
            <hr className="my4"/>

            <div className="row-item row mb-4 d-flex justify-content-around align-items-center">
            <div className="col-md-1 col-lg-1 col-xl-1">
                <img
                src={img}
                className="img-fluid rounded-3" alt={title}/>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3">
                <h6 className="text-black h6">{title}</h6>
                <h6 className="text-muted">{currectAmount + " " + typeAmount }</h6>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h6 className="mb-0">{currectPrice + 'грн'}</h6>
            </div>
            <div className=" item-closeBlock col-md-1 col-lg-1 col-xl-1 text-end">
                <button onClick={removeInLocalStorage} className="item-close"><i className="fas close-icon fa-times"></i></button>
            </div>
            </div>

            <hr className="my4"/>
        </li>
    )
}
export default BasketItem;