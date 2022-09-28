import "./test.scss"
import basket from '../../resources/basket.svg'
import { useState } from "react";


function Test () {
  const [typeAmount, setTypeAmount] = useState('');
  
    return (
        <form action="#" method="post">
          
          <div class="form-group">
          <label>Тип товара</label>
            <div>
            <input class="radiobutton" type="radio"  name="type"  value="tea" id="tea"/>
            <label for="tea" class="form-check-label">Чай</label>
            <input type="radio" name="type"  value="wear" class="radiobutton" id="wear"/>
            <label for="wear" class="radiolabel">Посуд</label>
            </div>
          </div>
          
          

          <div class="form-group">
            <label>Вид товара</label>
              <select className="form-select" required name="class">
                <option value="Зелений" >Зелений</option>
                <option value="Білий" >Білий</option>
                <option value="Жовтий" >Жовтий</option>
                <option value="Улун" >Улун</option>
                <option value="Червоний" >Червоний</option>
                <option value="Чорний" >Чорний</option>
                <option value="Шен пуер" >Шен пуер</option>
                <option value="Шу пуер" >Шу пуер</option>
              </select>
            </div>    

            <div class="form-group">
            <label for="title">Название товара:</label>
              <input type="text" name="title" class="form-control" id="title" required  placeholder="Введите название товара"/>
            </div>
            
            <div class="form-group">
            <label for="descr">Описание товара:</label>
              <textarea class="form-control" required name="descr" id="descr" rows="3"/>
            </div>

            <div class="form-group">
            <label for="country">Страна товара:</label>
              <input type="text" name="country" class="form-control" id="country"  placeholder="Введите страну товара"/>
            </div>

            <div class="form-group">
              <label for="region">Регион товара:</label>
              <input type="text" name="region" class="form-control" id="region"  placeholder="Введите регион товара"/>
            </div>

            <div className="form-group">
              <label htmlFor="collectionYear">Год сбора</label>
              <input  type="date" name="collectionYear" class="form-control" id='collectionYear' placeholder="dd.mm.yyyy"/>
            </div>

            <div className="form-group">
              <label htmlFor="pressingYear">Год пресовки</label>
              <input  type="date" name="pressingYear" class="form-control" id='pressingYear' placeholder="dd.mm.yyyy"/>
            </div>
            
            <h2>Единица измерения</h2>
              <input type="radio" name="typeAmount" onClick={(e)=> setTypeAmount(e.target.value)} value="грамм" id="gram" />
              <label for="gram">Грам</label>
              <input type="radio" name="typeAmount" onClick={(e)=> setTypeAmount(e.target.value)}  value="шт" id="ht"/>
              <label for="ht"> Шт</label>
              
              {typeAmount === "грамм" ? <ViewGramForm/> : null}
              {typeAmount === "шт" ? <ViewStandartForm/> : null} 

              <div class="form-group">
                <label htmlFor="amount" >Общее количество товара:</label>
                <input type="number" min="0" name="amount" id="amount" class="form-control" placeholder="Введите общее количество товара"/>
              </div>
        
           
              <div className="form-group">
              <label for="images" class="form-label">Изображение:</label>
              <input class="form-control" type="file" name="images" id="images" multiple />
              </div>
            
            

              <input type="checkbox" class="checkbox" id="checkbox" />
            <button>Отправить</button>

            
            
        </form>
    )
}

const ViewGramForm = () =>{

  const [firstStep, setFirstStep] = useState(1)
  const [steps, setSteps] = useState([]);

  const addSteps = () =>{
    let currectStep = steps.length + 2;
    let newStep = 
      [<div key={currectStep} class="form-group">
        <label  >{`Граммовка для покупки ${currectStep} :`}</label>
        <input type="number" name="arrSteps" min="0" required class="form-control" />
      </div>];

      
    setSteps(steps => [...steps, ...newStep] );

  }
  return(
    <>
    <div class="form-group">
      <label>Минимальная граммовка:</label>
      <input type="number" min="1" name="stepAmount" class="form-control" onChange={(e)=>{setFirstStep(e.target.value)}}   placeholder="Введите мин. граммовку"/>
      <small class="form-text text-muted">Введите минимальную граммовку которую вы продаете, она же будет являться первым шагом
      Например указали минимальную граммовку 25 и шаги добавили 50, 100 - ваша сетка покупки товара будет 25,50,100 - где 25 это 
      минимальная граммовка и первый шаг а 50,100 след. шаги</small>
    </div>

    <div class="form-group">
      <label>Цена за единицу или мин. граммовку</label>
      <input type="number" min="0" name="price" class="form-control"   placeholder="Введите цену"/>
      <small class="form-text text-muted">Если тип измереения товара в шт. то цена за 1 шт. Если измерение в
      граммах то цена за минимальную граммовка из прошлого пункта</small>
    </div>

    <div class="form-group">
      <label >Граммовка для покупки 1:</label>
      <input type="number" name="arrSteps"  class="form-control" value={firstStep} disabled/>
    </div>

    {steps.length === 0 ? null : steps}

    <div className="add-arrStep">
      <button type="button" class="btn btn-success" onClick={addSteps}>Добавить шаг</button>
    </div>    
  </>
    

  )
}
const ViewStandartForm = () =>{
  return(
    <>
      <div class="form-group">
        <label>Шаг:</label>
        <input type="number" min="1" name="stepAmount" class="form-control" disabled   value="1"/>
      </div>

      <div class="form-group">
        <label>Цена за единицу:</label>
        <input type="number" min="0" name="price" class="form-control"   placeholder="Введите цену"/>
        
      </div>
    </>
  )
}
export default Test;