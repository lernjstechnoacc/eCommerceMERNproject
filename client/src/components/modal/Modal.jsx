import {Link} from 'react-router-dom'
import './modal.scss'

const Modal = (props) =>{
    const {showModal, setShowModal, typeComponent, setTypeComponent} = props;
    
    const onClickWrapper = (e) =>{
        if(e.target.classList.contains("ebcf_modal-show")){
            if(typeComponent === 'BasketList'){
                hideModal()
            }
            
        }
    }
    const hideModal = () =>{
        setShowModal(false);
            if(typeComponent !== 'BasketList'){
                setTypeComponent('BasketList')
            }
            
    }
    
    const renderBody = (typeComponent) =>{
        let child = props.children.map(child => {
            if(child.type.name === typeComponent){
                return child
            }
        })
        return child;
    }
    let item = renderBody(typeComponent);

    return(
        <>
        <div onClick={(e)=> onClickWrapper(e)} className={showModal ? 'ebcf_modal-show' : 'ebcf_modal' }>
        <div className={showModal ? "ebcf_modal-content-show" : "ebcf_modal-content"}>
           {typeComponent === "BasketList" ? <ViewBasket hideModal={hideModal} item={item}/> : item }
        </div>
        </div>
      </>
        
    )
}
const ViewBasket = ({hideModal, item}) =>{
    return(
        <>
            <h2 className='h2'>Ваш кошик:</h2>
            <span onClick={hideModal} className="ebcf_close">&times;</span>
            <div className="modal-body">
            <hr />
            {item}
            <hr />
            </div>
            <div className="modalfooter mt-3">
            <div className='footer-cardList '>
                <button onClick={hideModal} className="text-body"><i
                className="fas fa-long-arrow-alt-left me-2"></i>Продолжить покупки</button>
            {(localStorage.length > 0) ? (
            <Link to="/order">
            <button type="button" 
                onClick={hideModal} 
                className="btn btn-dark px-20">Оформить заказ</button>
            </Link>): null}
   
    </div>
            </div>
        </>
    )
}
export default Modal;