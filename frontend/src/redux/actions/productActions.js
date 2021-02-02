import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS }  from '../constants/productConstants'
import axios from 'axios'

const listProducts = () => async (dispatch) => {

    try{
            dispatch(PRODUCT_LIST_REQUEST)
            const {data} = await axios.get("/api/products")
            dispatch({type: PRODUCT_LIST_SUCCESS, payload: error.message})
          
    } 
    catch(error){
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message})
    }
    
}

export default listProducts 