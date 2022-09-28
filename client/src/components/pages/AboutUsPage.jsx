import { useEffect } from "react";

import "./aboutUsPage.scss"


const AboutUsPage = () =>{
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
    return(
    
      <div className="content">
       <div className="page-title"><h2 className="h2">ПРО НАС</h2></div>
       <p className=" h2">
         Ми продаємо чаї, та маленьких дітей - жартую чаї ми не продаємо</p>
        <br />
       <p className="aboutUs-text">Компанія Archive Tea була створена у 2022 році з наміром поділитися в’єтнамським чаєм зі світом.
         Ми продаємо чаї, які походять із природних біорізноманітних районів, не містять хімікатів,
        виготовляються з високоякісних матеріалів і обробляються таким чином, щоб отримати найкращий кінцевий
        продукт. Ми завжди шукаємо нові сорти чаю та нові напрямки для вивчення.</p>
        <br/>
        <p className="aboutUs-text">Ми пропонуємо вибір чаю, який, на нашу думку, демонструє найкраще з різних регіонів виробництва чаю 
        В’єтнаму. Більшість наших чаїв виготовлено з дикорослих чайних дерев, яким сотні років 
        (Trà cổ thụ/Gu shu cha). </p>
        <br/>
        <p className="aboutUs-text">Більшість чаїв мають прості назви, які вказують, з яких регіонів вони походять. Ми сподіваємось дати 
        вам змогу краще ознайомитися з різноманітними терруарами, де виробляють чай, і розширити ваші знання 
        про в’єтнамський чай. </p>
        <br/>
        <p className="aboutUs-text">Чай – це щось близьке нашому серцю, і ми продаємо лише ті чаї, які п’ємо.</p>
        <div className="aboutUs-img">
            <img src="https://static.wixstatic.com/media/1a0fcb_427782815a0f42389b0905009fde1c3c~mv2.jpg/v1/fill/w_403,h_403,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/B6ED9B57-6C9C-47A9-8645-02523D42246D_edited.jpg" alt="" />
            <img src="https://static.wixstatic.com/media/1a0fcb_ea8076d2cfca4a109ad52fcb5e4c20ab~mv2.jpg/v1/fill/w_324,h_405,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/D35DB211-E883-4666-A414-5F68A4BF0A9A.jpg" alt="img" />
            <img src="https://static.wixstatic.com/media/1a0fcb_6a80b627bba44a05beb9af753f9ac31f~mv2.jpg/v1/fill/w_324,h_403,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DC715A77-461E-40D5-9DBD-3A110F8989B6.jpg" alt="img" />
        </div>
      </div>
    )
}
export default AboutUsPage;