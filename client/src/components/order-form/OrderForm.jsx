import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import {v4} from "uuid"
import { SpinnerDark } from "../spinner/SpinnerDark";
import useMongoService from '../../service/MongoService';

import "./orderForm.scss"

const OrderForm = ({setOrderId, setShowModal, setTypeComponent}) =>{
    const {loading, findAndUpdateAmount, saveOrder} = useMongoService();
    const createOrder = async(data) => {

        const order =  await updateAmountAndSaveOrderItems();

        data.orderItems = JSON.stringify(order.items);
        data.totalPrice = order.totalPrice;

        let saveData =  await saveOrder(data);
        setOrderId(saveData.id)
        setTypeComponent('OrderMessage')
        setShowModal(true)  
    }

    const updateAmountAndSaveOrderItems = async() => {
        let items = [];
        let totalPrice = 0;
        for(let i=0; i<localStorage.length; i++) {
            let key = localStorage.key(i);
            let item = JSON.parse(localStorage.getItem(key))
            totalPrice += +item.currectPrice;
            items.push(item)
            await findAndUpdateAmount(item.id, item.currectAmount);
          }
        localStorage.clear();
        return {items, totalPrice};
    }
    const btnSubmit = loading ? <SpinnerDark width="100px" height="100px"/> : (<div className="row-form">
              <button type="submit">Отправить</button>          
                </div>);

    return(
        <Formik
        initialValues = {{
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            deliveryMethod: '',
            payMethod: '',
            NPpoint: '',
            city: '',

            
        }}
        validationSchema = {Yup.object({
            firstName: Yup.string()
                    .min(2, 'Минимум 2 символа для заполнения')
                    .required('Обязательное поле!'),
            lastName: Yup.string()
                    .min(2, 'Минимум 2 символа для заполнения')
                    .required('Обязательное поле!'),
            phone: Yup.string()
                    .min(5, 'Неправильный номер телефона')
                    .required('Обязательное поле!'),
            email: Yup.string()
                    .email('Неправильный email адрес'),
            deliveryMethod: Yup.string()
                    .required('Обязательное поле!'),
            payMethod: Yup.string()
                    .required('Обязательное поле!'),
            NPpoint: Yup.string()
                    .min(1, 'Минимум 1 символ для заполнения'),
            city: Yup.string()
                    .default("Запоріжжя")
                    
            
                
            
        })}
        onSubmit = {values => {
            values.id = v4();
            createOrder(values);
            }}
        >
            {({values})=> (
                <Form id="myform" >
                <div className="header-form">Оформлення заказу</div>
    
                <div className="area">
                    <div className="row-form">
                        <div className="col2">
                            <Field type="text" name="firstName"/>
                            <label className ='form-label'  for="fistName">ІМ'Я *</label>
                            <ErrorMessage name='firstName' className='error' component='div'/>
                        </div>
                        <div className="col2">
                            <Field type="text" name="lastName"/>
                            <label className ='form-label'  for="lastName">ПРІЗВИЩЕ *</label>
                            <ErrorMessage name='lastName' className='error' component='div'/>
                        </div>
                    </div>
    
                    <div className="row-form">
                        <Field type="tet" name="phone" id="phone"/>
                        <label className ='form-label'  for="phone">ТЕЛЕФОН *</label>
                        <ErrorMessage name='phone' className='error' component='div'/>
                    </div>
                    
                    <div className="row-form">
                        <Field type="text" name="email" id="email"/>
                        <label className ='form-label'  for="email">EMAIL (НЕОБОВ'ЯЗКОВО)</label>
                        <ErrorMessage name='email' className='error' component='div'/>
                    </div>
    
                    <div className="row-form">
                        <div className="col2">
                            <label className ='form-label'  for="deliveryMethod">ДОСТАВКА</label>
                            <Field
                            id="deliveryMethod"
                            name="deliveryMethod"
                            as="select"
                            >
                                <option value="">Выберите вариант доставки</option>
                                <option value="Самовивіз">Самовивіз</option>
                                <option value="Нова Пошта">Нова Пошта</option>
                                
                            </Field>
                            <ErrorMessage name='deliveryMethod' className='error' component='div'/>
                        </div>
                        <div className="col2">
                            <label className ='form-label'  for="email">ОПЛАТА</label>
                            <Field
                            id="payMethod"
                            name="payMethod"
                            as="select"
                            >
                                <option value="">Выберите вариант оплаты</option>
                                <option value="Готівка">Готівкою при отриманні</option>
                                <option value="Картка">Оплата на картку</option>
                                
                            </Field>
                            <ErrorMessage name='payMethod' className='error' component='div'/>
                        </div>                    
                    </div>
    
                    
                    {values.deliveryMethod === "Нова Пошта" ? <ViewDeliveryNP/> : null}
                    
                    
                    {values.deliveryMethod ? btnSubmit : null}
                                   
                </div>
                
                
                </Form>
            )}
        </Formik>
    )
}

const ViewDeliveryNP = () => {
    return(
        <div className="row-form">
            <div className="col2">
                <Field type="text"  name="NPpoint"/>
                <label className ='form-label'  for="NPpoint">Вдділення НП*</label>
                <ErrorMessage name='NPpoint' className='error' component='div'/>
            </div>
            <div className="col2">
                <Field type="text"  name="city"/>
                <label className ='form-label'  for="city">НАСЕЛЕНИЙ ПУНКТ *</label>
                <ErrorMessage name='city' className='error' component='div'/>
            </div>
        </div>
    )
}
export default OrderForm;