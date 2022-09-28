import {Link} from 'react-router-dom'
import "./orderMessage.scss"
const OrderMessage = ({orderId, setShowModal, setTypeComponent}) => {
    const hideModal =() =>{
        setShowModal(false)
        setTypeComponent('BasketList');
    }
    return (
        <>
        <div className="order-message">
            <h3 className="message-title">Дякуємо за покупку!</h3>
            <i className="fa fa-check main-content__checkmark" id="checkmark"></i>
            <h3 className="message-number">{'ID вашего замовленя: ' + orderId}</h3>
            <p className="text-muted ">Ваше замовленя добавлено в обробку, наші менеджери 
            приймуть його і зв'яжуться з вами найближчим часом</p>
            <Link to='/'><button type="button" onClick={hideModal} className="btn-toHome">На головну</button></Link>
        </div>
            
        </>
        
    )
}
export default OrderMessage;