import { useHttp } from "../hooks/http.hook";
import { serialize } from 'object-to-formdata';


const useMongoService = () => {
    const {loading, request, error, clearError} = useHttp();

    const _apiBase = 'http://localhost:5000/api';
    
    const getAllItem = async () => {
        const res = await request(`${_apiBase}/items`);
       
        return res
    }
    const getOneItem = async(id) =>{
        const res = await request(`${_apiBase}/items/${id}`);
        return res;
    }
    const findAndUpdateAmount = async(id, amount) =>{
        const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        }
        let item = await getOneItem(id);
        let newAmount = item.amount - amount
        console.log(newAmount)
        let formData = new FormData();
        formData.append('id', id);
        formData.append('amount', newAmount);
       
        const res = await request(`${_apiBase}/items/update`, "POST", formData, config);
        console.log(res.status);
        return res;
    }

    const getItemsByParams = async(...args) =>{
        const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        }
        let data = {}
        for (let arg of args){
            if(Object.values(arg)[0] !== ''){
                data = {...data, ...arg}
            }
        }
    
        let formData = serialize(data)
       
        const res = await request(`${_apiBase}/items/type`, "POST", formData, config);
        console.log(res)
        return res;
    }

    const saveOrder = async(data) =>{
        const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        }
        let formData = serialize(data);

        const res = await request(`${_apiBase}/order`, "POST", formData, config);
        return res;
    }

    
    return {loading, error, clearError, getAllItem, getOneItem, findAndUpdateAmount, saveOrder, getItemsByParams}
}

export default useMongoService;