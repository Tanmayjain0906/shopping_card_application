import { ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT } from "../actions/actionTypes";

const initialValue = [];

const shoppingReducer = (state=initialValue, action) => {

    // switch(action.type)
    // {
    //     case ADD_TO_CART: return [...state, action.payload];
    //     case REMOVE_FROM_CART: return state.filter(product => product.id != action.payload)
    //     case CHECKOUT: return [];
    //     default: return state;
    // }

    if(action.type == ADD_TO_CART)
    {
       const arr = [...state];
       for(let i=0;i<arr.length;i++)
       {
        if(arr[i].title == action.payload.title)
        {
            return [...state];
        }
       }
       return [...state, action.payload];
    }
    else if(action.type == REMOVE_FROM_CART)
    {
        return state.filter(product => product.id != action.payload);
    }
    else if(action.type == CHECKOUT)
    {
        return [];
    }
    else
    {
        return state;
    }
}

export default shoppingReducer;