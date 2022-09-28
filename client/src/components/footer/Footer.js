import instaLogo from  "../../resources/insta.png"
import telegramLogo from  "../../resources/telega.png"
import viberLogo from  "../../resources/viber.png"
import phoneLogo from  "../../resources/phone.png"
import mailLogo from  "../../resources/mail.png"

import './footer.scss'



const Footer = () => {
    const Url_instagram = "https://www.instagram.com/";
    return (
        <footer>
            <ul>
                <li>
                    <h3>Люблю дики</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ducimus quaerat molestiae similique, asperiores repellat suscipit eveniet velit neque iste, nisi sint accusantium praesentium eos alias est dolorum voluptatum nemo?</p>
                    
                    <a className="phone" href="tel:+3 800 24324 543 534"><img src={phoneLogo} alt="Phone"/>+3 800 24324 543 534</a>
                    <a className="mail" href="mailto:ayacserNehuy@trahaysy.huya"><img src={mailLogo} alt="Mail"/> ayacserNehuy@trahaysy.huya</a>
                </li>
                <li>
                    <h3>Мы в социальных сетях</h3>
                    <div className="social-flex">
                        L
                        <a href={Url_instagram}><img src={instaLogo} alt="instagram"/></a>
                        <a href={Url_instagram}><img src={telegramLogo} alt="telegram"/></a>
                        <a href={Url_instagram}><img src={viberLogo} alt="viber"/></a>
                    </div>
                    
                </li>
            </ul>
            <h5 style={{color:  '#869c91', textAlign: 'center', padding: '20px', fontSize: '10px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, dolor excepturi, ratione cum repudiandae ipsam repellat autem iusto maiores consequatur necessitatibus, animi quaerat</h5>
        </footer>
    )
}
export default Footer;