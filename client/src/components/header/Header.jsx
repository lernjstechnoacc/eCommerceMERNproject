import {NavLink, Link} from 'react-router-dom'
import logo from '../../resources/logo.svg'
import basket from '../../resources/basket.svg'
import './header.scss';




const Header = ({basketItems, setShowModal}) =>{
    let styleBasketCounter;
    (basketItems) ? styleBasketCounter = 'basket-counter add' : styleBasketCounter ='basket-counter';
    
    const showBasketItems = () =>{
        setShowModal( showModal => !showModal);
    }

  return (
    <header>
        <div className="container">
            <div className="row">
                <div className="col menu">
                    <nav className="navbar navbar-expand-lg navbar-dark " >
                        <div className="container">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarContent">
                                <ul className="navbar-nav mr-auto mb-2">
                                    <li className="nav-item">
                                        <NavLink end
                                            style={({isActive}) => ({color: isActive ? '#869c91' : 'inherit' , 
                                                                    borderBottom: isActive ? '2px solid #869c91' : ''})}  
                                            to="/" className="nav-link">ГОЛОВНА</NavLink>
                                    </li>
                                    <li className="nav-item active">
                                        <NavLink end
                                            style={({isActive}) => ({color: isActive ? '#869c91' : 'inherit',
                                            borderBottom: isActive ? '2px solid #869c91' : ''})}  
                                            to="/shop" className="nav-link">МАГАЗИН</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink end
                                            style={({isActive}) => ({color: isActive ? '#869c91' : 'inherit',
                                            borderBottom: isActive ? '2px solid #869c91' : ''})}  
                                            to="/about-us" className="nav-link">ПРО НАС</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink end
                                            style={({isActive}) => ({color: isActive ? '#869c91' : 'inherit', 
                                            borderBottom: isActive ? '2px solid #869c91' : ''})}  
                                            to="/delivery" className="nav-link">ДОСТАВКА</NavLink>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </nav>
                </div>
                {/* !-- Logo --> */}
                <div className="col ">
                    <img src={logo} alt="Logo"  className="logo"></img>
                </div>
                
                <div className="col basketbox">
                    <button onClick={showBasketItems} className="button-basket">
                        <img src={basket} width='40px' height='40px' alt="basket" />
                        <span className={styleBasketCounter} >{basketItems ? basketItems : ''}</span>
                    </button>
                </div>
                
            </div>
        </div>
    </header>
    )
}
export default Header;